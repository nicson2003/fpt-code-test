/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {Header, Button, Icon} from 'react-native-elements';

import {useStyle} from './styles';
import {colors} from '../../common/styles';
import StepIndicator from './StepIndicator';
import MaintenanceScreen from './MaintenanceScreen';

const AboutYouScreen = (props: any) => {
  const {navigation} = props;
  const styles = useStyle();
  const [error, setError] = useState(true);

  useEffect(() => {
    console.log('AboutYouScreen initial load');
  }, []);

  const onGoBack = () => navigation.navigate('about_you');
  const onProceed = () => navigation.navigate('edit_your_space');

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
      centerComponent={{text: 'Business Settings', style: styles.heading}}
      rightComponent={{text: '3 of 7', style: styles.headerRightText}}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderView />
      <StepIndicator currentStep={3} allSteps={7} />
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

export default AboutYouScreen;
