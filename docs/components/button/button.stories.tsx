import React from "react";
import { Story, Meta } from "@storybook/react";
import { withDocsContainer } from "../../../.storybook/decorators";

import { Button } from "./button";

const Template: Story = () => <Button>Button</Button>;

export default {
  title: "Docs/Components/Button",
  component: Button,
  decorators: [withDocsContainer],
} as Meta;

export const Default = Template.bind({});
