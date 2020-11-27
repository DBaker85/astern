import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { globalStyle } from "../src/styles";
import { dark } from "../src/styles/theme";

const GlobalStyle = createGlobalStyle`${globalStyle}`;
const theme = dark;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
