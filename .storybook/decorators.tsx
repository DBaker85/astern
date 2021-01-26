import React from "react";
import { Story } from "@storybook/react";
import { StylesProvider } from "@material-ui/core/styles";

export const withContainer = (Story: Story) => (
  <div style={{ width: "360px", padding: "20px" }}>
    <Story />
  </div>
);

export const withDocsContainer = (Story: Story) => (
  <StylesProvider injectFirst>
    <div style={{ width: "360px", padding: "20px" }}>
      <Story />
    </div>
  </StylesProvider>
);
