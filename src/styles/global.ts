import { css } from "styled-components";

// prettier-ignore
export const global = css`
* {
  box-sizing: border-box;
}
body {
  font-family: 'Abel-Regular';
  font-size:2.4vw;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  width: 100vw;
  height: 100vh;
}
`
