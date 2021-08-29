import React, { createContext, useState } from 'react'
import { View, Text } from 'react-native'
import auth from "@react-native-firebase/auth"
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import { AppGoogleLogIn, AppLogIn, Applogout, AppMobileLogIn, AppSignUp, AppVerifyMobile } from '../API/Index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
export const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null)
  const [confirm, setConfirm] = useState(null);
  const dispatch = useDispatch()
  auth
  return (
    <AuthContext.Provider value={{
      user, setuser,
      login: async (email, password) => {
        try {
          await auth().signInWithEmailAndPassword(email, password);
          const data = {
            email: email, password: password
          }
          await AppLogIn(data).then((res) => {
            AsyncStorage.setItem("accessToken", res.data.accessToken)
            AsyncStorage.setItem("userData", JSON.stringify(res.data.user))

            console.log(res.data.accessToken)
          })
        } catch (error) {
          console.log(error)

        }
      },
      register: async (email, password) => {
        try {
          await auth().createUserWithEmailAndPassword(email, password)

          const data = {
            email: email, password: password
          }
          await AppSignUp(data).then((res) => {
            console.log(res.data)
            AsyncStorage.setItem("accessToken", res.data.accessToken)
            AsyncStorage.setItem("userData", JSON.stringify(res.data.user))

            console.log(res.data.accessToken)
          })




        } catch (e) {
          console.log(e);
        }

      },
      logout: async () => {
        try {
          await auth().signOut();
          await Applogout().then((res) => {
            AsyncStorage.setItem("accessToken", '')
            AsyncStorage.setItem("userData", '')
            console.log(res.data)
          })

        } catch (error) {
          console.log(error)

        }
      },
      googlelogin: async () => {

        try {
          // Get the users ID token
          const { idToken } = await GoogleSignin.signIn();

          // Create a Google credential with the token
          const googleCredential = auth.GoogleAuthProvider.credential(idToken);

          // Sign-in the user with the credential
          await auth().signInWithCredential(googleCredential)
          const data = {
            email: auth().currentUser.email,
            password: "ramjankihai",
            name: auth().currentUser.displayName,
            phone: auth().currentUser.phoneNumber,
            profileimage: auth().currentUser.photoURL

          }
          console.log(data)
          await AppGoogleLogIn(data).then((res) => {
            console.log(res.data)
            AsyncStorage.setItem("accessToken", res.data.accessToken)
            AsyncStorage.setItem("userData", JSON.stringify(res.data.user))
          }).catch((err) => console.log(err.response.error))

        } catch (error) {
          console.log({ error });
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
          const data = {
            email: auth().currentUser.email,
            password: "ramjankihai",
            name: auth().currentUser.displayName,
            phone: auth().currentUser.phoneNumber,
            profileimage: auth().currentUser.photoURL

          }
          console.log(data)
          AppMobileLogIn(data).then((res) => {
            console.log(res.data.accessToken)
            AsyncStorage.setItem("accessToken", res.data.accessToken)
            AsyncStorage.setItem("userData", JSON.stringify(res.data.user))
          }).catch((err) => console.log(err.response.error))


        } catch (error) {
          alert(JSON.stringify(error))


        }

      },
      userverifier: async (otp, name) => {
        try {
          await confirm.confirm(otp);
          const data = {
            name: name,
            phone: auth().currentUser.phoneNumber,
          }
          await AppVerifyMobile(data).then((res) => {
            console.log(res.data.id)
            dispatch({
              type: 'SET_PERSNAL',
              payload: {
                id: res.data.id,
                name: name,
                phone: auth().currentUser.phoneNumber
              }
            })
          }).catch((err) => console.log(err.response))


        } catch (error) {
          alert(JSON.stringify(error))


        }
      }

    }}>
      {children}
    </AuthContext.Provider>
  )
}