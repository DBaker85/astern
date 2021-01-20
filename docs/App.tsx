import React, { FunctionComponent } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { dark, light } from "../src/styles/theme";
import { globalStyle } from "../src/styles";

import { getThemeSelector } from "./store/theme/themeSelectors";
import { toggleTheme } from "./store/theme/themeSlice";
import { Toggle } from "./components/toggle/toggle";

const GlobalStyle = createGlobalStyle`${globalStyle}`;

const App: FunctionComponent = () => {
  const theme = useSelector(getThemeSelector);
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme.dark ? dark : light}>
      <GlobalStyle />
      <div>
        <Toggle onClick={() => dispatch(toggleTheme())} checked={theme.dark} />
      </div>
      <div>Astern</div>
      <div>Downloads</div>
    </ThemeProvider>
  );
};

export { App };
