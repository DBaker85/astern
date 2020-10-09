import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { HardwareList } from "../../sdk/types";

export const fetchHardwarelist = createAsyncThunk<HardwareList>(
  "hardware/fetchHarwarelist",
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

interface initialHardwareState {
  hardware: HardwareList | {};
  loading: Boolean;
}

const initialHardwareState: initialHardwareState = {
  hardware: {},
  loading: false,
};

const hardwareSlice = createSlice({
  name: "hardware",
  initialState: initialHardwareState,
  reducers: {},
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchHardwarelist.fulfilled]: (state, action) => {
      state.hardware = action.payload;
    },
  },
});

// export const { fetchHarwarelist } = hardwareSlice.actions;

export default hardwareSlice.reducer;
