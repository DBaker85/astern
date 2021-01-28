import React, { FunctionComponent } from "react";

import { StyledContent } from "../../components/content/content.style";
import { StyledHeading } from "../../components/heading/heading.style";

export const Performance: FunctionComponent = () => (
  <StyledContent className="split">
    <div>
      <StyledHeading as={"h2"}>Performance</StyledHeading>| Board | 15min load
      avg | | --------------- | -------------- | | Raspberry pi 3B | 0.60 ~ 15%
      | | Raspberry pi A+ | |
    </div>
  </StyledContent>
);
