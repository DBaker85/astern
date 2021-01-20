import React, { MouseEvent, useState, FunctionComponent } from "react";
import { StyledInput, StyledSwitch, StyledWrapper } from "./toggle.style";

export interface ToggleProps {
  onClick?: any;
  checked?: boolean;
}

const Toggle: FunctionComponent<ToggleProps> = ({
  onClick,
  checked = false,
  children,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleClick = (event: MouseEvent) => {
    setIsChecked(!isChecked);
    onClick(event);
  };

  return (
    <StyledWrapper>
      <StyledInput
        type="checkbox"
        checked={isChecked}
        readOnly
        onClick={handleClick}
      />
      <StyledSwitch checked={isChecked}>{children}</StyledSwitch>
    </StyledWrapper>
  );
};

export { Toggle };
