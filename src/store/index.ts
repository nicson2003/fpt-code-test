import {configureStore} from '@reduxjs/toolkit';
//import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import authReducer from './auth';
import tasksReducer from './tasks';
import newsReducer from './news';
import characterReducer from './chars';
import counterReducer from './counter';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
    news: newsReducer,
    characters: characterReducer,
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
