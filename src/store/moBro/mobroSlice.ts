import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { format } from "bytes";

import { HardwareList, Helper, SensorList } from "../../sdk/types";

interface FullMemoryList extends HardwareList.Memory {
  totalcapacityGb: string;
}
export interface FullHardwareList extends HardwareList.RootObject {
  memory: FullMemoryList;
}

export interface MobroState {
  sensors: SensorList.RootObject | {};
  hardware: FullHardwareList | {};
  loading: Boolean;
  init: boolean;
  settings: Helper.Settings | {};
}

interface initData {
  sensorList: SensorList.RootObject;
  hardwareList: HardwareList.RootObject;
  settings: Helper.Settings;
}

const initialMobroState: MobroState = {
  sensors: {},
  hardware: {},
  settings: {},
  loading: false,
  init: false,
};

export const initMobroClient = createAsyncThunk<initData>(
  "moBroSdk/initMobroClient",
  async () => {
    await window.MobroSDK.init();
    const sensorList = (await window.MobroSDK.emit(
      "monitor:data"
    )) as SensorList.RootObject;
    const hardwareList = (await window.MobroSDK.emit(
      "monitor:hardware"
    )) as HardwareList.RootObject;

    const settings = (window.MobroSDK.helper as Helper.RootObject).settings;
    return { sensorList, hardwareList, settings };
  }
);

const mobBroSlice = createSlice({
  name: "moBroSdk",
  initialState: initialMobroState,
  reducers: {},
  extraReducers: {
    [initMobroClient.pending]: (state, action: PayloadAction<initData>) => {
      state.loading = true;
    },
    [initMobroClient.fulfilled]: (state, action: PayloadAction<initData>) => {
      const fullHardware = {
        ...action.payload.hardwareList,
        ...{
          memory: {
            ...action.payload.hardwareList.memory,
            totalcapacityGb: format(
              action.payload.hardwareList.memory.totalcapacity
            ),
          },
        },
      };
      (state.hardware = fullHardware),
        (state.sensors = action.payload.sensorList);
      state.settings = action.payload.settings;
      state.loading = false;
      state.init = true;
    },
  },
});

// export const { setMobroInit, setSettings } = mobBroSlice.actions;

export default mobBroSlice.reducer;
