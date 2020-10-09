import React, { FunctionComponent, useEffect, useState } from "react";
// import { useEffect, useState } from "preact/hooks";

import { HardwareList } from "../../sdk/types";
import { Loader } from "../loader/Loader";
import { Cpu } from "../cpu/Cpu";

export const Main: FunctionComponent = () => {
  const [mobroInit, setMobroInit] = useState(false);
  const [hardwareList, setHardwareList] = useState(true);

  useEffect(() => {
    const start = async () => {
      await window.MobroSDK.init();
      const hardware = (await window.MobroSDK.emit(
        "monitor:data"
      )) as HardwareList;
      console.log(JSON.stringify(hardware));
      setMobroInit(true);
    };
    start();
  }, []);

  if (!mobroInit) return <Loader />;

  return <Cpu />;
};
