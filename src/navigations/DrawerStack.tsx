import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import {ProfileScreen} from './MainStack';
import TabStack from './TabStack';
import {logout} from '../store/auth';

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: JSX.IntrinsicAttributes) => {
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => dispatch(logout())} />
    </DrawerContentScrollView>
  );
};

const DrawerStack = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={screenOptionStyle}
    drawerContent={(props: any) => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={TabStack} />
    {/*ongoing update
    <Drawer.Screen name="Profile" component={ProfileScreen} />*/}
  </Drawer.Navigator>
);

export default DrawerStack;
