import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { withContainer } from "../../../.storybook/decorators";

import { Toggle, ToggleProps } from "./toggle";
import { SunMoon } from "../sunMoon/sunMoon";

const Template: Story<ToggleProps> = (args) => {
  const [isMoon, setIsMoon] = useState(false);
  return (
    <div>
      <Toggle {...args} onClick={() => null} />
      <br />
      <Toggle
        {...args}
        onClick={() => {
          setIsMoon((isMoon) => !isMoon);
        }}
      >
        <SunMoon {...args} moon={isMoon} />
      </Toggle>
    </div>
  );
};

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
      control: null,
    },
  },
} as Meta;

export const Default = Template.bind({});

Default.args = {
  checked: false,
};
