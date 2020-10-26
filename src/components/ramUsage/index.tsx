import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { totalRamSelector } from "../../store/moBro/mobroSelectors";
import { BarChart } from "../common/barChart";
import { Card } from "../common/card";

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
        setRam(Math.ceil(data.payload.value));
      }
    );
  });

  return (
    <Card>
      <BarChart progress={usage} text={`${ram}gb used of ${ramTotal}`} />
    </Card>
  );
};
