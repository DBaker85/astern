import React from "react";
import { Story, Meta } from "@storybook/react";
import { withContainer } from "../../../../.storybook/decorators";

import { FullLogo } from "./fullLogo";

const Template: Story = () => <FullLogo />;

export default {
  title: "Common/Logo/Full",
  component: FullLogo,
  decorators: [withContainer],
} as Meta;

export const Default = Template.bind({});
