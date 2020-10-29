import { celciusToFarenheight, mapRange } from "./index";

describe("Utils", () => {
  it("Should convert celcius to farenheight", () => {
    const F = celciusToFarenheight(30);
    expect(F).toEqual(86);
  });

  it("Should map to a range", () => {
    const mappedMaxRange = mapRange(1024, 0, 1204, 0, 100);
    const mappedMinRange = mapRange(20, 20, 1204, 0, 100);
    // expect(mappedMaxRange).toEqual(100);
    expect(mappedMinRange).toEqual(0);
  });
});
