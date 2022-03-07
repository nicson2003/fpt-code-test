import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../common/services/api';

type authInput = {
  password: string;
  email: string;
};

const defaultState = {
  token: '',
  user: {},
  loading: false,
};

export const postAuth = createAsyncThunk(
  'auth/login',
  async (req: authInput) => {
    const response = await fetch(`${api.getBaseUrl()}login`, {
      method: 'POST',
      body: JSON.stringify(req),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
);

export const postRegister = createAsyncThunk(
  'auth/register',
  async (req: authInput) => {
    const response = await fetch(`${api.getBaseUrl()}register`, {
      method: 'POST',
      body: JSON.stringify(req),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: defaultState,
  reducers: {
    logout(state) {
      state.token = '';
      api.removeAccessToken();
    },
  },
  extraReducers: builder => {
    builder.addCase(postAuth.pending, state => {
      state.loading = true;
    });
    builder.addCase(postAuth.fulfilled, (state, action) => {
      const token = action.payload?.token || '';
      AsyncStorage.setItem('token', token);
      state.loading = false;
      state.token = token;
    });
    builder.addCase(postAuth.rejected, state => {
      state.loading = false;
    });
    builder.addCase(postRegister.pending, state => {
      state.loading = true;
    });
    builder.addCase(postRegister.fulfilled, (state, action) => {
      const token = action.payload?.token || 'token';
      //AsyncStorage.setItem('token', token);
      state.loading = false;
      state.token = token;
    });
    builder.addCase(postRegister.rejected, state => {
      state.loading = false;
    });
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
