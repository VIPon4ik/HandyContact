import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const SignUp = createAsyncThunk(
  'auth/createUser',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post('users/signup', { name, email, password })
      console.log(response);
      return response.data
    } catch(e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
