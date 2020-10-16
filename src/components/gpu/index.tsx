import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  gpuLimitsSelector,
  gpuNameSelector,
  tempAsFarenHeightSelector,
} from "../../store/moBro/mobroSelectors";

import { channels } from "../../config/themeChannels";

import { TemperatureChart } from "../common/temperatureChart";

export const Gpu: FunctionComponent = () => {
  const farenheight = useSelector(tempAsFarenHeightSelector);
  const { warning, critical, max } = useSelector(gpuLimitsSelector);
  const name = useSelector(gpuNameSelector);
  const [usage, setUsage] = useState(0);
  const [clock, setClock] = useState(0);
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.GRAPHICS.USAGE,
      (data) => {
        setUsage(data.payload.value);
      }
    );
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.GRAPHICS.TEMPERATURE,
      (data) => {
        setTemperature(data.payload.value);
      }
    );
    window.MobroSDK.addChannelListener(channels.GRAPHICS.CLOCK, (data) => {
      setClock(data.payload.value / 1000);
    });
  }, []);
  return (
    <div>
      {name}
      <div>
        Gpu usage : {usage}% | {clock}ghz
      </div>
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
