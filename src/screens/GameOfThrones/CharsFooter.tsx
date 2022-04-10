import React, {useState} from 'react';
import {View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

import {useStyle} from './styles';

const CharsFooter = (props: any) => {
  const styles = useStyle();
  const {
    numOfPages,
    itemsPerPage: pages,
    numOfRecords,
    setCurrentPageItems,
    setSelectedPage,
    selectedPage,
    sourceData,
  } = props;

  const pagination = (
    length: number = numOfRecords,
    currentPage: number = 0,
    itemsPerPage: number = pages,
  ) => {
    return {
      total: length,
      per_page: itemsPerPage,
      current_page: currentPage,
      last_page: Math.ceil(length / itemsPerPage),
      from: (currentPage - 1) * itemsPerPage + 1,
      to: currentPage * itemsPerPage,
    };
  };

  const buttonArr = [...Array(numOfPages).keys()].map(i => i + 1);

  return (
    <View style={styles.footerView}>
      <ButtonGroup
        buttons={buttonArr}
        selectedIndex={selectedPage}
        onPress={value => {
          setSelectedPage(value);
          const paginate = pagination(numOfRecords, value + 1, pages);
          setCurrentPageItems([]);
          setCurrentPageItems(sourceData.slice(paginate.from - 1, paginate.to));
        }}
        containerStyle={styles.footerContainerStyle}
        selectedButtonStyle={styles.footerSelectedButtonStyle}
      />
    </View>
  );
};

export default CharsFooter;
