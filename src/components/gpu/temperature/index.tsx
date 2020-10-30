import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {
  gpuLimitsSelector,
  tempAsFarenHeightSelector,
  gpuNameSelector,
} from "../../../store/moBro/mobroSelectors";

import { TemperatureChart } from "../../common/temperatureChart/temperatureChart";
import { Card } from "../../common/card/card";

const StyledTempCard = styled(Card)`
  grid-row: span 2;
`;

export const GpuTemperature: FunctionComponent = () => {
  const farenheight = useSelector(tempAsFarenHeightSelector);
  const name = useSelector(gpuNameSelector);
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
    <StyledTempCard title={name}>
      <TemperatureChart
        value={temperature}
        warning={warning}
        critical={critical}
        max={max}
        farenheight={farenheight}
      />
    </StyledTempCard>
  );
};
