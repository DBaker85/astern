import React from "react";
import { Story, Meta } from "@storybook/react";
import { withContainer } from "../../../../.storybook/decorators";

import { UsageChart, UsageChartProps } from "./usageChart";

const Template: Story<UsageChartProps> = (args) => <UsageChart {...args} />;

export default {
  title: "Common/Usage/Chart",
  component: UsageChart,
  decorators: [withContainer],
  argTypes: {
    width: {
      description: "Ram usage in %",
    },
    height: {
      description: "Ram used",
    },
    margin: {
      description: "Total available Ram",
      control: null,
    },
    usageArray: {
      description: "Unit of measure to display",
      control: null,
    },
  },
} as Meta;

export const Default = Template.bind({});

Default.args = {
  width: 380,
  height: 200,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  usageArray: [
    {
      time:
        "Fri Nov 27 2020 22:38:49 GMT+0100 (Central European Standard Time)",
      usage: 10,
    },
    {
      time:
        "Fri Nov 27 2020 22:38:50 GMT+0100 (Central European Standard Time)",
      usage: 10,
    },
    {
      time:
        "Fri Nov 27 2020 22:38:51 GMT+0100 (Central European Standard Time)",
      usage: 30,
    },
    {
      time:
        "Fri Nov 27 2020 22:38:52 GMT+0100 (Central European Standard Time)",
      usage: 70,
    },
    {
      time:
        "Fri Nov 27 2020 22:38:53 GMT+0100 (Central European Standard Time)",
      usage: 90,
    },
    {
      time:
        "Fri Nov 27 2020 22:38:54 GMT+0100 (Central European Standard Time)",
      usage: 90,
    },
    {
      time:
        "Fri Nov 27 2020 22:38:55 GMT+0100 (Central European Standard Time)",
      usage: 20,
    },
    {
      time:
        "Fri Nov 27 2020 22:38:56 GMT+0100 (Central European Standard Time)",
      usage: 20,
    },
    {
      time:
        "Fri Nov 27 2020 22:38:57 GMT+0100 (Central European Standard Time)",
      usage: 10,
    },
    {
      time:
        "Fri Nov 27 2020 22:38:58 GMT+0100 (Central European Standard Time)",
      usage: 5,
    },
    {
      time:
        "Fri Nov 27 2020 22:38:59 GMT+0100 (Central European Standard Time)",
      usage: 2,
    },
    {
      time:
        "Fri Nov 27 2020 22:39:00 GMT+0100 (Central European Standard Time)",
      usage: 1,
    },
    {
      time:
        "Fri Nov 27 2020 22:39:01 GMT+0100 (Central European Standard Time)",
      usage: 1,
    },
  ],
};
