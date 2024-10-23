import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import { strings } from '../utils/strings';
import Gap from '../components/Gap';
import { fonts } from '../utils/fonts';
import CustomInput from '../components/CustomInput';
import useValidation, { ValidationType } from '../hooks/useValidation';
import { AppRoutes } from '../utils/approutes';
import TextButton from '../components/TextButton';
import AppButton from '../components/AppButton';
import OutlinedButton from '../components/OutlinedButton';
const initialEmailState = {
  email: '',
  isValidEmail: false,
};

const initialPasswordState = {
  password: '',
  isValidPassword: false,
};
const LoginScreen = ({ navigation }) => {
  const { state: emailState, handleSubmission: handleEmailSubmission } =
    useValidation(initialEmailState);
  const { state: passwordState, handleSubmission: handlePasswordSubmission } =
    useValidation(initialPasswordState);
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
        <View style={{ width: '100%' }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'start',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={require('../assets/back-button.png')}
                style={{ height: 25, width: 25, tintColor: colors.black }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Gap height={29} width={0} />
            <Text style={styles.titleText}>{strings.loginTitle}</Text>
            <Gap height={35} width={0} />
            <CustomInput
              hint={'Enter your email'}
              image={require('../assets/mail.png')}
              isValid={emailState?.isValidEmail}
              isPassword={false}
              inputType={'email'}
              onChangeText={text => {
                handleEmailSubmission({
                  type: ValidationType.Email,
                  payload: text,
                });
              }}
            />
            <Gap height={20} width={0} />
            <CustomInput
              hint={'Enter your password'}
              image={require('../assets/lock.png')}
              isValid={passwordState?.isValidPassword}
              isPassword={true}
              inputType={'password'}
              onChangeText={text => {
                handlePasswordSubmission({
                  type: ValidationType.Password,
                  payload: text,
                });
              }}
            />
            <Gap height={20} />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: '100%',
                maxWidth: 343,
                alignItems: 'center',
              }}>
              <TextButton text={strings.forgotPassword} onPress={() => {
              }} />
            </View>
            <Gap height={32} />
            <AppButton
              text={strings.login}
              onPress={() => {
                if (emailState.isValidEmail && passwordState.isValidPassword) {
                  navigation.navigate(AppRoutes.Home);
                  console.log(emailState);
                  console.log(passwordState);
                } else {
                  alert('Please enter valid details');
                }
              }}
            />
            <Text
              style={{
                color: colors.black,
                fontFamily: fonts.light,
                fontSize: 12,
                marginVertical: 24,
                textAlign: 'center',
              }}>
              {strings.continue}
            </Text>
            <OutlinedButton icon={require('../assets/google.png')} text={strings.login} onPress={() => { }} />
            <Gap height={24} width={0} />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: colors.primary,
                  fontFamily: fonts.light,
                  fontSize: 13,
                }}>
                Don’t have an account?
              </Text>
              <Gap width={7} />
              <TextButton
                text={strings.signUp}
                onPress={() => {
                  navigation.replace(AppRoutes.SignUp);
                }}
              />
            </View>
          </View>
        </View>
        <Gap height={20} width={0} />
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    alignSelf: 'flex-start',
    borderRadius: 100,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  titleText: {
    fontSize: 32,
    fontFamily: fonts.bold,
    color: colors.black,
    opacity: 0.7,
    lineHeight: 54,
    width: 343,
    textAlign: 'Start',
  },
});
