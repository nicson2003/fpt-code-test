import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import TasksScreen from '../screens/TasksScreen';
import VideoScreen from '../screens/VideosScreen';
import NewsScreen from '../screens/NewsScreen';
import NewDetailsScreen from '../screens/NewsScreen/NewsDetailScreen';

import {DefaultTheme} from '../common/styles';

const Stack = createStackNavigator();

const stackOptionStyle = {
  headerStyle: {
    backgroundColor: DefaultTheme.colors.background,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerShown: false,
  headerMode: 'none',
};

const setScreenTitle = (title: string) => {
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: DefaultTheme.colors.background,
    },
    headerTintColor: 'white',
    headerBackTitle: 'Back',
    title: title,
    headerShown: false,
  };
  return screenOptionStyle;
};

const authNavOption = {
  headerStyle: {
    backgroundColor: DefaultTheme.colors.background,
  },
  headerShown: false,
};

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={authNavOption}>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={setScreenTitle('Sign In')}
      />
      <AuthStack.Screen
        name="Register"
        component={RegistrationScreen}
        options={setScreenTitle('Create Account')}
      />
    </AuthStack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={stackOptionStyle}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

const NewsStack = createStackNavigator();
const NewsStackScreen = () => {
  return (
    <NewsStack.Navigator screenOptions={stackOptionStyle}>
      <NewsStack.Screen name="News" component={NewsScreen} />
      <NewsStack.Screen name="NewsDetails" component={NewDetailsScreen} />
    </NewsStack.Navigator>
  );
};

const TaskStack = createStackNavigator();
const TaskStackScreen = () => {
  return (
    <TaskStack.Navigator screenOptions={stackOptionStyle}>
      <TaskStack.Screen name="Tasks" component={TasksScreen} />
      {/**
       * crateTask
       * updateTask
       * deleteTask
       */}
    </TaskStack.Navigator>
  );
};

const VideoStack = createStackNavigator();
const VideoStackScreen = () => {
  return (
    <VideoStack.Navigator screenOptions={stackOptionStyle}>
      <VideoStack.Screen name="Video" component={VideoScreen} />
    </VideoStack.Navigator>
  );
};

export {
  AuthStackScreen,
  MainStackNavigator,
  ProfileScreen,
  NewsStackScreen,
  VideoStackScreen,
  TaskStackScreen,
};
