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
import { AuthContext } from '../../navigation/AuthProvider';
import FormButton from './component/FormButton';
import FormInput from './component/FormInput';
import SocialButton from './component/SocialButton';

const OtpScreen = ({ navigation }) => {
        const [code, setcode] = useState(null);

        // const navigation = useNavigation()
        //console.log(navigation)

        const { mobileverification } = useContext(AuthContext);

        return (
                <ScrollView contentContainerStyle={styles.container}>
                        <Image
                                source={require('../../assets/images/onboarding-1.png')}
                                style={styles.logo}
                        />
                        <Text style={styles.text}>RN Social App</Text>

                        <FormInput
                                labelValue={code}
                                onChangeText={(co) => setcode(co)}
                                placeholderText="OTP"
                                iconType="user"
                                keyboardType="numeric"

                        />


                        <FormButton
                                buttonTitle="Verify Code"
                                onPress={() => mobileverification(code)}
                        />

                        <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                                <Text style={styles.navButtonText}>Forgot Password?</Text>
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
});