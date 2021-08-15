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
import { AuthContext } from '../../navigation/AuthProvider';
import FormButton from './component/FormButton';
import FormInput from './component/FormInput';
import SocialButton from './component/SocialButton';

const MobileAuthenticationScreen = ({ navigation }) => {
        const [phone, setphone] = useState('+91');

        const { phonelogin, googlelogin } = useContext(AuthContext);
        const handel = () => {
                if (phone && phone.length > 9) {
                        phonelogin(phone)
                        navigation.navigate('OtpVerify')
                }
                else {
                        alert("number must be 10 digit")
                }
        }

        return (
                <ScrollView contentContainerStyle={styles.container}>
                        <Image
                                source={require('../../assets/images/onboarding-1.png')}
                                style={styles.logo}
                        />
                        <Text style={styles.text}>RN Social App</Text>

                        <FormInput
                                labelValue={phone}
                                onChangeText={(phone) => setphone(phone)}
                                placeholderText="Mobile"
                                iconType="phone"
                                keyboardType="numeric"
                        />



                        <FormButton
                                buttonTitle="verify"
                                onPress={handel}
                        />




                        <View style={{ marginTop: 50 }}>
                                <SocialButton
                                        buttonTitle="Sign In with email"
                                        btnType="user"
                                        color="#4867aa"
                                        backgroundColor="#e6eaf4"
                                        onPress={() => navigation.navigate('Login')}
                                />

                                <SocialButton
                                        buttonTitle="Sign In with Google"
                                        btnType="google"
                                        color="#de4d41"
                                        backgroundColor="#f5e7ea"
                                        onPress={() => googlelogin()}
                                />
                        </View>


                        <TouchableOpacity
                                style={styles.forgotButton}
                                onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.navButtonText}>
                                        Don't have an acount? Create here
                                </Text>
                        </TouchableOpacity>
                </ScrollView>
        );
};

export default MobileAuthenticationScreen;

const styles = StyleSheet.create({
        container: {
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                paddingTop: 50
        },
        logo: {
                height: 150,
                width: 150,
                resizeMode: 'cover',
        },
        text: {
                fontFamily: 'Kufam-SemiBoldItalic',
                fontSize: 28,
                marginBottom: 10,
                color: '#051d5f',
        },
        navButton: {
                marginTop: 15,
        },
        forgotButton: {
                marginVertical: 35,
        },
        navButtonText: {
                fontSize: 18,
                fontWeight: '500',
                color: '#2e64e5',
                fontFamily: 'Lato-Regular',
        },
});