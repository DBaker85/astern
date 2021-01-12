import React, { FunctionComponent } from "react";

import { StyledLoader } from "./loader.style";
import { FullLogo } from "../logo/fullLogo";

export const Loader: FunctionComponent = () => (
  <StyledLoader>
    <div className="logo">
      <FullLogo />
    </div>
    <div className="loading">Loading...</div>
  </StyledLoader>
);
