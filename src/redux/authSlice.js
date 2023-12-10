import { createSlice } from '@reduxjs/toolkit';
import { SignUp } from './operations';

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
    builder.addCase(SignUp.fulfilled, (state, action) => {
      console.log(action);
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLogged = true;
    });
  },
});
