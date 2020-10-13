import { css } from "styled-components";
import AbelRegular from "url:../assets/fonts/Abel-regular.woff2";

export const fonts = css`
  @font-face {
    font-family: "Abel-Regular";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Abel-Regular"), url(${AbelRegular}) format("woff2");
  }
`;
