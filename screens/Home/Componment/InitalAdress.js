import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, PermissionsAndroid, Alert } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import Geocoder from 'react-native-geocoding';
import { GOOGLE_API_KEY } from "@env"
import { COLORS, FONTS, SIZES, icons } from '../../../constants'
import { useDispatch, useSelector } from 'react-redux';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import AwesomeAlert from 'react-native-awesome-alerts';




//headers!!


export default function InitalAdress({ navigation, logout, onPress }) {
        const [show, setshow] = useState(false)
        const dispatch = useDispatch()
        const temp = useSelector(state => state.address.intialDestination)
        const ptr = useSelector(state => state.address.destination)
        console.log(temp, ptr)
        Geolocation.getCurrentPosition(info => {
                Geocoder.init(GOOGLE_API_KEY, { language: "en" });
                Geocoder.from(info.coords.latitude, info.coords.longitude).then(json => {
                        dispatch({
                                type: 'SET_INITIAL_DESTENATION',
                                payload: json.results[0].formatted_address
                        })

                })
        },
                error => { console.log(error) },
                {
                        enableHighAccuracy: false,
                        timeout: 2000,
                        maximumAge: 3600000
                }


        )




        return (
                <SafeAreaView style={{
                        height: 50,
                        flexDirection: 'row',
                        elevation: 4,
                        backgroundColor: COLORS.white

                }}>
                        {/* //Address */}
                        <AwesomeAlert show={show}
                                title="Select the Address "
                                titleStyle={{ fontWeight: '700' }}
                                message="As you denied the location perssmion ,now you can select the address manully "
                                messageStyle={{ fontSize: 12 }}
                                showConfirmButton={true}
                                confirmButtonStyle={{
                                        width: 40,
                                        backgroundColor: COLORS.green,
                                        color: COLORS.white
                                }}
                                confirmText="Ok"
                                onConfirmPressed={() => setshow(!show)}


                        />

                        <TouchableOpacity style={{
                                flex: 1,
                                flexDirection: 'row',
                                margin: 5
                        }} onPress={() => onPress.current.snapTo(0)}>
                                <Image source={icons.location} style={{ padding: 10, marginTop: 5, tintColor: COLORS.primary, height: 30, width: 30 }} />
                                {
                                        ptr === null ? <Text numberOfLines={1} style={{ marginRight: 4, alignSelf: 'center', fontSize: 17, fontWeight: '700' }}>{temp}</Text>
                                                : <Text style={{ margin: 4, alignSelf: 'center', fontSize: 17, fontWeight: '700' }}>{ptr}</Text>

                                }
                        </TouchableOpacity>

                        <TouchableOpacity style={{ margin: 15 }} onPress={() => logout()}>
                                <Image source={icons.notification} style={{ height: 20, width: 20, tintColor: COLORS.green }} />
                        </TouchableOpacity>
                </SafeAreaView>
        )
}
