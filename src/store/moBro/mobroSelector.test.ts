import { produce } from "immer";

import { HardwareList, Helper, SensorList } from "../../sdk/types";

import {
  processorNameSelector,
  processorCoreCountSelector,
  gpuNameSelector,
  processorLimitsSelector,
  gpuLimitsSelector,
  totalRamSelector,
  initSelector,
  tempAsFarenHeightSelector,
  hasGpuSelector,
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
  it("should see if there is a gpu present", () => {
    expect(hasGpuSelector(mocks)).toBe(true);
  });
  it("should see if there is no gpu present", () => {
    const noGpuMocks = produce(mocks, (draft) => {
      const ohData = (draft.moBro.sensors as SensorList.RootObject)
        .openhardwaremonitor?.data;
      if (ohData) {
        (draft.moBro
          .sensors as SensorList.RootObject).openhardwaremonitor.data = ohData.filter(
          (obj) => obj.hardwaretype !== "Graphics"
        );
      }

      const lhData = (draft.moBro.sensors as SensorList.RootObject)
        .librehardwaremonitor?.data;
      if (lhData) {
        (draft.moBro
          .sensors as SensorList.RootObject).librehardwaremonitor.data = lhData.filter(
          (obj) => obj.hardwaretype !== "Graphics"
        );
      }

      const hwiData = (draft.moBro.sensors as SensorList.RootObject).hwinfo
        ?.data;
      if (hwiData) {
        (draft.moBro
          .sensors as SensorList.RootObject).hwinfo.data = hwiData.filter(
          (obj) => obj.hardwaretype !== "Graphics"
        );
      }
    });
    expect(hasGpuSelector(noGpuMocks)).toBe(false);
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
