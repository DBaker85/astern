import React, { FunctionComponent } from "react";

import { StyledLoader } from "./loader.style";
import { Logo } from "../logo/logo";

export const Loader: FunctionComponent = () => (
  <StyledLoader>
    <Logo />
    <div>fAST and modERN</div>
    <div>Loading</div>
  </StyledLoader>
);
