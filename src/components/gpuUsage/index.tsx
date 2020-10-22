import React, { useEffect, useState } from "react";

import { channels } from "../../config/themeChannels";
import { BarChart } from "../common/barChart";

import { StyledGpuWrapper } from "./style";

export const GpuUsage = () => {
  const [usage, setUsage] = useState(0);
  const [vram, setVram] = useState(0);
  const [vramTotal, setVramTotal] = useState(0);

  const percentage = Math.ceil((vram / vramTotal) * 100);

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
      <BarChart progress={usage} text={`${usage}%`} />
      <BarChart
        progress={percentage}
        text={`${vram}mb used of ${vramTotal}mb`}
      />
    </StyledGpuWrapper>
  );
};
