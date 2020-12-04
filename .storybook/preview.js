import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { addDecorator } from "@storybook/react";

import { globalStyle } from "../src/styles";
import { dark } from "../src/styles/theme";
import { withPerformance } from "storybook-addon-performance";

const GlobalStyle = createGlobalStyle`${globalStyle}`;
const theme = dark;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
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
