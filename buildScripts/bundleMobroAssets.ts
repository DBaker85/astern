import { readdir } from "fs-extra";
import { promisify } from "util";
import { resolve } from "path";
import { red, green, yellow } from "chalk";
import * as AdmZip from "adm-zip";

const readdirPromise = promisify(readdir);
const themePath = resolve(__dirname, "..", "theme");

const bundle = async () => {
  try {
    var zip = new AdmZip();

    const dirContents = (await readdirPromise(themePath)) as string[];
    const themeFiles = dirContents.filter(
      (file) => !file.includes("report") && !file.includes("js.map")
    );

    themeFiles.forEach((file) => {
      zip.addLocalFile(`${themePath}/${file}`);
    });

    zip.writeZip(`${themePath}/astern.zip`);
    console.log(`${green("Created theme bundle")} > ${yellow("astern.zip")}`);
  } catch (err) {
    console.log(red(err));
  }
};

bundle();
