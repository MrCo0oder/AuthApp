import { StyleSheet,  View } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Animatable.Image source={require('../assets/logo.png')} 
        style={styles.logo} 
        animation="bounceInUp"  
        duration={2000}  
        onAnimationEnd={() => navigation.replace("onboarding")}
        />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundColor
    },
    logo: {
        width: 150,
        resizeMode: 'contain',
        height: 50,
    },  
});

// // 
// export type Animation =
// | 'bounce'r
// | 'flash'
// | 'jello'
// | 'pulse'
// | 'rotate'
// | 'rubberBand'
// | 'shake'
// | 'swing'
// | 'tada'
// | 'wobble'
// | 'bounceIn'
// | 'bounceInDown'
// | 'bounceInUp'
// | 'bounceInLeft'
// | 'bounceInRight'
// | 'bounceOut'
// | 'bounceOutDown'
// | 'bounceOutUp'
// | 'bounceOutLeft'
// | 'bounceOutRight'
// | 'fadeIn'
// | 'fadeInDown'
// | 'fadeInDownBig'
// | 'fadeInUp'
// | 'fadeInUpBig'
// | 'fadeInLeft'
// | 'fadeInLeftBig'
// | 'fadeInRight'
// | 'fadeInRightBig'
// | 'fadeOut'
// | 'fadeOutDown'
// | 'fadeOutDownBig'
// | 'fadeOutUp'
// | 'fadeOutUpBig'
// | 'fadeOutLeft'
// | 'fadeOutLeftBig'
// | 'fadeOutRight'
// | 'fadeOutRightBig'
// | 'flipInX'
// | 'flipInY'
// | 'flipOutX'
// | 'flipOutY'
// | 'lightSpeedIn'
// | 'lightSpeedOut'
// | 'slideInDown'
// | 'slideInUp'
// | 'slideInLeft'
// | 'slideInRight'
// | 'slideOutDown'
// | 'slideOutUp'
// | 'slideOutLeft'
// | 'slideOutRight'
// | 'zoomIn'
// | 'zoomInDown'
// | 'zoomInUp'
// | 'zoomInLeft'
// | 'zoomInRight'
// | 'zoomOut'
// | 'zoomOutDown'
// | 'zoomOutUp'
// | 'zoomOutLeft'
// | 'zoomOutRight';

// export type Easing =
//   | 'linear'
//   | 'ease'
//   | 'ease-in'
//   | 'ease-out'
//   | 'ease-in-out'
//   | 'ease-in-cubic'
//   | 'ease-out-cubic'
//   | 'ease-in-out-cubic'
//   | 'ease-in-circ'
//   | 'ease-out-circ'
//   | 'ease-in-out-circ'
//   | 'ease-in-expo'
//   | 'ease-out-expo'
//   | 'ease-in-out-expo'
//   | 'ease-in-quad'
//   | 'ease-out-quad'
//   | 'ease-in-out-quad'
//   | 'ease-in-quart'
//   | 'ease-out-quart'
//   | 'ease-in-out-quart'
//   | 'ease-in-quint'
//   | 'ease-out-quint'
//   | 'ease-in-out-quint'
//   | 'ease-in-sine'
//   | 'ease-out-sine'
//   | 'ease-in-out-sine'
//   | 'ease-in-back'
//   | 'ease-out-back'
//   | 'ease-in-out-back'
//   | EasingFunction;