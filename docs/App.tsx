import React, { FunctionComponent, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { StylesProvider } from "@material-ui/core/styles";

import { dark, light, Theme } from "../src/styles/theme";

import { FullLogo } from "../src/components/common/logo/fullLogo";
import mainImage from "../assets/images/main.png";

import { getThemeSelector } from "./store/theme/themeSelectors";
import { toggleTheme } from "./store/theme/themeSlice";
import { Toggle } from "./components/toggle/toggle";
import { SunMoon } from "./components/icons/sunMoon/sunMoon";
import { DownloadButton } from "./components/button/downloadButton";
import {
  pageView,
  analyticsEvent,
  eventActions,
  eventCategories,
} from "./utils/analytics/analytics";

import {
  GlobalStyle,
  StyledHeader,
  StyledContent,
  StyledLogoWrapper,
  StyledMain,
  StyledToggleWrapper,
  StyledHeading,
} from "./App.style";

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

        <StyledHeader>
          <div className="content">
            <StyledToggleWrapper>
              <Toggle
                onClick={handleToggleTheme}
                checked={theme.isDark}
                height={36}
              >
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
          </div>
        </StyledHeader>
        <StyledMain>
          <StyledContent className="split">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={mainImage} style={{ width: "80%", height: "auto" }} />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <DownloadButton
                version="1.0.0"
                subtext="for use with version 1x to 1.3x"
              />
            </div>
          </StyledContent>
          <StyledContent>
            <StyledHeading as={"h2"}>Instalation</StyledHeading>
            {`
windows

- Navigate to C:\Users\<username>\AppData\Local\MoBro\app-<version-number>\resources\resources\public\theme
- Extract the all contents of the package there
- Restart MoBro server on your machine.
- The Theme should now be available

For more detailed instructions [click here](https://www.mod-bros.com/en/blog/b/configure-themes~916)
`}
          </StyledContent>
          <StyledContent>
            <StyledHeading as={"h2"}>Motivation</StyledHeading>I wanted this
            theme to be modern and show some relevant stats like Core clock and
            Gpu stats but also very easy to run on less capable hardware.
          </StyledContent>

          <StyledContent className="split">
            <div>
              <StyledHeading as={"h2"}>Performance</StyledHeading>| Board |
              15min load avg | | --------------- | -------------- | | Raspberry
              pi 3B | 0.60 ~ 15% | | Raspberry pi A+ | |
            </div>
          </StyledContent>
        </StyledMain>
      </ThemeProvider>
    </StylesProvider>
  );
};

export { App };
