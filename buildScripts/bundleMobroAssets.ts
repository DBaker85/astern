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

    zip.addLocalFolder(`${themePath}/astern`);

    zip.writeZip(`${themePath}/astern.zip`);
    console.log(`${green("Created theme bundle")} > ${yellow("astern.zip")}`);
  } catch (err) {
    console.log(red(err));
  }
};

bundle();
