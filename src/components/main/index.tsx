import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "../common/card";
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
      <Card title="Cpu">
        <Cpu />
      </Card>

      <Card title="Gpu">
        <Gpu />
      </Card>
      <Card title="Cpu usage">
        <CpuUsage />
      </Card>
      <Card title="Gpu usage">
        <GpuUsage />
      </Card>
      <Card title="Ram usage">
        <RamUsage />
      </Card>
      <Logo />
    </StyledMainWrapper>
  );
};
