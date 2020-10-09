import { css } from "styled-components";
import { reset } from "./reset";
import { global } from "./global";
import { fonts } from "./fonts";

export const globalStyle = css`
  ${reset}
  ${fonts}
  ${global}
`;
