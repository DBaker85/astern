import styled from "styled-components";
import { WindowSize } from "../../store/moBro/mobroSlice";

export type StyledMainContainerProps = {
  windowSize: WindowSize;
  columns: boolean;
};

export const StyledMainContainer = styled.div<StyledMainContainerProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .stats-wrapper {
    height: 95%;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .stats-group {
    width: ${(props) => {
      if (props.columns) {
        return props.windowSize.width > props.windowSize.height
          ? "50%"
          : "100%";
      } else {
        return "100%";
      }
    }};
    height: ${(props) => {
      if (props.columns) {
        return props.windowSize.width > props.windowSize.height
          ? "100%"
          : "50%";
      } else {
        return "100%";
      }
    }};
    display: grid;
    grid-template-columns: calc(50% - 1.5vw) 50%;
    grid-template-rows: repeat(3, calc((100% - 3vw) / 3));
    gap: 1.5vw;
    padding: 1.5vw;
  }
  .footer {
    height: 5%;
    padding: 0 1.5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${(props) => props.theme.dark};
    .logo {
      display: flex;
    }
  }
`;
