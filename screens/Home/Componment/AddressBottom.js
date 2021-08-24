import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import Animated from 'react-native-reanimated';
import ICONS from 'react-native-vector-icons/FontAwesome5'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from "@env"
import Geolocation from '@react-native-community/geolocation'
import Geocoder from 'react-native-geocoding';
import BottomSheet from 'reanimated-bottom-sheet';
import { FONTS, icons, COLORS, SIZES } from '../../../constants';
import { useDispatch, useSelector } from 'react-redux';


export default function AddressBottom({ navigation }) {
        const dispatch = useDispatch()

        const getcurrentlocation = () => {
                Geolocation.getCurrentPosition(info => {
                        Geocoder.init(GOOGLE_API_KEY, { language: "en" });
                        Geocoder.from(info.coords.latitude, info.coords.longitude).then(json => {

                                dispatch({
                                        type: 'SET_DESTENATION',
                                        payload: {
                                                location: {
                                                        lat: info.coords.latitude,
                                                        lng: info.coords.longitude

                                                },
                                                description: json.results[0].formatted_address
                                        }



                                })
                                navigation.navigate('MapScreen')

                        })
                },
                        error => { Alert.alert(error.message, "Turn on Your Location or Type manually") },
                        {
                                enableHighAccuracy: false,
                                timeout: 2000,
                                maximumAge: 3600000
                        }


                )




















        }







        const ListAddress = () => {


                return (
                        <View
                                style={{
                                        backgroundColor: 'white',
                                        padding: 16,
                                        height: SIZES.height
                                }}
                        >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 60, }}>
                                        <Text style={{ ...FONTS.h3, fontWeight: '700' }}>
                                                Search location

                                        </Text>
                                        <TouchableOpacity onPress={() => navigation.pop()}>
                                                <Image source={icons.cross} style={{ height: 15, width: 20 }} />
                                        </TouchableOpacity>
                                </View>


                                {/* search */}
                                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                        <GooglePlacesAutocomplete
                                                renderLeftButton={() => {
                                                        return (
                                                                <View>
                                                                        <Image source={icons.search} style={{ height: 20, width: 20, marginLeft: 5, marginTop: 10 }} />
                                                                </View>
                                                        )
                                                }}

                                                placeholder='Search...'
                                                nearbyPlacesAPI="GooglePlacesSearch"
                                                debounce={400}
                                                styles={{

                                                        container: {
                                                                flex: 1,
                                                                marginTop: 5,
                                                                elevation: 2,
                                                                backgroundColor: COLORS.white2,
                                                                borderRadius: 10



                                                        },
                                                        textInput: {
                                                                fontSize: 14,
                                                                height: 40,




                                                        },
                                                }}
                                                minLength={4}
                                                enablePoweredByContainer={false}
                                                fetchDetails={true}
                                                returnKeyType={"search"}

                                                onPress={(data, details = null) => {
                                                        // 'details' is provided when fetchDetails = true

                                                        dispatch({
                                                                type: 'SET_DESTENATION',
                                                                payload: {
                                                                        location: details.geometry.location,
                                                                        description: data.description
                                                                }
                                                        })
                                                        navigation.navigate('MapScreen')
                                                }}
                                                query={{
                                                        key: GOOGLE_API_KEY,
                                                        language: 'en',
                                                }}
                                        />
                                </View>



                                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}
                                        onPress={getcurrentlocation}
                                >
                                        <ICONS name="location-arrow" color={COLORS.red} size={20} />
                                        <Text style={{ color: COLORS.red, marginLeft: 5 }}>Use Current Location</Text>

                                </TouchableOpacity>

                                {/* usecureentlocation */}
                                <View style={{ marginTop: 20 }} >
                                        <Text style={{ ...FONTS.h4, fontWeight: '700' }}>Saved Address</Text>


                                        <TouchableOpacity style={{ flexDirection: 'row', height: 65, marginTop: 10, alignItems: 'center', borderBottomColor: COLORS.gray, borderBottomWidth: 2 }}>
                                                <View style={{ flex: 1, alignItems: 'center' }}>
                                                        <ICONS name="home" color={COLORS.gray} size={20} />
                                                </View>
                                                <View style={{ flex: 8, alignItems: 'center' }}>
                                                        <Text>Bapa nagar padam sing road karol bagh </Text>

                                                </View>
                                                {/* <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                                                        <ICONS name="ellipsis-v" color={COLORS.gray} size={20} />
                                                </TouchableOpacity> */}

                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flexDirection: 'row', height: 65, marginTop: 10, alignItems: 'center', borderBottomColor: COLORS.gray, borderBottomWidth: 2 }}>
                                                <View style={{ flex: 1, alignItems: 'center' }}>
                                                        <ICONS name="home" color={COLORS.gray} size={20} />
                                                </View>
                                                <View style={{ flex: 8, alignItems: 'center' }}>
                                                        <Text>Bapa nagar padam sing road karol bagh </Text>

                                                </View>
                                                {/* <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                                                        <ICONS name="ellipsis-v" color={COLORS.gray} size={20} />
                                                </TouchableOpacity> */}

                                        </TouchableOpacity>


                                </View>
                        </View>
                )
        }














        return (
                <View style={{ flex: 1 }}>
                        <ListAddress />
                </View>
        )
}
