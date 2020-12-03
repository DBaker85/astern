import React from "react";
import { Story, Meta } from "@storybook/react";
import { withContainer } from "../../../../.storybook/decorators";

import { Clock } from "./clock";

const Template: Story = () => <Clock />;

export default {
  title: "Common/Clock",
  component: Clock,
  decorators: [withContainer],
} as Meta;

export const Default = Template.bind({});
