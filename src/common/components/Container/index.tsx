import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {StyleSheet} from 'react-native';
import {colors, layout} from '../../styles';

const Container = (props: any) => {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundLight,
    height: '100%',
    paddingHorizontal: layout.paddingHorizontal,
  },
});

export default Container;
