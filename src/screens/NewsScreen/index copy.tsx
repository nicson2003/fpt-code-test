import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {fetchNews, selectAllNews, newsData} from '../../store/news';
import {Header, Avatar, Icon, Badge, Text} from 'react-native-elements';
import NewsItem from './NewsItem';
import TopsStoriesScreen from './TopStoriesScreen';
import {colors} from '../../common/styles';

const NewsScreen = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {loading} = useSelector((state: RootState) => state.news);
  const news = useSelector(selectAllNews);

  useEffect(() => {
    //dispatch(fetchNews());
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

  return (
    <View>
      <HeaderView />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TopsStoriesScreen />
        <FlatList
          data={news}
          renderItem={({item}) => <NewsItem item={item} />}
          keyExtractor={item => item?.id}
        />
      </ScrollView>
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
    marginHorizontal: 15,
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
  leftContainer: {flex: 2, marginRight: 0},
  rightContainer: {flex: 4, margin: 0},
});
