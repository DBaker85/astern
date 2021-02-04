import React, { FunctionComponent, MouseEvent } from "react";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import Link from "@material-ui/core/Link";

import { Button } from "./button";
import {
  analyticsEvent,
  eventActions,
  eventCategories,
} from "../../utils/analytics/analytics";

interface DownloadButtonProps {
  version: string;
  subtext?: string;
}

export const DownloadButton: FunctionComponent<DownloadButtonProps> = ({
  version,
  subtext,
}) => {
  const handleOnCLick = () => {
    analyticsEvent({
      action: eventActions.downloaded(`package v${version}`),
      category: eventCategories.user,
    });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link
        startIcon={<CloudDownloadIcon />}
        component={Button}
        onClick={handleOnCLick}
        href={`https://github.com/DBaker85/astern/releases/download/${version}/astern.zip`}
        download
        rel="noreferrer"
      >
        Download v{version}
      </Link>

      {subtext && (
        <div
          style={{
            display: "flex",
            fontSize: 16,
            justifyContent: "center",
            padding: "10px",
            width: "100%",
          }}
        >
          {subtext}
        </div>
      )}
    </div>
  );
};
