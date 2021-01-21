import styled from "styled-components";

interface SwitchProps {
  checked: boolean;
}

export const StyledWrapper = styled.label`
  display: flex;
  width: 120px;
  height: 60px;
  overflow: hidden;
  border-radius: 60px;
  background-color: ${(props) => props.theme.dark};
  padding: 5px;
  cursor: pointer;
`;
export const StyledInput = styled.input`
  display: none;
`;

export const StyledSwitch = styled.div<SwitchProps>`
  display: flex;
  width: 50px;
  height: 50px;

  border-radius: 50px;
  background-color: ${(props) => props.theme.green};
  transition: transform 400ms cubic-bezier(0.68, -0.55, 0.27, 1.4);
  transform: ${(props) =>
    props.checked ? `translateX(60px)` : `translateX(0)`};
`;
