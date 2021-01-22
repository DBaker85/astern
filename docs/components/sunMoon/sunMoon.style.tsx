import styled from "styled-components";
export const StyledBackground = styled.circle<{ color: string }>`
  fill: ${(props) => props.color};
  transition: fill 0.4s ease-in-out;
`;

export const StyledBase = styled.circle<{
  moon?: boolean;
  sunColor: string;
  moonColor: string;
}>`
  fill: ${(props) => (props.moon ? props.moonColor : props.sunColor)};
  transition: fill 0.4s ease-in-out,
    transform 500ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transform: ${(props) => (props.moon ? "scale(1)" : "scale(0.8)")};
  transform-origin: center;
`;

export const StyledCutout = styled.circle<{ moon?: boolean; color: string }>`
  fill: ${(props) => props.color};
  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.27, 1.55),
    fill 0.4s ease-in-out;
  transform: ${(props) => (props.moon ? "scale(1)" : "scale(0)")};
`;

export const StyledRays = styled.path<{ moon?: boolean; color: string }>`
  fill: ${(props) => props.color};
  transition: opacity 0.4s ease-in-out;
  opacity: ${(props) => (props.moon ? 0 : 1)};
  transform-origin: center;
`;
