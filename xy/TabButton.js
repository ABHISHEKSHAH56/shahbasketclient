import React from 'react'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { BaseStyle, COLORS, FONTS, SIZES } from '../constants'

export default function TabButton({ label, icon, isFocused, onPress }) {


        return (
                <TouchableWithoutFeedback
                        onPress={onPress}
                >
                        <Animated.View
                                style={{
                                        flex: isFocused ? 3 : 1,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                }}
                        >
                                <Animated.View style={
                                        {
                                                flexDirection: 'row',
                                                width: "80%",
                                                height: "50%",
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 25,
                                                backgroundColor: isFocused ? COLORS.primary : null


                                        }

                                }>
                                        <Image source={icon} style={{
                                                width: 20,
                                                height: 20,
                                                tintColor: isFocused ? COLORS.white : COLORS.gray

                                        }} />

                                        {isFocused && <Text numberOfLines={1} style={{
                                                marginLeft: SIZES.base,
                                                color: COLORS.white,
                                                ...FONTS.h3
                                        }}>
                                                {label}
                                        </Text>}

                                </Animated.View>

                        </Animated.View>

                </TouchableWithoutFeedback>
        )
}
