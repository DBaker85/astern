import styled from "styled-components";

import { StyledCard } from "../../common/card";

export const StyledCoreWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;
export const StyledCoreCountWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
  column-gap: 10px;
  row-gap: 10px;
  width: 100%;
  height: 100%;
  div {
    background-color: ${(props) => props.theme.dark};
  }
`;
export const StyledUsage = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.light};

  div {
    padding: 10px;
    position: relative;
    z-index: 2;
    &::before {
      border-radius: 6px;
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      display: flex;
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.darkBackground};
      opacity: 0.8;
    }
  }
`;
export const StyledCore = styled.div<{ usage: number }>`
  position: relative;
  display: flex;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.dark};
  height: 100%;
  position: relative;
  div {
    background-color: ${(props) => props.theme.green};
    height: ${(props) => props.usage}%;
    width: 100%;
    display: flex;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

export const StyledUsageCard = styled(StyledCard)`
  grid-column: span 2;
`;
