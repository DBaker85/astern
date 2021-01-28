import React, { FunctionComponent } from "react";

import { StyledContent } from "../../components/content/content.style";
import { StyledHeading } from "../../components/heading/heading.style";

export const Motivation: FunctionComponent = () => (
  <StyledContent>
    <StyledHeading as={"h2"}>Motivation</StyledHeading>I wanted this theme to be
    modern and show some relevant stats like Core clock and Gpu stats but also
    very easy to run on less capable hardware.
  </StyledContent>
);
