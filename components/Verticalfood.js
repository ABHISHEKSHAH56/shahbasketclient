import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'

export default function Verticalfood({ data, onPress, tag }) {
        return (
                <TouchableOpacity style={{
                        width: 200,
                        padding: SIZES.radius,

                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                        margin: 2
                }}>
                        {/* tag */}
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ backgroundColor: COLORS.primary }}>
                                        <Text style={{ alignSelf: 'center', fontSize: 10, fontWeight: '700', color: COLORS.white }}>{tag}</Text>
                                </View>
                                <Image source={icons.cart} style={{height:20 ,width:20}} />

                        </View>


                        <View style={{
                                height: 120,
                                width: 150,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 4,
                                borderTopRightRadius: 100
                        }}>

                                <Image source={data.image} style={{
                                        height: '100%',
                                        width: '100%',

                                        borderRadius: 5
                                }} />

                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10, flexDirection: 'row' }}>

                                <Text style={{ flex: 1, flexWrap: 'wrap', fontSize: 10, fontWeight: '700', }}>1kg Adrak + 3 kg kheera + 2kg Oninon

                                </Text>


                        </View>
                        <View style={{ backgroundColor: COLORS.darkBlue, borderRadius: 10, width: 100, height: 20, marginTop: 5 }}>
                                <Text style={{ alignSelf: 'center', padding: 2, fontSize: 10, fontWeight: '700', color: COLORS.white }}>Rs 104</Text>
                        </View>


                </TouchableOpacity >
        )
}
