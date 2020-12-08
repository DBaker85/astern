import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { addDecorator } from "@storybook/react";

import { globalStyle } from "../src/styles";
import { dark } from "../src/styles/theme";
import { withPerformance } from "storybook-addon-performance";

const GlobalStyle = createGlobalStyle`${globalStyle}`;
const theme = dark;

export const customViewports = {
  smallScreen: {
    name: '3.5"',
    styles: {
      width: "480px",
      height: "320px",
    },
  },
  largeScreen: {
    name: '5"',
    styles: {
      width: "800px",
      height: "480px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  viewport: { viewports: customViewports },
  options: {
    storySort: {
      order: ["Example", "UI", "Common", "Pages"],
      method: "alphabetical",
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

addDecorator(withPerformance);
