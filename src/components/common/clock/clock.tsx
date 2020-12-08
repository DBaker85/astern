import React, { FunctionComponent, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 49%, 100% {
    opacity: 1;
  }

  60%, 99% {
    opacity: 0;
  }
  
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Dots = styled.span`
  animation: ${blink} 1s linear infinite;
`;

export const Clock: FunctionComponent = () => {
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      setHour(currentTime.getHours().toString().padStart(2, "0"));
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
