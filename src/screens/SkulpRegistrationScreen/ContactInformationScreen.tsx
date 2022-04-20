/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Header, Button, Input} from 'react-native-elements';

import StepIndicator from './StepIndicator';
import {useStyle} from './styles';
import {colors} from '../../common/styles';

const ContactInformationScreen = (props: any) => {
  const {navigation} = props;
  const styles = useStyle();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [prefix, setPrefix] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [pronoun, setPronoun] = useState('');

  useEffect(() => {
    console.log('ContactInformationScreen initial load');
  }, []);

  const onNavigate = () => {
    navigation.navigate('about_you');
  };

  const HeaderView = () => (
    <Header
      backgroundColor={colors.background}
      containerStyle={styles.headerContainer}
      centerComponent={{text: 'Contact Information', style: styles.heading}}
      rightComponent={{text: '1 of 7', style: styles.headerRightText}}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderView />
      <StepIndicator currentStep={1} allSteps={7} />
      <View style={styles.formStyle}>
        <Input
          placeholder="Max"
          label="Firstname *"
          onChangeText={(value: React.SetStateAction<string>) =>
            setFirstName(value)
          }
          value={firstName}
          inputContainerStyle={styles.inputContainer}
          autoCompleteType={undefined}
        />

        <Input
          placeholder="Mustermann"
          label="Lastname *"
          onChangeText={(value: React.SetStateAction<string>) =>
            setLastName(value)
          }
          value={lastName}
          inputContainerStyle={styles.inputContainer}
          autoCompleteType={undefined}
        />

        <Input
          placeholder="Hauptstrabe"
          label="Address *"
          onChangeText={(value: React.SetStateAction<string>) =>
            setAddress(value)
          }
          value={address}
          inputContainerStyle={styles.inputContainer}
          autoCompleteType={undefined}
        />

        <Input
          placeholder="13a"
          label="House number *"
          onChangeText={(value: React.SetStateAction<string>) =>
            setHouseNumber(value)
          }
          value={houseNumber}
          inputContainerStyle={styles.inputContainer}
          autoCompleteType={undefined}
        />
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          <View style={{flex: 2}}>
            <Input
              placeholder="(+1)"
              label="prefix *"
              onChangeText={(value: React.SetStateAction<string>) =>
                setPrefix(value)
              }
              value={prefix}
              inputContainerStyle={[styles.inputContainer]}
              autoCompleteType={undefined}
            />
          </View>
          <View style={{flex: 4}}>
            <Input
              placeholder="0160 123 134 21"
              label="phone *"
              onChangeText={(value: React.SetStateAction<string>) =>
                setPhoneNumber(value)
              }
              inputContainerStyle={[styles.inputContainer]}
              autoCompleteType={undefined}
            />
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          <View style={{flex: 3}}>
            <Input
              placeholder="01.01.200"
              label="Date of birth *"
              onChangeText={(value: React.SetStateAction<string>) =>
                setDateOfBirth(value)
              }
              inputContainerStyle={[styles.inputContainer]}
              autoCompleteType={undefined}
            />
          </View>
          <View style={{flex: 3}}>
            <Input
              placeholder="she/her"
              label="preferred pronoun *"
              onChangeText={(value: React.SetStateAction<string>) =>
                setPronoun(value)
              }
              inputContainerStyle={[styles.inputContainer]}
              autoCompleteType={undefined}
            />
          </View>
        </View>

        <Button
          title="Next Step"
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainerStyle}
          titleStyle={styles.buttonTitleStyle}
          //disabled={!enableLoginButton}
          onPress={onNavigate}
        />
      </View>
    </SafeAreaView>
  );
};

export default ContactInformationScreen;
