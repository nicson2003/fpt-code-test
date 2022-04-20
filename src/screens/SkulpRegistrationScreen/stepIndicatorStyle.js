import {StyleSheet} from 'react-native';
import {colors} from '../../common/styles';

export const useStyle = containerWith => {
  return StyleSheet.create({
    stepsContainer: {
      borderWidth: 2,
      borderColor: colors.goldColor,
      width: containerWith,
      height: 3,
    },
  });
};
