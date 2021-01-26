import React, { FunctionComponent, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { StylesProvider } from "@material-ui/core/styles";

import { dark, light, Theme } from "../src/styles/theme";

import { FullLogo } from "../src/components/common/logo/fullLogo";
import mainImage from "../src/assets/images/main.png";

import { getThemeSelector } from "./store/theme/themeSelectors";
import { toggleTheme } from "./store/theme/themeSlice";
import { Toggle } from "./components/toggle/toggle";
import { SunMoon } from "./components/icons/sunMoon/sunMoon";
import { Button } from "./components/button/button";
import {
  pageView,
  analyticsEvent,
  eventActions,
  eventCategories,
} from "./utils/analytics/analytics";

import {
  GlobalStyle,
  StyledLogoWrapper,
  StyledMainWrapper,
  StyledToggleWrapper,
} from "./App.style";

import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const App: FunctionComponent = () => {
  const theme = useSelector(getThemeSelector);
  const activeTheme = (theme.isDark ? dark : light) as Theme;
  const dispatch = useDispatch();

  useEffect(() => {
    pageView("Home");
  }, []);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
    analyticsEvent({
      category: eventCategories.user,
      action: eventActions.toggled("Theme"),
      label: theme.isDark ? "light" : "dark",
    });
  };

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={activeTheme}>
        <GlobalStyle />
        <StyledToggleWrapper>
          <Toggle onClick={handleToggleTheme} checked={theme.isDark}>
            <SunMoon
              moon={theme.isDark}
              backgroundColor={activeTheme.green}
              sunColor={activeTheme.yellow}
              moonColor={activeTheme.light}
            />
          </Toggle>
        </StyledToggleWrapper>
        <StyledLogoWrapper>
          <FullLogo />
        </StyledLogoWrapper>
        <StyledMainWrapper>
          <div>{/* <img src={mainImage} /> */}</div>
          <div>
            <a href="" />
          </div>
          <Button startIcon={<CloudDownloadIcon />}>Download</Button>
        </StyledMainWrapper>
      </ThemeProvider>
    </StylesProvider>
  );
};

export { App };
