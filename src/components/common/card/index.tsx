import React, { FunctionComponent } from "react";

import { StyledCard } from "./style";

interface CardType {
  title?: string;
}

export const Card: FunctionComponent<CardType> = ({ title, children }) => (
  <StyledCard>
    <div className="title">{title}</div>
    {children}
  </StyledCard>
);
