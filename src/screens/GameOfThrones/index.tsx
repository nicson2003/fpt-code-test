/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {fetchCharacters, selectAllCharacters} from '../../store/chars';
import {Header, Icon, Text, Button} from 'react-native-elements';
import {colors} from '../../common/styles';
import {Picker} from '@react-native-picker/picker';

const CharsHeader = () => {
  return (
    <View style={styles.rowStyle}>
      <View style={styles.idStyle}>
        <Text style={styles.headerTextStyle}>{'ID'}</Text>
      </View>
      <View style={styles.cellStyle}>
        <Text style={styles.headerTextStyle}>{'Image'}</Text>
      </View>
      <View style={styles.cellStyle}>
        <Text style={styles.headerTextStyle}>{'First Name'}</Text>
      </View>

      <View style={styles.cellStyle}>
        <Text style={styles.headerTextStyle}>{'Last Name'}</Text>
      </View>

      <View style={styles.cellStyle}>
        <Text style={styles.headerTextStyle}>{'Title'}</Text>
      </View>

      <View style={styles.cellStyle}>
        <Text style={styles.headerTextStyle}>{'Family'}</Text>
      </View>
    </View>
  );
};

const CharsItem = (props: any) => {
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

interface selectionItem {
  label: string;
  value: string;
}

const CharsFilter = (props: any) => {
  const {refetch} = props;

  const firstFilterField = [
    {label: 'Title', value: 'title'},
    {label: 'First Name', value: 'firstName'},
  ];

  const secondFilterFields = [
    {label: 'Family', value: 'family'},
    {label: 'Last Name', value: 'lastName'},
  ];

  const [firstFilter, setFirstFilter] = useState<selectionItem>(
    firstFilterField[0],
  );
  const [secondFilter, setSecondFilter] = useState<selectionItem>(
    secondFilterFields[1],
  );

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.filterContainer}>
      <Picker
        style={styles.pickerStyle}
        selectedValue={firstFilter}
        onValueChange={(itemValue: selectionItem) => setFirstFilter(itemValue)}>
        {firstFilterField.map((filter: any) => {
          return (
            <Picker.Item
              key={filter.label}
              label={filter.label}
              value={filter.value}
            />
          );
        })}
      </Picker>
      <Picker
        style={[styles.pickerStyle, {marginLeft: 10}]}
        selectedValue={secondFilter}
        onValueChange={(itemValue: selectionItem) =>
          setSecondFilter(itemValue)
        }>
        {secondFilterFields.map((filter: any) => {
          return (
            <Picker.Item
              key={filter.label}
              label={filter.label}
              value={filter.value}
            />
          );
        })}
      </Picker>

      <Button
        title={'Filter'}
        containerStyle={styles.buttonContainerStyle}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonTitleStyle}
        onPress={refetch}
      />
    </ScrollView>
  );
};

const CharactersList = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {loading} = useSelector((state: RootState) => state.characters);
  const characters = useSelector(selectAllCharacters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  const onFetchMore = () => {
    dispatch(fetchCharacters());
    console.log(characters);
  };

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
      centerComponent={{text: 'Characters', style: styles.heading}}
    />
  );

  return (
    <>
      <HeaderView />

      <View style={styles.container}>
        <CharsFilter refetch={onFetchMore} />
        <FlatList
          data={characters}
          ListHeaderComponent={() => <CharsHeader />}
          renderItem={({item}) => <CharsItem item={item} />}
          keyExtractor={(item, index) => `${item.id}${index}`}
        />
      </View>
    </>
  );
};

export default CharactersList;

const styles = StyleSheet.create({
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  container: {
    marginHorizontal: 10,
    backgroundColor: 'gray',
    height: 'auto',
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
  buttonContainerStyle: {
    width: 80,
    marginHorizontal: 15,
  },
  buttonStyle: {
    width: 80,
    backgroundColor: 'gray',
    height: 50,
    borderRadius: 0,
  },
  buttonTitleStyle: {color: 'black'},
  pickerStyle: {width: 180, backgroundColor: 'gray'},
  filterContainer: {
    overflow: 'hidden',
    shadowColor: 'green',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  gridContainer: {
    width: 220,
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'flex-start',
  },
  cellStyle: {
    flex: 1,
    padding: 15,
    width: 60,
  },
  image: {
    width: 60,
    height: 60,
  },
  idStyle: {
    marginHorizontal: 10,
  },
  headerTextStyle: {fontSize: 14, fontWeight: 'bold'},
});
