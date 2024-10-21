import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import { AppRoutes } from '../utils/approutes';
import { colors } from '../utils/colors';

import {
    SafeAreaProvider,
} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const MainAppNavigation = () => (
    <SafeAreaProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName={AppRoutes.Home} screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'slide_from_bottom',
                animationTypeForReplace: 'pop',
                animationTypeForRemove: 'pop', statusBarStyle: 'dark', statusBarColor: colors.backgroundColor,
            }}>
                <Stack.Screen name={AppRoutes.Home} component={HomeScreen} />
                <Stack.Screen name={AppRoutes.Login} component={LoginScreen} />
                <Stack.Screen name={AppRoutes.Signup} component={SignupScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>

);

export default MainAppNavigation;

