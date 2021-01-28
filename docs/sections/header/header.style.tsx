import styled from "styled-components";

export const StyledHeader = styled.header`
  background: ${(props) => props.theme.dark};
  display: flex;
  justify-content: center;
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    padding: 20px;
  }
`;

export const StyledToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: auto;
    width: 30vw;
    max-width: 300px;
  }
`;
