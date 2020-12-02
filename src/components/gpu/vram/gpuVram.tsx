import React, { FunctionComponent, useEffect, useState } from "react";

import { channels } from "../../../config/themeChannels";
import { Card } from "../../common/card/card";
import { UsageBar } from "../../common/usageBar/usageBar";

export const GpuVram: FunctionComponent = () => {
  const name = "Vram";

  const [usage, setUsage] = useState(0);
  const [ramTotal, setRamTotal] = useState(0);
  const [ram, setRam] = useState(0);

  useEffect(() => {
    window.MobroSDK.addChannelListener(channels.GRAPHICS.VRAM, (data) => {
      setRam(data.payload.value / 1000);
    });
    window.MobroSDK.addChannelListener(channels.GRAPHICS.VRAM_TOTAL, (data) => {
      setRamTotal(data.payload.value / 1000);
    });
    window.MobroSDK.addChannelListener(
      channels.GRAPHICS.VRAM_PERCENTAGE,
      (data) => {
        setUsage(data.payload.value);
      }
    );
  }, []);
  return (
    <Card title={name}>
      <UsageBar value={usage} used={ram} total={ramTotal} unit={"GB"} />
    </Card>
  );
};
