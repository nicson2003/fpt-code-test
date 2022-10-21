import React from 'react';
import {View, SafeAreaView, FlatList, Image} from 'react-native';
import {styles} from './styles';

const data = [
  {id: '1', name: 'name1'},
  {id: '2', name: 'name2'},
  {id: '3', name: 'name3'},
  {id: '4', name: 'name4'},
  {id: '5', name: 'name5'},
  {id: '6', name: 'name6'},
  {id: '7', name: 'name7'},
];

const TopStoryItem = () => {
  const urlToImage =
    'https://newsinfo.inquirer.net/files/2021/10/News193852-620x568.jpg';
  return (
    <View style={styles.storyItem}>
      <Image style={styles.image} source={{uri: urlToImage}} />
    </View>
  );
};

const TopsStoriesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        //renderItem={story => <TopStoryItem story={story} />}
        renderItem={({item}) => <TopStoryItem story={item} />}
        keyExtractor={item => item.id}
        //ItemSeparatorComponent={Separator}
        initialNumToRender={2}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </SafeAreaView>
  );
};

export default TopsStoriesScreen;
