import * as recast from "https://jspm.dev/recast";
import * as acorn from "https://jspm.dev/acorn";
import {extensionMap, importMap} from "./_util.ts";

export function transformImports(source: string):string{
  const ast = recast.parse(source, {parser:acorn});
  ast.program.body.filter( node => node.type === "ImportDeclaration").forEach(node => {
    for(let e in extensionMap) {
      if(node.source.value.endsWith(e)) {
        node.source.value = node.source.value.replace(e, extensionMap[e]);
        break;
      }
    }
    for(let i in importMap) {
      if(node.source.value.startsWith(i)) {
        node.source.value = node.source.value.replace(i, importMap[i])
        break;
      }
    }
    
  });
  return recast.print(ast).code;
}