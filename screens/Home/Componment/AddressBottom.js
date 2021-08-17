import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import { icons, SIZES, COLORS, FONTS } from '../../../constants'
import ICONS from 'react-native-vector-icons/FontAwesome5'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import GetLocation from 'react-native-get-location'
import { GOOGLE_API_KEY } from "@env"


//niche vaali sheet 

export default function AddressBottom({ }) {
        const datadestination = useSelector(state => state.address.destination)
        const dispatch = useDispatch()
        return (
                <View
                        style={{
                                backgroundColor: 'white',
                                padding: 16,
                                height: 350,
                                marginTop: 20
                        }}
                >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ ...FONTS.h3, fontWeight: '700' }}>
                                        Search location

                                </Text>
                                <TouchableOpacity onPress={() => bs.current.snapTo(1)}>
                                        <Image source={icons.cross} style={{ height: 15, width: 20 }} />
                                </TouchableOpacity>
                        </View>
                        {/* search */}
                        <GooglePlacesAutocomplete
                                placeholder='Search...'
                                nearbyPlacesAPI="GooglePlacesSearch"
                                debounce={400}
                                styles={{
                                        container: {
                                                flex: 0
                                        },
                                        textInput: {
                                                fontSize: 18
                                        }
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

                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }} >
                                <ICONS name="location-arrow" color={COLORS.red} size={20} />
                                <Text style={{ color: COLORS.red, marginLeft: 5 }}>Use Current Location</Text>

                        </TouchableOpacity>

                        {/* usecureentlocation */}
                        <View style={{ marginTop: 20 }} >
                                <Text style={{ ...FONTS.h4, fontWeight: '700' }}>Saved Address</Text>


                                <TouchableOpacity style={{ flexDirection: 'row', height: 65, marginTop: 10, alignItems: 'center', borderBottomColor: COLORS.white, borderBottomWidth: 1, elevation: 1 }}>
                                        <View style={{ flex: 1, alignItems: 'center' }}>
                                                <ICONS name="home" color={COLORS.gray} size={20} />
                                        </View>
                                        <View style={{ flex: 8, alignItems: 'center' }}>
                                                <Text>Bapa nagar padam sing road karol bagh </Text>

                                        </View>
                                        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                                                <ICONS name="ellipsis-v" color={COLORS.gray} size={20} />
                                        </TouchableOpacity>

                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: 'row', height: 65, marginTop: 10, alignItems: 'center', borderBottomColor: COLORS.white, borderBottomWidth: 1, elevation: 1 }}>
                                        <View style={{ flex: 1, alignItems: 'center' }}>
                                                <ICONS name="home" color={COLORS.gray} size={20} />
                                        </View>
                                        <View style={{ flex: 8, alignItems: 'center' }}>
                                                <Text>Bapa nagar padam sing road karol bagh road karol bagh </Text>

                                        </View>
                                        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                                                <ICONS name="ellipsis-v" color={COLORS.gray} size={20} />
                                        </TouchableOpacity>

                                </TouchableOpacity>


                        </View>
                </View>
        )

}
