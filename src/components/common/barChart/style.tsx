import styled from "styled-components";

export const StyledBar = styled.div<{ progress: number }>`
  display: flex;
  position: relative;
  width: 100%;
  height: 40%;
  background-color: ${(props) => props.theme.darkBackground};
  .progress {
    display: flex;
    height: 100%;
    width: ${(props) => props.progress};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .text {
    display: flex;
    height: 100%;
    justify-content: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
`;
