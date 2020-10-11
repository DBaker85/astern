import React, { FunctionComponent, useEffect, useState } from "react";
// import { useEffect, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";

import { initMobroClient } from "../../store/moBro/mobroSlice";
import { initSelector } from "../../store/moBro/mobroSelectors";

import { Loader } from "../loader/Loader";
import { Cpu } from "../cpu/Cpu";

export const Main: FunctionComponent = () => {
  const dispatch = useDispatch();
  const init = useSelector(initSelector);

  useEffect(() => {
    dispatch(initMobroClient());
  }, []);

  if (!init) return <Loader />;

  return <Cpu />;
};
