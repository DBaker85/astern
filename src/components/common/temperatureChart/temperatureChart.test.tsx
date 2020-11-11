import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { TemperatureChart } from "./temperatureChart";

describe("Temperature Chart", () => {
  beforeEach(() =>
    render(
      <TemperatureChart value={51.445} warning={70} critical={90} max={100} />
    )
  );

  it("Should round off temperature value", () => {
    const element = screen.getByTestId("temperature-text-value");
    expect(element.getAttribute("value")).toBe("51");
  });
});
