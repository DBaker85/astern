import React from "react";
import { Story, Meta } from "@storybook/react";

import { customViewports } from "../../../../.storybook/preview";

import { Loader } from "./loader";

const Template: Story = () => <Loader />;

export default {
  title: "Pages/Loader",
  component: Loader,
  parameters: {
    layout: "fullscreen",
    viewport: {
      // the viewports you want to use
      viewports: customViewports,
      // your own default viewport
      defaultViewport: "largeScreen",
    },
  },
} as Meta;

export const Default = Template.bind({});
