import React, { FunctionComponent } from "react";

import { StyledContent } from "../../components/content/content.style";
import { StyledHeading } from "../../components/heading/heading.style";
import { StyledList } from "../../components/list/list.style";

import {
  analyticsEvent,
  eventActions,
  eventCategories,
} from "../../utils/analytics/analytics";

export const Installation: FunctionComponent = () => {
  const handleOnCLick = () => {
    analyticsEvent({
      action: eventActions.clicked("extra instructions"),
      category: eventCategories.user,
    });
  };
  return (
    <StyledContent>
      <StyledHeading as={"h2"}>Installation</StyledHeading>

      <p>On Windows:</p>
      <StyledList>
        <li>
          Navigate to
          C:\Users\[username]\AppData\Local\MoBro\app-[version-number]\resources\resources\public\theme
        </li>
        <li>Extract the all contents of the package there</li>
        <li>Restart MoBro server on your machine.</li>
        <li>The Theme should now be available</li>
      </StyledList>
      <p>
        For more detailed instructions{" "}
        <a
          onClick={handleOnCLick}
          target="_blank"
          href="https://www.mod-bros.com/en/blog/b/configure-themes~916"
        >
          click here
        </a>
      </p>
    </StyledContent>
  );
};
