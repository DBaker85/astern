import React, { FunctionComponent } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";

import { RootStateType } from "./store/index";
import { dark } from "../styles/theme";
import { globalStyle } from "../styles";
import { Toggle } from "./components/toggle/toggle";

const GlobalStyle = createGlobalStyle`${globalStyle}`;

const App: FunctionComponent = () => {
  const theme = useSelector((state: RootStateType) => state.theme);
  return (
    <ThemeProvider theme={theme.dark ? dark : dark}>
      <GlobalStyle />
      <div>
        <Toggle />
      </div>
      <div>Astern</div>
      <div>Downloads</div>
    </ThemeProvider>
  );
};

export { App };
