import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .title {
    font-size: 40px;
    margin: 10px;
  }
`;

export const Loader: FunctionComponent = () => (
  <StyledLoader>
    <div className="title">Loading</div>
    <div>Connecting to server</div>
    <div>Getting hardware configuration</div>
  </StyledLoader>
);
