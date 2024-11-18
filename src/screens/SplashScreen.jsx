import { StyleSheet, View, Button, Alert, Vibration } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../utils/colors'
import * as Animatable from 'react-native-animatable';

import BackgroundGeolocation from 'react-native-background-geolocation';
import { getDistance } from 'geolib';
import Sound from 'react-native-sound';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from '../components/CustomInput';
import Gap from '../components/Gap';
const SplashScreen = ({ navigation }) => {

//30.013867, 31.026405


  const [latitudeState, setLatitude] = useState(30.013867);
  const [longitudeState, setLongitude] = useState(31.026405);
  const [name, setName] = useState(null);
  const triggerAlert = (checkpointName) => {
    Vibration.vibrate([500, 500, 500]);
    Alert.alert('Checkpoint Nearby', `You are near: ${checkpointName}`, [{ text: 'OK' }]);
  };
  // Save and retrieve checkpoints
  const saveCheckpoint = async (checkpoint) => {
    let checkpoints = JSON.parse(await AsyncStorage.getItem('checkpoints')) || [];
    checkpoints.push(checkpoint);
    await AsyncStorage.setItem('checkpoints', JSON.stringify(checkpoints));
  };

  const getCheckpoints = async () => JSON.parse(await AsyncStorage.getItem('checkpoints')) || [];

  // Monitor proximity
  const monitorProximity = async (currentLocation) => {
    // const checkpoints = await getCheckpoints();
    // checkpoints.forEach((checkpoint) => {
    //   if (getDistance(currentLocation, checkpoint) <= 500) {
    //     triggerAlert(checkpoint.name);
    //     Alert.alert('Checkpoint reached', checkpoint.name);
    //   }
    // });

    if(latitudeState==null || longitudeState==null || name==null) {
      return;
    }
      if (getDistance(currentLocation, { latitude: latitudeState, longitude: longitudeState }) <= 500) {
        triggerAlert(name);
        Alert.alert('Checkpoint reached', name);
      }
  };

  // Configure background location tracking
  const configureBackgroundLocation = () => {
    BackgroundGeolocation.onLocation((location) => {
      const { latitude, longitude } = location.coords;
      const currentLocation = { latitude, longitude };
      monitorProximity(currentLocation);
    });

    BackgroundGeolocation.ready({
      desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
      distanceFilter: 50,
      stopOnTerminate: false,
      startOnBoot: true,
    }).then(() => {
      BackgroundGeolocation.start();
    });
  };

  useEffect(() => {
    configureBackgroundLocation();
  }, []);

  const addCheckpoint = async () => {
    if (!longitudeState || !latitudeState || !name) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    const newCheckpoint = { latitude: latitudeState, longitude: longitudeState, name: name };
    // await saveCheckpoint(newCheckpoint);
    Alert.alert('Checkpoint Added', 'Your checkpoint has been saved!');
  };

  return (
    <View style={styles.container}>
      {/* <Animatable.Image source={require('../assets/logo.png')} 
        style={styles.logo} 
        animation="bounceInUp"  
        duration={2000}  
        onAnimationEnd={() => navigation.replace("onboarding")}
        /> */}

      <CustomInput hint="Name" onChangeText={(text) => setName(text)} image={require('../assets/mail.png')}
        isValid={true}
        isPassword={false} />
      <CustomInput hint="longitude" onChangeText={(text) => setLongitude(text)} image={require('../assets/mail.png')}
        isValid={true}
        isPassword={false} />
      <CustomInput hint="latitude" onChangeText={(text) => setLatitude(text)} image={require('../assets/mail.png')}
        isValid={true}
        isPassword={false} />
      <Gap height={20} />
      <Button title="Add Checkpoint" onPress={addCheckpoint} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
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