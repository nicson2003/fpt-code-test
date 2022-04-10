import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';

import {useStyle} from './styles';

const CharsHeader = () => {
  const styles = useStyle();
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

export default CharsHeader;
