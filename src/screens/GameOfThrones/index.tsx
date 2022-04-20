/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, TouchableOpacity, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {
  fetchCharacters,
  selectAllCharacters,
  selectTotalCharacters,
  charData,
} from '../../store/chars';

import {useStyle} from './styles';

import CharsFilter from './CharsFilter';
import CharsFooter from './CharsFooter';
import CharsList from './CharsList';

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

  const onFilter = () => {
    setSelectedPage(0);
    const filteredChar = characters.filter(char => {
      return char[filters.key] === filters.value;
    });
    if (!isBlank(filteredChar)) {
      setCurrentPageItems(filteredChar.slice(0, itemsPerPage));
    }
    
    console.log(filters);
    console.log(filteredChar.length)
  };

  return (
    <SafeAreaView style={{flex: 1, marginTop: 60}}>
      <CharsFilter
        onFilter={onFilter}
        setFilters={setFilters}
        sourceData={characters}
      />
      {isLoading ? (
        <ActivityIndicator size="large" style={styles.loader} />
      ) : (
        <CharsList currentPageItems={currentPageItems} />
      )}
      {numOfPages >= 2 && (
        <CharsFooter
          selectedPage={selectedPage}
          numOfPages={numOfPages}
          itemsPerPage={itemsPerPage}
          setCurrentPageItems={setCurrentPageItems}
          setSelectedPage={setSelectedPage}
          numOfRecords={numOfRecords}
          sourceData={characters}
        />
      )}
    </SafeAreaView>
  );
};

export default CharactersList;
