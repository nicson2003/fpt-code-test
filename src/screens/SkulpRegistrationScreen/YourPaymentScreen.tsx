import React, {useEffect} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {Header, Button, Icon} from 'react-native-elements';

import {useStyle} from './styles';
import {colors} from '../../common/styles';
import StepIndicator from './StepIndicator';

const YourPaymentScreen = (props: any) => {
  const {navigation} = props;
  const styles = useStyle();

  useEffect(() => {
    console.log('YourPaymentScreen initial load');
  }, []);

  const onGoBack = () => navigation.navigate('edit_your_space');
  const onProceed = () => navigation.navigate('marketing');

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
      centerComponent={{text: 'Your Payment', style: styles.heading}}
      rightComponent={{text: '5 of 7', style: styles.headerRightText}}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderView />
      <StepIndicator currentStep={5} allSteps={7} />
      <View style={styles.formStyle}>
        <Button
          title="Next Step"
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainerStyle}
          titleStyle={styles.buttonTitleStyle}
          //disabled={!enableLoginButton}
          onPress={onProceed}
        />
      </View>
    </SafeAreaView>
  );
};

export default YourPaymentScreen;
