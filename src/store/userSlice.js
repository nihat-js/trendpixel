import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username : '',
    token : '',
    firstName : '',
    lastName : '',
    loginTime : null,
  },
  reducers: {
    load : (state,action) => {

    },
    login: (state, action) => {
      localStorage.setItem('token',action.payload.token)
      localStorage.setItem('username',action.payload.username)
      state = {...action.payload};
    },
    logout : (state,action) =>{
      state = {}
      localStorage.removeItem('token')
    }
  },
});

export const { load,login,logout } = userSlice.actions;
export const userReducer =  userSlice.reducer;
