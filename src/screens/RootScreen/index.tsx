import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import StatusBar from '../../common/components/StatusBar';
import {AuthStackScreen} from '../../navigations/MainStack';
import DrawerStack from '../../navigations/DrawerStack';
import {RootState} from '../../store';
import {isBlank} from '../../common/services/utils';
import SplashScreen from '../../common/components/SplashScreen';

const RootScreen = () => {
  const {token, loading} = useSelector((state: RootState) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [token, loading]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        {isBlank(token) ? <AuthStackScreen /> : <DrawerStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootScreen;
