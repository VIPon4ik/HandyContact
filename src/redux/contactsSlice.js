import { createSlice } from "@reduxjs/toolkit";
import { getContacts, deleteContact } from "./operations";

const pendingHandler = (state, action) => {
  state.isLoading = true;
}

const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
    .addCase(getContacts.fulfilled, (state, action) => {
      state.items = [...action.payload];
    })
    .addCase(deleteContact.fulfilled)
  }
})