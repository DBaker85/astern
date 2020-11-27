import React from "react";
export const withContainer = (Story) => (
  <div style={{ width: "360px", padding: "20px" }}>
    <Story />
  </div>
);
