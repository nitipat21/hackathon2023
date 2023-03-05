import { Text, View, FlatList, SectionList, StyleSheet } from 'react-native';
import tw from '../.././lib/tailwind';
import { useFonts } from 'expo-font';
import React, { useCallback, useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
// import useMainAppIsReady from "../../hooks/useAppIsReady";
import * as SplashScreen from 'expo-splash-screen';
import CameraScreen from './screens/Camera';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Footer from './Footer';
import Login from '../Auth/screens/Login';
import SignUpScreen from '../Auth/screens/SignUp';
import SignUp from '../Auth/screens/SignUp';
import ResetPassword from '../Auth/screens/ResetPassword';
import ForgotPassword from '../Auth/screens/ForgotPassword';
import { Welcome } from '../Auth/screens/Welcome';

// SplashScreen.preventAutoHideAsync()

export default function MainApp() {
  console.log('main app');
  const Tab = createBottomTabNavigator();

  // const mainAppIsReady = useMainAppIsReady(data[0].data[0]);

  const mainAppIsReady = true;

  useEffect(() => {
    const prepare = async () => {
      if (mainAppIsReady) {
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, [mainAppIsReady]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        lazy: false,
      }}
      backBehavior="order"
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={SignUp} />
      <Tab.Screen name="ResetPassword" component={ResetPassword} />
      <Tab.Screen name="ForgotPassword" component={ForgotPassword} />
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen
        name="CameraScreen"
        component={CameraScreen}
        navigationKey="CameraScreen"
        options={{
          lazy: false,
        }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
