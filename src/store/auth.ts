import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import {userData} from '../common/constant/sampleData';
import {isBlank} from '../common/services/utils';

type authInput = {
  username: string;
  password: string;
  emailaddress?: string;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    user: {},
  },
  reducers: {
    login(state, action: PayloadAction<authInput>) {
      const {username, password} = action.payload;
      const match =
        userData.users.filter(
          (users: authInput) =>
            users.username === username && users.password === password,
        )[0] || null;
      if (!isBlank(match)) {
        const localToken = uuid.v4();
        AsyncStorage.setItem('token', localToken);
        state.token = localToken;
      }
    },
    register(state, action: PayloadAction<authInput>) {
      const {username, emailaddress} = action.payload;
      const match =
        userData.users.filter(
          (users: authInput) =>
            users.emailaddress === emailaddress || users.username === username,
        )[0] || null;
      if (!isBlank(match)) {
        const localToken = uuid.v4();
        AsyncStorage.setItem('user', localToken);
        state.user = {
          username,
          emailaddress,
        };
      }
    },
    logout(state) {
      state.token = '';
    },
  },
});

export const {login, logout, register} = authSlice.actions;
export default authSlice.reducer;
