import * as svelteCompiler from "https://cdn.skypack.dev/svelte/compiler";
import {transformImports} from "./transformer.ts";
import {extensionMap} from "./_util.ts";

function compileSvelteFile(source :string, fileName :string) :string {
  return svelteCompiler.compile(source, {
    filename:fileName,
    css:true,
    generate:"dom"
  }).js.code;
}

async function compileTSFile(source :string) :Promise<string>{
  const result = await Deno.transpileOnly({
    "a.ts": source
  });
  return result["a.ts"].source;
}

export default async function compileFile(inputPath :string) {
  const source:string = await Deno.readTextFile(inputPath);
  const fileName:string = inputPath.split("\\").pop().split("/").pop();
  const fileExtenstion:string = fileName.split(".").pop();

  let convertedPath:string;
  let compiledText:string;

  switch (fileExtenstion) {
    case "svelte" : 
      compiledText = compileSvelteFile(source, fileName); 
      convertedPath = inputPath.replace(".svelte", extensionMap[".svelte"] ); 
      break;
    case "ts" : 
      compiledText = await compileTSFile(source, fileName);
      convertedPath = inputPath.replace(".ts", extensionMap[".ts"] );
      break;
    case "js":
      compiledText = source;
      convertedPath = inputPath.replace(".js", extensionMap[".js"] );
      break;
    default: 
      compiledText = source;
      convertedPath = inputPath;
      break;
  }

  compiledText = transformImports(compiledText);
  return {convertedPath, compiledText};
}