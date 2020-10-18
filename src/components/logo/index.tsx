import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  .ast {
    color: ${(props) => props.theme.yellow};
  }
  .tern {
    color: ${(props) => props.theme.red};
  }
`;

export const Logo: FunctionComponent = () => (
  <StyledLogo>
    <span className="ast">AST</span>
    <span className="tern">ERN</span> v{process.env.APP_VERSION}
  </StyledLogo>
);
