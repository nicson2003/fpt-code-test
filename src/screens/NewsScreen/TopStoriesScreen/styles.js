import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../common/styles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  image: {
    width: width - 38,
    height: 200,
    borderRadius: 15,
    borderWidth: 1,
    //borderColor: colors?.white,
  },
  storyItem: {
    marginRight: 15,
    borderRadius: 15,
    borderWidth: 1,
    //borderColor: colors?.white,
  },
});
