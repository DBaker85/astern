import React from "react";
import { Story, Meta } from "@storybook/react";
import { withContainer } from "../../../../.storybook/decorators";

import { TemperatureChart, TemperatureChartProps } from "./temperatureChart";

const Template: Story<TemperatureChartProps> = (args) => (
  <TemperatureChart {...args} />
);

export default {
  title: "Common/Temperature",
  component: TemperatureChart,
  decorators: [withContainer],
  argTypes: {
    farenheight: {
      description: "Convert °C values to °F",
    },
    value: {
      description: "Temperature value in °C",
    },
    warning: {
      description: "Set the warning temperature value in °C",
    },
    critical: {
      description: "Set the critical temperature value in °C",
    },
    max: {
      description: "Set the max temperature value in °C",
    },
  },
} as Meta;

export const Default = Template.bind({});

Default.args = {
  farenheight: false,
  value: 50,
  warning: 70,
  critical: 90,
  max: 100,
};
