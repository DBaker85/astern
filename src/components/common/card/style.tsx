import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  display: grid;
  .title {
    display: flex;
    position: absolute;
    top: 2px;
    left: 10px;
    font-size: 0.5em;
  }
`;
