import React, { FunctionComponent } from "react";

import { StyledCard } from "./card.style";

export interface CardType {
  title?: string;
  className?: string;
}

export const Card: FunctionComponent<CardType> = ({
  title,
  children,
  className,
}) => (
  <StyledCard className={className}>
    {title && <span className="title">{title}</span>}
    <div className="content">{children}</div>
  </StyledCard>
);
