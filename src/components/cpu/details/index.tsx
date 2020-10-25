import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { processorNameSelector } from "../../../store/moBro/mobroSelectors";
import { channels } from "../../../config/themeChannels";

export const CpuDetails: FunctionComponent = () => {
  const name = useSelector(processorNameSelector);
  const [clock, setClock] = useState("0");
  useEffect(() => {
    window.MobroSDK.addChannelListener(channels.PROCESSOR.CLOCK, (data) => {
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
