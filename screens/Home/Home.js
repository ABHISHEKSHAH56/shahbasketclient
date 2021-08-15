import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { icons, SIZES, COLORS, FONTS } from '../../constants'
import { bannerdata, categoreyItem, productitem } from '../../constants/dummyData'
import CarouselFunction from '../../components/Carousel'
import CardItem from '../../components/Card'
import { useContext } from 'react'
import { AuthContext } from '../../navigation/AuthProvider'
import Verticalfood from '../../components/Verticalfood'
import ICONS from 'react-native-vector-icons/FontAwesome5'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import GetLocation from 'react-native-get-location'

const Section = ({ title, childern, onPress }) => {
        return (
                <View>
                        <View style={{
                                flexDirection: 'row',
                                marginHorizontal: SIZES.padding,
                                marginTop: 30,
                                marginBottom: 20


                        }}>
                                <Text style={{ flex: 1, ...FONTS.h3, fontWeight: '700' }}>{title}</Text>
                                <TouchableOpacity
                                        onPress={onPress}

                                >
                                        <Text style={{ color: COLORS.primary, ...FONTS.body3, fontWeight: '700' }}
                                        > show All</Text>
                                </TouchableOpacity>
                        </View>
                        {childern}



                </View>
        )

}

const HeaderView = ({ navigation, logout, onPress }) => {
        return (
                <SafeAreaView style={{
                        height: 50,


                        flexDirection: 'row',
                        elevation: 4,
                        backgroundColor: COLORS.white

                }}>
                        {/* //Address */}
                        <TouchableOpacity style={{
                                flex: 3,
                                flexDirection: 'row',
                                margin: 5
                        }} onPress={onPress}>
                                <Image source={icons.location} style={{ padding: 10, tintColor: COLORS.primary, height: 30, width: 30 }} />
                                <Text style={{ margin: 2, ...FONTS.h3, fontWeight: '700' }}>Bapa nagar padam singh Road...</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ margin: 15 }} onPress={() => logout()}>
                                <Image source={icons.notification} style={{ height: 20, width: 20, tintColor: COLORS.green }} />
                        </TouchableOpacity>
                </SafeAreaView>
        )
}
function categorey() {
        return (
                <FlatList
                        data={categoreyItem}
                        horizontal

                        showsHorizontalScrollIndicator={false}


                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                                return (
                                        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => { }}>
                                                <Image source={item.image} style={{ height: 100, width: 100 }} />
                                                <Text style={{ fontWeight: '700', color: COLORS.primary }} >{item.title}</Text>

                                        </TouchableOpacity>
                                )
                        }}


                />
        )
}
const BestDeal = ({ tag }) => {
        return (
                <FlatList
                        data={productitem}
                        horizontal
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                                return (<Verticalfood
                                        tag={tag}
                                        data={item}
                                        onpress={() => { }}

                                />)
                        }}

                />
        )
}



export default function Home({ navigation }) {
        const { logout } = useContext(AuthContext)
        const datadestination = useSelector(state => state.address.destination)
        console.log(datadestination)
        const dispatch = useDispatch()
        const bs = React.useRef(null);
        const fall = new Animated.Value(1);
        // useEffect(() => {

        //         GetLocation.getCurrentPosition({
        //                 enableHighAccuracy: true,
        //                 timeout: 15000,
        //         })
        //                 .then(location => {
        //                         console.log(location);
        //                 })
        //                 .catch(error => {
        //                         const { code, message } = error;
        //                         console.warn(code, message);
        //                 })
        // }, [])

        const renderContent = () => (
                <View
                        style={{
                                backgroundColor: 'white',
                                padding: 16,
                                height: 350,
                                marginTop: 20
                        }}
                >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ ...FONTS.h3, fontWeight: '700' }}>
                                        Search location

                                </Text>
                                <TouchableOpacity onPress={() => bs.current.snapTo(1)}>
                                        <Image source={icons.cross} style={{ height: 15, width: 20 }} />
                                </TouchableOpacity>
                        </View>
                        {/* search */}
                        <GooglePlacesAutocomplete
                                placeholder='Search...'
                                nearbyPlacesAPI="GooglePlacesSearch"
                                debounce={400}
                                styles={{
                                        container: {
                                                flex: 0
                                        },
                                        textInput: {
                                                fontSize: 18
                                        }
                                }}
                                minLength={4}
                                enablePoweredByContainer={false}
                                fetchDetails={true}
                                returnKeyType={"search"}

                                onPress={(data, details = null) => {
                                        // 'details' is provided when fetchDetails = true

                                        dispatch({
                                                type: 'SET_DESTENATION',
                                                payload: {
                                                        location: details.geometry.location,
                                                        description: data.description
                                                }
                                        })
                                        navigation.navigate('MapScreen')
                                }}
                                query={{
                                        key: 'AIzaSyAAz-MohqRGzBEvhGE388mgogJVyE0EvhI',
                                        language: 'en',
                                }}
                        />

                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }} >
                                <ICONS name="location-arrow" color={COLORS.red} size={20} />
                                <Text style={{ color: COLORS.red, marginLeft: 5 }}>Use Current Location</Text>

                        </TouchableOpacity>

                        {/* usecureentlocation */}
                        <View style={{ marginTop: 20 }} >
                                <Text style={{ ...FONTS.h4, fontWeight: '700' }}>Saved Address</Text>


                                <TouchableOpacity style={{ flexDirection: 'row', height: 65, marginTop: 10, alignItems: 'center', borderBottomColor: COLORS.white, borderBottomWidth: 1, elevation: 1 }}>
                                        <View style={{ flex: 1, alignItems: 'center' }}>
                                                <ICONS name="home" color={COLORS.gray} size={20} />
                                        </View>
                                        <View style={{ flex: 8, alignItems: 'center' }}>
                                                <Text>Bapa nagar padam sing road karol bagh </Text>

                                        </View>
                                        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                                                <ICONS name="ellipsis-v" color={COLORS.gray} size={20} />
                                        </TouchableOpacity>

                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: 'row', height: 65, marginTop: 10, alignItems: 'center', borderBottomColor: COLORS.white, borderBottomWidth: 1, elevation: 1 }}>
                                        <View style={{ flex: 1, alignItems: 'center' }}>
                                                <ICONS name="home" color={COLORS.gray} size={20} />
                                        </View>
                                        <View style={{ flex: 8, alignItems: 'center' }}>
                                                <Text>Bapa nagar padam sing road karol bagh road karol bagh </Text>

                                        </View>
                                        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                                                <ICONS name="ellipsis-v" color={COLORS.gray} size={20} />
                                        </TouchableOpacity>

                                </TouchableOpacity>


                        </View>
                </View>


        );


        return (
                <>
                        <BottomSheet
                                ref={bs}
                                snapPoints={[330, 0]}
                                borderRadius={10}
                                renderContent={renderContent}
                                initialSnap={1}
                                callbackNode={fall}
                                enabledGestureInteraction={true}
                        />
                        <View style={{ flex: 1, backgroundColor: COLORS.white2 }}>

                                {/* adrress +notifications */}

                                {/*  */}


                                <FlatList
                                        data={productitem}
                                        ListHeaderComponent={
                                                <View>
                                                        <HeaderView logout={logout} onPress={() => bs.current.snapTo(0)} />
                                                        <CarouselFunction />
                                                        <View style={{ margin: 5 }} >
                                                                <Text style={{ ...FONTS.h3, fontWeight: '700', marginLeft: 8 }}>Categorey</Text>
                                                        </View>
                                                        {categorey()}
                                                        <Section title="Today Best Deal" />

                                                </View>
                                        }
                                        keyExtractor={(item) => item.id}
                                        ListFooterComponent={
                                                <View>
                                                        <Image source={require('../../assets/badiya/62265-walking-taco.gif')} style={{ width: SIZES.width, height: 200 }} />
                                                        <Section title="Best combo" />
                                                        <BestDeal tag='Best Combo' />
                                                        <Section title="Best Deal" />
                                                        <BestDeal tag='Best Deal' />
                                                        <View style={{ height: 10 }} />
                                                </View>
                                        }
                                        renderItem={({ item }) => {
                                                return (
                                                        <CardItem
                                                                containerStyle={{
                                                                        height: 130,
                                                                        marginHorizontal: SIZES.padding,
                                                                        marginBottom: SIZES.radius
                                                                }}
                                                                imageStyle={{

                                                                        height: 110, width: 110,

                                                                }}
                                                                data={item}
                                                                onpress={() => {}}

                                                        />)
                                        }}
                                />





                        </View>
                </>
        )
}
