/// <reference path='../../../src/images.d.ts'/>

import React, { FunctionComponent } from "react";
import mainImage from "../../../assets/images/main.png";
import { StyledContent } from "../../components/content/content.style";
import { DownloadButton } from "../../components/button/downloadButton";

export const Download: FunctionComponent = () => (
  <StyledContent className="split">
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={mainImage} style={{ width: "80%", height: "auto" }} />
    </div>
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <DownloadButton
        version="1.0.0"
        subtext="For use with version 1x to 1.3x"
      />
    </div>
  </StyledContent>
);
