import React, { MouseEvent, useState, FunctionComponent } from "react";
import styled from "styled-components";

interface ToggleProps {
  onClick?: any;
  checked?: boolean;
}

interface SwitchProps {
  checked: boolean;
}

const StyledWrapper = styled.label`
  display: flex;
  width: 120px;
  height: 60px;
  overflow: hidden;
  border-radius: 60px;
  background-color: ${(props) => props.theme.background};
  padding: 5px;
`;
const StyledInput = styled.input`
  display: none;
`;

const StyledSwitch = styled.div<SwitchProps>`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.green};
  transition: transform 300ms ease-in-out;
  transform: ${(props) =>
    props.checked ? `translateX(60px)` : `translateX(0)`};
`;

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
      <StyledSwitch checked={checked} />
    </StyledWrapper>
  );
};

export { Toggle };
