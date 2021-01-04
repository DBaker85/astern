import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { initMobroClient } from "../../store/moBro/mobroSlice";
import {
  initSelector,
  windowSizeSelector,
  hasGpuSelector,
} from "../../store/moBro/mobroSelectors";

import { CpuTemperature, CpuUsage, CpuDetails } from "../cpu";
import { GpuDetails, GpuUsage, GpuTemperature, GpuVram } from "../gpu";
import { RamUsage } from "../ram/ram";
import { Logo } from "../common/logo/logo";
import { Loader } from "../common/loader/loader";
import { Clock } from "../common/clock/clock";

import { StyledMainContainer } from "./main.style";

export const Main: FunctionComponent = () => {
  const dispatch = useDispatch();
  const init = useSelector(initSelector);
  const hasGpu = useSelector(hasGpuSelector);
  const windowSize = useSelector(windowSizeSelector);
  console.log(hasGpu);
  useEffect(() => {
    dispatch(initMobroClient());
  }, []);

  if (!init) return <Loader />;

  return (
    <StyledMainContainer windowSize={windowSize} columns={hasGpu}>
      <div className="stats-wrapper">
        <div className="stats-group">
          <CpuDetails />
          <CpuTemperature />
          <RamUsage />
          <CpuUsage />
        </div>
        {hasGpu && (
          <div className="stats-group">
            <GpuDetails />
            <GpuTemperature />
            <GpuVram />
            <GpuUsage />
          </div>
        )}
      </div>
      <footer className="footer">
        <Clock />
        <Logo />
      </footer>
    </StyledMainContainer>
  );
};
