import ffmpeg from "fluent-ffmpeg";
import path from "path";

export const compressVideo = (inputPath: string): Promise<string> => {
  const outputPath = inputPath.replace(path.extname(inputPath), "-compressed.mp4");

  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .videoCodec("libx264")
      .audioCodec("aac")
      .outputOptions(["-crf 28", "-preset fast"]) // decent size/quality tradeoff
      .output(outputPath)
      .on("end", () => resolve(outputPath))
      .on("error", (err) => reject(err))
      .run();
  });
};