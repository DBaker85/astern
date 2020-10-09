import { h, FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

import { Loader } from "./components/loader/Loader";
import { Cpu } from "./components/cpu/Cpu";

export const App: FunctionComponent = () => {
  const [mobroInit, setMobroInit] = useState(true);

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
