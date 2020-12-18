import React, { useEffect, useState, VFC } from "react";
import { Story, Meta } from "@storybook/react";
import { customViewports } from "../../../.storybook/preview";

import { useWindowSize } from "../../hooks";

import { Main } from "./main";
import { StyledMainContainer } from "./main.style";
import { Card } from "../common/card/card";
import { Logo } from "../common/logo/logo";
import { TemperatureChart } from "../common/temperatureChart/temperatureChart";
import { UsageBar } from "../common/usageBar/usageBar";
import { UsageChart } from "../common/usageChart/usageChart";
import { Clock } from "../common/clock/clock";

const Template: Story<{}> = () => {
  const [usageData, setUsageData] = useState(0);
  const windowSize = useWindowSize();

  useEffect(() => {
    const int = setInterval(() => {
      setUsageData(Math.random() * 50);
    }, 1000);
    return () => clearInterval(int);
  }, []);

  return (
    <StyledMainContainer windowSize={windowSize}>
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
        <div className="stats-group">
          <Card title="GTX 3070">2.12GHZ</Card>
          <Card title="GTX 3070" gridRowEnd="span 2">
            <TemperatureChart value={60} max={110} critical={90} warning={70} />
          </Card>
          <Card title="Vram">
            <UsageBar value={20} total={10} used={2} unit="GB" />
          </Card>
          <Card title="GTX 3070" gridColumnEnd="span 2">
            <UsageChart usage={usageData} />
          </Card>
        </div>
      </div>
      <footer className="footer">
        <Clock />
        <Logo />
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
};

export const Default = Template.bind({});
