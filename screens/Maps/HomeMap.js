import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { SIZES } from '../../constants'
import MapComponment from './MapComponment'

export default function HomeMap() {
        return (
                <View>
                        <View style={tw`h-1/2 `, { width: SIZES.width }}>
                                <MapComponment />


                        </View>
                        <View style={tw`h-1/2`}>
                                <Text>ggggg</Text>

                        </View>
                </View>
        )
}



