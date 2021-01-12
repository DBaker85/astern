import { css } from "styled-components";
import AbelRegular from "../assets/fonts/Abel-Regular.woff2";

export const fonts = css`
  @font-face {
    font-family: "Abel-Regular";
    font-style: normal;
    font-weight: 400;
    src: local("Abel-Regular"), url(${AbelRegular}) format("woff2");
  }
`;
