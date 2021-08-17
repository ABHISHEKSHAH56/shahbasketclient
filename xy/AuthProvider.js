import React, { createContext, useState } from 'react'
import { View, Text } from 'react-native'
import auth from "@react-native-firebase/auth"
import { GoogleSignin } from '@react-native-google-signin/google-signin';
export const AuthContext = createContext();

export const Authprovider = ({ children }) => {
        const [user, setuser] = useState(null)
        const [confirm, setConfirm] = useState(null);
        const [code, setCode] = useState('');
        return (
                <AuthContext.Provider value={{
                        user, setuser,
                        login: async (email, password) => {
                                try {
                                        await auth().signInWithEmailAndPassword(email, password);
                                } catch (error) {
                                        console.log(error)

                                }
                        },
                        register: async (email, password) => {
                                try {
                                        await auth().createUserWithEmailAndPassword(email, password)
                                                ;
                                } catch (error) {
                                        console.log(error)

                                }
                        },
                        logout: async () => {
                                try {
                                        await auth().signOut();
                                } catch (error) {
                                        console.log(error)

                                }
                        },
                        googlelogin: async () => {
                                // Get the users ID token
                                try {
                                        //await GoogleSignin.configure()
                                        const { idToken } = await GoogleSignin.signIn();

                                        // Create a Google credential with the token
                                        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

                                        // Sign-in the user with the credential
                                        await auth().signInWithCredential(googleCredential);
                                } catch (error) {
                                        console.log(error)

                                }
                        },
                        phonelogin: async (mobile) => {
                                try {
                                        console.log(mobile)
                                        const confirmation = await auth().signInWithPhoneNumber(mobile);
                                        setConfirm(confirmation);
                                } catch (error) {
                                        alert(JSON.stringify(error))
                                        console.log(error)

                                }
                        },
                        mobileverification: async (otp) => {
                                try {
                                        await confirm.confirm(otp);

                                } catch (error) {
                                        alert(JSON.stringify(error))


                                }

                        }

                }}>
                        {children}
                </AuthContext.Provider>
        )
}