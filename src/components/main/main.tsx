import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { initMobroClient } from "../../store/moBro/mobroSlice";
import { initSelector } from "../../store/moBro/mobroSelectors";

import { Loader } from "../loader/loader";

import { CpuTemperature, CpuUsage, CpuDetails } from "../cpu";

import { GpuDetails, GpuUsage, GpuTemperature, GpuVram } from "../gpu";

import { RamUsage } from "../ram/ram";

import { Logo } from "../logo/logo";
import { StyledMainContainer } from "./main.style";

export const Main: FunctionComponent = () => {
  const dispatch = useDispatch();
  const init = useSelector(initSelector);

  useEffect(() => {
    dispatch(initMobroClient());
  }, []);

  if (!init) return <Loader />;

  return (
    <StyledMainContainer>
      <div className="stats-wrapper">
        <div className="stats-group">
          <CpuDetails />
          <CpuTemperature />
          <RamUsage />
          <CpuUsage />
        </div>
        <div className="stats-group">
          <GpuDetails />
          <GpuTemperature />

          <GpuVram />

          <GpuUsage />
        </div>
      </div>
      <footer className="footer">
        19:30
        <Logo />
      </footer>
    </StyledMainContainer>
  );
};
