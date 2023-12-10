import { createSlice } from '@reduxjs/toolkit';
import { signUp, signInByToken } from './operations';

const initialState = {
  name: null,
  email: null,
  token: null,
  isLogged: false,
};

export const authSlice = createSlice({
  initialState: initialState,
  name: 'auth',
  extraReducers: builder => {
    builder
    .addCase(signUp.fulfilled, (state, action) => {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLogged = true;
    })
    .addCase(signInByToken.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLogged = true;
    })
  },
});
