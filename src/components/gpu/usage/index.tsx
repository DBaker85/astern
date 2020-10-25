import React, { useEffect, useState } from "react";

import { channels } from "../../../config/themeChannels";
import { BarChart } from "../../common/barChart";

import { StyledGpuWrapper } from "./style";

export const GpuUsage = () => {
  const [usage, setUsage] = useState(0);
  const [vram, setVram] = useState(0);
  const [vramTotal, setVramTotal] = useState(0);
  const [vramPercentage, setVramPercentage] = useState(0);

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
    window.MobroSDK.addChannelListener(
      channels.GRAPHICS.VRAM_PERCENTAGE,
      (data) => {
        setVramPercentage(data.payload.value);
      }
    );
  });

  return (
    <StyledGpuWrapper>
      <BarChart progress={usage} text={`${usage}%`} />
      <BarChart
        progress={vramPercentage}
        text={`${vram}mb used of ${vramTotal}mb`}
      />
    </StyledGpuWrapper>
  );
};
