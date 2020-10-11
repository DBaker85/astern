import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { HardwareList, Helper } from "../../sdk/types";

export interface MobroState {
  hardware: HardwareList.RootObject | {};
  loading: Boolean;
  init: boolean;
  settings: Helper.Settings | {};
}

interface initData {
  hardwareList: HardwareList.RootObject;
  settings: Helper.Settings;
}

const initialMobroState: MobroState = {
  hardware: {},
  settings: {},
  loading: false,
  init: false,
};

export const initMobroClient = createAsyncThunk<initData>(
  "moBroSdk/initMobroClient",
  async () => {
    await window.MobroSDK.init();
    const hardwareList = (await window.MobroSDK.emit(
      "monitor:data"
    )) as HardwareList.RootObject;
    const settings = (window.MobroSDK.helper as Helper.RootObject).settings;
    return { hardwareList, settings };
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
      state.hardware = action.payload.hardwareList;
      state.settings = action.payload.settings;
      state.loading = false;
      state.init = true;
    },
  },
});

// export const { setMobroInit, setSettings } = mobBroSlice.actions;

export default mobBroSlice.reducer;
