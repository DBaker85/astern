import React, { MouseEvent, useState, FunctionComponent } from "react";
import { StyledInput, StyledSwitch, StyledWrapper } from "./toggle.style";

export interface ToggleProps {
  onClick?: any;
  checked?: boolean;
  height?: number;
}

const Toggle: FunctionComponent<ToggleProps> = ({
  onClick,
  checked = false,
  children,
  height = 60,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleClick = (event: MouseEvent) => {
    setIsChecked(!isChecked);
    onClick(event);
  };

  return (
    <StyledWrapper height={height}>
      <StyledInput
        type="checkbox"
        checked={isChecked}
        readOnly
        onClick={handleClick}
      />
      <StyledSwitch checked={isChecked} height={height}>
        {children}
      </StyledSwitch>
    </StyledWrapper>
  );
};

export { Toggle };
