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

const LoginScreen = ({ navigation }) => {
        const [email, setEmail] = useState("shahnameiskan7@gmail.com");
        const [password, setPassword] = useState("Abhi@123")
        // const navigation = useNavigation()
        //console.log(navigation)

        const { login, googlelogin } = useContext(AuthContext);

        return (
                <ScrollView contentContainerStyle={styles.container}>
                        <Image
                                source={require('../../assets/images/onboarding-1.png')}
                                style={styles.logo}
                        />
                        <Text style={styles.text}>RN Social App</Text>

                        <FormInput
                                labelValue={email}
                                onChangeText={(userEmail) => setEmail(userEmail)}
                                placeholderText="Email"
                                iconType="user"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                        />

                        <FormInput
                                labelValue={password}
                                onChangeText={(userPassword) => setPassword(userPassword)}
                                placeholderText="Password"
                                iconType="lock"
                                secureTextEntry={true}
                        />

                        <FormButton
                                buttonTitle="Sign In"
                                onPress={() => login(email, password)}
                        />

                        <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                                <Text style={styles.navButtonText}>Forgot Password?</Text>
                        </TouchableOpacity>


                        <View>
                                <SocialButton
                                        buttonTitle="Sign In with mobile"
                                        btnType="phone"
                                        color="#4867aa"
                                        backgroundColor="#e6eaf4"
                                        onPress={() => navigation.navigate('Mobile')}
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

export default LoginScreen;

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