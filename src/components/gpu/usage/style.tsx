import styled from "styled-components";

export const StyledGpuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
