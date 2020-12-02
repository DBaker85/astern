import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  processorLimitsSelector,
  tempAsFarenHeightSelector,
  processorNameSelector,
} from "../../../store/moBro/mobroSelectors";

import { TemperatureChart } from "../../common/temperatureChart/temperatureChart";
import { Card } from "../../common/card/card";

export const CpuTemperature: FunctionComponent = () => {
  const farenheight = useSelector(tempAsFarenHeightSelector);
  const name = useSelector(processorNameSelector);
  const { warning, critical, max } = useSelector(processorLimitsSelector);

  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.PROCESSOR.TEMPERATURE,
      (data) => {
        setTemperature(data.payload.value);
      }
    );
  }, []);
  return (
    <Card title={name}>
      <TemperatureChart
        value={temperature}
        warning={warning}
        critical={critical}
        max={max}
        farenheight={farenheight}
      />
    </Card>
  );
};
