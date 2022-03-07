import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-elements';
import {colors} from '../../../common/styles';

const NewsItem = (props: any) => {
  const {title, urlToImage} = props?.item;
  return (
    <View style={styles.todoItem}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: urlToImage}}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.newsTitle}>{title}</Text>
      </View>
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  container: {
    marginHorizontal: 15,
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
    marginTop: 5,
  },

  newsTitle: {color: 'white', fontWeight: 'bold', fontSize: 14},
  taskTitleContainer: {
    flex: 5,
  },
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: 10,
    marginBottom: 10,
    backgroundColor: colors.background,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.background,
    minHeight: 100,
    shadowColor: colors.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  image: {
    width: 100,
    height: 100,
  },
  leftContainer: {flex: 2, marginRight: 0},
  rightContainer: {flex: 4, margin: 0},
});
