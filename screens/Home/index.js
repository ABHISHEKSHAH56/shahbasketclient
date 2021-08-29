import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { SIZES, COLORS, FONTS, icons } from '../../constants'
import { categoreyItem, Mainproduct, productitem } from '../../constants/dummyData'
import CarouselFunction from '../../components/Carousel'
import CardItem from '../../components/Card'
import { useContext } from 'react'
import { AuthContext } from '../../navigation/AuthProvider'
import InitalAdress from './Componment/InitalAdress';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../API/Index'

function renderempty() {
        return (
                <View style={{ marginHorizontal: SIZES.padding, backgroundColor: COLORS.white }}>
                        <Image source={require("../../assets/messages/loader.gif")} resizeMode='contain' style={{ width: SIZES.width, height: 350 }} />

                </View>

        )
}



const Section = ({ title, childern, onPress }) => {

        return (
                <View>
                        <View style={{
                                flexDirection: 'row',
                                marginHorizontal: SIZES.padding,
                                marginTop: 30,
                                marginBottom: 20


                        }}>
                                <Text style={{ flex: 1, ...FONTS.h3, fontWeight: '700' }}>{title}</Text>
                                <TouchableOpacity
                                        onPress={onPress}

                                >
                                        <Text style={{ color: COLORS.primary, ...FONTS.body3, fontWeight: '700' }}
                                        > show All</Text>
                                </TouchableOpacity>
                        </View>
                        {childern}



                </View>
        )

}


function categorey() {


        const handllercategorey = async () => {

        }
        const categoreyproduct = categoreyItem.filter((item) => item.name !== 'All')
        return (
                <FlatList
                        data={categoreyproduct}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                                return (
                                        <TouchableOpacity style={{ flex: 1, alignItems: 'center', width: 90 }} onPress={handllercategorey}>
                                                <Image source={item.image} style={{ height: 80, width: 80, borderRadius: 250 }} resizeMode='contain' />
                                                <Text style={{ fontWeight: '700', color: COLORS.gray }} >{item.name}</Text>

                                        </TouchableOpacity>
                                )
                        }}


                />
        )
}


export default function Home({ navigation }) {
        const dispatch = useDispatch()
        useEffect(() => {
                setTimeout(async () => {
                        await fetchProduct().then((res) => {

                                console.log(res.data)
                                const { product } = res.data
                                dispatch({
                                        type: 'FETCH_PRODUCT',
                                        payload: product
                                })
                                console.log(res.data.data)




                        }).catch((err) => console.log(err.response))

                }, 3000);
        }, [])



        const shop = useSelector(state => state.shop.products)
        console.log(shop)




        const { logout } = useContext(AuthContext)






        return (
                <>

                        <View style={{ flex: 1, backgroundColor: COLORS.white2 }}>
                                <FlatList
                                        data={shop}
                                        ListEmptyComponent={renderempty}
                                        ListHeaderComponent={
                                                <View>
                                                        <InitalAdress logout={logout} />
                                                        <CarouselFunction />
                                                        <View style={{ margin: 5 }} >
                                                                <Text style={{ ...FONTS.h3, fontWeight: '700', marginLeft: 8 }}>Categorey</Text>
                                                        </View>
                                                        {categorey()}
                                                        <Section title="Today Best Deal" />

                                                </View>
                                        }
                                        keyExtractor={(item, index) => index + 5}
                                        ListFooterComponent={
                                                <View>

                                                        <View style={{ height: 100 }} />
                                                </View>
                                        }
                                        renderItem={({ item }) => {
                                                return (
                                                        <CardItem id={item._id}
                                                                containerStyle={{
                                                                        height: 150,
                                                                        marginHorizontal: SIZES.padding,
                                                                        marginBottom: SIZES.radius
                                                                }}

                                                                data={item}
                                                                onpress={() => { }}

                                                        />)
                                        }}
                                />





                        </View>
                </>
        )
}
