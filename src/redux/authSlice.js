import { createSlice } from "@reduxjs/toolkit";
import { SignUp } from "./operations";

const initialState = {
  user: null,
  token: null,
  isLogged: false,
}

export const authSlice = createSlice({
  initialState: initialState,
  name: 'auth',
  extraReducers: {
    [SignUp.fulfilled]: (state, action) => {
      console.log(action);
    }
  }
})
