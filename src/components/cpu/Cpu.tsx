import React, { FunctionComponent, useEffect, useState } from "react";
// import styled from 'styled-components';

// import { useEffect, useState } from "preact/hooks";

import { Donut } from "../common/Donut";

export const Cpu: FunctionComponent = () => {
  const [temperature, setTemperature] = useState(0);

  const [usage, setUsage] = useState(0);
  const [clock, setClock] = useState(0);

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
    window.MobroSDK.addChannelListener("theme_cpu_clock", (data) => {
      setClock(data.payload.value / 1000);
    });
  }, []);
  return (
    <>
      <div>
        {/* cpu temp : {temperature} | cpu usage : {usage}% | {clock}ghz */}
      </div>
      <div>
        <Donut value={temperature} />
      </div>
    </>
  );
};
