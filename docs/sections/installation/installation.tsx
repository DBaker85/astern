import React, { FunctionComponent } from "react";

import { StyledContent } from "../../components/content/content.style";
import { StyledHeading } from "../../components/heading/heading.style";

export const Installation: FunctionComponent = () => (
  <StyledContent>
    <StyledHeading as={"h2"}>Installation</StyledHeading>
    {`
windows

- Navigate to C:\Users\<username>\AppData\Local\MoBro\app-<version-number>\resources\resources\public\theme
- Extract the all contents of the package there
- Restart MoBro server on your machine.
- The Theme should now be available

For more detailed instructions [click here](https://www.mod-bros.com/en/blog/b/configure-themes~916)
`}
  </StyledContent>
);
