import React, {useEffect} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {Header, Button, Icon} from 'react-native-elements';

import {useStyle} from './styles';
import {colors} from '../../common/styles';
import StepIndicator from './StepIndicator';

const MarketingScreen = (props: any) => {
  const {navigation} = props;
  const styles = useStyle();

  useEffect(() => {
    console.log('marketing screen initial load');
  }, []);

  const onGoBack = () => navigation.navigate('your_payment');
  const onProceed = () => navigation.navigate('calendar_integration');

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
      centerComponent={{text: 'Marketing', style: styles.heading}}
      rightComponent={{text: '6 of 7', style: styles.headerRightText}}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderView />
      <StepIndicator currentStep={6} allSteps={7} />
      <View style={styles.formStyle}>
        <Button
          title="Next Step"
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainerStyle}
          titleStyle={styles.buttonTitleStyle}
          onPress={onProceed}
        />
      </View>
    </SafeAreaView>
  );
};

export default MarketingScreen;
