import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { TemperatureChart, TemperatureChartProps } from "./temperatureChart";

const Template: Story<TemperatureChartProps> = (args) => (
  <TemperatureChart {...args} />
);

export default {
  title: "Common/Temperature",
  component: TemperatureChart,
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
