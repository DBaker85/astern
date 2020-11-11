import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

import { channels } from "../../../config/themeChannels";
import { gpuNameSelector } from "../../../store/moBro/mobroSelectors";

import { Card } from "../../common/card/card";

import { StyledGpuWrapper, StyledUsage } from "./gpuUsage.style";
import { UsageChart } from "../../common/usageChart/usageChart";
import { UsageType, arrayUpdater } from "../../common/usageChart/utils";

const StyledUsageCard = styled(Card)`
  grid-column-start: 4;
  grid-column-end: 6;
`;

export const GpuUsage = () => {
  const [usage, setUsage] = useState(0);
  const [usageArray, setUsageArray] = useState<UsageType[]>([]);
  const name = useSelector(gpuNameSelector);

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.GRAPHICS.USAGE,
      (data) => {
        setUsage(Math.round(data.payload.value));
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
      <StyledGpuWrapper>
        <ParentSize>
          {({ width, height }) => (
            <UsageChart usageArray={usageArray} width={width} height={height} />
          )}
        </ParentSize>
      </StyledGpuWrapper>
    </StyledUsageCard>
  );
};
