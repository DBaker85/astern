import React, { useEffect, useState } from "react";

import styled from "styled-components";

export const StyledRamWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RamUsage = () => {
  const [usage, setUsage] = useState(0);
  const [ram, setRam] = useState(0);
  const [ramTotal, setRamTotal] = useState(0);

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.MEMORY.USAGE,
      (data) => {
        setUsage(data.payload.value);
      }
    );
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.MEMORY.USED,
      (data) => {
        setRam(Math.ceil(data.payload.value));
      }
    );
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.MEMORY.AVAILABLE,
      (data) => {
        setRamTotal(data.payload.value);
      }
    );
  });

  return (
    <StyledRamWrapper>
      <div>{usage}%</div>
      <div>{ram}gb used</div>
    </StyledRamWrapper>
  );
};
