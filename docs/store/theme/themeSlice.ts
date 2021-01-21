import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
  isDark: boolean;
};

const initialThemeState: ThemeState = { isDark: true };

const todosSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    toggleTheme(state: ThemeState) {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggleTheme } = todosSlice.actions;

export default todosSlice.reducer;
