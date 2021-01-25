import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Button as UiButton, darken, ButtonProps } from "@material-ui/core";

const StyledButton = styled(UiButton)`
  ${({ theme }) => `
  background-color: ${theme.dark};
  color: ${theme.light};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 10px;
  font-size: 13px;
  &:hover {
    background-color: ${darken(theme.dark, 0.2)};
  }

  `}
`;

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  startIcon,
}) => {
  return <StyledButton startIcon={startIcon}>{children}</StyledButton>;
};
