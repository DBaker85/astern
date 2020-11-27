import React from "react";
import { Story, Meta } from "@storybook/react";
import { withContainer } from "../../../../.storybook/decorators";

import { Card, CardType } from "./card";

const Template: Story<CardType> = (args) => <Card {...args}>Content</Card>;

export default {
  title: "Common/Card",
  component: Card,
  decorators: [withContainer],
  argTypes: {
    className: {
      control: null,
    },
  },
} as Meta;

export const Default = Template.bind({});

Default.args = {
  title: "Title goes here",
};
