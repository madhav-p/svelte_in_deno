import { walk, emptyDir } from "https://deno.land/std@0.80.0/fs/mod.ts";
import compileFile from "./compiler.ts";

async function buildFile(inputPath: string, sourceFolderPath: string, outputFolderPath: string) {
  const { convertedPath, compiledText } = await compileFile(inputPath);
  const outputPath = convertedPath.replace(sourceFolderPath, outputFolderPath);
  await Deno.writeTextFile(outputPath, compiledText);
}

async function buildDirectory(inputPath: string, sourceFolderPath: string, outputFolderPath: string) {
  const outputPath = inputPath.replace(sourceFolderPath, outputFolderPath);
  await emptyDir(outputPath);
}

export async function buildFromScratch(sourceFolderPath: string, outputFolderPath: string) {

  for await (const entry of walk(sourceFolderPath)) {
    if (entry.isDirectory) {
      await buildDirectory(entry.path, sourceFolderPath, outputFolderPath);
    } else if (entry.isFile) {
      await buildFile(entry.path, sourceFolderPath, outputFolderPath);
    } // TODO: else if entry.Symlink
  }
}
