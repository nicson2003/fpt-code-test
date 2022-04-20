/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, TouchableOpacity, View, ScrollView} from 'react-native';
import {Header, Button, Input, Icon, Text} from 'react-native-elements';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';

import {useStyle} from './styles';
import {colors} from '../../common/styles';
import StepIndicator from './StepIndicator';

const languageData = [
  {label: 'English', value: '1'},
  {label: 'French', value: '2'},
  {label: 'German', value: '3'},
  {label: 'Spanish', value: '4'},
  {label: 'Swedish', value: '5'},
  {label: 'Japanese', value: '6'},
  {label: 'Chinese', value: '7'},
  {label: 'Filipino', value: '8'},
];

const MultiSelectComponent = () => {
  const [selected, setSelected] = useState([]);
  const styles = useStyle();

  return (
    <View style={styles.m_container}>
      <MultiSelect
        style={styles.m_dropdown}
        placeholderStyle={styles.m_placeholderStyle}
        selectedTextStyle={styles.m_selectedTextStyle}
        inputSearchStyle={styles.m_inputSearchStyle}
        iconStyle={styles.m_iconStyle}
        search
        data={languageData}
        labelField="label"
        valueField="value"
        placeholder="spoken languages"
        searchPlaceholder="English..."
        value={selected}
        onChange={item => {
          setSelected(item);
        }}
        selectedStyle={styles.m_selectedStyle}
      />
    </View>
  );
};

const SocialProfile = () => {
  const styles = useStyle();
  const [facebook, setFaceBook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [xing, setXing] = useState('');

  return (
    <View style={{backgroundColor: colors.formBackground}}>
      <Text style={styles.profileTitleText}>{'Social'}</Text>
      <Text style={styles.profileText}>
        {'Simply type or copy and paste your username or handle.'}
      </Text>
      <Input
        placeholder="https://www.facebook.com/me"
        label="Facebook"
        onChangeText={(value: React.SetStateAction<string>) =>
          setFaceBook(value)
        }
        inputContainerStyle={styles.inputContainer}
        autoCompleteType={undefined}
      />
      <Input
        placeholder="@myuser"
        label="Instagram"
        onChangeText={(value: React.SetStateAction<string>) =>
          setInstagram(value)
        }
        inputContainerStyle={styles.inputContainer}
        autoCompleteType={undefined}
      />
      <Input
        placeholder="@myuser"
        label="Twitter"
        onChangeText={(value: React.SetStateAction<string>) =>
          setTwitter(value)
        }
        inputContainerStyle={styles.inputContainer}
        autoCompleteType={undefined}
      />
      <Input
        placeholder="https://www.linkedin.com/me"
        label="Linkedin"
        onChangeText={(value: React.SetStateAction<string>) =>
          setLinkedin(value)
        }
        inputContainerStyle={styles.inputContainer}
        autoCompleteType={undefined}
      />
      <Input
        placeholder="https://xing.de/me"
        label="Xing"
        onChangeText={(value: React.SetStateAction<string>) => setXing(value)}
        inputContainerStyle={styles.inputContainer}
        autoCompleteType={undefined}
      />
    </View>
  );
};

const GeneralPicture = () => {
  const styles = useStyle();
  const [website, setWebsite] = useState('');

  return (
    <View style={{backgroundColor: colors.formBackground}}>
      <Text style={styles.profileTitleText}>{'General'}</Text>
      <Icon
        name="account-circle"
        size={200}
        color={colors.goldColor}
        tvParallaxProperties={undefined}
      />
      <Text
        style={{
          color: 'gray',
          fontWeight: 'bold',
          fontSize: 22,
          alignSelf: 'center',
        }}>
        {'profile picture'}
      </Text>
      <Text
        style={{
          color: 'gray',
          fontSize: 12,
          alignSelf: 'center',
        }}>
        {'dimensions: round with 500x500px'}
      </Text>

      <MultiSelectComponent />
      <Input
        placeholder="http://www.myspace.com/me"
        label="Personal website"
        onChangeText={(value: React.SetStateAction<string>) =>
          setWebsite(value)
        }
        inputContainerStyle={styles.inputContainer}
        autoCompleteType={undefined}
      />
      <DropdownComponent />
    </View>
  );
};

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const styles = useStyle();

  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <Icon
            style={styles.icon}
            color="red"
            name="handyman"
            size={20}
            tvParallaxProperties={undefined}
          />
        )}
      </View>
    );
  };

  return (
    <View style={{marginHorizontal: 8, marginVertical: 6}}>
      <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 16}}>
        {'Where did you find us? *'}{' '}
      </Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="From a friend"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderItem={renderItem}
      />
    </View>
  );
};

const AboutYouScreen = (props: any) => {
  const {navigation} = props;
  const styles = useStyle();

  useEffect(() => {
    console.log('AboutYouScreen initial load');
  }, []);

  const onGoBack = () => navigation.navigate('contact_information');
  const onProceed = () => navigation.navigate('business_settings');

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
      centerComponent={{text: 'About You', style: styles.heading}}
      rightComponent={{text: '2 of 7', style: styles.headerRightText}}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderView />
      <StepIndicator currentStep={2} allSteps={7} />
      <View style={styles.formStyle}>
        <ScrollView>
          <GeneralPicture />
          <SocialProfile />
        </ScrollView>
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

export default AboutYouScreen;
