import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { HardwareList, Helper } from "../../sdk/types";

export const fetchHardwarelist = createAsyncThunk<HardwareList>(
  "moBroSdk/fetchHarwarelist",
  async () => {
    const hardware = (await window.MobroSDK.emit(
      "monitor:data"
    )) as HardwareList;
    return hardware;
  }
);

export interface MobroState {
  hardware: HardwareList | {};
  loading: Boolean;
  init: boolean;
  settings: Helper.Settings | {};
}

const initialMobroState: MobroState = {
  hardware: {},
  settings: {},
  loading: false,
  init: false,
};

const mobBroSlice = createSlice({
  name: "moBroSdk",
  initialState: initialMobroState,
  reducers: {
    setMobroInit(state, action: PayloadAction<boolean>) {
      state.init = action.payload;
    },
    setSettings(state, action: PayloadAction<Helper.Settings>) {
      state.settings = action.payload;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchHardwarelist.fulfilled]: (state, action) => {
      state.hardware = action.payload;
    },
  },
});

export const { setMobroInit, setSettings } = mobBroSlice.actions;

export default mobBroSlice.reducer;
