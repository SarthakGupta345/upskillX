import { Router } from "express";
import { signup, login, logout } from "../controllers/auth.controller";
import { authMiddleware, requireInstructor } from "../middleware/loginMiddleware";
import { getCart } from "../controllers/cart.controller";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post('/logout',logout)

export default router;