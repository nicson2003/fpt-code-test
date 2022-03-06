import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth';
import tasksReducer from './tasks';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
