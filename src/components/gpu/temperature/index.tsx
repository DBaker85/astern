import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  gpuLimitsSelector,
  tempAsFarenHeightSelector,
} from "../../../store/moBro/mobroSelectors";

import { TemperatureChart } from "../../common/temperatureChart";
import { StyledCard } from "../../common/card";

export const GpuTemperature: FunctionComponent = () => {
  const farenheight = useSelector(tempAsFarenHeightSelector);
  const { warning, critical, max } = useSelector(gpuLimitsSelector);

  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.GRAPHICS.TEMPERATURE,
      (data) => {
        setTemperature(data.payload.value);
      }
    );
  }, []);
  return (
    <StyledCard>
      <TemperatureChart
        value={temperature}
        warning={warning}
        critical={critical}
        max={max}
        farenheight={farenheight}
      />
    </StyledCard>
  );
};
