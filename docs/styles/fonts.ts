/// <reference path='../../src/fonts.d.ts'/>

import { css } from "styled-components";
import Oswald from "../../assets/fonts/Oswald-Medium.ttf";

export const fonts = css`
  @font-face {
    font-family: "Oswald-Medium";
    font-style: normal;
    font-weight: 400;
    src: local("Oswald-Medium"), url(${Oswald}) format("truetype");
  }
`;
