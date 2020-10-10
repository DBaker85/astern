import React, { FunctionComponent, useEffect, useState } from "react";
// import { useEffect, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchHardwarelist,
  setMobroInit,
  setSettings,
} from "../../store/moBro/mobroSlice";
import { RootStateType } from "../../store";
import { Loader } from "../loader/Loader";
import { Cpu } from "../cpu/Cpu";

export const Main: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { init } = useSelector((state: RootStateType) => state.moBro);

  useEffect(() => {
    const start = async () => {
      if (!window.MobroSDK.initialized) {
        await window.MobroSDK.init();
        dispatch(setMobroInit(true));
        dispatch(setSettings(window.MobroSDK.helper.settings));
      }
      dispatch(fetchHardwarelist());
    };
    start();
  }, []);

  if (!init) return <Loader />;

  return <Cpu />;
};
