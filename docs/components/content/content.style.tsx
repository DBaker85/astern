import styled from "styled-components";

export const StyledContent = styled.div`
  width: 100%;
  max-width: 1024px;
  display: grid;
  gap: 20px;
  grid-template-columns: 100%;
  padding: 0 0 60px 0;
  &.split {
    grid-template-columns: 3fr 2fr;
  }
`;
