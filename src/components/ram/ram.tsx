import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { totalRamSelector } from "../../store/moBro/mobroSelectors";
import { UsageBar } from "../common/usageBar/usageBar";
import { Card } from "../common/card/card";

export const RamUsage = () => {
  const [usage, setUsage] = useState(0);
  const [ram, setRam] = useState(0);
  const ramTotal = useSelector(totalRamSelector);

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
        setRam(data.payload.value);
      }
    );
  });

  return (
    <Card title="Ram">
      <UsageBar value={usage} used={ram} total={ramTotal} unit={"GB"} />
    </Card>
  );
};
