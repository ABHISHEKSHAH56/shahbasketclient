import React, { useContext, useState } from 'react';
import {
        View,
        Text,
        TouchableOpacity,
        Image,
        Platform,
        StyleSheet,
        ScrollView
} from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { COLORS, icons, SIZES } from '../../constants';
import { AuthContext } from '../../navigation/AuthProvider';
import FormButton from './component/FormButton';
import FormInput from './component/FormInput';
import SocialButton from './component/SocialButton';

export default function Userdetails({ navigation }) {
        const [phone, setphone] = useState('+91');
        const [name, setname] = useState('');


        const { phonelogin, googlelogin } = useContext(AuthContext);
        const handel = () => {
                if (phone && phone.length > 9) {
                        console.log(phone)
                        phonelogin(phone)
                        navigation.navigate("userverifyotp", {
                                name: name,
                                phone: phone,
                        })

                }
                else {
                        alert("number must be 10 digit")
                }
        }



        return (
                <View  >
                        <Appbar.Header>
                                <Appbar.BackAction onPress={() => navigation.goBack()} />
                                <Appbar.Content title="Persnal Details" />

                        </Appbar.Header>

                        <View style={{ justifyContent: 'center', marginVertical: SIZES.padding * 5 }}>

                                <TextInput
                                        label="Name"

                                        mode='outlined'
                                        value={name}
                                        style={{ marginHorizontal: SIZES.padding, backgroundColor: COLORS.white }}
                                        outlineColor={COLORS.gray}

                                        onChangeText={text => setname(text)}
                                />

                                <View style={{ marginHorizontal: SIZES.padding }}>
                                        <FormInput

                                                labelValue={phone}
                                                onChangeText={(phone) => setphone(phone)}
                                                placeholderText="Mobile"
                                                iconType="phone"
                                                keyboardType="numeric"
                                        />
                                </View>



                                <View style={{ marginHorizontal: SIZES.padding }}>
                                        <FormButton
                                                buttonTitle="verify"
                                                onPress={handel}
                                        />
                                </View>
                        </View>




                </View>
        );
};


