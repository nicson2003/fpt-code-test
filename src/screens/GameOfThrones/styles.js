import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const useStyle = () => {
  return StyleSheet.create({
    loader: {
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    container: {
      flex: 1,
      marginHorizontal: 10,
      //backgroundColor: 'gray',
      height: windowHeight,
    },
    heading: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
      flex: 1,
      height: 20
    },
    headerRight: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5,
    },
    leftContainer: {flex: 2, marginRight: 0},
    rightContainer: {flex: 4, margin: 0},
    buttonContainerStyle: {
      width: 80,
      marginHorizontal: 15,
    },
    buttonStyle: {
      width: 80,
      backgroundColor: 'gray',
      height: 60,
      borderRadius: 0,
    },
    buttonTitleStyle: {color: 'black'},
    pickerStyle: {width: 180, backgroundColor: 'gray'},
    filterContainer: {
      overflow: 'hidden',
      shadowColor: 'green',
      shadowRadius: 10,
      shadowOpacity: 1,
    },
    gridContainer: {
      width: 220,
    },
    rowStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'white',
      justifyContent: 'flex-start',
      backgroundColor: 'gray',
    },
    cellStyle: {
      flex: 1,
      padding: 15,
      width: 60,
    },
    image: {
      width: 60,
      height: 60,
    },
    idStyle: {
      marginHorizontal: 10,
    },
    headerTextStyle: {fontSize: 14, fontWeight: 'bold'},

    footerContainerStyle: {
      marginBottom: 20,
      backgroundColor: 'gray',
    },
    footerView: {flex: 0.1, backgroundColor: 'white'},
    footerSelectedButtonStyle: {
      backgroundColor: 'green',
    },
  });
};
