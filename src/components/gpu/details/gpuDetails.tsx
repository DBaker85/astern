import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { gpuNameSelector } from "../../../store/moBro/mobroSelectors";
import { channels } from "../../../config/themeChannels";
import { Card } from "../../common/card/card";

export const GpuDetails: FunctionComponent = () => {
  const name = useSelector(gpuNameSelector);

  const [clock, setClock] = useState("0");

  useEffect(() => {
    window.MobroSDK.addChannelListener(channels.GRAPHICS.CLOCK, (data) => {
      setClock((data.payload.value / 1000).toFixed(2));
    });
  }, []);
  return <Card title={name}>{clock}ghz</Card>;
};
