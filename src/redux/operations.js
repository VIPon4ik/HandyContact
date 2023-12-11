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
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      console.log(id);
      const response = await axios.delete(`/contacts/${id}`);
      console.log(response);
      return response.data;
    } catch(e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
)