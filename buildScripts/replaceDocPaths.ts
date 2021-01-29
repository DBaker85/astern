import { readFile, writeFile, readdir } from "fs-extra";
import { resolve, join } from "path";
import { red, green, yellow } from "chalk";

const replaceDocScriptPaths = async () => {
  try {
    const indexPath = resolve(__dirname, "..", ".docs", "astern", "index.html");

    const indexFile = await readFile(indexPath, "utf8");

    const scriptRx = new RegExp("<script [\\d\\D]*?/script>", "g");
    const foundScripts = indexFile.match(scriptRx);

    let newFile = indexFile;

    foundScripts.forEach((script) => {
      const srcRx = new RegExp('src="[\\d\\D]*?"', "g");
      const srcPath = script.match(srcRx)[0];
      const fixedPath = srcPath.replace('src="/', 'src="/astern/');
      newFile = newFile.replace(script, `<script ${fixedPath}></script>`);
    });

    await writeFile(indexPath, newFile);
  } catch (err) {
    console.log(red(err));
  }
};

const replaceDocAssetPaths = async () => {
  try {
    const buildPath = resolve(__dirname, "..", ".docs", "astern");

    const directoryContents = await readdir(buildPath);
    const matchedJsFile = directoryContents.filter((content) => {
      return content.includes(".js");
    });
    const matchedFontFiles = directoryContents.filter((content) => {
      return /([a-zA-Z0-9\s_\\.\-\(\):])+(.ttf|.woff2)$/.test(content);
    });

    const indexFilePath = join(buildPath, matchedJsFile[0]);

    const indexFile = await readFile(indexFilePath, "utf8");

    let newFile = indexFile;

    matchedFontFiles.forEach((font) => {
      newFile = newFile.replace(`="/${font}`, `="/astern/${font}`);
    });

    await writeFile(indexFilePath, newFile);
  } catch (err) {
    console.log(red(err));
  }
};

replaceDocScriptPaths();
replaceDocAssetPaths();
