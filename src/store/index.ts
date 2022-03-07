import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import authReducer from './auth';
import tasksReducer from './tasks';
import newsReducer from './news';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
    news: newsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
