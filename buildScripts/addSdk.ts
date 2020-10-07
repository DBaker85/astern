import { resolve } from "path";
import { readFile, writeFile } from "fs-extra";

const sdkScript = async () => {
  try {
    const themepath = resolve(__dirname, "..", "theme", "index.html");
    const indexFile = await readFile(themepath, "utf8");
    const replacedIndex = indexFile.replace(
      "#SDK_SCRIPT#",
      '<script src="/sdk.js"></script>'
    );
    await writeFile(themepath, replacedIndex);
  } catch (err) {
    console.log(err);
  }
};

sdkScript();
