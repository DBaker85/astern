import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { initMobroClient } from "../../store/moBro/mobroSlice";
import { initSelector } from "../../store/moBro/mobroSelectors";

import { Loader } from "../loader/Loader";
import { Cpu } from "../cpu/Cpu";
import { Gpu } from "../gpu/Gpu";

export const Main: FunctionComponent = () => {
  const dispatch = useDispatch();
  const init = useSelector(initSelector);

  useEffect(() => {
    dispatch(initMobroClient());
  }, []);

  if (!init) return <Loader />;

  return (
    <>
      <Cpu />
      <Gpu />
    </>
  );
};
