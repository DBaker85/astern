import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 0.7em;
  }
  .content {
    font-size: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
`;
