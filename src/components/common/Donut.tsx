import React, { FunctionComponent } from "react";
import styled, { StyledFunction } from "styled-components";

interface DonutProps {
  value: number;
  warning: number;
  critical: number;
  max: number;
}

const DonutHole = styled.circle`
  fill: ${(props) => props.theme.background};
`;

const DonutRing = styled.circle`
  stroke: ${(props) => props.theme.dark};
  fill: transparent;
`;

const DonutSegment = styled.circle<{
  segmentValue: number;
  warning: number;
  critical: number;
}>`
  stroke: ${(props) => {
    if (
      props.segmentValue >= props.warning &&
      props.segmentValue < props.critical
    ) {
      return props.theme.yellow;
    }
    if (props.segmentValue >= props.critical) {
      return props.theme.red;
    }
    return props.theme.green;
  }};
  stroke-dasharray: ${(props) =>
    `${props.segmentValue} ${100 - props.segmentValue}`};
  fill: transparent;
  transition: stroke-dasharray 300ms ease-in-out;
`;

export const Donut: FunctionComponent<DonutProps> = ({
  warning,
  critical,
  max,
  value,
}) => (
  <svg width="100%" height="100%" viewBox="0 0 42 42">
    <DonutHole cx="21" cy="21" r="15.91549430918954" />
    <DonutRing cx="21" cy="21" r="15.91549430918954" strokeWidth="3" />
    <DonutSegment
      cx="21"
      cy="21"
      r="15.91549430918954"
      strokeWidth="5"
      segmentValue={value}
      warning={warning}
      critical={critical}
      strokeDashoffset="75"
    />
    <g className="chart-text">
      <text x="50%" y="50%" className="chart-number">
        {value}
      </text>
      <text x="50%" y="50%" className="chart-label">
        {/* C */}
      </text>
    </g>
  </svg>
);
