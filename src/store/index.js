import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { themeReducer } from './themeSlice.js';
import {modalReducer} from "./modalSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    modal : modalReducer
  },
});

