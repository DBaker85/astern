import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { UsageBar } from "./usageBar";

describe("Usage bar", () => {
  beforeEach(() =>
    render(
      <UsageBar
        used={17.1144787}
        value={17.1144787}
        total={32.4587}
        unit={"GB"}
      />
    )
  );

  it("Should round off used value", () => {
    expect(screen.getByTestId("usage-text-used").textContent).toBe("17");
  });

  it("Should round off total value", () => {
    expect(screen.getByTestId("usage-text-total").textContent).toBe("32");
  });
});
