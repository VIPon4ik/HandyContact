import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  initialState: '',
  name: 'filter',
  reducers: {
    changeFilter(state, action) {
      return action.payload;
    }
  }
})

export const { changeFilter } = filterSlice.actions;