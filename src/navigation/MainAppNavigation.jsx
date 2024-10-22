import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {AppRoutes} from '../utils/appRoutes';
import {colors} from '../utils/colors';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const MainAppNavigation = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={AppRoutes.Onboarding}
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animation: 'slide_from_bottom',
          animationTypeForReplace: 'pop',
          animationTypeForRemove: 'pop',
          statusBarStyle: 'dark',
          statusBarColor: colors.backgroundColor,
        }}>
        <Stack.Screen
          name={AppRoutes.Onboarding}
          component={OnboardingScreen}
        />
        <Stack.Screen name={AppRoutes.Login} component={LoginScreen} />
        <Stack.Screen name={AppRoutes.SignUp} component={SignUpScreen} />
        <Stack.Screen name={AppRoutes.Home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default MainAppNavigation;
