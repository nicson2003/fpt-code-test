/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import ContactForm from './ContactInformationScreen';

import {useStyle} from './styles';

export interface selectionItem {
  label: string;
  value: string;
}

export interface filterItem {
  key: string;
  value: string;
}

const RegistrationScreen = (props: any) => {
  const {navigation} = props;
  const styles = useStyle();

  useEffect(() => {
    console.log('RegistrationScreen initial load');
  }, []);

  return (
    <SafeAreaView style={styles.stackContainer}>
      <ContactForm navigation={navigation} />
    </SafeAreaView>
  );
};

export default RegistrationScreen;
