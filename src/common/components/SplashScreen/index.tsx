import React from 'react';
import {View, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {loginBackground} from '../../../assets';
import {colors} from '../../styles';

const SplashScreen = () => (
  <View style={styles.container}>
    <Image source={loginBackground} style={styles.imageStyle} />
    <ActivityIndicator
      animating={true}
      color={colors.text}
      size="large"
      style={styles.activityIndicator}
    />
  </View>
);

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  activityIndicator: {
    position: 'absolute',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
