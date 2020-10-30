import React, { FunctionComponent } from "react";

import { StyledBar } from "./barChart.style";

interface BarChartType {
  text: String;
  progress: number;
}

export const BarChart: FunctionComponent<BarChartType> = ({
  text,
  progress,
}) => (
  <StyledBar progress={progress}>
    <div className="progress" style={{ width: `${progress}%` }}></div>
    <div className="text">{text}</div>
  </StyledBar>
);
