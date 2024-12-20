import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';


import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignupScreen';
import AppRoutes from '../utils/approutes';
import colors from '../utils/colors';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const MainAppNavigation = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={AppRoutes.Splash}
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
        <Stack.Screen name={AppRoutes.Splash} component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default MainAppNavigation;
