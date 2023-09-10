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
      let { username, token } = action.payload
      localStorage.setItem('token', token)
      localStorage.setItem('username', username)
      console.log(state.username)
      return  { ...action.payload }
    },
    logout: (state, action) => {
      localStorage.removeItem('token')
      return { username : '' , token : '' }
    }
  },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
