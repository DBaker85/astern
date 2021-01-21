import React, { FunctionComponent } from "react";
import styled from "styled-components";

export const StyledBase = styled.circle<{ moon?: boolean }>`
  fill: ${(props) => (props.moon ? props.theme.light : props.theme.yellow)};
`;
export const StyledCutout = styled.circle<{ moon?: boolean }>`
  fill: ${(props) => props.theme.green};
  transition: transform 300ms ease-in-out;
  transform: ${(props) => (props.moon ? "scale(1)" : "scale(0)")};
`;

export interface SunMoonType {
  moon?: boolean;
}

const numberOfBars = 8;
const items = Array(numberOfBars).fill(numberOfBars);

export const SunMoon: FunctionComponent<SunMoonType> = ({ moon = false }) => {
  return (
    <svg viewBox="0 0 42 42" width="100%" height="100%">
      <mask id="cutout-mask">
        <rect x="0" y="0" width="100" height="100" fill="black" />
        <circle cx="21" cy="21" r="21" fill="white"></circle>
      </mask>
      <circle cx="21" cy="21" r="21" fill="hsla(162,95%,34%,1)"></circle>
      <circle cx="21" cy="21" r="15" fill="hsla(29,96%,56%,1)" />
      <g mask="url(#cutout-mask)">
        <circle
          cx="15"
          cy="15"
          r="13"
          fill="hsla(162,95%,34%,1)"
          style={{
            transition: "transform 500ms cubic-bezier(0.68, -0.55, 0.27, 1.55)",
            transform: moon ? "scale(1)" : "scale(0)",
          }}
        />
      </g>
    </svg>
  );
};
// 45deg
