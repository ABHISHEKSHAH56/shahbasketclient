import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux';
import { SIZES } from '../../constants';
const CARD_HEIGHT = 220;
const CARD_WIDTH = SIZES.width * 0.8;
const SPACING_FOR_CARD_INSET = SIZES.width * 0.1 - 10;

export default function MapComponment() {
        const destination = useSelector(state => state.address.destination)
        //console.log(destination)
        const dispatch = useDispatch()


        return (
                <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{
                                height: SIZES.height / 2
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
                                        <Marker
                                                coordinate={{
                                                        latitude: destination.location.lat,
                                                        longitude: destination.location.lng,

                                                }}
                                                title="your order will deliver here"
                                                description={destination.description}
                                                identifier="destination"
                                                on

                                        />
                                )
                        }
                </MapView>
        )
}



const styles = StyleSheet.create({
        container: {
                flex: 1,
        },

        searchBox: {
                position: 'absolute',
                marginTop: Platform.OS === 'ios' ? 40 : 20,
                flexDirection: "row",
                backgroundColor: '#fff',
                width: '90%',
                alignSelf: 'center',
                borderRadius: 5,
                padding: 10,
                shadowColor: '#ccc',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                elevation: 10,
        },
        chipsScrollView: {
                position: 'absolute',
                top: Platform.OS === 'ios' ? 90 : 80,
                paddingHorizontal: 10
        },
        chipsIcon: {
                marginRight: 5,
        },
        chipsItem: {
                flexDirection: "row",
                backgroundColor: '#fff',
                borderRadius: 20,
                padding: 8,
                paddingHorizontal: 20,
                marginHorizontal: 10,
                height: 35,
                shadowColor: '#ccc',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                elevation: 10,
        },
        scrollView: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                paddingVertical: 10,
        },
        endPadding: {
                paddingRight: SIZES.width - CARD_WIDTH,
        },
        card: {
                // padding: 10,
                elevation: 2,
                backgroundColor: "#FFF",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                marginHorizontal: 10,
                shadowColor: "#000",
                shadowRadius: 5,
                shadowOpacity: 0.3,
                shadowOffset: { x: 2, y: -2 },
                height: CARD_HEIGHT,
                width: CARD_WIDTH,
                overflow: "hidden",
        },
        cardImage: {
                flex: 3,
                width: "100%",
                height: "100%",
                alignSelf: "center",
        },
        textContent: {
                flex: 2,
                padding: 10,
        },
        cardtitle: {
                fontSize: 12,
                // marginTop: 5,
                fontWeight: "bold",
        },
        cardDescription: {
                fontSize: 12,
                color: "#444",
        },
        markerWrap: {
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                height: 50,
        },
        marker: {
                width: 30,
                height: 30,
        },
        button: {
                alignItems: 'center',
                marginTop: 5
        },
        signIn: {
                width: '100%',
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 3
        },
        textSign: {
                fontSize: 14,
                fontWeight: 'bold'
        }
});