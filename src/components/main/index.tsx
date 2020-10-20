import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { StyledCard } from "../common/StyledCard";
import { initMobroClient } from "../../store/moBro/mobroSlice";
import { initSelector } from "../../store/moBro/mobroSelectors";

import { Loader } from "../loader";
import { Cpu } from "../cpu";
import { Gpu } from "../gpu";
import { CpuUsage } from "../cpuUsage";
import { Logo } from "../logo";

import { MainWrapper } from "./style";

export const Main: FunctionComponent = () => {
  const dispatch = useDispatch();
  const init = useSelector(initSelector);

  useEffect(() => {
    dispatch(initMobroClient());
  }, []);

  if (!init) return <Loader />;

  return (
    <MainWrapper>
      <StyledCard>
        <Cpu />
      </StyledCard>

      <StyledCard>
        <Gpu />
      </StyledCard>
      <StyledCard>
        <CpuUsage />
      </StyledCard>

      <Logo />
    </MainWrapper>
  );
};
