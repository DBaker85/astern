import styled from "styled-components";

export const StyledMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, calc(25vh - 26px));
  gap: 20px;
`;
