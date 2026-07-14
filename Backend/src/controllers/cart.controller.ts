import { Response } from "express";
import Stripe from "stripe";
import { AuthRequest } from "../middleware/loginMiddleware";
import { prisma } from "../lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export const addToCart = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const { courseId } = req.body;

        if (!courseId) {
            res.status(400).json({ message: "courseId is required" });
            return;
        }

        const course = await prisma.course.findUnique({ where: { id: Number(courseId) } });
        if (!course) {
            res.status(404).json({ message: "Course not found" });
            return;
        }

        const alreadyEnrolled = await prisma.enrollment.findUnique({
            where: { userId_courseId: { userId, courseId: course.id } },
        });
        if (alreadyEnrolled) {
            res.status(409).json({ message: "You already own this course" });
            return;
        }

        const cartItem = await prisma.cartItem.upsert({
            where: { userId_courseId: { userId, courseId: course.id } },
            update: {},
            create: { userId, courseId: course.id },
        });

        res.status(201).json({ message: "Added to cart", cartItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const removeFromCart = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const courseId = Number(req.params.courseId);

        await prisma.cartItem.delete({
            where: { userId_courseId: { userId, courseId } },
        });

        res.status(200).json({ message: "Removed from cart" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Item not in cart" });
    }
};

export const getCart = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;

        const cartItems = await prisma.cartItem.findMany({
            where: { userId },
            include: { course: true },
            orderBy: { createdAt: "desc" },
        });

        const total = cartItems.reduce((sum, item) => sum + item.course.price, 0);

        res.status(200).json({ cartItems, total });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const checkout = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;

        const cartItems = await prisma.cartItem.findMany({
            where: { userId },
            include: { course: true },
        });

        if (cartItems.length === 0) {
            res.status(400).json({ message: "Cart is empty" });
            return;
        }

        const freeCourses = cartItems.filter((item) => item.course.isFree || item.course.price === 0);
        const paidCourses = cartItems.filter((item) => !item.course.isFree && item.course.price > 0);

        // enroll free courses immediately, no payment needed
        if (freeCourses.length > 0) {
            await prisma.enrollment.createMany({
                data: freeCourses.map((item) => ({ userId, courseId: item.courseId })),
                skipDuplicates: true,
            });
            await prisma.cartItem.deleteMany({
                where: { userId, courseId: { in: freeCourses.map((item) => item.courseId) } },
            });
        }

        // if nothing paid, we're done
        if (paidCourses.length === 0) {
            res.status(200).json({ message: "Enrolled in free course(s)", enrolledFree: freeCourses.length });
            return;
        }

        const totalAmount = paidCourses.reduce((sum, item) => sum + item.course.price, 0);

        const order = await prisma.order.create({
            data: {
                userId,
                totalAmount,
                status: "PENDING",
                items: {
                    create: paidCourses.map((item) => ({
                        courseId: item.courseId,
                        price: item.course.price,
                    })),
                },
            },
        });

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            line_items: paidCourses.map((item) => ({
                price_data: {
                    currency: "usd",
                    product_data: { name: item.course.title },
                    unit_amount: Math.round(item.course.price * 100),
                },
                quantity: 1,
            })),
            success_url: `${process.env.CLIENT_URL}/checkout/success?orderId=${order.id}`,
            cancel_url: `${process.env.CLIENT_URL}/checkout/cancel`,
            metadata: { orderId: order.id.toString(), userId: userId.toString() },
        });

        await prisma.order.update({
            where: { id: order.id },
            data: { stripeSessionId: session.id },
        });

        res.status(200).json({ message: "Checkout session created", url: session.url });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};