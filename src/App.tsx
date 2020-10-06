import { h } from "preact";
import styled from "styled-components";

const H1 = styled.h1`
  font-weight: 600;
`;

export const App = () => {
  return <H1>Hello from Preact and Typescript ya!</H1>;
};
