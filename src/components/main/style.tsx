import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: calc(50vh - 26px) calc(25vh - 26px) calc(25vh - 26px);
  gap: 20px;
`;
