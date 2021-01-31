import { rename } from "fs-extra";
import { resolve } from "path";
import { red } from "chalk";

const moveIndexFile = async () => {
  try {
    const indexPath = resolve(__dirname, "..", ".docs", "index.html");
    const targetPath = resolve(
      __dirname,
      "..",
      ".docs",
      "astern",
      "index.html"
    );

    await rename(indexPath, targetPath);
  } catch (err) {
    console.log(red(err));
  }
};

moveIndexFile();
