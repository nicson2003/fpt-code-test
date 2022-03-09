import {StyleSheet} from 'react-native';
import {colors} from '../../../common/styles';

export const styles = StyleSheet.create({
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  container: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
  dataContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    padding: 4,
  },

  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addTaskStyle: {
    marginBottom: 0,
    marginHorizontal: 15,
    //backgroundColor: 'red',
  },
  taskTitle: {color: colors.text, fontWeight: 'bold', fontSize: 20},
  taskTitleContainer: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: colors.orange,
    padding: 15,
  },
  MainContainer: {
    backgroundColor: 'white',
    paddingBottom: 140,
  },

  separatorStyle: {
    height: 50,
    width: 2,
    backgroundColor: 'white',
  },
  bottomPlaceHolder: {
    height: 110,
  },
});
