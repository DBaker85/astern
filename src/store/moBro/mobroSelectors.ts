import { createSelector } from "@reduxjs/toolkit";
import { RootStateType } from "../index";
import { HardwareList, Helper } from "../../sdk/types";

const PROCESSOR_TYPE = "Processor";
const GPU_TYPE = "Graphics";

export const processorNameSelector = createSelector(
  (state: RootStateType) => state.moBro.hardware as HardwareList.RootObject,
  (hardware) => {
    let name;
    const hardwareValues = Object.values(hardware);
    for (let index = 0; index < hardwareValues.length; index++) {
      const processor = hardwareValues[index].data.find(
        (data: HardwareList.Datum) => data.hardwaretype === PROCESSOR_TYPE
      ) as HardwareList.Datum;
      if (processor) {
        name = processor.title;
        break;
      }
    }

    return name;
  }
);

export const processorCoreCountSelector = createSelector(
  (state: RootStateType) => state.moBro.hardware as HardwareList.RootObject,
  (hardware) => {
    let corecount;
    const hardwareValues = Object.values(hardware);
    for (let index = 0; index < hardwareValues.length; index++) {
      const processor = hardwareValues[index].data.find(
        (data: HardwareList.Datum) => data.hardwaretype === PROCESSOR_TYPE
      ) as HardwareList.Datum;
      if (processor) {
        corecount = processor.sensors.filter(
          (sensor) =>
            sensor.label.includes("Core #") && sensor.sensortype === "Usage"
        ).length;
        break;
      }
    }

    return corecount;
  }
);

export const gpuNameSelector = createSelector(
  (state: RootStateType) => state.moBro.hardware as HardwareList.RootObject,
  (hardware) => {
    let name;
    const hardwareValues = Object.values(hardware);
    for (let index = 0; index < hardwareValues.length; index++) {
      const processor = hardwareValues[index].data.find(
        (data: HardwareList.Datum) => data.hardwaretype === GPU_TYPE
      ) as HardwareList.Datum;
      if (processor) {
        name = processor.title;
        break;
      }
    }

    return name;
  }
);

export const processorLimitsSelector = createSelector(
  (state: RootStateType) =>
    (state.moBro.settings as Helper.Settings).hardware.temperature,
  (temperatures: Helper.Temperature[]) =>
    temperatures.filter(
      (temperature) => temperature.hardwaretype === PROCESSOR_TYPE
    )[0]
);
export const gpuLimitsSelector = createSelector(
  (state: RootStateType) =>
    (state.moBro.settings as Helper.Settings).hardware.temperature,
  (temperatures: Helper.Temperature[]) =>
    temperatures.filter(
      (temperature) => temperature.hardwaretype === GPU_TYPE
    )[0]
);

export const initSelector = (state: RootStateType) => state.moBro.init;
export const tempAsFarenHeightSelector = (state: RootStateType) =>
  (state.moBro.settings as Helper.Settings).temperatureAsFahrenheit;
