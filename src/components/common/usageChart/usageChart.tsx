import React, { useMemo, FunctionComponent, useContext } from "react";

import { ThemeContext } from "styled-components";
import { curveMonotoneX } from "@visx/curve";
import { Area } from "@visx/shape";
import { scaleTime, scaleLinear } from "@visx/scale";
import { max, extent } from "d3-array";

import { UsageType, getTime, getUsageValue } from "./utils";

interface UsageChartProps {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  usageArray: UsageType[];
}

export const UsageChart: FunctionComponent<UsageChartProps> = ({
  width,
  height,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
  usageArray,
}) => {
  // bounds
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const themeContext = useContext(ThemeContext);

  // scales
  const timeScale = useMemo(
    () =>
      scaleTime({
        range: [margin.left, innerWidth + margin.left],
        domain: extent(usageArray, getTime) as [Date, Date],
      }),
    [innerWidth, margin.left, usageArray]
  );
  const TempValueScale = useMemo(
    () =>
      scaleLinear({
        range: [innerHeight + margin.top, margin.top],
        domain: [0, 100],
        nice: true,
      }),
    [margin.top, innerHeight]
  );

  return (
    <svg width={width} height={height}>
      <Area
        data={usageArray}
        x={(d) => timeScale(getTime(d)) ?? 0}
        y={(d) => TempValueScale(getUsageValue(d)) ?? 0}
        strokeWidth={1}
        stroke={themeContext.green}
        curve={curveMonotoneX}
      />
    </svg>
  );
};
