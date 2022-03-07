import React, {useEffect, useState} from 'react';
import {View, ImageBackground, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {postRegister} from '../../store/auth';
import {
  Input,
  Button,
  Text,
  useTheme,
  SocialIcon,
  Icon,
} from 'react-native-elements';
import {loginBackground} from '../../assets';
import {useStyle} from './styles';
import {isBlank} from '../../common/services/utils';

const RegistrationScreen = (props: any) => {
  const dispatch = useDispatch();
  const {theme} = useTheme();

  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [enableRegisterButton, setEnableRegisterButton] = useState(false);
  const styles = useStyle(theme);

  useEffect(() => {
    if (!isBlank(userName) && !isBlank(password) && !isBlank(email)) {
      setEnableRegisterButton(true);
    } else {
      setEnableRegisterButton(false);
    }
  }, [userName, password, email]);

  const onRegister = () => {
    if (enableRegisterButton) {
      const userInput = {
        username: userName,
        email: email,
        password,
      };
      dispatch(postRegister(userInput));
    }
  };

  const onNavigate = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ImageBackground
        source={loginBackground}
        resizeMode="cover"
        style={styles.imageBackground}
      />
      <View style={styles.loginForm}>
        <Text
          style={styles.titleText}
          h1
          h1Style={{color: styles.titleText.color}}>
          Create Account
        </Text>
        <Input
          placeholder="User Name*"
          leftIcon={
            <Icon
              name="person"
              size={24}
              color={styles.text.color}
              tvParallaxProperties={undefined}
            />
          }
          onChangeText={value => setUserName(value)}
          autoCompleteType={undefined}
        />
        <Input
          placeholder="Email ID*"
          leftIcon={
            <Icon
              name="mail"
              size={24}
              color={styles.text.color}
              tvParallaxProperties={undefined}
            />
          }
          onChangeText={value => setEmail(value)}
          autoCompleteType={undefined}
        />
        <Input
          placeholder="Password*"
          leftIcon={
            <Icon
              name="lock"
              size={24}
              color={styles.text.color}
              tvParallaxProperties={undefined}
            />
          }
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
          autoCompleteType={undefined}
          errorStyle={styles.buttonErrorStyle}
          errorMessage=""
        />
        <Button
          title="Register Now"
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainerStyle}
          titleStyle={styles.buttonTitleStyle}
          disabled={!enableRegisterButton}
          onPress={onRegister}
        />
        <Text style={styles.text}>Or Register with</Text>
        <View style={styles.row}>
          <SocialIcon
            type={'facebook'}
            iconType={'font-awesome'}
            onPress={() => console.log('login with facebook')}
          />
          <SocialIcon
            type={'twitter'}
            iconType={'font-awesome'}
            onPress={() => console.log('login with facebook')}
          />
          <SocialIcon
            type={'google'}
            iconType={'font-awesome'}
            onPress={() => console.log('login with facebook')}
          />
        </View>
        <Text style={styles.loginText}>
          {'Aready have an account? '}
          <Text style={styles.loginLink} onPress={onNavigate}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default RegistrationScreen;
