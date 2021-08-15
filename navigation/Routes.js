import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import AppStack from './AppStack'
import { View } from 'react-native';
import LottieView from 'lottie-react-native'
import { AuthContext } from './AuthProvider';



const Routes = () => {
        const [User, setUser] = useState(AuthContext)

        // const { user, setUser } = useState(AuthContext);
        const [initializing, setInitializing] = useState(true);
        const [isLoading, setisLoading] = useState(true)

        const onAuthStateChanged = (user) => {
                setUser(user);
                if (initializing) setInitializing(false);
        };

        useEffect(() => {
                const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
                return subscriber; // unsubscribe on unmount
        }, []);

        useEffect(() => {
                setTimeout(() => {
                        setisLoading(false)

                }, 2000)
        }, []);


        if (isLoading) {
                return (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <LottieView source={require('../assets/badiya/45869-farmers.json')} autoPlay loop />
                        </View>
                )
        }

        if (initializing) return null;

        return (
                <NavigationContainer>
                        {User ? <AppStack /> : <AuthStack />}
                </NavigationContainer>
        );
};

export default Routes;
