import styled from "styled-components";

export const StyledHeading = styled.h1`
  font-family: "Oswald-Medium";
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: 1px;
  border-style: solid;
  text-transform: uppercase;
  font-size: 1.8em;
  border-color: ${(props) => props.theme.green};
`;
