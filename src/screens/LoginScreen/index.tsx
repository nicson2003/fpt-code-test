import React, {useEffect, useState} from 'react';
import {View, ImageBackground, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
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
import {postAuth} from '../../store/auth';

const LoginScreen = (props: any) => {
  const dispatch = useDispatch();
  const {theme} = useTheme();
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [enableLoginButton, setEnableLoginButton] = useState(false);
  const styles = useStyle(theme);

  useEffect(() => {
    if (!isBlank(email) && !isBlank(password)) {
      setEnableLoginButton(true);
    } else {
      setEnableLoginButton(false);
    }

    return function cleanup() {
      setEnableLoginButton(false);
    };
  }, [email, password]);

  const onLogin = () => {
    if (enableLoginButton) {
      const userInput = {
        email,
        password,
      };
      dispatch(postAuth(userInput));
    }
  };

  const onNavigate = () => {
    props.navigation.navigate('Register');
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
          Welcome Back
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
          title="LOG IN"
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainerStyle}
          titleStyle={styles.buttonTitleStyle}
          disabled={!enableLoginButton}
          onPress={onLogin}
        />
        <Text style={styles.text}>Or Login with</Text>
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
        <Text style={styles.registerText}>
          {"Don't have an account? "}
          <Text style={styles.registerLink} onPress={onNavigate}>
            Register Now
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
