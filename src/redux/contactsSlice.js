import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  deleteContact,
  editContact,
  addContact,
} from './operations';

const pendingHandler = (state, action) => {
  state.isLoading = true;
};

const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, pendingHandler)
      .addCase(getContacts.rejected, rejectedHandler)
      .addCase(deleteContact.pending, pendingHandler)
      .addCase(deleteContact.rejected, rejectedHandler)
      .addCase(addContact.pending, pendingHandler)
      .addCase(addContact.rejected, rejectedHandler)
      
      .addCase(getContacts.fulfilled, (state, action) => {
        state.items = [...action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(({ id }) => id !== action.payload.id);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      });
  },
});
