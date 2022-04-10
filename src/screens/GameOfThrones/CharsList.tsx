import React from 'react';
import {View, FlatList} from 'react-native';

import CharsHeader from './CharsHeader';
import CharsItem from './CharsItem';

import {useStyle} from './styles';

const CharsList = (props: any) => {
  const styles = useStyle();
  const {currentPageItems} = props;

  return (
    <View style={styles.container}>
      <FlatList
        data={currentPageItems}
        ListHeaderComponent={() => <CharsHeader />}
        renderItem={({item}) => <CharsItem item={item} />}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};

export default CharsList;
