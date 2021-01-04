import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { format } from "bytes";

import { HardwareList, Helper, SensorList } from "../../sdk/types";

interface FullMemoryList extends HardwareList.Memory {
  totalcapacityGb: number;
}
export interface FullHardwareList extends HardwareList.RootObject {
  memory: FullMemoryList;
}

export interface MobroState {
  sensors: SensorList.RootObject | {};
  hardware: FullHardwareList | {};
  loading: boolean;
  init: boolean;
  settings: Helper.Settings | {};
  windowSize: WindowSize;
}

interface initData {
  sensorList: SensorList.RootObject;
  hardwareList: HardwareList.RootObject;
  settings: Helper.Settings;
}

export type WindowSize = {
  width: number;
  height: number;
};

const initialMobroState: MobroState = {
  sensors: {},
  hardware: {},
  settings: {},
  windowSize: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  loading: false,
  init: false,
};

export const initMobroClient = createAsyncThunk<initData>(
  "moBroSdk/initMobroClient",
  async () => {
    await window.MobroSDK.init();
    const sensorList = (await window.MobroSDK.emit(
      window.MobroSDK.com.MONITOR.DATA
    )) as SensorList.RootObject;
    const hardwareList = (await window.MobroSDK.emit(
      window.MobroSDK.com.MONITOR.HARDWARE
    )) as HardwareList.RootObject;

    const settings = (window.MobroSDK.helper as Helper.RootObject).settings;
    return { sensorList, hardwareList, settings };
  }
);

const mobBroSlice = createSlice({
  name: "moBroSdk",
  initialState: initialMobroState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initMobroClient.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(
        initMobroClient.fulfilled,
        (state, action: PayloadAction<initData>) => {
          const totalcapacityGb = parseInt(
            format(action.payload.hardwareList.memory.totalcapacity, {
              unit: "GB",
            }).split("GB")[0],
            10
          );
          const fullHardware = {
            ...action.payload.hardwareList,
            ...{
              memory: {
                ...action.payload.hardwareList.memory,
                totalcapacityGb,
              },
            },
          };

          state.hardware = fullHardware;
          state.sensors = action.payload.sensorList;
          state.settings = action.payload.settings;
          state.loading = false;
          state.init = true;
        }
      );
  },
});

export default mobBroSlice.reducer;
