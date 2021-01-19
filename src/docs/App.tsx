import React, { FunctionComponent } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import { dark } from "../styles/theme";
import { globalStyle } from "../styles";
// import { Main } from "./components/main/main";

const GlobalStyle = createGlobalStyle`${globalStyle}`;
const theme = dark;

export const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div> Docs </div>
    {/* <Main /> */}
  </ThemeProvider>
);
