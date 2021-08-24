import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { Appbar, Button, Divider } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { PushProfileAddress } from '../../../API/Index';
import { COLORS, SIZES } from '../../../constants';
import FormInput from '../../AuthScreen/component/FormInput';

export default function FormAddress({ navigation }) {
        const dispatch = useDispatch()
        const destination = useSelector(state => state.address.destination)
        const [completeAddress, setcompleteAddress] = useState('')
        const [profileaddress, setprofileaddress] = useState(null)


        /**
         *? Address book me bhi dalni hogi samja so post request 
         */

        const handlleruser = async () => {
                if (completeAddress.length > 4) {
                        setprofileaddress({
                                description: destination.description,
                                location: destination.location,
                                completeAddress: completeAddress

                        })

                        await PushProfileAddress(profileaddress).then((res) => {
                                dispatch({
                                        type: 'SET_DESTENATION',
                                        payload: profileaddress
                                })
                                navigation.pop(3)

                        }).catch((err) => console.log(err.response.error))

                }


        }


        return (
                <View>
                        <Appbar.Header>
                                <Appbar.BackAction onPress={() => navigation.goBack()} />
                                <Appbar.Content title="Confirm Address" />

                        </Appbar.Header>
                        <View style={{ marginTop: SIZES.padding * 3 }}>
                                <Text style={{ margin: 5, fontWeight: '700', color: COLORS.black }}>YOUR LOCATION DETECTED</Text>
                                <View style={{ marginLeft: 15, marginRight: 15, marginTop: 5, }}>
                                        <Text numberOfLines={1} style={{ backgroundColor: COLORS.white, height: 40, textAlignVertical: 'center' }}>{destination.description}</Text>
                                        <Divider style={{ borderWidth: 1, borderColor: COLORS.green }} />
                                </View>
                        </View>
                        <View style={{ marginTop: SIZES.padding, marginHorizontal: 4 }}>
                                <Text style={{ margin: 5, fontWeight: '700', color: COLORS.black }}>COMPLETE ADDRESS*</Text>
                                <FormInput
                                        labelValue={completeAddress}
                                        onChangeText={(e) => setcompleteAddress(e)}
                                        placeholderText="Floor ,House Number ,How to Reach"
                                        iconType="API"
                                />
                        </View>
                        <View style={{ marginVertical: SIZES.padding * 3 }}>
                                <Button mode="contained" color={completeAddress.length > 4 ? COLORS.green : COLORS.gray} onPress={handlleruser}>
                                        Confirm n Preceed
                                </Button>
                        </View>



                </View>
        )
}
