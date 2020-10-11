import { createSelector } from "@reduxjs/toolkit";
import { RootStateType } from "../index";
import { HardwareList } from "../../sdk/types";

export const processorNameSelector = createSelector(
  (state: RootStateType) => state.moBro.hardware as HardwareList.RootObject,
  (hardware) => {
    let name;
    const hardwareValues = Object.values(hardware);
    for (let index = 0; index < hardwareValues.length; index++) {
      const processor = hardwareValues[index].data.find(
        (data: HardwareList.Datum) => data.hardwaretype === "Processor"
      ) as HardwareList.Datum;
      if (processor) {
        name = processor.title;
        break;
      }
    }

    return name;
  }
);

export const initSelector = (state: RootStateType) => state.moBro.init;
