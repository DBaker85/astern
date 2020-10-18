import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {
  processorLimitsSelector,
  processorNameSelector,
  tempAsFarenHeightSelector,
} from "../../store/moBro/mobroSelectors";
import { channels } from "../../config/themeChannels";

import { TemperatureChart } from "../common/temperatureChart";

export const StyledCpuWrapper = styled.div`
  display: flex;
  div {
    width: 50%;
  }
`;

export const Cpu: FunctionComponent = () => {
  const farenheight = useSelector(tempAsFarenHeightSelector);
  const name = useSelector(processorNameSelector);
  const { warning, critical, max } = useSelector(processorLimitsSelector);

  const [clock, setClock] = useState("0");
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.PROCESSOR.TEMPERATURE,
      (data) => {
        setTemperature(data.payload.value);
      }
    );
    window.MobroSDK.addChannelListener(channels.PROCESSOR.CLOCK, (data) => {
      setClock((data.payload.value / 1000).toFixed(2));
    });
  }, []);
  return (
    <StyledCpuWrapper>
      <div>
        {name}
        <div>{clock}ghz</div>
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
    </StyledCpuWrapper>
  );
};
