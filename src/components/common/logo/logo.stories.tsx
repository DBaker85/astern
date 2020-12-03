import React from "react";
import { Story, Meta } from "@storybook/react";
import { withContainer } from "../../../../.storybook/decorators";

import { Logo } from "./logo";

const Template: Story = () => <Logo />;

export default {
  title: "Common/Logo",
  component: Logo,
  decorators: [withContainer],
} as Meta;

export const Default = Template.bind({});
