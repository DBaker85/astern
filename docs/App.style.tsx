import styled, { createGlobalStyle, css } from "styled-components";
import { globalStyle } from "../src/styles";
import { fonts } from "./styles/fonts";

export const globalDocsStyle = css`
  ${globalStyle}
  ${fonts}
  body {
    font-size: 20px !important;
  }
`;

export const GlobalStyle = createGlobalStyle`${globalDocsStyle}`;

export const StyledMain = styled.div`
  background: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
`;
