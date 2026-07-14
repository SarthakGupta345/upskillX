import { Response } from "express";
import { AuthRequest } from "../middleware/loginMiddleware";
import { prisma } from "../lib/prisma";

export const addToWishlist = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const { courseId } = req.body;

        if (!courseId) {
            res.status(400).json({ message: "courseId is required" });
            return;
        }

        const course = await prisma.course.findUnique({ where: { id: courseId } });
        if (!course) {
            res.status(404).json({ message: "Course not found" });
            return;
        }

        const wishlistItem = await prisma.wishlistItem.upsert({
            where: { userId_courseId: { userId, courseId } },
            update: {},
            create: { userId, courseId },
        });

        res.status(201).json({ message: "Added to wishlist", wishlistItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const removeFromWishlist = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const courseId = Number(req.params.courseId);

        await prisma.wishlistItem.delete({
            where: { userId_courseId: { userId, courseId } },
        });

        res.status(200).json({ message: "Removed from wishlist" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Item not in wishlist or something went wrong" });
    }
};

export const getWishlist = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;

        const wishlistItems = await prisma.wishlistItem.findMany({
            where: { userId },
            include: { course: true },
        });

        res.status(200).json({ wishlistItems });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const moveToCart = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const courseId = Number(req.params.courseId);

        const wishlistItem = await prisma.wishlistItem.findUnique({
            where: { userId_courseId: { userId, courseId } },
        });
        if (!wishlistItem) {
            res.status(404).json({ message: "Item not in wishlist" });
            return;
        }

        await prisma.$transaction([
            prisma.cartItem.upsert({
                where: { userId_courseId: { userId, courseId } },
                update: {},
                create: { userId, courseId },
            }),
            prisma.wishlistItem.delete({
                where: { userId_courseId: { userId, courseId } },
            }),
        ]);

        res.status(200).json({ message: "Moved to cart" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};