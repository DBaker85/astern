import styled, { createGlobalStyle, css } from "styled-components";
import { globalStyle } from "../src/styles";
import { fonts } from "./styles/fonts";

export const globalDocsStyle = css`
  ${globalStyle}
  ${fonts}
`;

export const GlobalStyle = createGlobalStyle`${globalDocsStyle}`;

export const StyledToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: auto;
    width: 30vw;
    max-width: 300px;
  }
`;

export const StyledHeader = styled.header`
  background: ${(props) => props.theme.dark};
  display: flex;
  justify-content: center;
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    padding: 20px;
  }
`;
export const StyledMain = styled.div`
  background: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
`;

export const StyledContent = styled.div`
  width: 100%;
  max-width: 1024px;
  display: grid;
  gap: 20px;
  grid-template-columns: 100%;
  padding: 0 20px;
  ${StyledMain} &.split {
    grid-template-columns: 60% 40%;
  }
`;

export const StyledHeading = styled.h1`
  font-family: "Roboto-Light";
  padding: 20px 0 10px 0;
  border-bottom: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.green};
`;
