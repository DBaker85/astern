import styled from "styled-components";

export const StyledMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 30px 1fr 1fr;
  grid-template-rows: repeat(3, calc(33vh - 14px));
  gap: 5px;
`;
