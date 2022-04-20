import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../common/styles';

const windowHeight = Dimensions.get('window').height;

export const useStyle = () => {
  return StyleSheet.create({
    stackContainer: {
      flex: 1,
      //marginTop: STATUSBAR_HEIGHT,
      backgroundColor: colors.background,
    },
    loader: {
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    container: {
      flex: 1,
      height: windowHeight,
      backgroundColor: colors.background,
    },

    heading: {
      color: colors.goldColor,
      fontSize: 22,
      fontWeight: 'bold',
      height: 30,
    },
    headerRightText: {
      color: colors.goldColor,
      fontSize: 18,
      height: 30,
    },
    headerContainer: {
      borderBottomColor: colors.formBackground,
      borderBottomWidth: 0,
    },
    formStyle: {
      flex: 1,
      //marginHorizontal: 10,
      backgroundColor: colors.formBackground,
    },

    buttonContainerStyle: {
      marginHorizontal: 10,
    },
    buttonStyle: {
      backgroundColor: colors?.goldColor,
      //borderWidth: 2,
      //borderColor: 'rgba(111, 111, 111, 0.2)',
      //borderRadius: 30,
      height: 60,
    },
    buttonTitleStyle: {
      fontWeight: 'bold',
      color: colors?.formBackground,
    },
    titleText: {
      padding: 5,
      color: colors?.orange,
      marginTop: 15,
    },
    profileTitleText: {
      color: colors?.text,
      fontSize: 35,
      marginTop: 15,
      paddingHorizontal: 8,
    },
    profileText: {
      color: colors?.text,
      fontSize: 15,
      paddingHorizontal: 8,
      marginBottom: 20,
    },
    centerContainer: {
      flex: 1,
      height: windowHeight,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      borderWidth: 2,
      paddingVertical: 2,
      paddingHorizontal: 4,
    },

    dropdown: {
      //margin: 8,
      height: 60,
      backgroundColor: colors.formBackground,
      borderWidth: 2,
      borderColor: 'gray',
      //borderRadius: 12,
      padding: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 0,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    placeholderStyle: {
      fontSize: 16,
      color: 'gray',
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },

    m_container: {padding: 16},
    m_dropdown: {
      height: 50,
      backgroundColor: 'transparent',
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    m_placeholderStyle: {
      fontSize: 16,
      color: 'gray',
    },
    m_selectedTextStyle: {
      fontSize: 14,
    },
    m_iconStyle: {
      width: 20,
      height: 20,
    },
    m_inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    m_icon: {
      marginRight: 5,
    },
    m_selectedStyle: {
      borderRadius: 12,
    },
  });
};
