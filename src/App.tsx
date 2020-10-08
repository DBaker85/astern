import { h, FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import styled from "styled-components";

import { Loader } from "./components/loader/Loader";
import { Cpu } from "./components/cpu/Cpu";

const H1 = styled.h1`
  font-weight: 600;
`;

export const App: FunctionComponent = () => {
  const [mobroInit, setMobroInit] = useState(false);

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
