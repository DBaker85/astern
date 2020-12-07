import styled from "styled-components";

export const StyledMainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .stats-wrapper {
    height: 95%;
    display: flex;
    width: 100%;
    padding: 1.5vw;
  }
  .stats-group {
    width: 49%;
    display: grid;
    grid-template-columns: 47% 50%;
    grid-template-rows: repeat(3, 30%);
    gap: 1.5vw;
  }
  .stats-group + .stats-group {
    margin-left: 1.5%;
  }
  .footer {
    height: 5%;
    padding: 0 1.5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${(props) => props.theme.dark};
  }
`;
