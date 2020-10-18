import React, { FunctionComponent, useMemo } from "react";

import { mapRange, celciusToFarenheight } from "../../../utils";

import {
  CriticalIndicator,
  DonutHole,
  DonutRing,
  DonutSegment,
  Indicator,
  SymbolText,
  TemperatureText,
  WarningIndicator,
} from "./style";

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
  const warningValue = useMemo(
    () =>
      farenheight
        ? celciusToFarenheight(mapRange(warning, 0, max, 0, 100))
        : mapRange(warning, 0, max, 0, 100),
    [warning, max, farenheight]
  );
  const criticalValue = useMemo(
    () =>
      farenheight
        ? celciusToFarenheight(mapRange(warning, 0, max, 0, 100))
        : mapRange(critical, 0, max, 0, 100),
    [critical, max, farenheight]
  );
  const warningIndicator = useMemo(
    () =>
      farenheight
        ? celciusToFarenheight(mapRange(warning, 0, max, 0, 100))
        : mapRange(warning, 0, max, 0, 360),
    [warning, max, farenheight]
  );
  const criticalIndicator = useMemo(
    () =>
      farenheight
        ? celciusToFarenheight(mapRange(warning, 0, max, 0, 100))
        : mapRange(critical, 0, max, 0, 360),
    [critical, max, farenheight]
  );

  const segmentValue = farenheight
    ? celciusToFarenheight(mapRange(value, 0, max, 0, 100))
    : mapRange(value, 0, max, 0, 100);

  const mappedValue = farenheight ? celciusToFarenheight(value) : value;

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
          fontSize=".42em"
          warning={warningValue}
          critical={criticalValue}
          value={mappedValue}
        >
          {mappedValue}
        </TemperatureText>
        <SymbolText x="31" y="53%" textAnchor="middle" fontSize=".21em">
          °
        </SymbolText>
        <SymbolText x="32" y="58%" textAnchor="middle" fontSize=".21em">
          {farenheight ? "F" : " C"}
        </SymbolText>
      </g>
    </svg>
  );
};
