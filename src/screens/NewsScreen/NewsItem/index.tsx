import React from 'react';
import {StyleSheet, View, Image, Pressable} from 'react-native';
import {Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../common/styles';
import moment from 'moment';

const NewsItem = (props: any) => {
  const navigation = useNavigation();
  const {title, urlToImage, sourceName, publishedAt} = props?.item;
  const relativeTime = moment(publishedAt).fromNow();

  return (
    <View style={styles.newsItem}>
      <View style={styles.leftContainer}>
        {sourceName && <Text style={styles.newsSource}>{sourceName}</Text>}
        <Text style={styles.newsTitle}>{title}</Text>
        <Text style={styles.newsPublished}>{relativeTime}</Text>
      </View>
      {urlToImage && (
        <View style={styles.rightContainer}>
          <Pressable onPress={() => navigation.navigate('NewsDetails')}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{uri: urlToImage}}
            />
          </Pressable>
        </View>
      )}
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

  newsSource: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  newsTitle: {color: 'white', fontWeight: 'bold', fontSize: 12},
  newsPublished: {
    color: 'silver',
    fontWeight: 'bold',
    fontSize: 12,
    bottom: 0,
    position: 'absolute',
  },

  taskTitleContainer: {
    flex: 5,
  },
  newsItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: 10,
    marginBottom: 10,
    backgroundColor: colors.background,
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.background,
    minHeight: 130,
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
  leftContainer: {flex: 4, marginRight: 2},
  rightContainer: {flex: 2, margin: 0},
});
