import React, { MouseEvent, useState, FunctionComponent } from "react";
import {
  StyledInput,
  StyledSwitch,
  StyledWrapper,
  StyledBase,
  StyledCutout,
} from "./toggle.style";

interface ToggleProps {
  onClick?: any;
  checked?: boolean;
}

const Toggle: FunctionComponent<ToggleProps> = ({
  onClick,
  checked = false,
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
        defaultChecked={checked}
        onClick={handleClick}
      />
      <StyledSwitch checked={checked}>
        <svg viewBox="0 0 42 42" width="100%" height="100%">
          <StyledBase cx="21" cy="21" r="18" moon={checked} />
          <StyledCutout cx="17" cy="17" r="14" moon={checked} />
        </svg>
      </StyledSwitch>
    </StyledWrapper>
  );
};

export { Toggle };
