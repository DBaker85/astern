import styled from "styled-components";

export const StyledIndicator = styled.circle`
  stroke: ${(props) => props.theme.green};
`;

export const StyledWarningIndicator = styled.circle<{
  warningIndicator: number;
}>`
  stroke: ${(props) => props.theme.yellow};
  transform-origin: center center;
  transform: ${(props) => `rotate(${props.warningIndicator}deg)`};
`;

export const StyledCriticalIndicator = styled.circle<{
  criticalIndicator: number;
}>`
  stroke: ${(props) => props.theme.red};
  transform-origin: center center;
  transform: ${(props) => `rotate(${props.criticalIndicator}deg)`};
`;

export const StyledSymbolText = styled.text`
  fill: ${(props) => props.theme.text};
  opacity: 0.6;
`;
