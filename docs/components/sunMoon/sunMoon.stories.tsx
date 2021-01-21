import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { withContainer } from "../../../.storybook/decorators";

import { SunMoon, SunMoonType } from "./sunMoon";

const Template: Story<SunMoonType> = (args) => {
  const [isMoon, setIsMoon] = useState(false);
  return (
    <div
      onClick={() => {
        setIsMoon((isMoon) => !isMoon);
      }}
    >
      <SunMoon {...args} moon={isMoon} />
    </div>
  );
};

export default {
  title: "Docs/Components/SunMoon",
  component: SunMoon,
  decorators: [withContainer],
  argTypes: {
    moon: {
      description: "Change the icon to a moon",
    },
    backgroundColor: {
      control: "color",
    },
    sunColor: {
      control: "color",
    },
    moonColor: {
      control: "color",
    },
  },
} as Meta;

export const Default = Template.bind({});

Default.args = {
  moon: false,
  backgroundColor: "hsl(184, 20%, 34%)",
  sunColor: "hsl(42, 100%, 60%)",
  moonColor: "hsl(42, 100%, 91%)",
};
