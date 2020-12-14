import { buildFromScratch } from "./build_tool/builder.ts";

const sourceFolderPath = "src";
const outputFolderPath = "public/build";

buildFromScratch(sourceFolderPath, outputFolderPath)
  .then(() => console.log("Build done !!!"))
  .catch((e: any) => console.log(e));