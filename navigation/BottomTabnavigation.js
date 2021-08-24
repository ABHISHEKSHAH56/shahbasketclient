import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, constants, FONTS, icons, SIZES } from '../constants';
import { useState } from 'react';
import Home from '../screens/Home/index';
import Cart from '../screens/Cart/Cart';
import Search from '../screens/Search/Search';
import UserProfileScreen from '../screens/Profile/ProfileScreen';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

function Tabpichabutton({ label, onPress, icons, istrue, color }) {
        const cart = useSelector(state => state.shop.cart)





        return (
                <TouchableOpacity onPress={onPress} style={{
                        flex: 1,
                        borderTopWidth: istrue ? 3 : 0,


                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 8,


                }}>
                        {
                                label === "Cart" && !istrue ? <View style={{ position: 'absolute', right: 5, top: 0, width: 25, backgroundColor: COLORS.green, borderRadius: 10 }}>{
                                        cart.length === 0 ? <Text style={{ textAlign: 'center', color: COLORS.white, fontSize: 8 }}>Empty</Text> : <Text style={{ textAlign: 'center', color: COLORS.white }}>{cart.length}</Text>
                                }</View> : null
                        }
                        <Icon name={icons} size={25} color={color} />
                        <Text style={{ fontWeight: istrue ? '700' : '400' }}>{label}</Text>






                </TouchableOpacity>


        )
}

const TabBar = ({ state, navigation }) => {
        const { routes } = state;
        const [SelectedTab, setSelectedTab] = React.useState('Home')
        const handelpress = (activeTab, index) => {
                if (state.index !== index) {
                        setSelectedTab(activeTab)
                        navigation.navigate(activeTab)
                }

        }
        const tureFocused = currentTab => (
                currentTab === SelectedTab ? true : false
        )
        const renderColor = currentTab => (
                currentTab === SelectedTab ? COLORS.primary : COLORS.darkGray
        )

        return (
                <View >
                        <View style={{ height: 2, elevation: 5, opacity: .5 }}></View>
                        <View style={styles.container}>
                                {
                                        routes.map((item, index) => (

                                                <Tabpichabutton key={item.key}

                                                        onPress={() => handelpress(item.name, index)}
                                                        label={item.name}
                                                        icons={item.params.icon}
                                                        istrue={tureFocused(item.name)}
                                                        color={renderColor(item.name)}

                                                />

                                        ))
                                }


                        </View>

                </View>
        )

}
export const MyBottomTabs = () => {


        return (
                <Tab.Navigator options={{ headerShown: false }} tabBar={props => <TabBar {...props} />}

                >
                        <Tab.Screen
                                options={{
                                        headerShown: false
                                }}

                                name={constants.screens.home}
                                component={Home}
                                initialParams={{ icon: 'home-sharp' }}

                        />
                        <Tab.Screen
                                options={{
                                        headerShown: false
                                }}
                                name={constants.screens.search}
                                component={Search}
                                initialParams={{ icon: 'search-sharp' }}

                        />

                        <Tab.Screen
                                options={{
                                        headerShown: false,
                                }}

                                name={constants.screens.cart}
                                component={Cart}
                                initialParams={{ icon: 'cart-sharp' }}

                        />

                        <Tab.Screen
                                options={{
                                        headerShown: false

                                }}
                                name={"Profile"}
                                component={UserProfileScreen}
                                initialParams={{ icon: 'person' }}

                        />
                </Tab.Navigator>
        );
}

const styles = StyleSheet.create({

        container: {
                flexDirection: 'row',
                backgroundColor: COLORS.white,
                justifyContent: 'space-around',
                height: 70,
                elevation: 5






        },

})