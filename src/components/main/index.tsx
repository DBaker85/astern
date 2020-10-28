import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { initMobroClient } from "../../store/moBro/mobroSlice";
import { initSelector } from "../../store/moBro/mobroSelectors";

import { Loader } from "../loader";

import { CpuTemperature, CpuUsage, CpuDetails } from "../cpu";

import { GpuDetails, GpuUsage, GpuTemperature } from "../gpu";

import { RamUsage } from "../ramUsage";

import { Logo } from "../logo";
import { StyledMainWrapper } from "./style";

export const Main: FunctionComponent = () => {
  const dispatch = useDispatch();
  const init = useSelector(initSelector);

  useEffect(() => {
    dispatch(initMobroClient());
  }, []);

  if (!init) return <Loader />;

  return (
    <StyledMainWrapper>
      <CpuDetails />
      <CpuTemperature />
      <GpuDetails />
      <GpuTemperature />
      <RamUsage />
      <GpuDetails />

      <CpuUsage />
      <GpuUsage />
      <Logo />
    </StyledMainWrapper>
  );
};
