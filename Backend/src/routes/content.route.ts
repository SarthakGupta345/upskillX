import { Router } from "express";
import { uploadCourseContent } from "../controllers/content.controller";
import { upload } from "../config/multer.config";
import { authMiddleware, requireInstructor } from "../middleware/loginMiddleware";

const router = Router();

router.post(
  "/upload",
  authMiddleware,
  requireInstructor,
  upload.single("file"),
  uploadCourseContent
);

export default router;