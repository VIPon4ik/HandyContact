import { createSlice } from '@reduxjs/toolkit';
import { signUp, signInByToken, logOut, logIn } from './operations';

const initialState = {
  name: null,
  email: null,
  token: null,
  isLogged: false,
  isLoading: true,
  error: null,
};

const pendingHandler = (state, action) => {
  state.isLoading = true;
};

const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  initialState: initialState,
  name: 'auth',
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, pendingHandler)
      .addCase(signUp.rejected, rejectedHandler)
      .addCase(signInByToken.pending, pendingHandler)
      .addCase(signInByToken.rejected, rejectedHandler)
      .addCase(logOut.pending, pendingHandler)
      .addCase(logOut.rejected, rejectedHandler)
      .addCase(logIn.pending, pendingHandler)
      .addCase(logIn.rejected, rejectedHandler)

      .addCase(signUp.fulfilled, (state, action) => {
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isLogged = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signInByToken.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.isLogged = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.name = null;
        state.email = null;
        state.isLogged = null;
        state.isLoading = false;
        state.error = null;
        state.token = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isLogged = true;
      })
  },
});
