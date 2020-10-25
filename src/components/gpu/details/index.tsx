import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { gpuNameSelector } from "../../../store/moBro/mobroSelectors";
import { channels } from "../../../config/themeChannels";

export const GpuDetails: FunctionComponent = () => {
  const name = useSelector(gpuNameSelector);

  const [clock, setClock] = useState("0");

  useEffect(() => {
    window.MobroSDK.addChannelListener(channels.GRAPHICS.CLOCK, (data) => {
      setClock((data.payload.value / 1000).toFixed(2));
    });
  }, []);
  return (
    <div>
      {name}
      <div>{clock}ghz</div>
    </div>
  );
};
