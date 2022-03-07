import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {fetchNews, selectAllNews, newsData} from '../../store/news';
import {
  Text,
  Card,
  Button,
  Header,
  Avatar,
  Icon,
  Badge,
} from 'react-native-elements';
import {colors} from '../../common/styles';

const NewsScreen = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {loading} = useSelector((state: RootState) => state.news);
  const news = useSelector(selectAllNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  const HeaderView = () => (
    <Header
      backgroundColor={colors.background}
      leftComponent={
        <TouchableOpacity onPress={() => navigation?.toggleDrawer()}>
          <Icon
            name="menu"
            size={24}
            color={colors.text}
            tvParallaxProperties={undefined}
          />
        </TouchableOpacity>
      }
      rightComponent={
        <View style={styles.headerRight}>
          <View>
            <Avatar
              rounded
              source={{uri: 'https://randomuser.me/api/portraits/men/41.jpg'}}
              size="medium"
            />
            {!news?.length ? (
              <Badge
                status="success"
                value={200 || news?.length}
                containerStyle={{position: 'absolute', top: 5, left: 60}}
              />
            ) : null}
          </View>
        </View>
      }
      centerComponent={{text: 'Latest News', style: styles.heading}}
    />
  );

  const NewsItem_ = (props: any) => {
    const {title} = props?.item;
    return (
      <View style={styles.todoItem}>
        <Icon
          name="delete"
          size={24}
          color={colors.text}
          tvParallaxProperties={undefined}
          onPress={() => console.log('completed')}
        />
        <View style={styles.taskTitleContainer}>
          <Text style={styles.taskTitle}>{title}</Text>
        </View>
      </View>
    );
  };
  const NewsItem = (props: any) => {
    const {title, urlToImage} = props?.item;
    return (
      <Card containerStyle={styles.todoItem}>
        <Card.Image
          //style={styles.image}
          resizeMode="contain"
          source={{uri: urlToImage}}
        />
        <View style={styles.taskTitleContainer}>
          <Card.FeaturedTitle h4 h4Style={styles.taskTitle}>
            {title}
          </Card.FeaturedTitle>
        </View>
      </Card>
    );
  };

  return (
    <View>
      <HeaderView />
      <View style={styles.container}>
        <FlatList
          data={news}
          renderItem={({item}) => <NewsItem item={item} />}
          keyExtractor={(item: newsData) => item?.id || item?.title}
        />
      </View>
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  container: {
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
    marginTop: 5,
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
  taskTitle: {color: colors.text, fontWeight: 'bold', fontSize: 14},
  taskTitleContainer: {
    flex: 1,
  },
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: colors.background,
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors?.white,
    minHeight: 100,
  },
  image: {
    width: 100,
    height: 100,
  },
});
