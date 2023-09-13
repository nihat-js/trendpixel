import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'theme',
  initialState: 'LIGHT',
  reducers: {
    toggleTheme: (state, action) => {
      localStorage.setItem('theme', action.payload)
      if (state ==="LIGHT"){
        return  'DARK'
      }else{
        return 'LIGHT'
      }
    },
  },
});

export const { toggleTheme } = slice.actions;
export const themeReducer = slice.reducer;
