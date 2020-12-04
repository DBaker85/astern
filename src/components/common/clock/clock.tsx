import React, { FunctionComponent, useEffect, useState } from "react";

export const Clock: FunctionComponent = () => {
  const [time, setTime] = useState(new Date());
  const [dots, setDots] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(() => new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <span>{time.getHours()}</span>
      <span style={{ opacity: dots ? 1 : 0 }}>:</span>
      <span>{time.getMinutes().toString().padStart(2, "0")}</span>
    </div>
  );
};
