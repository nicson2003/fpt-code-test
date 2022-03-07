import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {fetchNews, selectAllNews, newsData} from '../../store/news';
import {Icon, Header, Avatar, Badge} from 'react-native-elements';
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

  const TodoItem = (props: any) => {
    const {title, completed} = props?.item;
    return (
      <View style={styles.todoItem}>
        <View style={styles.taskTitleContainer}>
          <Text style={styles.taskTitle}>{title}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <HeaderView />
      <View style={styles.container}>
        <FlatList
          data={news}
          renderItem={({item}) => <TodoItem item={item} />}
          keyExtractor={(item: newsData) => item?.title || item?.source?.name}
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
    backgroundColor: colors.background,
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors?.white,
  },
});
