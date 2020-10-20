import React, { useEffect, useState } from "react";

import { channels } from "../../config/themeChannels";

import styled from "styled-components";

export const StyledGpuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GpuUsage = () => {
  const [usage, setUsage] = useState(0);
  const [vram, setVram] = useState(0);
  const [vramTotal, setVramTotal] = useState(0);

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.GRAPHICS.USAGE,
      (data) => {
        setUsage(data.payload.value);
      }
    );
    window.MobroSDK.addChannelListener(channels.GRAPHICS.VRAM, (data) => {
      setVram(Math.ceil(data.payload.value));
    });
    window.MobroSDK.addChannelListener(channels.GRAPHICS.VRAM_TOTAL, (data) => {
      setVramTotal(data.payload.value);
    });
  });

  return (
    <StyledGpuWrapper>
      <div>{usage}%</div>
      <div>
        {vram}mb used of {vramTotal}mb
      </div>
    </StyledGpuWrapper>
  );
};
