import { Router } from "express";
import { signup, login } from "../controllers/auth.controller";
import { authMiddleware, requireInstructor } from "../middleware/loginMiddleware";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);

// example protected routes
router.get("/cart", authMiddleware, getCart);
router.post("/courses", authMiddleware, requireInstructor, createCourse);

export default router;