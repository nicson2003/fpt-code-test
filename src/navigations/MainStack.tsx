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

import CharacterListScreen from '../screens/GameOfThrones';
import SkulpRegistrationScreen from '../screens/SkulpRegistrationScreen';
import AboutYouScreen from '../screens/SkulpRegistrationScreen/AboutYouScreen';
import BusinessSettingsScreen from '../screens/SkulpRegistrationScreen/BusinessSettingsScreen';

import {DefaultTheme} from '../common/styles';
import CalendarIntegrationScreen from '../screens/SkulpRegistrationScreen/CalendarIntegrationScreen';
import MarketingScreen from '../screens/SkulpRegistrationScreen/MarketingScreen';
import YourPaymentScreen from '../screens/SkulpRegistrationScreen/YourPaymentScreen';
import EditYourSpaceScreen from '../screens/SkulpRegistrationScreen/EditYourSpaceScreen';

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

const ThroneStack = createStackNavigator();
const ThroneStackScreen = () => {
  return (
    <ThroneStack.Navigator screenOptions={stackOptionStyle}>
      <ThroneStack.Screen
        name="Throne"
        options={{title: 'My home'}}
        component={CharacterListScreen}
      />
    </ThroneStack.Navigator>
  );
};

const SkulpStack = createStackNavigator();
const SkulpStackScreen = () => {
  return (
    <SkulpStack.Navigator screenOptions={stackOptionStyle}>
      <SkulpStack.Screen
        name="contact_information"
        options={{title: 'Contact Information'}}
        component={SkulpRegistrationScreen}
      />
      <SkulpStack.Screen
        name="about_you"
        options={{title: 'About You'}}
        component={AboutYouScreen}
      />
      <SkulpStack.Screen
        name="business_settings"
        options={{title: 'Business Settings'}}
        component={BusinessSettingsScreen}
      />
      <SkulpStack.Screen
        name="edit_your_space"
        options={{title: 'Edit Your Space'}}
        component={EditYourSpaceScreen}
      />
      <SkulpStack.Screen
        name="your_payment"
        options={{title: 'Your Payment'}}
        component={YourPaymentScreen}
      />
      <SkulpStack.Screen
        name="marketing"
        options={{title: 'Marketing'}}
        component={MarketingScreen}
      />
      <SkulpStack.Screen
        name="calendar_integration"
        options={{title: 'Calendar Integration'}}
        component={CalendarIntegrationScreen}
      />
    </SkulpStack.Navigator>
  );
};
export {
  AuthStackScreen,
  MainStackNavigator,
  ProfileScreen,
  NewsStackScreen,
  VideoStackScreen,
  TaskStackScreen,
  ThroneStackScreen,
  SkulpStackScreen,
};
