import React, { FunctionComponent, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { StylesProvider } from "@material-ui/core/styles";

import { dark, light, Theme } from "../src/styles/theme";

import { getThemeSelector } from "./store/theme/themeSelectors";

import { pageView } from "./utils/analytics/analytics";

import { GlobalStyle, StyledMain } from "./App.style";

import { Header } from "./sections/header/header";
import { Download } from "./sections/download/download";
import { Installation } from "./sections/installation/installation";
import { Motivation } from "./sections/motivation/motivation";
import { Performance } from "./sections/performance/performance";

const App: FunctionComponent = () => {
  const theme = useSelector(getThemeSelector);
  const activeTheme = (theme.isDark ? dark : light) as Theme;

  useEffect(() => {
    pageView("Home");
  }, []);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={activeTheme}>
        <GlobalStyle />

        <Header />

        <StyledMain>
          <Download />
          <Installation />
          <Motivation />
          <Performance />
        </StyledMain>
      </ThemeProvider>
    </StylesProvider>
  );
};

export { App };
