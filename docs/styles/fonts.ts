/// <reference path='../../src/fonts.d.ts'/>

import { css } from "styled-components";
import Roboto from "../../assets/fonts/Roboto-Light.ttf";

export const fonts = css`
  @font-face {
    font-family: "Roboto-Light";
    font-style: normal;
    font-weight: 400;
    src: local("Roboto-Light"), url(${Roboto}) format("truetype");
  }
`;
