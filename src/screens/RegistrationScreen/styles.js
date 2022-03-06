import {StyleSheet, Dimensions} from 'react-native';

const formRadius = 35;
const formHeight = 580;

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
      color: colors?.primary, //colors?.secondary,
      marginBottom: 30,
    },
    text: {textAlign: 'center', fontSize: 14, color: colors?.grey3},
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
    loginLink: {
      color: colors.primary,
      fontWeight: 'bold',
    },
    loginText: {
      textAlign: 'center',
      fontSize: 14,
    },
  });
};
