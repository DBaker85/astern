import React, { FunctionComponent, useEffect, useState } from "react";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

import { Chart } from "../../common/usageChart/chart";
import { UsageType } from "../../common/usageChart/utils";

import {
  StyledUsage,
  StyledChartWrapper,
  StyledChartContainer,
} from "./usageChart.style";

export interface usageChartProps {
  usage: UsageType[];
}

export const UsageChart: FunctionComponent<usageChartProps> = ({ usage }) => {
  const formattedUsage = usage.length
    ? Math.round(usage[usage.length - 1].usage)
    : 0;

  return (
    <StyledChartContainer>
      <StyledUsage>
        <div>{formattedUsage}%</div>
      </StyledUsage>
      <StyledChartWrapper>
        <ParentSize>
          {({ width, height }) => (
            <Chart usageArray={usage} width={width} height={height} />
          )}
        </ParentSize>
      </StyledChartWrapper>
    </StyledChartContainer>
  );
};
