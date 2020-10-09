import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { HardwareList } from "../../sdk/types";

export const fetchHardwarelist = createAsyncThunk<HardwareList>(
  "moBroSdk/fetchHarwarelist",
  async () => {
    if (!window.MobroSDK.initialized) {
      await window.MobroSDK.init();
    }
    const hardware = (await window.MobroSDK.emit(
      "monitor:data"
    )) as HardwareList;
    return hardware;
  }
);

interface initialMobroState {
  hardware: HardwareList | {};
  loading: Boolean;
  init: boolean;
}

const initialMobro: initialMobroState = {
  hardware: {},
  loading: false,
  init: false,
};

const hardwareSlice = createSlice({
  name: "moBroSdk",
  initialState: initialMobro,
  reducers: {
    setMobroInit(state, action: PayloadAction<boolean>) {
      state.init = action.payload;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchHardwarelist.fulfilled]: (state, action) => {
      state.hardware = action.payload;
    },
  },
});

export const { setMobroInit } = hardwareSlice.actions;

export default hardwareSlice.reducer;
