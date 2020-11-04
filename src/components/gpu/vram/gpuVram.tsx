import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";

import { channels } from "../../../config/themeChannels";
import { Card } from "../../common/card/card";
import { UsageBar } from "../../common/usageBar/usageBar";

const StyledVramCard = styled(Card)`
  grid-column-start: 4;
`;

export const GpuVram: FunctionComponent = () => {
  const name = "Vram";

  const [usage, setUsage] = useState(0);
  const [ramTotal, setRamTotal] = useState(0);
  const [ram, setRam] = useState(0);

  useEffect(() => {
    window.MobroSDK.addChannelListener(channels.GRAPHICS.VRAM, (data) => {
      setRam(Math.ceil(data.payload.value / 1000));
    });
    window.MobroSDK.addChannelListener(channels.GRAPHICS.VRAM_TOTAL, (data) => {
      setRamTotal(Math.ceil(data.payload.value / 1000));
    });
    window.MobroSDK.addChannelListener(
      channels.GRAPHICS.VRAM_PERCENTAGE,
      (data) => {
        setUsage(data.payload.value);
      }
    );
  }, []);
  return (
    <StyledVramCard title={name}>
      <UsageBar value={usage} used={ram} total={ramTotal} unit={"GB"} />
    </StyledVramCard>
  );
};
