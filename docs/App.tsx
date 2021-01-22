import React, { FunctionComponent } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { dark, light, Theme } from "../src/styles/theme";
import { globalStyle } from "../src/styles";
import { FullLogo } from "../src/components/common/logo/fullLogo";

import mainImage from "../src/assets/images/Main.png";

import { getThemeSelector } from "./store/theme/themeSelectors";
import { toggleTheme } from "./store/theme/themeSlice";
import { Toggle } from "./components/toggle/toggle";
import { SunMoon } from "./components/sunMoon/sunMoon";

const GlobalStyle = createGlobalStyle`${globalStyle}`;

const StyledToggleWrapper = styled.div`
  display: flex;
  padding: 20px;
  justify-content: flex-end;
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  padding: 60px;
  height: 300px;
  justify-content: center;
  background-color: ${(props) => props.theme.dark};
  svg {
    height: 100%;
    width: auto;
  }
`;

const StyledMainWrapper = styled.div`
  display: flex;
  padding: 40px;
  div {
    width: 50%;
  }
`;

const App: FunctionComponent = () => {
  const theme = useSelector(getThemeSelector);
  const activeTheme = (theme.isDark ? dark : light) as Theme;
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle />
      <StyledToggleWrapper>
        <Toggle onClick={() => dispatch(toggleTheme())} checked={theme.isDark}>
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
      </StyledMainWrapper>
    </ThemeProvider>
  );
};

export { App };
