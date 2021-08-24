import React from 'react'
import { useEffect } from 'react';
import { View, Text, Image } from 'react-native'
import { COLORS, SIZES } from '../../constants'

export default function OrderSucess({ navigation }) {
        useEffect(() => {
                setTimeout(() => {


                }, 2000);
                navigation.popToTop()

        }, [])
        return (
                <View style={{ flex: 1, backgroundColor: COLORS.white }}>
                        <Image source={require("../../assets/messages/ordrplaced.gif")} resizeMode="contain" style={{ marginHorizontal: SIZES.padding, marginVertical: SIZES.padding, width: SIZES.width - 25 }} />
                </View>
        )
}
