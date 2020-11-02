import {
  processorNameSelector,
  processorCoreCountSelector,
  gpuNameSelector,
  processorLimitsSelector,
  gpuLimitsSelector,
  totalRamSelector,
  initSelector,
  tempAsFarenHeightSelector,
} from "./mobroSelectors";

import {
  cpuName,
  gpuName,
  mocks,
  cpuLimits,
  gpuLimits,
  ramCapacity,
  coreCount,
} from "./mocks/mockState";

describe("Mobro selectors", () => {
  it("should get cpu name", () => {
    expect(processorNameSelector(mocks)).toBe(cpuName);
  });
  it("should get core count", () => {
    expect(processorCoreCountSelector(mocks)).toEqual(coreCount);
  });
  it("should get gpu name", () => {
    expect(gpuNameSelector(mocks)).toBe(gpuName);
  });
  it("should get processor limits", () => {
    expect(processorLimitsSelector(mocks)).toBe(cpuLimits);
  });
  it("should get gpu limits", () => {
    expect(gpuLimitsSelector(mocks)).toBe(gpuLimits);
  });
  it("should get ram capacity", () => {
    expect(totalRamSelector(mocks)).toBe(ramCapacity.totalcapacityGb);
  });
  it("should get init Value", () => {
    expect(initSelector(mocks)).toBe(true);
  });
  it("should get farenheight config", () => {
    expect(tempAsFarenHeightSelector(mocks)).toBe(false);
  });
});
