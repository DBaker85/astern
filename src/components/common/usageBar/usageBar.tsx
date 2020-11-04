import React, { FunctionComponent } from "react";

import {
  StyledDonutHole,
  StyledDonutRing,
  StyledDonutSegment,
} from "../donut/donut.style";

interface BarChartProps {
  value: number;
  used: number;
  total: number;
  unit: string;
}

export const UsageBar: FunctionComponent<BarChartProps> = ({
  value,
  used,
  total,
  unit,
}) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 42 42">
      <StyledDonutHole cx="21" cy="21" r="15.91549430918954" />
      <StyledDonutRing cx="21" cy="21" r="15.91549430918954" strokeWidth="2" />
      <StyledDonutSegment
        cx="21"
        cy="21"
        r="15.91549430918954"
        strokeWidth="4"
        segmentValue={value}
        warning={0}
        critical={85}
        strokeDashoffset="75"
        strokeDasharray={`${value} ${100 - value}`}
      />

      <g>
        <text
          x="48%"
          y="60%"
          textAnchor="middle"
          fontSize="12.6px"
          // warning={warningValue}
          // critical={criticalValue}
          // value={mappedValue}
        >
          {used}
          {unit}
        </text>

        <text x="31" y="53%" textAnchor="middle" fontSize="6.3px">
          /
        </text>
        <text x="32" y="58%" textAnchor="middle" fontSize="6.3px">
          {total}
          {unit}
        </text>
      </g>
    </svg>
  );
};
