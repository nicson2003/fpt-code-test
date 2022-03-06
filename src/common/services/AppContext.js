import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';

export interface UserContextState {
  signIn?: any;
  signOut?: any;
  signUp?: any;
  toggleTheme?: any;
  token?: string;
}

export const AppContext = createContext({
  signIn: () => {},
  signOut: () => {},
  signUp: () => {},
  toggleTheme: () => {},
  token: undefined,
});

/*
interface AppProviderProps {
  children: JSX.Element;
}

const initialLoginState = {
  isLoading: true,
  user: null,
};
*/
//export default function AppProvider(props: AppProviderProps): JSX.Element {
const AppContext = () => {
  const {children} = props;
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const theme = isDarkTheme ? DarkTheme : DefaultTheme;

  const authContext = React.useMemo(
    () => ({
      theme,
      signIn: async (user: any) => {
        await AsyncStorage.setItem('user', 'user');
      },
      signOut: async () => {
        await AsyncStorage.removeItem('user');
      },
      signUp: async () => {
        await AsyncStorage.setItem('user', 'user');
      },
      toggleTheme: () => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
      },
    }),
    [loginState, theme],
  );

  return (
    <AppContext.Provider
      value={{
        ...authContext,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
