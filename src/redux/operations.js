import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const token = {
  setToken: (token) => {
    axios.defaults.headers.common.Authorization = token;
  }
}

export const signUp = createAsyncThunk(
  'auth/createUser',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post('users/signup', {
        name,
        email,
        password,
      });
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const signInByToken = createAsyncThunk(
  'auth/signInByToken',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get('users/current', token);
      console.log(response);
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
