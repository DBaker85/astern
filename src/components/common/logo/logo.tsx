import React, { FunctionComponent } from "react";

import { StyledLogo } from "./logo.style";

export const TextLogo: FunctionComponent<{ className?: string }> = ({
  className,
}) => (
  <StyledLogo className={className}>
    <span className="ast">ast</span>
    <span className="ern">ern</span>
  </StyledLogo>
);
