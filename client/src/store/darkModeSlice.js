import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "DarkMode",
  initialState: {
    mode: JSON.parse(localStorage.getItem("darkMode")) || false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
