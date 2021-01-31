import React, { FunctionComponent } from "react";

import { StyledContent } from "../../components/content/content.style";
import { DownloadButton } from "../../components/button/downloadButton";

export const Download: FunctionComponent = () => (
  <StyledContent className="split">
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src="https://raw.githubusercontent.com/DBaker85/astern/main/src/docs/Main.png"
        style={{ width: "80%", height: "auto" }}
      />
    </div>
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <DownloadButton version="1.0.0" subtext="For use with MoBro version 1x" />
    </div>
  </StyledContent>
);
