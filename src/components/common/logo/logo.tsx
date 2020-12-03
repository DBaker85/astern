import React, { FunctionComponent } from "react";

import { StyledLogo } from "./logo.style";

export const Logo: FunctionComponent = () => (
  <StyledLogo>
    <span className="ast">AST</span>
    <span className="tern">ERN</span> v{process.env.APP_VERSION}
  </StyledLogo>
);
