import { h, FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

import { Loader } from "../loader/Loader";
import { Cpu } from "../cpu/Cpu";

export const Main: FunctionComponent = () => {
  const [mobroInit, setMobroInit] = useState(false);
  const [hardwareList, setHardwareList] = useState(true);

  useEffect(() => {
    const start = async () => {
      await window.MobroSDK.init();
      const hardware = await window.MobroSDK.emit("monitor:data");
      setMobroInit(true);
    };
    start();
  }, []);

  if (!mobroInit) return <Loader />;

  return <Cpu />;
};
