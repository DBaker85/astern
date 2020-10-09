import React, { FunctionComponent, useEffect, useState } from "react";
// import { useEffect, useState } from "preact/hooks";
import { useDispatch } from "react-redux";

import { fetchHardwarelist } from "../../store/hardware/hardwareSlice";
import { Loader } from "../loader/Loader";
import { Cpu } from "../cpu/Cpu";

export const Main: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [mobroInit, setMobroInit] = useState(false);

  useEffect(() => {
    const start = async () => {
      dispatch(fetchHardwarelist());
      setMobroInit(true);
    };
    start();
  }, []);

  if (!mobroInit) return <Loader />;

  return <Cpu />;
};
