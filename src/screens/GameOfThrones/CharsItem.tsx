import React from 'react';
import {View, Image} from 'react-native';
import {Text} from 'react-native-elements';

import {useStyle} from './styles';

const CharsItem = (props: any) => {
  const styles = useStyle();
  const {id, imageUrl, firstName, lastName, title, family} = props?.item;
  return (
    <View style={styles.rowStyle}>
      <View style={styles.idStyle}>
        <Text>{id}</Text>
      </View>

      <View style={styles.cellStyle}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: imageUrl}}
        />
      </View>
      <View style={styles.cellStyle}>
        <Text>{firstName}</Text>
      </View>

      <View style={styles.cellStyle}>
        <Text>{lastName}</Text>
      </View>

      <View style={styles.cellStyle}>
        <Text>{title}</Text>
      </View>

      <View style={styles.cellStyle}>
        <Text>{family}</Text>
      </View>
    </View>
  );
};

export default CharsItem;
