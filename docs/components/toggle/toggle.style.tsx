import styled from "styled-components";

interface SwitchProps {
  checked: boolean;
  height?: number;
}

export const StyledWrapper = styled.label<{ height: number }>`
  display: flex;
  width: ${(props) => `${props.height * 2}px`};
  height: ${(props) => `${props.height}px`};
  overflow: hidden;
  border-radius: ${(props) => `${props.height}px`};
  background-color: ${(props) => props.theme.background};
  align-items: center;
  padding: ${(props) => `${(props.height - props.height / 1.2) / 2}px`};
  cursor: pointer;
`;
export const StyledInput = styled.input`
  display: none;
`;

export const StyledSwitch = styled.div<SwitchProps>`
  display: flex;
  width: ${(props) => `${props.height / 1.2}px`};
  height: ${(props) => `${props.height / 1.2}px`};

  border-radius: ${(props) => `${props.height / 1.2}px`};
  background-color: ${(props) => props.theme.green};
  transition: transform 400ms cubic-bezier(0.68, -0.55, 0.27, 1.4);
  transform: ${(props) =>
    props.checked ? `translateX(${props.height}px)` : `translateX(0)`};
`;
