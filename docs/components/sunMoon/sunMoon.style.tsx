import styled from "styled-components";

export const StyledBase = styled.circle<{ moon?: boolean }>`
  fill: ${(props) => (props.moon ? props.theme.light : props.theme.yellow)};
`;
export const StyledCutout = styled.circle<{ moon?: boolean }>`
  fill: ${(props) => props.theme.green};
  transition: transform 300ms ease-in-out;
  transform: ${(props) => (props.moon ? "scale(1)" : "scale(0)")};
`;
