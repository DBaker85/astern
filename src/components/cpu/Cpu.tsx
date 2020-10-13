import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  processorLimitsSelector,
  processorNameSelector,
} from "../../store/moBro/mobroSelectors";
import { channels } from "../../config/themeChannels";

import { Donut } from "../common/Donut";

export const Cpu: FunctionComponent = () => {
  const { warning, critical, max } = useSelector(processorLimitsSelector);
  const name = useSelector(processorNameSelector);
  const [usage, setUsage] = useState(0);
  const [clock, setClock] = useState(0);
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.PROCESSOR.USAGE,
      (data) => {
        setUsage(data.payload.value);
      }
    );
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
    <>
      <div>
        {/* cpu temp : {temperature} | cpu usage : {usage}% | {clock}ghz */}
        {name}
      </div>
      <div>
        <Donut
          value={temperature}
          warning={warning}
          critical={critical}
          max={max}
        />
      </div>
    </>
  );
};
