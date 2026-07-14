import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";


const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days, matches token expiry
};

export const signup = async (req: Request, res: Response) => {
    try {
        const { username, email, password, role } = req.body;

        if (!username || !email || !password) {
            res.status(400).json({ message: "Missing required fields" });
            return;
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            res.status(409).json({ message: "Email already in use" });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                role: role === "INSTRUCTOR" ? "INSTRUCTOR" : "USER",
            },
        });

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET as string,
            { expiresIn: "7d" }
        );

        res.cookie("token", token, cookieOptions);

        res.status(201).json({
            message: "Signup successful",
            user: { id: user.id, username: user.username, email: user.email, role: user.role },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: "Email and password required" });
            return;
        }

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET as string,
            { expiresIn: "7d" }
        );

        res.cookie("token", token, cookieOptions);

        res.status(200).json({
            message: "Login successful",
            user: { id: user.id, username: user.username, email: user.email, role: user.role },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie("token", cookieOptions);
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};