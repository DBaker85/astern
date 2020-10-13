import { resolve, join } from "path";
import { copy } from "fs-extra";

const readmeFilename = "Readme.md";
const configFilename = "theme-config.json";

const copyAssets = async () => {
  try {
    const readmeFile = resolve(__dirname, "..", "src", "docs", readmeFilename);
    const configFile = resolve(
      __dirname,
      "..",
      "src",
      "config",
      configFilename
    );
    const themepath = resolve(__dirname, "..", "theme", "astern");
    await copy(readmeFile, join(themepath, readmeFilename));
    await copy(configFile, join(themepath, configFilename));
  } catch (err) {
    console.error(err);
  }
};

copyAssets();
