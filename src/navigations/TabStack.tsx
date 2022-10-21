import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  MainStackNavigator,
  ThroneStackScreen,
  //TaskStackScreen,
  //VideoStackScreen,
  //NewsStackScreen,
  //SkulpStackScreen,
} from './MainStack';
import {colors as globalColors} from '../common/styles';
import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerShown: false,
};

type tabBarProps = {
  name?: string;
  size: number | string | any;
  color: string;
};

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptionStyle}
      backBehavior="history"
      initialRouteName={'register'}
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        activeTintColor: globalColors.goldColor,
        inactiveTintColor: globalColors?.text,
        activeBackgroundColor: globalColors.background,
        style: {backgroundColor: globalColors.background, minHeight: 55},
      }}>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({color, size}: tabBarProps) => (
            <Icon
              name="dashboard"
              size={size}
              color={color}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Thrones"
        component={ThroneStackScreen}
        options={{
          tabBarIcon: ({color, size}: tabBarProps) => (
            <Icon
              name="add-task"
              size={size}
              color={color}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />

      {/*      ongoing update
      <Tab.Screen
        name="News"
        component={NewsStackScreen}
        options={{
          tabBarIcon: ({color, size}: tabBarProps) => (
            <Icon
              name="add-to-photos"
              size={size}
              color={color}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Videos"
        component={VideoStackScreen}
        options={{
          tabBarIcon: ({color, size}: tabBarProps) => (
            <Icon
              name="video-collection"
              size={size}
              color={color}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
      <Tab.Screen
        name="register"
        component={SkulpStackScreen}
        options={{
          tabBarIcon: ({color, size}: tabBarProps) => (
            <Icon
              name="add-task"
              size={size}
              color={color}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />

      */}
    </Tab.Navigator>
  );
};

export default TabStack;
