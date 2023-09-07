import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'theme',
  initialState: {
    value: 'LIGHT',
  },
  reducers: {
    toggle: (state, action) => {
      localStorage.setItem('theme', action.payload.value)
      state = action.payload.value;
    },
  },
});

export const { toggle } = slice.actions;
export const themeReducer = slice.reducer;
