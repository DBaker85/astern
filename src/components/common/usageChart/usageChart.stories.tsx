import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";
import { withContainer } from "../../../../.storybook/decorators";
import { UsageChart, usageChartProps } from "./usageChart";
import { UsageType, arrayUpdater } from "../../common/usageChart/utils";

const Template: Story<usageChartProps> = (args) => {
  const [usageData, setUsageData] = useState<UsageType[]>([]);
  useEffect(() => {
    const int = setInterval(() => {
      setUsageData((usageArray) =>
        arrayUpdater(usageArray, Math.random() * 100)
      );
    }, 1000);
    return () => clearInterval(int);
  }, []);

  return <UsageChart {...args} usage={usageData} />;
};

export default {
  title: "Components/Usage/Chart",
  component: UsageChart,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "300px",
          display: "block",
          border: "1px solid DarkSlateGray",
        }}
      >
        <Story />
      </div>
    ),
    withContainer,
  ],
  argTypes: {
    usage: {
      description: "Unit of measure to display",
      control: null,
    },
  },
} as Meta;

export const Default = Template.bind({});

Default.args = {
  usage: [],
};
