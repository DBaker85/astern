import "regenerator-runtime/runtime.js";
import { h, render } from "preact";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import { App } from "./App";

import { dark } from "./styles/theme";
import { globalStyle } from "./styles";

const GlobalStyle = createGlobalStyle`${globalStyle}`;
const theme = dark;

if (process.env.NODE_ENV === "development") {
  require("./sdk/sdk");
}

render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
