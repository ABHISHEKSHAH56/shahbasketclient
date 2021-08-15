import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { View, Text, FlatList, Image, Animated, TouchableOpacity } from 'react-native'
import Svg, { G, Circle } from 'react-native-svg'
import AntDesign from 'react-native-vector-icons/Ionicons'
import { FONTS, SIZES } from '../../constants/theme'
const data = [
        {
                id: 1,
                title: "Quick & Easy Payments",
                descrpition: "Grow Your lorem by accepting payment from Upi cards",
                image: require('../../assets/images/1.png')
        },
        {
                id: 2,
                title: "Quick & Easy Payments",
                descrpition: "Grow Your lorem by accepting payment from Upi cards",
                image: require('../../assets/images/2.png')
        },
        {
                id: 3,
                title: "Quick & Easy Payments",
                descrpition: "Grow Your lorem by accepting payment from Upi cards",
                image: require('../../assets/images/3.png')
        },
        {
                id: 4,
                title: "Quick & Easy Payments",
                descrpition: "Grow Your lorem by accepting payment from Upi cards",
                image: require('../../assets/images/4.png')
        }
]

const Nextbutton = ({ percentage, ScrollTo }) => {
        const size = 80
        const strokeWidth = 2
        const center = size / 2;
        const radius = size / 2 - strokeWidth / 2;
        const circumference = 2 * Math.PI * radius;
        const progressAnimation = useRef(new Animated.Value(0)).current;
        const progressRef = useRef(null)
        const animation = (toValue) => {
                return Animated.timing(progressAnimation, {
                        toValue,
                        duration: 250,
                        useNativeDriver: true,
                }).start()
        }
        useEffect(() => {
                animation(percentage);
        }, [percentage])

        useEffect(() => {
                progressAnimation.addListener((value) => {
                        const strokeDashoffset = circumference - (circumference * value.value) / 100;
                        if (progressRef?.current) {
                                progressRef.current.setNativeProps({
                                        strokeDashoffset
                                })
                        }

                }, [percentage]);
                return () => {
                        progressAnimation.removeAllListeners()
                }

        }, [])
        return (
                <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                }}>
                        <Svg width={size} height={size}>
                                <G rotation="-90" origin={center}>
                                        <Circle stroke="#E6E7E8" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
                                        <Circle
                                                ref={progressRef}

                                                stroke="#F4338F"
                                                cx={center}
                                                cy={center}
                                                r={radius}
                                                strokeWidth={strokeWidth}
                                                strokeDasharray={circumference}
                                        />


                                </G>

                        </Svg>
                        <TouchableOpacity
                                style={{
                                        position: 'absolute',
                                        backgroundColor: '#f4338f',
                                        borderRadius: 100,
                                        padding: 20
                                }} activeOpacity={0.6}
                                onPress={ScrollTo}
                        >
                                <AntDesign name="arrow-forward-outline" size={16} color="#fff" />
                        </TouchableOpacity>


                </View>
        )
}



const Pagination = ({ scrollX }) => {
        return (
                <View style={{
                        flexDirection: 'row',
                        height: 64,
                        justifyContent: 'center'
                }}>
                        {
                                data.map((_, i) => {
                                        const inputRange = [(i - 1) * SIZES.width, i * SIZES.width, (i + 1) * SIZES.width];
                                        const dotWidth = scrollX.interpolate({
                                                inputRange,
                                                outputRange: [10, 20, 10],
                                                extrapolate: 'clamp',

                                        });
                                        const opacity = scrollX.interpolate({
                                                inputRange,
                                                outputRange: [0.3, 1, 0.3],
                                                extrapolate: 'clamp'
                                        })
                                        return <Animated.View key={i} style={{
                                                height: 10,
                                                borderRadius: 5,
                                                backgroundColor: "#493d8a",
                                                marginHorizontal: 8,
                                                width: dotWidth,
                                                opacity

                                        }} />
                                })
                        }

                </View>
        )
}

const OnboardingItem = ({ item }) => {
        return (
                <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: SIZES.width

                }}>
                        <Image source={item.image} style={{
                                flex: 2,
                                justifyContent: 'center',
                                width: SIZES.width,
                                resizeMode: 'contain'
                        }} />

                        <View style={{ flex: 1 }}>
                                <Text style={{
                                        ...FONTS.h2,
                                        marginBottom: 10,
                                        color: '#493d8a',
                                        textAlign: 'center'
                                }}>
                                        {item.title}
                                </Text>
                                <Text style={{
                                        ...FONTS.body3,
                                        color: '#62656b',
                                        textAlign: 'center',

                                }}>{item.descrpition}</Text>

                        </View>


                </View>
        )
}


const Onbording = ({ navigation }) => {
        const [currentIndex, setcurrentIndex] = useState(0)
        const slidesRef = useRef(null)
        const scrollX = useRef(new Animated.Value(0)).current;
        const viewableItemChanged = useRef(({ viewableItems }) => {
                setcurrentIndex(viewableItems[0].index);
        }).current;
        const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

        const toScroll = async () => {
                if (currentIndex < data.length - 1) {
                        slidesRef.current.scrollToIndex({ index: currentIndex + 1 })
                }
                else {
                        navigation.navigate('Mobile')
                }
        }
        return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff" }}>
                        <View style={{ flex: 4 }}>
                                <FlatList data={data}
                                        renderItem={({ item }) => <OnboardingItem item={item} />}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        pagingEnabled
                                        bounces={false}
                                        keyExtractor={(item) => item.id}
                                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                                                useNativeDriver: false
                                        })}
                                        onViewableItemsChanged={viewableItemChanged}
                                        scrollEventThrottle={32}
                                        viewabilityConfig={viewConfig}
                                        ref={slidesRef}
                                />
                                <Pagination scrollX={scrollX} />

                        </View>

                        <Nextbutton ScrollTo={toScroll} percentage={(currentIndex + 1) * (100 / data.length)} />



                </View>
        )
}






export default Onbording




