import React, { FunctionComponent } from "react";

import { StyledLoader } from "./style";

export const Loader: FunctionComponent = () => (
  <StyledLoader>
    <div className="title">Loading</div>
    <div>Connecting to server</div>
    <div>Getting hardware configuration</div>
  </StyledLoader>
);
