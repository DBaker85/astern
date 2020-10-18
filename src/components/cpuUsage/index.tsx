import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { processorCoreCountSelector } from "../../store/moBro/mobroSelectors";

import {
  StyledCore,
  StyledCoreCountWrapper,
  StyledCoreWrapper,
  StyledUsage,
} from "./style";

export const CpuUsage: FunctionComponent = () => {
  const [usage, setUsage] = useState(0);
  const coreCount = useSelector(processorCoreCountSelector);

  const cpuCoreCreator = (usage: number) =>
    [...new Array(coreCount)].map((value, index) => (
      <StyledCore usage={usage} key={index}>
        <div />
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
    <StyledCoreWrapper>
      <StyledCoreCountWrapper>{cpuCoreCreator(usage)}</StyledCoreCountWrapper>
      <StyledUsage>
        <div>{usage}%</div>
      </StyledUsage>
    </StyledCoreWrapper>
  );
};
