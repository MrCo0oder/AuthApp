import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {fonts} from '../utils/fonts';
import {colors} from '../utils/colors';

const CustomInput = ({
  isPassword = false,
  hint,
  image,
  isValid=true,
  onChangeText,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={{height: 25, width: 25, tintColor: colors.black}}
      />
      <TextInput
        style={styles.input}
        placeholder={hint}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangeText}
        secureTextEntry={isPassword && showPassword}
        placeholderTextColor={colors.black}
        cursorColor={colors.black}
        {...props}
      />
      {isPassword ? (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image
            source={require('../assets/password.png')}
            style={{height: 25, width: 25, tintColor: colors.black}}
          />
        </TouchableOpacity>
      ) : isValid ? (
        <Image
          source={require('../assets/valid.png')}
          resizeMode="center"
          style={{height: 25, width: 25, tintColor: colors.black}}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 100,
    width: '100%',
    maxWidth: 343,
    height: 60,
    alignContent: 'center',
    paddingHorizontal: 10,
  },
  input: {
    width: '80%',
    paddingHorizontal: 10,
    fontFamily: fonts.light,
    fontSize: 14,
    color: colors.black,
  },
});

export default CustomInput;
