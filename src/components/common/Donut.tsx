import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { mapRange } from "../../utils";

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
}) => {
  const segmentValue = mapRange(value, 0, max, 0, 100);
  const warningValue = mapRange(warning, 0, max, 0, 100);
  const criticalValue = mapRange(critical, 0, max, 0, 100);
  const warningIndicator = mapRange(warning, 0, max, 0, 360);
  const criticalIndicator = mapRange(critical, 0, max, 0, 360);
  return (
    <svg width="100%" height="100%" viewBox="0 0 42 42">
      <DonutHole cx="21" cy="21" r="15.91549430918954" />
      <DonutRing cx="21" cy="21" r="15.91549430918954" strokeWidth="3" />
      <circle
        cx="21"
        cy="21"
        r="19.0986"
        stroke="#fff"
        fill="transparent"
        strokeDasharray="1 119"
        strokeWidth="3"
        strokeDashoffset="90"
      />
      <circle
        cx="21"
        cy="21"
        r="19.0986"
        stroke="#fff"
        fill="transparent"
        style={{
          transformOrigin: "center center",
          transform: `rotate(${warningIndicator}deg)`,
        }}
        strokeDasharray="1 119"
        strokeWidth="3"
        strokeDashoffset="90"
      />
      <circle
        cx="21"
        cy="21"
        r="19.0986"
        stroke="#fff"
        fill="transparent"
        style={{
          transformOrigin: "center center",
          transform: `rotate(${criticalIndicator}deg)`,
        }}
        strokeDasharray="1 119"
        strokeWidth="3"
        strokeDashoffset="90"
      />

      <DonutSegment
        cx="21"
        cy="21"
        r="15.91549430918954"
        strokeWidth="5"
        segmentValue={segmentValue}
        warning={warningValue}
        critical={criticalValue}
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
};
