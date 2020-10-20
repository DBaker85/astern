import styled from "styled-components";

export const StyledLogo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  .ast {
    color: ${(props) => props.theme.yellow};
  }
  .tern {
    color: ${(props) => props.theme.red};
  }
`;
