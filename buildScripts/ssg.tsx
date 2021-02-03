import "regenerator-runtime/runtime.js";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets as MuiServerStyleSheets } from "@material-ui/core/styles";
import { resolve } from "path";
import { readFile, writeFile } from "fs-extra";
import { red } from "chalk";

import { App } from "../docs/App";
import { store } from "../docs/store";

const sheet = new ServerStyleSheet();
const muiSheet = new MuiServerStyleSheets();

const ssg = async () => {
  try {
    const indexPath = resolve(
      __dirname,
      "..",
      "..",
      ".docs",
      "astern",
      "index.html"
    );
    const indexFile = await readFile(indexPath, "utf8");

    const html = renderToString(
      sheet.collectStyles(
        muiSheet.collect(
          <Provider store={store}>
            <App />
          </Provider>
        )
      )
    );
    const styleTags = sheet.getStyleTags();
    const muiStyles = muiSheet.toString();

    const replacedStyles = indexFile.replace(
      '<style id="ssr-styles"></style>',
      `<style id="mui-ssr-styles">${muiStyles}</style>${styleTags}`
    );

    const replacedIndex = replacedStyles.replace(
      '<div id="doc-root"></div>',
      `<div id="doc-root">${html}</div>`
    );

    await writeFile(indexPath, replacedIndex);
  } catch (err) {
    console.log(red(err));
  } finally {
    sheet.seal();
  }
};

ssg();
