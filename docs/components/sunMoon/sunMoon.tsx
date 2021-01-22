import React, { FunctionComponent } from "react";

import {
  StyledBase,
  StyledCutout,
  StyledBackground,
  StyledRay,
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

      <StyledRay
        color={sunColor}
        moon={moon}
        points="19,7.4 21,5.4 23,7.4"
        style={{ transform: "rotate(0deg)" }}
      />
      <StyledRay
        color={sunColor}
        moon={moon}
        points="19,7.4 21,5.4 23,7.4"
        style={{ transform: "rotate(45deg)" }}
      />
      <StyledRay
        color={sunColor}
        moon={moon}
        points="19,7.4 21,5.4 23,7.4"
        style={{ transform: "rotate(90deg)" }}
      />
      <StyledRay
        color={sunColor}
        moon={moon}
        points="19,7.4 21,5.4 23,7.4"
        style={{ transform: "rotate(135deg)" }}
      />
      <StyledRay
        color={sunColor}
        moon={moon}
        points="19,7.4 21,5.4 23,7.4"
        style={{ transform: "rotate(180deg)" }}
      />
      <StyledRay
        color={sunColor}
        moon={moon}
        points="19,7.4 21,5.4 23,7.4"
        style={{ transform: "rotate(225deg)" }}
      />
      <StyledRay
        color={sunColor}
        moon={moon}
        points="19,7.4 21,5.4 23,7.4"
        style={{ transform: "rotate(270deg)" }}
      />
      <StyledRay
        color={sunColor}
        moon={moon}
        points="19,7.4 21,5.4 23,7.4"
        style={{ transform: "rotate(315deg)" }}
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
// 45deg
