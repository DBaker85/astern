import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {
  gpuLimitsSelector,
  gpuNameSelector,
  tempAsFarenHeightSelector,
} from "../../store/moBro/mobroSelectors";

import { channels } from "../../config/themeChannels";

import { TemperatureChart } from "../common/temperatureChart";

export const StyledGpuWrapper = styled.div`
  display: flex;
  div {
    width: 50%;
  }
`;

export const Gpu: FunctionComponent = () => {
  const farenheight = useSelector(tempAsFarenHeightSelector);
  const { warning, critical, max } = useSelector(gpuLimitsSelector);
  const name = useSelector(gpuNameSelector);
  const [usage, setUsage] = useState(0);
  const [clock, setClock] = useState("0");
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
      setClock((data.payload.value / 1000).toFixed(2));
    });
  }, []);
  return (
    <StyledGpuWrapper>
      <div>
        {name}
        <div>
          Gpu usage : {usage}% | {clock}ghz
        </div>
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
    </StyledGpuWrapper>
  );
};
