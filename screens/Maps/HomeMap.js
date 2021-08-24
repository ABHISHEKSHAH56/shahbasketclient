import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { COLORS, FONTS, SIZES } from '../../constants'
import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import Geocoder from 'react-native-geocoding'
import { GOOGLE_API_KEY } from "@env"
import { Button, Divider, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'


export default function HomeMap() {
        const navigation = useNavigation()
        const destination = useSelector(state => state.address.destination)
        const [formateedAdress, setformateedAdress] = React.useState(null)
        const dispatch = useDispatch()
        return (
                <View >
                        <View style={{ width: SIZES.width }}>
                                <MapView
                                        provider={PROVIDER_GOOGLE}
                                        style={{
                                                height: SIZES.height - SIZES.height / 3
                                        }}
                                        initialRegion={{
                                                latitude: destination.location.lat,
                                                longitude: destination.location.lng,
                                                latitudeDelta: 0.005,
                                                longitudeDelta: 0.005,

                                        }}

                                >
                                        {
                                                destination?.location && (
                                                        <Marker pinColor={COLORS.black}
                                                                icon={require('./final.png')}

                                                                draggable
                                                                onDragEnd={(e) => {
                                                                        const { coordinate } = e.nativeEvent
                                                                        Geocoder.init(GOOGLE_API_KEY, { language: "en" });
                                                                        Geocoder.from(coordinate.latitude, coordinate.longitude).then(json => {
                                                                                setformateedAdress(json.results[0].formatted_address)

                                                                        })
                                                                        dispatch({
                                                                                type: 'SET_DESTENATION',
                                                                                payload: {
                                                                                        location: {
                                                                                                lat: coordinate.latitude,
                                                                                                lng: coordinate.longitude

                                                                                        },
                                                                                        description: formateedAdress
                                                                                }
                                                                        })


                                                                }

                                                                }
                                                                coordinate={{
                                                                        latitude: destination.location.lat,
                                                                        longitude: destination.location.lng,

                                                                }}

                                                                identifier="destination"


                                                        >
                                                                <Callout style={{ backgroundColor: COLORS.primary }}>
                                                                        <View>
                                                                                <Text style={{ fontSize: 16, fontWeight: '700', color: COLORS.white, textAlign: 'center' }}>Your order Will be  delivered  here</Text>
                                                                                <Text style={{ fontSize: 10, fontWeight: '500', color: COLORS.white, textAlign: 'center' }}>Please place pin accurately on the map</Text>

                                                                        </View>

                                                                </Callout>
                                                        </Marker>
                                                )
                                        }

                                </MapView>




                        </View>

                        <View style={{ backgroundColor: COLORS.white2, height: SIZES.height / 3 - 10 }} >
                                <View style={{ marginVertical: SIZES.padding, marginHorizontal: 5 }}>
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Select Delivery Location</Text>
                                </View>
                                <Divider />
                                <Text style={{ margin: 5, fontWeight: '700', color: COLORS.gray }}>YOUR LOCATION</Text>
                                <View style={{ marginLeft: 15, marginRight: 15, marginTop: 25 }}>
                                        {
                                                destination.description ? <Text numberOfLines={1}>{destination.description}</Text> : <Text numberOfLines={1}>Not able to detect...change pin somewhere around</Text>
                                        }

                                </View>
                                <Divider />
                                <View style={{ flex: 1, justifyContent: 'center' }} >
                                        <Button mode="contained" color={destination.description ? COLORS.green : COLORS.gray} onPress={() => destination.description ? navigation.navigate("FormAddress") : null}>
                                                Confirm Location
                                        </Button>
                                </View>



                        </View>
                </View>
        )
}



