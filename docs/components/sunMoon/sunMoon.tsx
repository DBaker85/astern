import React, { FunctionComponent } from "react";

import {
  StyledBase,
  StyledCutout,
  StyledBackground,
  StyledRays,
} from "./sunMoon.style";

export interface SunMoonType {
  moon?: boolean;
  backgroundColor?: string;
  sunColor?: string;
  moonColor?: string;
}

export const SunMoon: FunctionComponent<SunMoonType> = ({
  moon = false,
  backgroundColor = "hsl(184, 20%, 34%)",
  sunColor = "hsl(42, 100%, 60%)",
  moonColor = "hsl(42, 100%, 91%)",
}) => {
  return (
    <svg viewBox="0 0 42 42" width="100%" height="100%">
      <mask id="cutout-mask">
        <rect x="0" y="0" width="100" height="100" fill="black" />
        <circle cx="21" cy="21" r="21" fill="white"></circle>
      </mask>
      <StyledBackground cx="21" cy="21" r="21" color={backgroundColor} />
      <StyledBase
        cx="21"
        cy="21"
        r="15"
        moon={moon}
        sunColor={sunColor}
        moonColor={moonColor}
      />

      <StyledRays
        moon={moon}
        color={sunColor}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.18239 18.8176L6 21L8.18239 23.1824C8.06244 22.4728 8 21.7437 8 21C8 20.2563 8.06245 19.5272 8.18239 18.8176ZM10.3934 28.5185V31.6066H13.4816C12.2869 30.7583 11.2418 29.7131 10.3934 28.5185ZM18.8176 33.8176L21 36L23.1824 33.8176C22.4728 33.9376 21.7437 34 21 34C20.2563 34 19.5272 33.9376 18.8176 33.8176ZM28.5184 31.6066H31.6066V28.5184C30.7582 29.7131 29.7131 30.7582 28.5184 31.6066ZM33.8176 23.1824L36 21L33.8176 18.8176C33.9376 19.5272 34 20.2563 34 21C34 21.7437 33.9375 22.4729 33.8176 23.1824ZM31.6066 13.4816V10.3934H28.5185C29.7131 11.2418 30.7583 12.2869 31.6066 13.4816ZM23.1824 8.18239L21 6L18.8176 8.18239C19.5272 8.06245 20.2563 8 21 8C21.7437 8 22.4728 8.06245 23.1824 8.18239ZM13.4815 10.3934H10.3934V13.4815C11.2418 12.2869 12.2869 11.2418 13.4815 10.3934Z"
      />
      <g mask="url(#cutout-mask)">
        <StyledCutout
          cx="15"
          cy="15"
          r="13"
          moon={moon}
          color={backgroundColor}
        />
      </g>
    </svg>
  );
};
