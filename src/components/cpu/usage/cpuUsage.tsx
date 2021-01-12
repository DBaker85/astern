import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { processorNameSelector } from "../../../store/moBro/mobroSelectors";

import { Card } from "../../common/card/card";
import { UsageChart } from "../../common/usageChart/usageChart";
import { UsageType, arrayUpdater } from "../../common/usageChart/utils";
export const CpuUsage: FunctionComponent = () => {
  const [usageArray, setUsageArray] = useState<UsageType[]>([]);
  const name = useSelector(processorNameSelector);

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.PROCESSOR.USAGE,
      (data) => {
        setUsageArray((usageArray) =>
          arrayUpdater(usageArray, data.payload.value)
        );
      }
    );
  }, []);

  return (
    <Card title={name} gridColumnEnd="span 2">
      <UsageChart usage={usageArray} />
    </Card>
  );
};
