import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

import {
  processorCoreCountSelector,
  processorNameSelector,
} from "../../../store/moBro/mobroSelectors";
import { Card } from "../../common/card";
import { UsageChart, UsageType, arrayUpdater } from "../../common/usageChart";

import { StyledUsage, StyledChartWrapper } from "./style";

const StyledUsageCard = styled(Card)`
  grid-column: span 2;
`;

export const CpuUsage: FunctionComponent = () => {
  const name = useSelector(processorNameSelector);
  const [usage, setUsage] = useState(0);
  const coreCount = useSelector(processorCoreCountSelector);
  const [usageArray, setUsageArray] = useState<UsageType[]>([]);

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.PROCESSOR.USAGE,
      (data) => {
        setUsage(Math.ceil(data.payload.value));
        setUsageArray((usageArray) =>
          arrayUpdater(usageArray, data.payload.value)
        );
      }
    );
  }, []);

  return (
    <StyledUsageCard title={name}>
      <StyledUsage>
        <div>{usage}%</div>
      </StyledUsage>
      <StyledChartWrapper>
        <ParentSize>
          {({ width, height }) => (
            <UsageChart usageArray={usageArray} width={width} height={height} />
          )}
        </ParentSize>
      </StyledChartWrapper>
    </StyledUsageCard>
  );
};
