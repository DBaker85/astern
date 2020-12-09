import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { gpuNameSelector } from "../../../store/moBro/mobroSelectors";

import { Card } from "../../common/card/card";

import { UsageChart } from "../../common/usageChart/usageChart";

export const GpuUsage = () => {
  const [usage, setUsage] = useState(0);

  const name = useSelector(gpuNameSelector);

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.GRAPHICS.USAGE,
      (data) => {
        setUsage(Math.round(data.payload.value));
      }
    );
  }, []);

  return (
    <Card title={name} gridColumnEnd="span 2">
      <UsageChart usage={usage} />
    </Card>
  );
};
