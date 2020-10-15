import React, { FunctionComponent, useMemo } from "react";
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

const Indicator = styled.circle`
  stroke: ${(props) => props.theme.green};
`;

const WarningIndicator = styled.circle<{ warningIndicator: number }>`
  stroke: ${(props) => props.theme.yellow};
  transform-origin: center center;
  transform: ${(props) => `rotate(${props.warningIndicator}deg)`};
`;

const CriticalIndicator = styled.circle<{ criticalIndicator: number }>`
  stroke: ${(props) => props.theme.red};
  transform-origin: center center;
  transform: ${(props) => `rotate(${props.criticalIndicator}deg)`};
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

const TemperatureText = styled.text<{
  warning: number;
  critical: number;
  value: number;
}>`
  fill: ${(props) => {
    if (props.value >= props.warning && props.value < props.critical) {
      return props.theme.yellow;
    }
    if (props.value >= props.critical) {
      return props.theme.red;
    }
    return props.theme.light;
  }};
`;

const SymbolText = styled.text`
  fill: ${(props) => props.theme.light};
`;

export const Donut: FunctionComponent<DonutProps> = ({
  warning,
  critical,
  max,
  value,
}) => {
  const warningValue = useMemo(() => mapRange(warning, 0, max, 0, 100), [
    warning,
    max,
  ]);
  const criticalValue = useMemo(() => mapRange(critical, 0, max, 0, 100), [
    critical,
    max,
  ]);
  const warningIndicator = useMemo(() => mapRange(warning, 0, max, 0, 360), [
    warning,
    max,
  ]);
  const criticalIndicator = useMemo(() => mapRange(critical, 0, max, 0, 360), [
    critical,
    max,
  ]);

  const segmentValue = mapRange(value, 0, max, 0, 100);

  return (
    <svg width="100%" height="100%" viewBox="0 0 42 42">
      <Indicator
        cx="21"
        cy="21"
        r="15.91549430918954"
        fill="transparent"
        strokeDasharray="1 99"
        strokeWidth="10"
        strokeDashoffset="75"
      />
      <WarningIndicator
        cx="21"
        cy="21"
        r="15.91549430918954"
        fill="transparent"
        stroke="#fff"
        strokeDasharray="1 99"
        strokeWidth="10"
        strokeDashoffset="75"
        warningIndicator={warningIndicator}
      />
      <CriticalIndicator
        cx="21"
        cy="21"
        r="15.91549430918954"
        stroke="#fff"
        fill="transparent"
        criticalIndicator={criticalIndicator}
        strokeDasharray="1 99"
        strokeWidth="10"
        strokeDashoffset="75"
      />
      <DonutHole cx="21" cy="21" r="15.91549430918954" />
      <DonutRing cx="21" cy="21" r="15.91549430918954" strokeWidth="2" />
      <DonutSegment
        cx="21"
        cy="21"
        r="15.91549430918954"
        strokeWidth="4"
        segmentValue={segmentValue}
        warning={warningValue}
        critical={criticalValue}
        strokeDashoffset="75"
      />

      <g>
        <TemperatureText
          x="48%"
          y="60%"
          textAnchor="middle"
          fontSize=".8em"
          warning={warningValue}
          critical={criticalValue}
          value={value}
        >
          {value}
        </TemperatureText>
        <SymbolText x="31" y="53%" textAnchor="middle" fontSize=".4em">
          °
        </SymbolText>
        <SymbolText x="32" y="58%" textAnchor="middle" fontSize=".4em">
          C
        </SymbolText>
      </g>
    </svg>
  );
};
