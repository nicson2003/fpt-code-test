/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import {selectionItem} from './index';
import {useStyle} from './styles';

const CharsFilter = (props: any) => {
  const {onFilter, sourceData, setFilters} = props;
  const styles = useStyle();

  const filterKey = [
    {label: 'Title', value: 'title'},
    {label: 'Family', value: 'family'},
    {label: 'Last Name', value: 'lastName'},
    {label: 'All', value: 'all'},
  ];

  const [filterValue, setFilterValue] = useState<selectionItem[]>([] || null);
  const [firstFilter, setFirstFilter] = useState<selectionItem>(filterKey[0]);
  const [secondFilter, setSecondFilter] = useState<selectionItem>(
    filterValue[0],
  );

  return (
    <View style={{padding: 10}}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}>
        <Picker
          style={styles.pickerStyle}
          selectedValue={firstFilter}
          onValueChange={(itemValue: selectionItem) => {
            setFirstFilter(itemValue);
            const newFilterValue = [
              ...new Map(
                sourceData.map(item => [item[itemValue], item[itemValue]]),
              ).values(),
            ].map(char => {
              return {label: itemValue, value: char};
            });
            setFilterValue(newFilterValue);
            setFilters({key: itemValue, value: newFilterValue[0].value});
          }}>
          {filterKey.map((filter: any, index: number) => {
            return (
              <Picker.Item
                key={`${filter.label}${index}`}
                label={filter.label}
                value={filter.value}
              />
            );
          })}
        </Picker>
        {filterValue.length > 1 && (
          <Picker
            style={[styles.pickerStyle, {marginLeft: 10}]}
            selectedValue={secondFilter}
            onValueChange={(itemValue: selectionItem) => {
              setSecondFilter(itemValue);
              setFilters({key: firstFilter, value: itemValue});
            }}>
            {filterValue.map((filter: any, index: number) => {
              if (filter.value && filter.label) {
                return (
                  <Picker.Item
                    key={`${filter.label}${index}`}
                    label={filter.value}
                    value={filter.value}
                  />
                );
              }
            })}
          </Picker>
        )}
        <Button
          title={'Filter'}
          containerStyle={styles.buttonContainerStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitleStyle}
          disabled={!filterValue.length}
          onPress={() => {
            onFilter();
          }}
        />
      </ScrollView>
    </View>
  );
};

export default CharsFilter;
