import React, { useEffect, useState, VFC } from "react";
import { Story, Meta } from "@storybook/react";
import debounce from "lodash.debounce";

import { customViewports } from "../../../.storybook/preview";

import { Main } from "./main";
import { StyledMainContainer } from "./main.style";
import { Card } from "../common/card/card";
import { TextLogo } from "../common/logo/logo";
import { TemperatureChart } from "../common/temperatureChart/temperatureChart";
import { UsageBar } from "../common/usageBar/usageBar";
import { UsageChart } from "../common/usageChart/usageChart";
import { UsageType, arrayUpdater } from "../common/usageChart/utils";
import { Clock } from "../common/clock/clock";

const initialData: UsageType[] = [];

for (let index = -100; index < 0; index++) {
  const time = new Date();

  const dataPoint: UsageType = {
    usage: Math.random() * 60,
    time: new Date(time.setSeconds(time.getSeconds() + index)),
  };
  initialData.push(dataPoint);
}

const Template: Story<{ hasGpu: boolean }> = (args) => {
  const [usageData, setUsageData] = useState<UsageType[]>(initialData);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const int = setInterval(() => {
      setUsageData((usageArray) =>
        arrayUpdater(usageArray, Math.random() * 60)
      );
    }, 1000);
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const debouncedResize = debounce(handleResize, 200);

    // Add event listener
    window.addEventListener("resize", debouncedResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();
    return () => clearInterval(int);
  }, []);

  return (
    <StyledMainContainer windowSize={windowSize} columns={args.hasGpu}>
      <div className="stats-wrapper">
        <div className="stats-group">
          <Card title="Intel 8700k">4.80GHZ</Card>
          <Card title="Intel 8700k" gridRowEnd="span 2">
            <TemperatureChart value={50} max={100} critical={90} warning={70} />
          </Card>
          <Card title="Ram">
            <UsageBar value={20} total={16} used={3.2} unit="GB" />
          </Card>
          <Card title="Intel 8700k" gridColumnEnd="span 2">
            <UsageChart usage={usageData} />
          </Card>
        </div>
        {args.hasGpu && (
          <div className="stats-group">
            <Card title="GTX 3070">2.12GHZ</Card>
            <Card title="GTX 3070" gridRowEnd="span 2">
              <TemperatureChart
                value={60}
                max={110}
                critical={90}
                warning={70}
              />
            </Card>
            <Card title="Vram">
              <UsageBar value={20} total={10} used={2} unit="GB" />
            </Card>
            <Card title="GTX 3070" gridColumnEnd="span 2">
              <UsageChart usage={usageData} />
            </Card>
          </div>
        )}
      </div>
      <footer className="footer">
        <Clock />
        <div className="logo">
          <TextLogo />v{process.env.APP_VERSION}
        </div>
      </footer>
    </StyledMainContainer>
  );
};

export default {
  title: "Pages/Main",
  component: Main,
  parameters: {
    layout: "fullscreen",
    viewport: {
      // the viewports you want to use
      viewports: customViewports,
      // your own default viewport
      defaultViewport: "largeScreen",
    },
  },
  argTypes: {
    hasGpu: {
      name: "Toggle GPU",
      description:
        "Toggle if there is a GPU present. This is for demo purposes only and is handled automatically in the theme.",
    },
  },
} as Meta;

export const Default = Template.bind({});

Default.args = {
  hasGpu: true,
};
