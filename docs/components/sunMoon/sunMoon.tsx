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

export const SunMoon: FunctionComponent<SunMoonType> = ({ moon = false }) => {
  return (
    <svg viewBox="0 0 42 42" width="100%" height="100%">
      <StyledBase cx="21" cy="21" r="18" />
      <StyledCutout cx="17" cy="17" r="14" />
    </svg>
  );
};
