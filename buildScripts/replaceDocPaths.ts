import { readFile, writeFile } from "fs-extra";
import { resolve } from "path";
import { red, green, yellow } from "chalk";

const replaceDocs = async () => {
  try {
    const indexPath = resolve(__dirname, "..", ".docs", "astern", "index.html");

    const indexFile = await readFile(indexPath, "utf8");

    const scriptRx = new RegExp("<script [\\d\\D]*?/script>", "g");
    const foundScripts = indexFile.match(scriptRx);

    let newFile = indexFile;

    foundScripts.forEach((script, index) => {
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

replaceDocs();
