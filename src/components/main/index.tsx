import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StyledCard } from "../common/card";
import { initMobroClient } from "../../store/moBro/mobroSlice";
import { initSelector } from "../../store/moBro/mobroSelectors";

import { Loader } from "../loader";
import { Cpu } from "../cpu";
import { Gpu } from "../gpu";
import { CpuUsage } from "../cpuUsage";
import { Logo } from "../logo";

import { StyledMainWrapper } from "./style";
import { GpuUsage } from "../gpuUsage";
import { RamUsage } from "../ramUsage";

export const Main: FunctionComponent = () => {
  const dispatch = useDispatch();
  const init = useSelector(initSelector);

  useEffect(() => {
    dispatch(initMobroClient());
  }, []);

  if (!init) return <Loader />;

  return (
    <StyledMainWrapper>
      <StyledCard>
        <Cpu />
      </StyledCard>

      <StyledCard>
        <Gpu />
      </StyledCard>
      <StyledCard>
        <CpuUsage />
      </StyledCard>
      <StyledCard>
        <GpuUsage />
      </StyledCard>
      <StyledCard>
        <RamUsage />
      </StyledCard>
      <Logo />
    </StyledMainWrapper>
  );
};
