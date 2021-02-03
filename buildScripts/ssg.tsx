import "regenerator-runtime/runtime.js";
import React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { Provider } from "react-redux";
import { ServerStyleSheet } from "styled-components";
import { resolve } from "path";
import { readFile, writeFile } from "fs-extra";

import { App } from "../docs/App";
import { store } from "../docs/store";

const sheet = new ServerStyleSheet();

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
        <Provider store={store}>
          <App />
        </Provider>
      )
    );
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

    const replacedStyles = indexFile.replace(
      '<style id="ssr-styles"></style>',
      `${styleTags}`
    );

    const replacedIndex = replacedStyles.replace(
      '<div id="doc-root"></div>',
      `<div id="doc-root">${html}</div>`
    );

    await writeFile(indexPath, replacedIndex);
  } catch (error) {
    console.error(error);
  } finally {
    sheet.seal();
  }
};

ssg();
