import styled from "styled-components";

export const StyledLogo = styled.div`
  display: flex;

  .ast {
    color: ${(props) => props.theme.yellow};
  }
  .tern {
    color: ${(props) => props.theme.red};
  }
`;
