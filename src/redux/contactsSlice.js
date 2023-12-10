import { createSlice } from "@reduxjs/toolkit";
import { getContacts } from "./operations";

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: builder => {
    builder
    .addCase(getContacts.fulfilled, (state, action) => {
      return state.concat(action.payload);
    })
  }
})