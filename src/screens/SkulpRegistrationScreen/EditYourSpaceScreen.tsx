/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {Header, Button, Icon} from 'react-native-elements';

import {useStyle} from './styles';
import {colors} from '../../common/styles';
import StepIndicator from './StepIndicator';
import MaintenanceScreen from './MaintenanceScreen';

export interface selectionItem {
  label: string;
  value: string;
}

export interface filterItem {
  key: string;
  value: string;
}

const EditYourSpaceScreen = (props: any) => {
  const {navigation} = props;
  const styles = useStyle();
  const [error, setError] = useState(true);

  useEffect(() => {
    console.log('EditYourSpaceScreen initial load');
  }, []);

  const onGoBack = () => navigation.navigate('business_settings');
  const onProceed = () => navigation.navigate('your_payment');

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
      centerComponent={{text: 'Edit Your Space', style: styles.heading}}
      rightComponent={{text: '4 of 7', style: styles.headerRightText}}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderView />
      <StepIndicator currentStep={4} allSteps={7} />
      <View style={styles.formStyle}>
        {error ? (
          <MaintenanceScreen />
        ) : (
          <Button
            title="Next Step"
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainerStyle}
            titleStyle={styles.buttonTitleStyle}
            //disabled={!enableLoginButton}
            onPress={onProceed}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default EditYourSpaceScreen;
