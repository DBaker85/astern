import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { StyledCard } from "../common/card";
import { initMobroClient } from "../../store/moBro/mobroSlice";
import { initSelector } from "../../store/moBro/mobroSelectors";

import { Loader } from "../loader";
import { Cpu } from "../cpu";
import { Gpu } from "../gpu";
import { CpuUsage } from "../cpuUsage";
import { Logo } from "../logo";

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3fr 1fr 1fr;
  gap: 20px;
`;

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
