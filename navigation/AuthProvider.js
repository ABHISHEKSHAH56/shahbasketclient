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
            AsyncStorage.setItem("accessToken", res.data.accessToken)

            dispatch({
              type: 'SET_USER_DATA',
              payload: {
                address: res.data.user.address,
                userdata: res.data.user._id
              }
            })
            return true;

          }).catch((err) => {
            return false;
          })


        } catch (error) {
          console.log(error)


        }

      },
      logout: async () => {
        try {
          await auth().signOut();
          await Applogout().then((res) => {
            AsyncStorage.setItem("accessToken", '')
          })
          dispatch({
            type: 'SET_USER_DATA',
            payload: {
              address: null,
              userdata: null
            }
          })



        } catch (error) {
          console.log(error)

        }
      },

    }}>
      {children}
    </AuthContext.Provider>
  )
}