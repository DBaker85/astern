import React, { FunctionComponent } from "react";

import { StyledBar } from "./style";

interface BarChartType {
  text: String;
  progress: number;
}

export const BarChart: FunctionComponent<BarChartType> = ({
  text,
  progress,
}) => (
  <StyledBar progress={progress}>
    <div className="progress"></div>
    <div className="text">{text}</div>
  </StyledBar>
);
