import React, { FunctionComponent } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import { dark } from "./styles/theme";
import { globalStyle } from "./styles";
import { Main } from "./components/main";

const GlobalStyle = createGlobalStyle`${globalStyle}`;
const theme = dark;

const StyledMainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 20px;
  background-color: ${(props) => props.theme.darkBackground};
  color: ${(props) => props.theme.light};
`;

export const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledMainWrapper>
      <Main />
    </StyledMainWrapper>
  </ThemeProvider>
);
