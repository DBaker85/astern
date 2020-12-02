import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  processorCoreCountSelector,
  processorNameSelector,
} from "../../../store/moBro/mobroSelectors";
import { Card } from "../../common/card/card";
import { UsageChart } from "../../common/usageChart/usageChart";

export const CpuUsage: FunctionComponent = () => {
  const name = useSelector(processorNameSelector);
  const [usage, setUsage] = useState(0);

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.PROCESSOR.USAGE,
      (data) => {
        setUsage(Math.round(data.payload.value));
      }
    );
  }, []);

  return (
    <Card title={name}>
      <UsageChart usage={usage} />
    </Card>
  );
};
