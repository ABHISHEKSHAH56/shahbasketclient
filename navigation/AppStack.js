import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeMap from '../screens/Maps/HomeMap';
import { MyBottomTabs } from './BottomTabnavigation'

const HomeStack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeTabs" component={MyBottomTabs} />
      <HomeStack.Screen name="MapScreen" component={HomeMap} />
    </HomeStack.Navigator>
  )
}