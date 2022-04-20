import React from 'react';
import {View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {colors} from '../../common/styles';
import {useStyle} from './styles';

const MaintenanceScreen = () => {
  const styles = useStyle();

  return (
    <View style={styles.centerContainer}>
      <Icon
        name="handyman"
        size={200}
        color={colors.orange}
        tvParallaxProperties={undefined}
      />
      <Text
        style={styles.titleText}
        h1
        h1Style={{color: styles.titleText.color}}>
        This screen is on repair
      </Text>
    </View>
  );
};

export default MaintenanceScreen;
