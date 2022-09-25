import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const isExist = (item, array) => {
  let exist = false;
  if (array) {
    array.forEach(cont => {
      if (cont.name.toLowerCase() === item.name.toLowerCase()) {
        return (exist = true);
      }
    });
  }
  return exist;
};

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isExist(data, contacts.items)) {
        alert(`${data.name} is alredy exist`);
        return false;
      }
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      await api.removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getSignUp(data);
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;
      const error = { status, statusText };
      return rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getLogIn(data);
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;
      const error = { status, statusText };
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getLogOut();
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;
      const error = { status, statusText };
      return rejectWithValue(error);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token);
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;
      const error = { status, statusText };
      return rejectWithValue(error);
    }
  }
);
