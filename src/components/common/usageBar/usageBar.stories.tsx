import React from "react";
import { Story, Meta } from "@storybook/react";
import { withContainer } from "../../../../.storybook/decorators";

import { dark as theme } from "../../../styles/theme";

import { UsageBar, BarChartProps } from "./usageBar";

const Template: Story<BarChartProps> = (args) => <UsageBar {...args} />;

export default {
  title: "Components/Usage/Bar",
  component: UsageBar,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: theme.dark }}>
        <Story />
      </div>
    ),
    withContainer,
  ],
  argTypes: {
    value: {
      description: "Ram usage in %",
    },
    used: {
      description: "Ram used",
    },
    total: {
      description: "Total available Ram",
    },
    unit: {
      description: "Unit of measure to display",
    },
  },
} as Meta;

export const Default = Template.bind({});

Default.args = {
  value: 50,
  used: 8,
  total: 16,
  unit: "GB",
};
