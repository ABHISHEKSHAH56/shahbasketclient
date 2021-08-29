import React, { useEffect } from 'react'
import { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { Button, Divider } from 'react-native-paper'
import ICON from 'react-native-vector-icons/FontAwesome'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from "react-redux";
import { OrderInitate } from '../../API/Index'
import { COLORS, FONTS, icons, SIZES } from '../../constants'
import CartItem from './CartItem'




function renderempty() {
        return (
                <View style={{ marginHorizontal: SIZES.padding, marginVertical: SIZES.padding * 3, backgroundColor: COLORS.white, height: SIZES.height - 300, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require("../../assets/messages/empty.gif")} resizeMode='contain' style={{ width: SIZES.width }} />

                </View>

        )
}






const Cart = ({ navigation, cart }) => {
        console.log(cart.length)
        const destination = useSelector(state => state.address.destination)
        const temp = useSelector(state => state.address.intialDestination)
        const userDetails = useSelector(state => state.address.persnaldetails)
        console.log(userDetails)
        console.log(destination)
        const [cardclick, setcardclick] = useState('payment')
        const subtotal = cart.reduce((a, c) => a + c.price, 0)
        const tax = 0
        const deliverycharge = subtotal > 300 ? 0 : 50
        const grandTotal = subtotal + deliverycharge + tax
        useEffect(() => {
                console.log(destination, temp)
                if (!(destination && destination.hasOwnProperty('completeAddress'))) setcardclick('address')
                else if (!userDetails) setcardclick('userdetails')

                else {
                        setcardclick('payment')
                }
        }, [destination, userDetails,])
        const dispatch = useDispatch()

        const handlepayment = async () => {
                const Product = {
                        userId: userDetails.id,
                        address: destination,
                        product: cart,
                        charges: {
                                total: grandTotal,
                                tax: tax,
                                itemTotal: subtotal,
                                delivery: deliverycharge
                        },
                        userDetails: userDetails

                }
                OrderInitate(Product).then((res) => {
                        console.log(Product)
                        navigation.navigate("OrderSuccess")
                        dispatch({
                                type: 'ORDER_DISPATCH',

                        })

                }).catch((err) => {
                        alert(err.response.error.message)
                })
                //navigation.navigate("Pastorder")



        }









        const RenderPersnalDetails = () => {
                return (
                        <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: SIZES.padding }}>
                                        <Text style={{ fontWeight: '700' }}>Your Details</Text>
                                        <TouchableOpacity onPress={() => navigation.navigate("Persnaldetails")} >
                                                <Text style={{ color: COLORS.red, fontWeight: '700', fontSize: 12 }}>Change</Text>
                                        </TouchableOpacity>

                                </View>
                                <View style={{ marginVertical: 5 }}>
                                        {
                                                userDetails ? <Text style={{ color: COLORS.gray, marginHorizontal: 20, fontSize: 12, fontWeight: '700' }}>
                                                        {userDetails.name} ,{userDetails.phone}
                                                </Text> : <Text style={{ color: COLORS.gray, marginHorizontal: 20, fontSize: 12, fontWeight: '700' }}>Add to user Details</Text>
                                        }
                                </View>
                                <Divider />
                        </View>
                )
        }

        const Stepper = () => {

                switch (cardclick) {

                        case 'address': return (
                                <Button mode="contained" color='crimson' onPress={() => navigation.navigate("BottomScreen")}>
                                        Add Address
                                </Button>
                        )

                        case 'userdetails': return (
                                <Button mode="contained" color='crimson' onPress={() => navigation.navigate("Persnaldetails")}>
                                        Add Persnal details
                                </Button>
                        )
                        case 'payment': return (
                                <Button mode="contained" color='crimson' onPress={handlepayment}>
                                        Add Payment Method
                                </Button>
                        )


                        default: return (
                                <Button mode="contained" color='crimson' onPress={() => { }}>
                                        Add Payment Method
                                </Button>
                        )

                }

        }




        const RenderTotal = () => {
                return (
                        <View>

                                <View style={{ marginVertical: SIZES.padding, backgroundColor: '#F3F1F5' }}>


                                        {/* left */}
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: SIZES.padding, marginVertical: 5 }}>
                                                <Text style={{ fontWeight: '700', fontSize: 12 }}>Item Total </Text>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                        <ICON name="inr" size={12} color={COLORS.gray} />
                                                        <Text style={{ marginHorizontal: 2 }}>{subtotal.toFixed(2)}</Text>
                                                </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: SIZES.padding, marginVertical: 5 }}>
                                                <Text style={{ fontWeight: '700', fontSize: 12, color: COLORS.gray }}>Tax </Text>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                        <ICON name="inr" size={12} color={COLORS.gray} />
                                                        <Text style={{ marginHorizontal: 2 }}>{tax.toFixed(2)}</Text>
                                                </View>
                                        </View><View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: SIZES.padding, marginVertical: 5 }}>
                                                <Text style={{ fontWeight: '700', fontSize: 12, color: COLORS.gray }}>Delivery Charges </Text>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                        <ICON name="inr" size={12} color={COLORS.gray} />
                                                        <Text style={{ marginHorizontal: 2 }}>{deliverycharge.toFixed(2)}</Text>
                                                </View>
                                        </View><View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: SIZES.padding, marginVertical: 5 }}>
                                                <Text style={{ fontWeight: "700", marginHorizontal: 2, fontSize: 16 }}>Grand Total </Text>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                        <ICON name="inr" size={15} />
                                                        <Text style={{ fontWeight: "700", marginHorizontal: 2, fontSize: 16 }}>{grandTotal.toFixed(2)}</Text>
                                                </View>
                                        </View>


                                </View>
                        </View>
                )
        }


        return (



                <View style={{
                        backgroundColor: COLORS.white,

                }} >
                        <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.green }}>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <Image source={icons.back} style={{ width: 25, height: 15, marginLeft: 10, marginRight: 60 }} /></TouchableOpacity>
                                <Text style={{ color: COLORS.white, fontWeight: '700', fontSize: 18 }}> CART</Text>
                        </View>

                        <View style={{ backgroundColor: COLORS.white2, height: cart.length > 0 ? SIZES.height - 200 : SIZES.height - 150 }}>


                                {
                                        cart.length > 0 ? <View style={{ marginVertical: SIZES.padding / 3 }}>


                                                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, marginHorizontal: 5, elevation: 3 }}>
                                                        <Image source={icons.location} style={{ tintColor: COLORS.green, width: 20, height: 20, margin: 1 }} />

                                                        <View style={{ flexDirection: "row", flexWrap: 'wrap', flex: 3, margin: 2 }}>

                                                                <Text numberOfLines={1}>
                                                                        <Text style={{ fontWeight: '700' }}> Delivery At -

                                                                        </Text>
                                                                        {
                                                                                destination === null ? <Text>Select the Address</Text>
                                                                                        : <Text>{destination.description}</Text>

                                                                        }


                                                                </Text>
                                                        </View>


                                                        <TouchableOpacity style={{ width: 30, marginRight: 5, }} onPress={() => navigation.navigate("BottomScreen")}>
                                                                <Image source={icons.down_arrow} style={{ width: 15, height: 20, tintColor: COLORS.black }} />
                                                        </TouchableOpacity>
                                                </View>
                                                <Divider />
                                                <View style={{ flexDirection: 'row', marginTop: SIZES.padding / 2, marginHorizontal: 5, }}>
                                                        <Image source={icons.location} style={{ tintColor: COLORS.green, width: 20, height: 20, margin: 1 }} />

                                                        <View style={{ flexDirection: "row", flexWrap: 'wrap', flex: 3, margin: 2 }}>

                                                                <Text numberOfLines={1}>
                                                                        <Text > Delivery will -

                                                                        </Text >
                                                                        <Text style={{ fontWeight: '700' }}>Tommorow at 9 A.M- 6 P.M  </Text>
                                                                </Text>
                                                        </View>



                                                </View>










                                        </View> : null
                                }

                                <FlatList
                                        data={cart}
                                        ListEmptyComponent={renderempty}
                                        ListFooterComponent={

                                                cart.length > 0 ? <>
                                                        <RenderTotal />
                                                        <RenderPersnalDetails />
                                                        <View style={{ marginVertical: 5 }}>
                                                                <Text style={{ color: COLORS.red, marginHorizontal: SIZES.padding, fontSize: 10, elevation: 1 }}>
                                                                        Order once placed cannot be cancelled and are non-refundable
                                                                </Text>
                                                        </View>


                                                </> : null

                                        }
                                        keyExtractor={(item) => item._id}
                                        renderItem={({ item, index }) => {
                                                return (
                                                        <CartItem item={item} index={index} />
                                                )
                                        }}



                                />








                        </View>

                        <View style={{ marginHorizontal: SIZES.padding * 2, marginVertical: SIZES.padding }}>
                                {
                                        cart.length > 0 ? <Stepper /> : null
                                }
                        </View>

                </View>

        )
}


const mapStateToProps = (state) => {
        return {
                cart: state.shop.cart,
        };
};

export default connect(mapStateToProps)(Cart);
