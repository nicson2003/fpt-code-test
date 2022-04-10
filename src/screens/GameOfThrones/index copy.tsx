/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, Fragment, useCallback} from 'react';
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {
  fetchCharacters,
  selectAllCharacters,
  selectTotalCharacters,
  charData,
} from '../../store/chars';
import {Header, Icon} from 'react-native-elements';
import {colors} from '../../common/styles';

import {useStyle} from './styles';

import CharsHeader from './CharsHeader';
import CharsFilter from './CharsFilter';
import CharsItem from './CharsItem';
import CharsFooter from './CharsFooter';

import {isBlank} from '../../common/services/utils';

export interface selectionItem {
  label: string;
  value: string;
}

export interface filterItem {
  key: string;
  value: string;
}

const CharactersList = (props: any) => {
  const {navigation} = props;
  const styles = useStyle();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const {loading} = useSelector((state: RootState) => state.characters);
  const itemsPerPage = 10;
  const [numOfPages, setNumOfPages] = useState<number>(0);
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [currentPageItems, setCurrentPageItems] = useState<charData[]>([]);
  const [filters, setFilters] = useState<filterItem[] | filterItem | any>([]);
  const [numOfRecords, setNumOfRecords] = useState<number>(0);
  const characters = useSelector(selectAllCharacters);
  const totalCharacters = useSelector(selectTotalCharacters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  useEffect(() => {
    if (!loading || totalCharacters) {
      const remainder = totalCharacters % itemsPerPage;
      const recPerPage = remainder
        ? Math.round(totalCharacters / itemsPerPage) + 1
        : Math.round(totalCharacters / itemsPerPage);
      setNumOfPages(recPerPage);
      setNumOfRecords(totalCharacters);
      setCurrentPageItems(characters.slice(0, itemsPerPage));
      setIsLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      //setIsLoading(false);
    }, 500);
  }, [setSelectedPage]);

  const onFilter = () => {
    setSelectedPage(0);
    const filteredChar = characters.filter(char => {
      return char[filters.key] === filters.value;
    });
    !isBlank(filteredChar) &&
      setCurrentPageItems(filteredChar.slice(0, itemsPerPage));
  };

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

  const renderItem = useCallback(({item}) => <CharsItem item={item} />, []);
  const keyExtractor = useCallback(item => item.id.toString(), []);

  return (
    <Fragment>
      <HeaderView />
      <CharsFilter
        onFilter={onFilter}
        setFilters={setFilters}
        sourceData={characters}
      />
      {isLoading ? (
        <ActivityIndicator size="large" style={styles.loader} />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={currentPageItems}
            ListHeaderComponent={CharsHeader()}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </View>
      )}
      <CharsFooter
        selectedPage={selectedPage}
        numOfPages={numOfPages}
        itemsPerPage={itemsPerPage}
        setCurrentPageItems={setCurrentPageItems}
        setSelectedPage={setSelectedPage}
        numOfRecords={numOfRecords}
        sourceData={characters}
      />
    </Fragment>
  );
};

export default CharactersList;
