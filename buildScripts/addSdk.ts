import { resolve } from "path";
import { readFile, writeFile } from "fs-extra";
import { green, red } from "chalk";

const sdkScript = async () => {
  try {
    const themepath = resolve(__dirname, "..", "theme", "astern", "index.html");
    const indexFile = await readFile(themepath, "utf8");
    const replacedIndex = indexFile.replace(
      "#SDK_SCRIPT#",
      '<script src="/sdk.js"></script>'
    );
    await writeFile(themepath, replacedIndex);
    console.log(green("Replaced sdk script path in index.html"));
  } catch (err) {
    console.log(red(err));
  }
};

sdkScript();
