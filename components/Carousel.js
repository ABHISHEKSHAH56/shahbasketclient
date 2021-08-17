
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { COLORS, SIZES } from '../constants'

export default function Carousel() {
        return (
                <View >
                        <View style={{
                                height: 200,
                                width: '90%',

                                justifyContent: 'center',
                                alignSelf: 'center',
                                borderRadius: 8

                        }}>
                                <Swiper height={200} style={styles.wrapper}
                                        autoplay={true}
                                        autoplayTimeout={4.5}
                                        showsPagination={false}

                                >
                                        <View style={styles.slide1} >
                                                <Image source={require('../assets/banners/delhi.png')} resizeMode="contain" style={styles.imagestyle} />
                                        </View>
                                        <View style={styles.slide1} >
                                                <Image source={require('../assets/banners/2.png')} resizeMode="contain" style={styles.imagestyle} />
                                        </View>
                                        <View style={styles.slide1} >
                                                <Image source={require('../assets/banners/1.png')} resizeMode="contain" style={styles.imagestyle} />
                                        </View>
                                </Swiper>
                        </View>


                </View>


        )
}
const styles = StyleSheet.create({
        wrapper: {
                margin: 2
        },
        slide1: {
                flex: 1,
                justifyContent: 'center',
                backgroundColor: 'transparent',
                borderRadius: 8
        },

        imagestyle: {
                height: "90%",
                width: "90%",
                alignSelf: 'center',
                borderRadius: 8,

        }
})