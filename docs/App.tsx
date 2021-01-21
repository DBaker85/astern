import React, { FunctionComponent } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { dark, light } from "../src/styles/theme";
import { globalStyle } from "../src/styles";

import { getThemeSelector } from "./store/theme/themeSelectors";
import { toggleTheme } from "./store/theme/themeSlice";
import { Toggle } from "./components/toggle/toggle";
import { SunMoon } from "./components/sunMoon/sunMoon";

const GlobalStyle = createGlobalStyle`${globalStyle}`;

interface Theme {
  background: string;
  light: string;
  red: string;
  green: string;
  yellow: string;
  dark: string;
}

const App: FunctionComponent = () => {
  const theme = useSelector(getThemeSelector);
  const activeTheme = (theme.isDark ? dark : light) as Theme;
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle />
      <div>
        <Toggle onClick={() => dispatch(toggleTheme())} checked={theme.isDark}>
          <SunMoon
            moon={theme.isDark}
            backgroundColor={activeTheme.green}
            sunColor={activeTheme.yellow}
            moonColor={activeTheme.light}
          />
        </Toggle>
      </div>
      <div>Astern</div>
      <div>Downloads</div>
    </ThemeProvider>
  );
};

export { App };
