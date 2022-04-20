import React from 'react';
import {View} from 'react-native';

import {useStyle} from './stepIndicatorStyle';

export interface stepIndicatorProps {
  allSteps: number;
  currentStep: number;
}

const StepIndicator = (props: stepIndicatorProps) => {
  const {allSteps, currentStep} = props;
  const progressWidth = `${Math.round((currentStep / allSteps) * 100)}%`;
  const styles = useStyle(progressWidth || '50%');

  return <View style={styles.stepsContainer} />;
};

export default StepIndicator;
