import React, { FunctionComponent } from "react";

import { StyledFullLogo } from "./logo.style";

export const FullLogo: FunctionComponent = () => (
  <StyledFullLogo viewBox="0 0 47 20">
    <text fontSize="16px" x="0" y="12">
      <tspan className="ast">ast</tspan>
      <tspan className="ern">ern</tspan>
    </text>
    <text fontSize="7px" x="0" y="19">
      f<tspan className="ast">ast</tspan> and mod
      <tspan className="ern">ern</tspan>
    </text>
  </StyledFullLogo>
);
