import { h, FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

export const Cpu: FunctionComponent = () => {
  const [temperature, setTemperature] = useState(0);
  const [usage, setUsage] = useState(0);
  const [clock, setClock] = useState(0);

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.PROCESSOR.USAGE,
      (data) => {
        setUsage(data.payload.value);
      }
    );
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.PROCESSOR.TEMPERATURE,
      (data) => {
        setTemperature(data.payload.value);
      }
    );
    window.MobroSDK.addChannelListener("theme_clock_cpu", (data) => {
      setClock(data.payload.value / 1000);
    });
  }, []);
  return (
    <div>
      cpu temp : {temperature} | cpu usage : {usage}% | {clock}ghz
    </div>
  );
};
