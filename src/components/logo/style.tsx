import styled from "styled-components";

export const StyledLogo = styled.div`
  display: flex;
  position: fixed;
  bottom: 1vh;
  right: 1vw;

  .ast {
    color: ${(props) => props.theme.yellow};
  }
  .tern {
    color: ${(props) => props.theme.red};
  }
`;
