import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  processorLimitsSelector,
  processorNameSelector,
  tempAsFarenHeightSelector,
} from "../../store/moBro/mobroSelectors";
import { channels } from "../../config/themeChannels";

import { TemperatureChart } from "../common/temperatureChart";

export const Cpu: FunctionComponent = () => {
  const farenheight = useSelector(tempAsFarenHeightSelector);
  const name = useSelector(processorNameSelector);
  const { warning, critical, max } = useSelector(processorLimitsSelector);

  const [clock, setClock] = useState(0);
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.PROCESSOR.TEMPERATURE,
      (data) => {
        setTemperature(data.payload.value);
      }
    );
    window.MobroSDK.addChannelListener(channels.PROCESSOR.CLOCK, (data) => {
      setClock(data.payload.value / 1000);
    });
  }, []);
  return (
    <div>
      {name}
      <div>{clock}ghz</div>
      <div>
        <TemperatureChart
          value={temperature}
          warning={warning}
          critical={critical}
          max={max}
          farenheight={farenheight}
        />
      </div>
    </div>
  );
};
