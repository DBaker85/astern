import styled, { createGlobalStyle } from "styled-components";
import { globalStyle } from "../src/styles";

export const GlobalStyle = createGlobalStyle`${globalStyle}`;

export const StyledToggleWrapper = styled.div`
  display: flex;
  padding: 20px;
  justify-content: flex-end;
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  padding: 60px;
  height: 300px;
  justify-content: center;
  background-color: ${(props) => props.theme.dark};
  svg {
    height: 100%;
    width: auto;
  }
`;

export const StyledMainWrapper = styled.div`
  display: flex;
  padding: 40px;
  div {
    width: 50%;
  }
`;
