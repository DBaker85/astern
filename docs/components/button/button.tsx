import React, { FunctionComponent, forwardRef } from "react";
import styled from "styled-components";
import { Button as UiButton, darken, ButtonProps } from "@material-ui/core";

const StyledButton = styled(UiButton)`
  ${({ theme }) => `
  background-color: ${theme.text};
  color: ${theme.background};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 8px 20px;
  font-size: 20px;
  font-family: 'Abel-Regular';
  text-decoration: none;
  &:hover {
    background-color: ${darken(theme.text, 0.2)};
    text-decoration: none;
  };
  `}
`;

export const Button: FunctionComponent<ButtonProps> = forwardRef(
  ({ children, ...rest }, ref) => {
    return (
      <StyledButton ref={ref} {...rest}>
        {children}
      </StyledButton>
    );
  }
);
