import React, { FunctionComponent, useEffect, useState } from "react";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

import { Chart } from "../../common/usageChart/chart";
import { UsageType, arrayUpdater } from "../../common/usageChart/utils";
import { StyledUsage, StyledChartWrapper, StyledChartContainer } from "./usageChart.style";

export interface usageChartProps {
    usage: number;
}

export const UsageChart: FunctionComponent<usageChartProps> = ({usage}) => {
  const [usageArray, setUsageArray] = useState<UsageType[]>([]);

  useEffect(() => {

       
        setUsageArray((usageArray) =>
          arrayUpdater(usageArray, usage)
        );
    
  }, [usage]);

  return (
    <StyledChartContainer>
      <StyledUsage>
        <div>{usage}%</div>
      </StyledUsage>
      <StyledChartWrapper>
        <ParentSize>
          {({ width, height }) => (
            <Chart usageArray={usageArray} width={width} height={height} />
          )}
        </ParentSize>
      </StyledChartWrapper>
    </StyledChartContainer>
  );
};
