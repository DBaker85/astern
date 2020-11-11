import React, { FunctionComponent } from "react";

import {
  StyledDonutHole,
  StyledDonutRing,
  StyledDonutSegment,
  StyledDonutText,
} from "../donut/donut.style";

import { StyledSymbolText } from "./usageBar.style";

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
  const mappedUsed = Math.round(used);
  const mappedTotal = Math.round(total);
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
        warning={90}
        critical={95}
        strokeDashoffset="75"
        strokeDasharray={`${value} ${100 - value}`}
      />

      <g>
        <StyledDonutText
          x="50%"
          y="52%"
          textAnchor="middle"
          fontSize="12.6px"
          warning={90}
          critical={95}
          value={value}
        >
          <tspan data-testid="usage-text-used">{mappedUsed}</tspan>
          <tspan fontSize="6.3px">{unit}</tspan>
        </StyledDonutText>

        <StyledSymbolText x="40%" y="67%" textAnchor="middle" fontSize="5px">
          /
        </StyledSymbolText>
        <StyledSymbolText x="58%" y="67%" textAnchor="middle" fontSize="6.3px">
          <tspan data-testid="usage-text-total">{mappedTotal}</tspan>
          <tspan fontSize="3.1px">{unit}</tspan>
        </StyledSymbolText>
      </g>
    </svg>
  );
};
