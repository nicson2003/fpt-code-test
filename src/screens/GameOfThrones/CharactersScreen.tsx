import React, {useState, useEffect, useContext, useCallback} from 'react';
import {useTheme, Text} from 'react-native-elements';
import {View, Image, ScrollView} from 'react-native';
import {useStyle} from './styles';

const sampleData = [
  {
    id: 0,
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    fullName: 'Daenerys Targaryen',
    title: 'Mother of Dragons',
    family: 'House Targaryen',
    image: 'daenerys.jpg',
    imageUrl: 'https://thronesapi.com/assets/images/daenerys.jpg',
  },
  {
    id: 1,
    firstName: 'Samwell',
    lastName: 'Tarly',
    fullName: 'Samwell Tarly',
    title: 'Maester',
    family: 'House Tarly',
    image: 'sam.jpg',
    imageUrl: 'https://thronesapi.com/assets/images/sam.jpg',
  },
];

const CharacterList = () => {
  const {theme} = useTheme();
  const styles = useStyle(theme);

  const TableHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>testing</Text>
        <Text style={styles.text}>testing</Text>
        <Text style={styles.text}>testing</Text>
      </View>
    );
  };

  const Chars = (item: any) => {
    console.log('chars');
    return (
      <View style={styles.item}>
        {/**
         * id, image, name
         */}
        <Text style={styles.text}> {item.id}</Text>
        <Image source={item?.ImageUrl} style={styles.imageStyle} />
      </View>
    );
  };

  return (
    <View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text>testing</Text>

        {sampleData &&
          sampleData.map((item: any) => {
            <Chars item={item} />;
          })}
      </ScrollView>
    </View>
  );
};

export default CharacterList;
