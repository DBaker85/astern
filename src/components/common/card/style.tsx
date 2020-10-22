import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  .title {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0.7em;
  }
`;
