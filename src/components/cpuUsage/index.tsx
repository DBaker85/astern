import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { processorCoreCountSelector } from "../../store/moBro/mobroSelectors";

const StyledCoreWrapper = styled.div`
  display: flex;
`;
const StyledCoreCountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    height: 50px;
    display: flex;
    background-color: ${(props) => props.theme.dark};
  }
`;

export const CpuUsage: FunctionComponent = () => {
  const [usage, setUsage] = useState(0);
  const coreCount = useSelector(processorCoreCountSelector);
  const cpuCoreCreator = () =>
    [...new Array(coreCount)].map((value, index) => (
      <div key={index}>Core</div>
    ));

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.PROCESSOR.USAGE,
      (data) => {
        setUsage(data.payload.value);
      }
    );
  }, []);

  return (
    <StyledCoreWrapper>
      <StyledCoreCountWrapper>{cpuCoreCreator()}</StyledCoreCountWrapper>
      {usage}%
    </StyledCoreWrapper>
  );
};
