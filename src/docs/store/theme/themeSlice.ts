import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
  dark: boolean;
};

const initialThemeState: ThemeState = { dark: true };

const todosSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    toggleTheme(state: ThemeState) {
      state.dark = !state.dark;
    },
  },
});

export const { toggleTheme } = todosSlice.actions;

export default todosSlice.reducer;
