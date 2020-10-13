import { resolve, join } from "path";
import { copy } from "fs-extra";

const readmeFilename = "Readme.md";
const configFilename = "theme-config.json";

const copyAssets = async () => {
  try {
    const assetPath = resolve(__dirname, "..", "src", "assets", "moBro");
    const themepath = resolve(__dirname, "..", "theme");
    await copy(
      join(assetPath, readmeFilename),
      join(themepath, readmeFilename)
    );
    await copy(
      join(assetPath, configFilename),
      join(themepath, "astern", configFilename)
    );
  } catch (err) {
    console.error(err);
  }
};

copyAssets();
