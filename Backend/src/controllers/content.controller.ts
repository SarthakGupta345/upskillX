import { Response } from "express";
import { compressVideo } from "../utils/ffmpeg.util";
import { uploadFileToS3, deleteLocalFile } from "../utils/s3.util";
import { AuthRequest } from "../middleware/loginMiddleware";
import { prisma } from "../lib/prisma";

export const uploadCourseContent = async (req: AuthRequest, res: Response) => {
    const file = req.file;
    const { courseId, type, title, order } = req.body;

    try {
        if (!file) {
            res.status(400).json({ message: "No file uploaded" });
            return;
        }
        if (!courseId || !type || !title) {
            deleteLocalFile(file.path);
            res.status(400).json({ message: "courseId, type, and title are required" });
            return;
        }

        const course = await prisma.course.findUnique({ where: { id: Number(courseId) } });
        if (!course) {
            deleteLocalFile(file.path);
            res.status(404).json({ message: "Course not found" });
            return;
        }
        if (course.instructorId !== req.user!.id) {
            deleteLocalFile(file.path);
            res.status(403).json({ message: "Not your course" });
            return;
        }

        let s3Url: string;
        let compressedPath: string | null = null;

        if (type === "VIDEO") {
            compressedPath = await compressVideo(file.path);
            s3Url = await uploadFileToS3(compressedPath, "video/mp4", "videos");
        } else if (type === "IMAGE") {
            s3Url = await uploadFileToS3(file.path, file.mimetype, "images");
        } else if (type === "PDF") {
            s3Url = await uploadFileToS3(file.path, file.mimetype, "pdfs");
        } else {
            deleteLocalFile(file.path);
            res.status(400).json({ message: "Invalid content type" });
            return;
        }

        // cleanup temp files regardless of type
        deleteLocalFile(file.path);
        if (compressedPath) deleteLocalFile(compressedPath);

        const content = await prisma.courseContent.create({
            data: {
                courseId: Number(courseId),
                type,
                title,
                url: s3Url,
                order: order ? Number(order) : 0,
            },
        });

        res.status(201).json({ message: "Content uploaded", content });
    } catch (error) {
        console.error(error);
        if (file) deleteLocalFile(file.path);
        res.status(500).json({ message: "Something went wrong" });
    }
};