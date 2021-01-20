import React from "react";
import { Story, Meta } from "@storybook/react";
import { withContainer } from "../../../.storybook/decorators";

import { Toggle, ToggleProps } from "./toggle";

const Template: Story<ToggleProps> = (args) => (
  <Toggle {...args} onClick={() => null} />
);

export default {
  title: "Docs/Components/Toggle",
  component: Toggle,
  decorators: [withContainer],
  argTypes: {
    checked: {
      description:
        "Starting state of toggle. This does not control the checked state, only the starting position",
    },
    onClick: {
      description:
        "The toggle only works if there is a corresponding onClick handler attached.",
      controls: null,
    },
  },
} as Meta;

export const Default = Template.bind({});

Default.args = {
  checked: false,
};
