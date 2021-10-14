import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack'
import { View } from 'react-native';
import LottieView from 'lottie-react-native'
import { COLORS } from '../constants';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DraweContent';
import Home from '../screens/Home';



const Routes = () => {
        const [isLoading, setisLoading] = useState(true)
        const Drawer = createDrawerNavigator();

        useEffect(() => {
                setTimeout(() => {
                        setisLoading(false)

                }, 2000)
        }, []);


        if (isLoading) {
                return (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white }}>
                                <LottieView source={require('../assets/badiya/45869-farmers.json')} autoPlay loop />
                        </View>
                )
        }

        return (
                <NavigationContainer>

                        <Drawer.Navigator screenOptions={{
                                headerShown: false
                        }} drawerContent={props => <DrawerContent {...props} />}>
                                <Drawer.Screen name="HomeDrawer" component={AppStack} />
                        </Drawer.Navigator>
                </NavigationContainer>
        );
};

export default Routes;
