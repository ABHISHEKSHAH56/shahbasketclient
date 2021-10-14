import { useNavigation } from '@react-navigation/native';
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
import { COLORS, FONTS, SIZES } from '../../constants';
import { AuthContext } from '../../navigation/AuthProvider';
import FormButton from './component/FormButton';
import FormInput from './component/FormInput';
import SocialButton from './component/SocialButton';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import AnimatedLoader from 'react-native-animated-loader';

const OtpScreen = ({ navigation, route }) => {

        const [timer, settimer] = useState(60)
        const [code, setcode] = useState(null);
        const [visible, setVisible] = useState(false);
        const { phone } = route.params
        const { mobileverification, phonelogin } = useContext(AuthContext);
        const handller = () => {
                setVisible(true)
                const value = mobileverification(code);
                if (value) {

                        setTimeout(() => {
                                setVisible(false)
                                navigation.pop(2)
                        }, 1000);
                }
                else {

                        alert("your code does not match ...try again ")

                }





        }
        const againhangller = () => {
                if (timer === 0) {
                        phonelogin(phone)
                        settimer(60)
                }
        }


        React.useEffect(() => {
                let interval = setInterval(() => {
                        settimer(prev => {
                                if (prev > 0) {
                                        return prev - 1
                                }
                                else {
                                        return prev
                                }
                        })
                }, 1000)
                return () => clearInterval(interval)
        }, [])


        return (
                <ScrollView contentContainerStyle={styles.container}>

                        <AnimatedLoader
                                visible={visible}
                                overlayColor="rgba(255,255,255,0.95)"
                                source={require("../../assets/messages/tri.json")}
                                animationStyle={{
                                        width: 250,
                                        height: 250
                                }}
                                speed={1}
                        >

                        </AnimatedLoader>



                        <Image
                                source={require('../../assets/banners/6.png')}
                                style={styles.logo}
                        />
                        <View style={{ flex: 1, }}>
                                <Text style={{
                                        fontWeight: '700',
                                        fontSize: 25,
                                        color: COLORS.black,
                                        textAlign: 'center'
                                }}>OTP Authentication</Text>

                                <Text style={{
                                        fontWeight: '700',
                                        fontSize: 14,
                                        color: COLORS.gray,
                                        marginHorizontal: 3,
                                        marginVertical: SIZES.padding


                                }}>An authentication code has been sent to your mobile {phone}</Text>

                        </View>
                        <OTPInputView
                                style={{ width: '100%', height: 50, marginVertical: SIZES.padding }}
                                pinCount={6}
                                codeInputFieldStyle={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: SIZES.radius,
                                        backgroundColor: COLORS.lightGray2,
                                        color: COLORS.black,
                                        ...FONTS.h2

                                }}

                                onCodeFilled={(code) => {
                                        setcode(code)
                                        console.log(`Code is ${code}, you are good to go!`)
                                }}
                        />
                        <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginVertical: SIZES.padding
                        }}>
                                <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Didn't receive code ?</Text>
                                <TouchableOpacity onPress={againhangller}>
                                        {
                                                timer > 0 ? <Text style={{ fontSize: 15, color: COLORS.orange }}>Resend ({timer}) </Text>
                                                        : <Text style={{ fontSize: 15, color: COLORS.orange }}>Resend</Text>

                                        }
                                </TouchableOpacity>


                        </View>
                        <TouchableOpacity
                                onPress={code ? handller : null}
                                style={{
                                        marginTop: 10,
                                        width: '100%',
                                        height: SIZES.height / 15,
                                        backgroundColor: code ? COLORS.green : COLORS.gray,
                                        padding: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 3,

                                }} >
                                <Text style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        color: '#ffffff',
                                        fontFamily: 'Lato-Regular',

                                }}>Verify</Text>
                        </TouchableOpacity>


                </ScrollView>
        );
};

export default OtpScreen;

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
        borderStyleBase: {
                width: 30,
                height: 45
        },

        borderStyleHighLighted: {
                borderColor: "#03DAC6",
        },

        underlineStyleBase: {
                width: 30,
                height: 45,
                borderWidth: 0,
                borderBottomWidth: 1,
        },

        underlineStyleHighLighted: {
                borderColor: "#03DAC6",
        },
});