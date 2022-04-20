import {
  DefaultTheme as InitDefaultTheme,
  DarkTheme as InitDarkTheme,
  Theme as InitTheme,
} from '@react-navigation/native';

export const colors = {
  background: '#000000',
  formBackground: '#404040',
  backgroundLight: '#FBFEFE',
  orange: '#FF4500',
  text: '#fff',
  goldColor: '#fdfc00',
};
//#F98E05, #CED2D1, #679D3D, #FBFEFE, #192328, #166842

export const layout = {
  paddingHorizontal: 20,
};

export type ThemeProps = InitTheme & {
  colors: {
    text?: string;
    background?: string;
    secondary?: string;
    headerColor?: string;
    backgroundSecondary?: string;
    goldColor?: string;
    placeholderTextColor?: string;
    borderColor?: string;
    optionModalBackground?: string;
    inputBackground?: string;
    error?: string;
    green?: string;
  };
};

export const DefaultTheme: ThemeProps = {
  ...InitDefaultTheme,
  colors: {
    ...InitDefaultTheme.colors,
    text: '#000',
    background: '#3D851A',
    headerColor: '#000',
    primary: '#5dc6b7',
    secondary: '#bbbbbb',
    backgroundSecondary: '#fbfbfb',
    goldColor: '#fbb825',
    placeholderTextColor: '#000000',
    borderColor: '#6E6E6E',
    optionModalBackground: '#ffffff',
    inputBackground: '#ececec',
    error: '#E57373',
    green: '#009688',
  },
};

export const DarkTheme: ThemeProps = {
  ...InitDarkTheme,
  colors: {
    ...InitDarkTheme.colors,
    text: '#fff',
    headerColor: '#000',
    background: '#3D851A',
    primary: '#5dc6b7',
    secondary: '#bbbbbb',
    backgroundSecondary: '#1f1f1f',
    goldColor: '#fbb825',
    placeholderTextColor: '#c1c1c1',
    borderColor: '#6E6E6E',
    optionModalBackground: '#454545',
    inputBackground: '#313131',
    error: '#E57373',
    green: '#009688',
  },
};
