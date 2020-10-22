import React, { useEffect, useState } from "react";

import { BarChart } from "../common/barChart";
import { StyledRamWrapper } from "./style";

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
      <BarChart progress={usage} text={`${ram}gb used`} />
    </StyledRamWrapper>
  );
};
