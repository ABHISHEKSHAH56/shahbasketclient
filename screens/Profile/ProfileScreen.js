import React from 'react';
import { View, SafeAreaView, StyleSheet, Image } from 'react-native';
import {
        Avatar,
        Title,
        Caption,
        Text,
        TouchableRipple,
        Divider,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-share'

import files from '../../assets/filesBase64';
import { COLORS, icons } from '../../constants';
import { AuthContext } from '../../navigation/AuthProvider';
import { useContext } from 'react';

const UserProfileScreen = ({ navigation }) => {
        const { logout } = useContext(AuthContext);

        const myCustomShare = async () => {
                const shareOptions = {
                        message: 'Order your next vegetables N Fruits  from ShahBasket  App. I\'ve already ordered  placed more than 10 orders on it. \ get the app now https://abhishekshah.netlify.app/',
                        // url: files.image1,
                        urls: [files.appLogo]
                }

                try {
                        const ShareResponse = await Share.open(shareOptions);
                        console.log(JSON.stringify(ShareResponse));
                } catch (error) {
                        console.log('Error => ', error);
                }
        };

        return (
                <SafeAreaView style={styles.container}>

                        <View style={styles.userInfoSection}>
                                <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-around' }}>
                                        <View style={{ marginLeft: 20 }}>
                                                <Title style={[styles.title, {
                                                        marginTop: 15,
                                                        marginBottom: 5,
                                                }]}>John Doe</Title>
                                                <Text >ak8756110@shahbasket.com</Text>

                                        </View>
                                        <Avatar.Image
                                                source={require("../../assets/Product/cat1.jpg")}
                                                size={80}
                                        />

                                </View>
                        </View>


                        <View style={styles.infoBoxWrapper}>
                                <View style={[styles.infoBox, {
                                        borderRightColor: '#dddddd',
                                        borderRightWidth: 1
                                }]}>
                                        <Title>₹140.50</Title>
                                        <Caption>Wallet</Caption>
                                </View>
                                <View style={styles.infoBox}>
                                        <Title>12</Title>
                                        <Caption style={{ fontWeight: '700' }}>Orders</Caption>
                                </View>
                        </View>

                        <View style={styles.menuWrapper}>
                                <TouchableRipple onPress={() => navigation.navigate("Pastorder")}>
                                        <View style={styles.menuItem}>
                                                <Image source={icons.packet} style={{ width: 20, height: 20, tintColor: COLORS.black }} />
                                                <Text style={styles.menuItemText}>Orders</Text>
                                        </View>
                                </TouchableRipple>
                                <Divider />
                                <TouchableRipple onPress={() => navigation.navigate("Addressbook")}>
                                        <View style={styles.menuItem}>
                                                <Image source={icons.book} style={{ width: 20, height: 20, tintColor: COLORS.black }} />
                                                <Text style={styles.menuItemText}>Address Book</Text>
                                        </View>
                                </TouchableRipple>
                                <Divider />
                                <TouchableRipple onPress={myCustomShare}>
                                        <View style={styles.menuItem}>
                                                <Image source={icons.share} style={{ width: 20, height: 20, tintColor: COLORS.black }} />
                                                <Text style={styles.menuItemText}>Tell Your Friends</Text>
                                        </View>
                                </TouchableRipple>
                                <Divider />
                                <TouchableRipple onPress={() => navigation.navigate("Support")}>
                                        <View style={styles.menuItem}>
                                                <Image source={icons.support} style={{ width: 20, height: 20, tintColor: COLORS.black }} />

                                                <Text style={styles.menuItemText}>Support</Text>
                                        </View>
                                </TouchableRipple>
                                <Divider />
                                <TouchableRipple onPress={() => { }}>
                                        <View style={styles.menuItem}>
                                                <Image source={icons.setting} style={{ width: 20, height: 20, tintColor: COLORS.black }} />
                                                <Text style={styles.menuItemText}>Settings</Text>
                                        </View>
                                </TouchableRipple>


                        </View>
                        <Divider />
                        <TouchableRipple style={{ marginVertical: 16 }}>
                                <Text style={{ fontWeight: '700', marginHorizontal: 15 }}>Terms n Condition</Text>
                        </TouchableRipple>
                        <Divider />
                        <TouchableRipple style={{ marginVertical: 16 }}>
                                <Text style={{ fontWeight: '700', marginHorizontal: 15 }}>Privacy Policy</Text>
                        </TouchableRipple>
                        <Divider />
                        <TouchableRipple style={{ marginVertical: 16 }} onPress={logout}>
                                <Text style={{ fontWeight: '700', marginHorizontal: 15 }}>Logout</Text>
                        </TouchableRipple>
                </SafeAreaView>
        );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
        container: {
                flex: 1,
        },
        userInfoSection: {
                paddingHorizontal: 30,
                marginBottom: 25,
        },
        title: {
                fontSize: 24,
                fontWeight: 'bold',
        },
        caption: {
                fontSize: 14,
                lineHeight: 14,
                fontWeight: '500',
        },
        row: {
                flexDirection: 'row',
                marginBottom: 10,
        },
        infoBoxWrapper: {
                borderBottomColor: '#dddddd',
                borderBottomWidth: 1,
                borderTopColor: '#dddddd',
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 100,
        },
        infoBox: {
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',

        },
        menuWrapper: {
                marginTop: 10,
        },
        menuItem: {
                flexDirection: 'row',
                paddingVertical: 10,
                paddingHorizontal: 15,
        },
        menuItemText: {

                marginLeft: 10,
                fontWeight: '600',
                fontSize: 16,
                lineHeight: 26,

        },
});
