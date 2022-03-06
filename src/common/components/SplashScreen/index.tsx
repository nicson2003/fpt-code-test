import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {loadingSpinner} from '../../../assets';

const SplashScreen = () => (
  <View style={styles.container}>
    <Image
      source={loadingSpinner}
      //style={styles.imageBackground}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
