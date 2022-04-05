import {StyleSheet, Dimensions} from 'react-native';

const formRadius = 35;
const formHeight = 500;

export const useStyle = props => {
  const {colors} = props;

  return StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    container: {
      padding: 0,
      margin: 0,
      backgroundColor: 'gray',
      height: '100%',
    },
    imageBackground: {
      width: '100%',
      height: '100%',
    },
    loginForm: {
      position: 'absolute',
      bottom: 0,
      backgroundColor: colors?.white,
      borderTopRightRadius: formRadius,
      borderTopLeftRadius: formRadius,
      borderWidth: 1,
      borderColor: colors?.white,
      padding: 40,
      paddingBottom: 20,
      height: formHeight,
      width: '100%',
    },
    titleText: {
      textAlign: 'center',
      padding: 5,
      color: colors?.white,
      marginBottom: 30,
    },

    buttonContainerStyle: {
      margin: 10,
    },
    buttonStyle: {
      backgroundColor: colors?.success,
      borderWidth: 2,
      borderColor: 'rgba(111, 111, 111, 0.2)',
      borderRadius: 30,
      height: 60,
    },
    buttonTitleStyle: {
      fontWeight: 'bold',
    },
    buttonErrorStyle: {color: colors?.error},
    registerLink: {
      color: colors.warning,
      fontWeight: 'bold',
    },
    registerText: {
      textAlign: 'center',
      fontSize: 14,
    },
    header: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'rgba(111, 111, 111, 0.2)',
    },
    item: {
      flexDirection: 'row',
      height: 40,
      marginBottom: 5,
    },
    text: {textAlign: 'center', fontSize: 14, color: colors?.warning},
    imageStyle: {
      height: 50,
      width: 50,
      resizeMode: 'contain',
    },
  });
};
