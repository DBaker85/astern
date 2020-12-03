import React, { useEffect, useState, VFC } from "react";
import { Story, Meta } from "@storybook/react";
import { Main } from "./main";
import { StyledMainContainer } from "./main.style";
import { Card } from "../common/card/card";
import { Logo } from "../logo/logo";
import { TemperatureChart } from "../common/temperatureChart/temperatureChart";
import { UsageBar } from "../common/usageBar/usageBar";
import { UsageChart } from "../common/usageChart/usageChart";

const Template: Story<{}> = () => {
  const [usageData, setUsageData] = useState(0);
  useEffect(() => {
    const int = setInterval(() => {
      setUsageData(Math.random() * 100);
    }, 1000);
    return () => clearInterval(int);
  }, []);

  return (
    <StyledMainContainer>
      <div className="stats-wrapper">
        <div className="stats-group">
          <Card title="Intel 8700k">4.80GHZ</Card>
          <Card title="Intel 8700k">
            <TemperatureChart value={50} max={100} critical={90} warning={70} />
          </Card>
          <Card title="Ram">
            <UsageBar value={20} total={16} used={3.2} unit="GB" />
          </Card>
          <Card title="Intel 8700k">
            <UsageChart usage={usageData} />
          </Card>
        </div>
        <div className="stats-group">
          <Card title="GTX 3070">4.80GHZ</Card>
          <Card title="GTX 3070">
            <TemperatureChart value={50} max={100} critical={90} warning={70} />
          </Card>
          <Card title="Vram">
            <UsageBar value={20} total={10} used={2} unit="GB" />
          </Card>
          <Card title="GTX 3070">
            <UsageChart usage={usageData} />
          </Card>
        </div>
      </div>
      <footer className="footer">
        19:30
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
  },
};

export const Default = Template.bind({});
