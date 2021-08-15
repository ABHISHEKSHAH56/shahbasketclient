import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { MyBottomTabs } from '../xy/BottomTabnavigation'
import HomeMap from '../screens/Home/HomeMap'

const HomeStack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeTabs" component={MyBottomTabs} />
      <HomeStack.Screen name="MapScreen" component={HomeMap} />
    </HomeStack.Navigator>
  )
}