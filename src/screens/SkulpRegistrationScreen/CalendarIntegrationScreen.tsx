/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {Header, Button, Icon} from 'react-native-elements';

import {useStyle} from './styles';
import {colors} from '../../common/styles';
import StepIndicator from './StepIndicator';

const CalendarIntegrationScreen = (props: any) => {
  const {navigation} = props;
  const styles = useStyle();

  useEffect(() => {
    console.log('CalendarIntegrationScreen initial load');
  }, []);

  const onGoBack = () => navigation.navigate('marketing');
  const onSave = () => {
    alert('saving records');
  };

  const HeaderView = () => (
    <Header
      backgroundColor={colors.background}
      containerStyle={styles.headerContainer}
      leftComponent={
        <TouchableOpacity onPress={onGoBack}>
          <Icon
            name="chevron-left"
            size={30}
            color={colors.goldColor}
            tvParallaxProperties={undefined}
          />
        </TouchableOpacity>
      }
      centerComponent={{text: 'Calendar Integration', style: styles.heading}}
      rightComponent={{text: '7 of 7', style: styles.headerRightText}}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderView />
      <StepIndicator currentStep={7} allSteps={7} />
      <View style={styles.formStyle}>
        <Button
          title="Save"
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainerStyle}
          titleStyle={styles.buttonTitleStyle}
          //disabled={!enableLoginButton}
          onPress={onSave}
        />
      </View>
    </SafeAreaView>
  );
};

export default CalendarIntegrationScreen;
