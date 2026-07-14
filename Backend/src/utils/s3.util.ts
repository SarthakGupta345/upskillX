import { PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";
import { s3Client, BUCKET_NAME } from "../config/s3.config";

export const uploadFileToS3 = async (
    filePath: string,
    mimeType: string,
    folder: "videos" | "images" | "pdfs"
): Promise<string> => {
    const fileContent = fs.readFileSync(filePath);
    const key = `${folder}/${uuid()}${path.extname(filePath)}`;

    await s3Client.send(
        new PutObjectCommand({
            Bucket: BUCKET_NAME,
            Key: key,
            Body: fileContent,
            ContentType: mimeType,
        })
    );

    return `https://${BUCKET_NAME}.s3.amazonaws.com/${key}`;
};

export const deleteLocalFile = (filePath: string) => {
    fs.unlink(filePath, (err) => {
        if (err) console.error(`Failed to delete temp file: ${filePath}`, err);
    });
};