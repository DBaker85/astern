import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Toggle } from "../../components/toggle/toggle";
import { SunMoon } from "../../components/icons/sunMoon/sunMoon";
import { FullLogo } from "../../../src/components/common/logo/fullLogo";

import { toggleTheme } from "../../store/theme/themeSlice";
import { getThemeSelector } from "../../store/theme/themeSelectors";
import { dark, light, Theme } from "../../../src/styles/theme";

import {
  analyticsEvent,
  eventActions,
  eventCategories,
} from "../../utils/analytics/analytics";

import {
  StyledHeader,
  StyledToggleWrapper,
  StyledLogoWrapper,
} from "./header.style";

export const Header: FunctionComponent = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getThemeSelector);
  const activeTheme = (theme.isDark ? dark : light) as Theme;

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
    analyticsEvent({
      category: eventCategories.user,
      action: eventActions.toggled("Theme"),
      label: theme.isDark ? "light" : "dark",
    });
  };

  return (
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
  );
};
