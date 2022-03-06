import React from 'react';
import {
  StatusBar as RNStatusBar,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from '../../styles';

const StatusBar = () => {
  const styles = useStyle();
  return (
    <View style={styles.statusBarStyle}>
      <RNStatusBar
        backgroundColor={styles.statusBarStyle.backgroundColor}
        barStyle="light-content"
      />
    </View>
  );
};

export default StatusBar;

const useStyle = () => {
  return StyleSheet.create({
    statusBarStyle: {
      height: Platform.OS === 'ios' ? 20 : -20,
      backgroundColor: colors.background,
    },
  });
};
