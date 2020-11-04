import styled from "styled-components";

export const StyledDonutHole = styled.circle`
  fill: ${(props) => props.theme.background};
`;

export const StyledDonutRing = styled.circle`
  stroke: ${(props) => props.theme.dark};
  fill: transparent;
`;

export const StyledDonutSegment = styled.circle<{
  segmentValue: number;
  warning?: number;
  critical?: number;
}>`
  stroke: ${(props) => {
    if (
      props.warning &&
      props.segmentValue >= props.warning &&
      props.segmentValue < props.critical
    ) {
      return props.theme.yellow;
    }
    if (props.critical && props.segmentValue >= props.critical) {
      return props.theme.red;
    }
    return props.theme.green;
  }};

  fill: transparent;
  transition: stroke-dasharray 300ms ease-in-out;
`;

export const StyledDonutText = styled.text<{
  warning?: number;
  critical?: number;
  value: number;
}>`
  fill: ${(props) => {
    if (
      props.warning &&
      props.value >= props.warning &&
      props.value < props.critical
    ) {
      return props.theme.yellow;
    }
    if (props.critical && props.value >= props.critical) {
      return props.theme.red;
    }
    return props.theme.light;
  }};
`;
