import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: {
    id: number;
    role: "USER" | "INSTRUCTOR";
  };
}

export const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      res.status(401).json({ message: "No token provided" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: number;
      role: "USER" | "INSTRUCTOR";
    };

    req.user = {
      id: decoded.id,
      role: decoded.role,
    };

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

export const requireInstructor = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.user?.role !== "INSTRUCTOR") {
    res.status(403).json({ message: "Instructor access only" });
    return;
  }
  next();
};