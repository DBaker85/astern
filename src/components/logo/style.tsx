import styled from "styled-components";

export const StyledLogo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  grid-column-start: 5;
  .ast {
    color: ${(props) => props.theme.yellow};
  }
  .tern {
    color: ${(props) => props.theme.red};
  }
`;
