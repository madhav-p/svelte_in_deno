# Svelte in Deno

This repo is a small proof of concept that shows how you can integrate [Svelte](https://svelte.dev/) in [Deno](https://deno.land/).

## How to use

### Step 1

Open the `build_script.ts` file, you should see something like below. Here you can configure your `sourceFolderPath` and `outputFolderPath`. 

```ts
import { buildFromScratch } from "./build_tool/builder.ts";

const sourceFolderPath = "src";
const outputFolderPath = "public/build";

buildFromScratch(sourceFolderPath, outputFolderPath)
  .then(() => console.log("Build done !!!"))
  .catch((e: any) => console.log(e));
```

### Step 2

Run the following command with appropriate permissions in the terminal. You can use task runners like denon to rerun the script for every save.

```bash
deno run --allow-read --allow-write --unstable --no-check build_script.ts
```

### Step 3

Now open `index.html` file in the `public` directory using Live Server, there you go your svelte app is up and running !!

## How does the script work?

Here's a brief explanation of how the above script works. First it walks through every file of your `src` folder analysing the type of file from the file extension. 

Then it compiles each file to a `js` file, using svelte compiler from [Skypack](https://cdn.skypack.dev/svelte/compiler) to compile `.svelte` files and Deno's built in `transpileOnly` function to compile `.ts` files. 

Then it uses recast from [JSPM](https://jspm.dev/recast) to build an AST from the above compiled file and transform the import statements (namely `.svelte` to `.svelte.js` and `.ts` to `.js`).