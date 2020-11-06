import React, { FunctionComponent, useMemo } from "react";

import { mapRange, celciusToFarenheight } from "../../../utils";

import {
  StyledDonutHole,
  StyledDonutRing,
  StyledDonutSegment,
  StyledDonutText,
} from "../donut/donut.style";

import {
  StyledCriticalIndicator,
  StyledIndicator,
  StyledSymbolText,
  StyledWarningIndicator,
} from "./temperatureChart.style";

interface TemperatureChartProps {
  value: number;
  warning: number;
  critical: number;
  max: number;
  farenheight?: boolean;
}

export const TemperatureChart: FunctionComponent<TemperatureChartProps> = ({
  warning,
  critical,
  max,
  value,
  farenheight = false,
}) => {
  const mappedValue = farenheight ? celciusToFarenheight(value) : value;
  const mappedWarningValue = farenheight
    ? celciusToFarenheight(warning)
    : warning;
  const mappedCriticalValue = farenheight
    ? celciusToFarenheight(critical)
    : critical;
  const mappedMaxValue = farenheight ? celciusToFarenheight(max) : max;

  const warningValue = useMemo(
    () => mapRange(mappedWarningValue, 0, mappedMaxValue, 0, 100),
    [mappedWarningValue, mappedMaxValue]
  );
  const criticalValue = useMemo(
    () => mapRange(mappedCriticalValue, 0, mappedMaxValue, 0, 100),
    [mappedCriticalValue, mappedMaxValue]
  );
  const warningIndicator = useMemo(
    () => mapRange(mappedWarningValue, 0, mappedMaxValue, 0, 360),
    [mappedWarningValue, mappedMaxValue]
  );
  const criticalIndicator = useMemo(
    () => mapRange(mappedCriticalValue, 0, mappedMaxValue, 0, 360),
    [mappedCriticalValue, mappedMaxValue]
  );

  const segmentValue = mapRange(mappedValue, 0, mappedMaxValue, 0, 100);

  return (
    <svg width="100%" height="100%" viewBox="0 0 42 42">
      <StyledIndicator
        cx="21"
        cy="21"
        r="15.91549430918954"
        fill="transparent"
        strokeDasharray="1 99"
        strokeWidth="10"
        strokeDashoffset="75"
      />
      <StyledWarningIndicator
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
      <StyledCriticalIndicator
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
      <StyledDonutHole cx="21" cy="21" r="15.91549430918954" />
      <StyledDonutRing cx="21" cy="21" r="15.91549430918954" strokeWidth="2" />
      <StyledDonutSegment
        cx="21"
        cy="21"
        r="15.91549430918954"
        strokeWidth="4"
        segmentValue={segmentValue}
        warning={warningValue}
        critical={criticalValue}
        strokeDashoffset="75"
        strokeDasharray={`${segmentValue} ${100 - segmentValue}`}
      />

      <g>
        <StyledDonutText
          x="48%"
          y="60%"
          textAnchor="middle"
          fontSize="12.6px"
          warning={mappedWarningValue}
          critical={mappedCriticalValue}
          value={mappedValue}
        >
          {mappedValue}
        </StyledDonutText>
        <StyledSymbolText x="31" y="53%" textAnchor="middle" fontSize="6.3px">
          °
        </StyledSymbolText>
        <StyledSymbolText x="32" y="58%" textAnchor="middle" fontSize="6.3px">
          {farenheight ? "F" : " C"}
        </StyledSymbolText>
      </g>
    </svg>
  );
};
