import styled, { css } from "styled-components";

export const StyledLogo = styled.div`
  display: flex;
  .ast {
    color: ${(props) => props.theme.yellow};
    text-transform: uppercase;
  }
  .ern {
    color: ${(props) => props.theme.red};
    text-transform: uppercase;
  }
`;

export const StyledFullLogo = styled.svg`
  fill: ${(props) => props.theme.light};
  .ast {
    fill: ${(props) => props.theme.yellow};
    text-transform: uppercase;
  }
  .ern {
    fill: ${(props) => props.theme.red};
    text-transform: uppercase;
  }
`;
