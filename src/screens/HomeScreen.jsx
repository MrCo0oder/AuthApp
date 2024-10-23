import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView
      centerContent={true}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <View
        style={{
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          gap: 2,
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/on-boarding-illistration.png')}
          style={styles.illistration}
        />
        <Image
          source={require('../assets/on-boarding-illistration.png')}
          style={styles.illistration}
        />
        <Image
          source={require('../assets/on-boarding-illistration.png')}
          style={styles.illistration}
        />
        <Image
          source={require('../assets/on-boarding-illistration.png')}
          style={styles.illistration}
        />
        <Image
          source={require('../assets/on-boarding-illistration.png')}
          style={styles.illistration}
        />
        <Image
          source={require('../assets/on-boarding-illistration.png')}
          style={styles.illistration}
        />
        <Image
          source={require('../assets/on-boarding-illistration.png')}
          style={styles.illistration}
        />
        <Image
          source={require('../assets/on-boarding-illistration.png')}
          style={styles.illistration}
        />
        <Image
          source={require('../assets/on-boarding-illistration.png')}
          style={styles.illistration}
        />
        <Image
          source={require('../assets/on-boarding-illistration.png')}
          style={styles.illistration}
        />
        <Image
          source={require('../assets/on-boarding-illistration.png')}
          style={styles.illistration}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
  logo: {
    width: 150,
    resizeMode: 'contain',
    height: 50,
  },
  illistration: {
    width: 231,
    maxHeight: 231,
    resizeMode: 'center',
  },
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: fonts.bold,
    color: colors.black,
    lineHeight: 54,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 13,
    fontWeight: '500',
    fontFamily: fonts.semiBold,
    color: colors.black,
    textAlign: 'center',
    lineHeight: 19.5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    borderColor: colors.primary,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderRadius: 100,
    width: '80%',
    maxWidth: 360,
    height: 60,
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '55%',
    backgroundColor: colors.primary,
    borderRadius: 100,
  },
  signUpButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    paddingEnd: 20,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.semiBold,
    lineHeight: 16.8,
  },
  signUpButtonText: {
    color: colors.primary,
    fontSize: 12,
    fontFamily: fonts.semiBold,
    lineHeight: 16.8,
  },
});
