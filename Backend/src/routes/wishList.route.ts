import { Router } from "express";
import { authMiddleware } from "../middleware/loginMiddleware";
import { addToWishlist, getWishlist, moveToCart, removeFromWishlist } from "../controllers/wishList.controller";

const router = Router();

router.post("/", authMiddleware, addToWishlist);
router.delete("/:courseId", authMiddleware, removeFromWishlist);
router.get("/", authMiddleware, getWishlist);
router.post("/:courseId/move-to-cart", authMiddleware, moveToCart);

export default router;