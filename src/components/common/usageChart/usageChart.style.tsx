import styled from "styled-components";

export const StyledChartContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledChartWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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
  color: ${(props) => props.theme.text};

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
      background-color: ${(props) => props.theme.dark};
      opacity: 0.6;
    }
  }
`;
