import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Userdetails from '../screens/AuthScreen/Userdetails';
import Cart from '../screens/Cart/Cart';
import OrderSucess from '../screens/Cart/OrderSucess';
import AddressBottom from '../screens/Home/Componment/AddressBottom';
import FormAddress from '../screens/Home/Componment/FormAddress';
import HomeMap from '../screens/Maps/HomeMap';
import AddressBook from '../screens/Profile/AddressBook';
import PastOrders from '../screens/Profile/PastOrders';
import Support from '../screens/Profile/Support';
import { MyBottomTabs } from './BottomTabnavigation'

const HomeStack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeTabs" component={MyBottomTabs} />
      <HomeStack.Screen name="MapScreen" component={HomeMap} />
      <HomeStack.Screen name="BottomScreen" component={AddressBottom} />
      <HomeStack.Screen name="FormAddress" component={FormAddress} />
      <HomeStack.Screen name="Support" component={Support} />
      <HomeStack.Screen name="Pastorder" component={PastOrders} />
      <HomeStack.Screen name="Addressbook" component={AddressBook} />
      <HomeStack.Screen name="Persnaldetails" component={Userdetails} />
      <HomeStack.Screen name="Ordersuccess" component={OrderSucess} />
    </HomeStack.Navigator>
  )
}





















