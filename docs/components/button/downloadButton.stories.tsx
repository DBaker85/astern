import React from "react";
import { Story, Meta } from "@storybook/react";
import { withDocsContainer } from "../../../.storybook/decorators";

import { DownloadButton } from "./downloadButton";

const Template: Story = () => (
  <DownloadButton
    version="1.0.0"
    subtext="For use with version 1x to 1.3x of modbro server"
  />
);

export default {
  title: "Docs/Components/DownloadButton",
  component: DownloadButton,
  decorators: [withDocsContainer],
} as Meta;

export const Default = Template.bind({});
