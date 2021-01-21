import React, { FunctionComponent } from "react";
import styled from "styled-components";

type Colors = {
  background?: string;
  sun?: string;
  moon?: string;
};
export interface SunMoonType {
  moon?: boolean;
  colors?: Colors;
}

export const StyledBackground = styled.circle<{ colors: Colors }>`
  fill: ${(props) => props.colors.background};
  transition: fill 0.4s ease-in-out;
`;
export const StyledBase = styled.circle<{ moon?: boolean; colors: Colors }>`
  fill: ${(props) => (props.moon ? props.colors.moon : props.colors.sun)};
  transition: fill 0.4s ease-in-out;
`;
export const StyledCutout = styled.circle<{ moon?: boolean; colors: Colors }>`
  fill: ${(props) => props.colors.background};
  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transform: ${(props) => (props.moon ? "scale(1)" : "scale(0)")};
`;

const defaultColors = {
  background: "hsl(184, 20%, 34%)",
  sun: "hsl(42, 100%, 60%)",
  moon: "hsl(42, 100%, 91%)",
};

export const SunMoon: FunctionComponent<SunMoonType> = ({
  moon = false,
  colors = defaultColors,
}) => {
  return (
    <svg viewBox="0 0 42 42" width="100%" height="100%">
      <mask id="cutout-mask">
        <rect x="0" y="0" width="100" height="100" fill="black" />
        <circle cx="21" cy="21" r="21" fill="white"></circle>
      </mask>
      <StyledBackground cx="21" cy="21" r="21" colors={colors} />
      <StyledBase cx="21" cy="21" r="15" moon={moon} colors={colors} />
      <g mask="url(#cutout-mask)">
        <StyledCutout cx="15" cy="15" r="13" moon={moon} colors={colors} />
      </g>
    </svg>
  );
};
// 45deg
