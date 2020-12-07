import React from "react";
import { Story } from "@storybook/react";

export const withContainer = (Story: Story) => (
  <div style={{ width: "360px", padding: "20px" }}>
    <Story />
  </div>
);
