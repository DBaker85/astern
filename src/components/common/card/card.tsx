import React, { FunctionComponent } from "react";

import { StyledCard } from "./card.style";

export interface CardType {
  title: string;
  className?: string;
  gridColumnStart?: string;
  gridColumnEnd?: string;
  gridRowStart?: string;
  gridRowEnd?: string;
}

export const Card: FunctionComponent<CardType> = ({
  title,
  children,
  className,
  gridColumnStart = "auto",
  gridColumnEnd = "auto",
  gridRowStart = "auto",
  gridRowEnd = "auto",
}) => (
  <StyledCard
    className={className}
    style={{
      gridColumnStart,
      gridColumnEnd,
      gridRowStart,
      gridRowEnd,
    }}
  >
    {title && <span className="title">{title}</span>}
    <div className="content">{children}</div>
  </StyledCard>
);
