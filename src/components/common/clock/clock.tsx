import React, { FunctionComponent, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
  
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Dots = styled.span`
  animation: ${blink} 1s linear infinite;
`;

export const Clock: FunctionComponent = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState("00");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      setHour(currentTime.getHours());
      setMinute(currentTime.getMinutes().toString().padStart(2, "0"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <span>{hour}</span>
      <Dots>:</Dots>
      <span>{minute}</span>
    </div>
  );
};
