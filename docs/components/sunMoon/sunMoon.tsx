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

export const StyledRay = styled.rect`
  width: 0.001px;
  height: 4px;
  stroke-width: 1px;
  stroke: hsla(29, 96%, 56%, 1);
  transform-origin: center;
  transition: opacity 500ms ease-in-out;
`;

export const StyledStar = styled.polygon`
  fill: hsla(29, 96%, 56%, 1);
  fill-rule: nonzero;
  transition: opacity 500ms ease-in-out;
`;

export interface SunMoonType {
  moon?: boolean;
}

const numberOfBars = 8;
const items = Array(numberOfBars).fill(numberOfBars);

export const SunMoon: FunctionComponent<SunMoonType> = ({ moon = false }) => {
  return (
    <svg viewBox="0 0 42 42" width="100%" height="100%">
      <circle cx="21" cy="21" r="15" fill="hsla(29,96%,56%,1)" />
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
      <StyledStar
        x="10"
        y="10"
        points="5,0.5 2,9.5 9.5,3.5 0.5,3.5 8,9.5"
        style={{
          transform: "translate(10px, 16px) scale(0.3)",
          opacity: moon ? 1 : 0,
        }}
      />
      <StyledStar
        x="0"
        y="0"
        points="5,0.5 2,9.5 9.5,3.5 0.5,3.5 8,9.5"
        style={{
          transform: "translate(16px, 10px) scale(0.5)",
          opacity: moon ? 1 : 0,
        }}
      />

      <StyledRay
        x="21"
        y="0"
        style={{ transform: `rotateZ(0deg)`, opacity: moon ? 0 : 1 }}
      />
      <StyledRay
        x="21"
        y="0"
        style={{ transform: `rotateZ(45deg)`, opacity: moon ? 0 : 1 }}
      />
      <StyledRay
        x="21"
        y="0"
        style={{ transform: `rotateZ(90deg)`, opacity: moon ? 0 : 1 }}
      />
      <StyledRay
        x="21"
        y="0"
        style={{ transform: `rotateZ(135deg)`, opacity: moon ? 0 : 1 }}
      />
      <StyledRay
        x="21"
        y="0"
        style={{ transform: `rotateZ(180deg)`, opacity: moon ? 0 : 1 }}
      />
      <StyledRay
        x="21"
        y="0"
        style={{ transform: `rotateZ(225deg)`, opacity: moon ? 0 : 1 }}
      />
      <StyledRay
        x="21"
        y="0"
        style={{ transform: `rotateZ(270deg)`, opacity: moon ? 0 : 1 }}
      />
      <StyledRay
        x="21"
        y="0"
        style={{ transform: `rotateZ(315deg)`, opacity: moon ? 0 : 1 }}
      />
    </svg>
  );
};
// 45deg
