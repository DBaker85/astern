import { resolve } from "path";
import { copy } from "fs-extra";

const copyAssets = async () => {
  try {
    const assetPath = resolve(__dirname, "..", "src", "assets", "moBro");
    const themepath = resolve(__dirname, "..", "theme");
    await copy(assetPath, themepath);
  } catch (err) {
    console.error(err);
  }
};

copyAssets();
