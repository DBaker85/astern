import React from "react";
import { Story, Meta } from "@storybook/react";
import { withContainer } from "../../../../.storybook/decorators";

import { TextLogo } from "./logo";

const Template: Story = () => <TextLogo />;

export default {
  title: "Common/Logo/Text-Logo",
  component: TextLogo,
  decorators: [withContainer],
} as Meta;

export const Default = Template.bind({});
