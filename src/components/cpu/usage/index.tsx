import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { processorCoreCountSelector } from "../../../store/moBro/mobroSelectors";
import { Card } from "../../common/card";

import {
  StyledCore,
  StyledCoreCountWrapper,
  StyledCoreWrapper,
  StyledUsage,
} from "./style";

const StyledUsageCard = styled(Card)`
  grid-column: span 2;
  .content {
    width: 100%;
  }
`;

export const CpuUsage: FunctionComponent = () => {
  const [usage, setUsage] = useState(0);
  const coreCount = useSelector(processorCoreCountSelector);

  const cpuCoreCreator = (usage: number) =>
    [...new Array(coreCount)].map((value, index) => (
      <StyledCore usage={usage} key={index}>
        <div style={{ height: `${usage}%` }} />
      </StyledCore>
    ));

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.PROCESSOR.USAGE,
      (data) => {
        setUsage(Math.ceil(data.payload.value));
      }
    );
  }, []);

  return (
    <StyledUsageCard>
      <StyledCoreWrapper>
        <StyledCoreCountWrapper>{cpuCoreCreator(usage)}</StyledCoreCountWrapper>
        <StyledUsage>
          <div>{usage}%</div>
        </StyledUsage>
      </StyledCoreWrapper>
    </StyledUsageCard>
  );
};
