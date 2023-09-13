import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'modal',
  initialState: {
    showModal: false,
    showCloseButton: true,
    header: '',
    body: '',
    containerStyle: {},
  },
  reducers: {
    setModalData: (state, action) => {
      return action.payload
    },
  },
});

export const { setModalData } = slice.actions;
export const modalReducer = slice.reducer;
