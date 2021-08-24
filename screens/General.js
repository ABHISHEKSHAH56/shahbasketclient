import React from 'react'
import { useContext } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'
import { COLORS } from '../constants'




export const LoginScreen = ({ navigation }) => {
        const { Login } = useContext(AuthContext)
        return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text> Login page</Text>
                        <Button
                                onPress={() => navigation.navigate('SignUp')}
                                title="SignUp"
                                color="#841584"
                                accessibilityLabel="Learn more about this purple button"
                        />

                </View>
        )
}
export const SignupScreen = ({ navigation }) => {
        const { register } = useContext(AuthContext)

        return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text> signUp page</Text>
                        <Button
                                onPress={() => register('ak8756110@gmail.com', 'passwordhai')}
                                title="Login"
                                color="#841584"
                                accessibilityLabel="Learn more about this purple button"
                        />

                </View>
        )
}
export const BookmarkScreen = () => {
        return (
                <View>
                        <Text> Bookmark page</Text>
                </View>
        )
}

export const FeedScreen = () => {
        return (
                <View>
                        <Text> Feed page</Text>
                </View>
        )
}
export const NotificationsScreen = () => {
        return (
                <View>
                        <Text> Notifications page</Text>
                </View>
        )
}

export const SearchScreen = () => {
        return (
                <View>
                        <Text> Expoler page</Text>
                </View>
        )
}
