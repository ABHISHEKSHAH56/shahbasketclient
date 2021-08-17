import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onbording from '../screens/onboardingScreen/Onbording';
import SignupScreen from '../screens/AuthScreen/RegisterationScreen';
import LoginScreen from '../screens/AuthScreen/SignInScreen';
import MobileAuthenticationScreen from '../screens/AuthScreen/MobileAuthentication';

const RootStack = createNativeStackNavigator();

const RootStackScreen = () => (
        <RootStack.Navigator screenOptions={{
                headerShown: false
        }} >

        </RootStack.Navigator>
);

export default RootStackScreen;