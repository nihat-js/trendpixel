import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    token: '',
    // firstName: '',
    // lastName: '',
    // loginTime: null,
  },
  reducers: {
    login: (state, action) => {
      // console.log("i am logged in",action.payload)
      return  { ...action.payload }
    },
    logout: (state, action) => {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      sessionStorage.clear()
      return { username : '' , token : '' }
    }
  },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
