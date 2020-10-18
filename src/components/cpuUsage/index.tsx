import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled, { IntrinsicElementsKeys } from "styled-components";

import { processorCoreCountSelector } from "../../store/moBro/mobroSelectors";

const StyledCoreWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const StyledCoreCountWrapper = styled.div<{ coreCount: number }>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.coreCount},1fr)`};

  grid-column-gap: 10px;
  width: 100%;
  height: 100%;
  div {
    background-color: ${(props) => props.theme.dark};
  }
`;

export const CpuUsage: FunctionComponent = () => {
  const [usage, setUsage] = useState(0);
  const coreCount = useSelector(processorCoreCountSelector);
  const cpuCoreCreator = () =>
    [...new Array(coreCount)].map((value, index) => <div key={index} />);

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
      <StyledCoreCountWrapper coreCount={coreCount}>
        {cpuCoreCreator()}
      </StyledCoreCountWrapper>
      {/* {usage}% */}
    </StyledCoreWrapper>
  );
};
