import React, { useMemo, FunctionComponent } from "react";
import { AreaClosed } from "@visx/shape";
import { produce } from "immer";

import { curveMonotoneX } from "@visx/curve";
import { scaleTime, scaleLinear } from "@visx/scale";
import { max, extent } from "d3-array";

export const arrayUpdater = (baseState: UsageType[], value: number) =>
  produce<UsageType[]>(baseState, (draftState) => {
    if (baseState.length === 60) {
      draftState.shift();
    }
    draftState.push({
      time: new Date(),
      usage: value,
    });
  });

export type UsageType = { time: Date; usage: number };

interface UsageChartProps {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  usageArray: UsageType[];
}

// accessors
const getDate = (d: UsageType) => new Date(d.time);
const getTemperatureValue = (d: UsageType) => d.usage;

export const UsageChart: FunctionComponent<UsageChartProps> = ({
  width,
  height,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
  usageArray,
}) => {
  // bounds
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // scales
  const timeScale = useMemo(
    () =>
      scaleTime({
        range: [margin.left, innerWidth + margin.left],
        domain: extent(usageArray, getDate) as [Date, Date],
      }),
    [innerWidth, margin.left, usageArray]
  );
  const TempValueScale = useMemo(
    () =>
      scaleLinear({
        range: [innerHeight + margin.top, margin.top],
        domain: [
          0,
          (max(usageArray, getTemperatureValue) || 0) + innerHeight / 3,
        ],
        nice: true,
      }),
    [margin.top, innerHeight]
  );

  return (
    <svg width={width} height={height}>
      <AreaClosed
        data={usageArray}
        x={(d) => timeScale(getDate(d)) ?? 0}
        y={(d) => TempValueScale(getTemperatureValue(d)) ?? 0}
        yScale={TempValueScale}
        strokeWidth={1}
        stroke="black"
        fill="grey"
        curve={curveMonotoneX}
      />
    </svg>
  );
};
