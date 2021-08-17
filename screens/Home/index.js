import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { SIZES, COLORS, FONTS, icons } from '../../constants'
import { categoreyItem, Mainproduct, productitem } from '../../constants/dummyData'
import CarouselFunction from '../../components/Carousel'
import CardItem from '../../components/Card'
import { useContext } from 'react'
import { AuthContext } from '../../navigation/AuthProvider'
import InitalAdress from './Componment/InitalAdress';
import ICONS from 'react-native-vector-icons/FontAwesome5'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from "@env"
import { useDispatch } from 'react-redux';

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


function categorey() {
        return (
                <FlatList
                        data={categoreyItem}
                        horizontal

                        showsHorizontalScrollIndicator={false}


                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                                return (
                                        <TouchableOpacity style={{ flex: 1, alignItems: 'center', width: 90 }} onPress={() => { }}>
                                                <Image source={item.image} style={{ height: 80, width: 80, borderRadius: 250 }} resizeMode='contain' />
                                                <Text style={{ fontWeight: '700', color: COLORS.gray }} >{item.name}</Text>

                                        </TouchableOpacity>
                                )
                        }}


                />
        )
}


export default function Home({ navigation }) {
        const { logout } = useContext(AuthContext)
        const bs = React.useRef(null);
        const fall = new Animated.Value(1);
        const dispatch = useDispatch()

        const ListAddress = () => {

                return (
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
                                <GooglePlacesAutocomplete
                                        placeholder='Search...'
                                        nearbyPlacesAPI="GooglePlacesSearch"
                                        debounce={400}
                                        styles={{
                                                container: {
                                                        flex: 0,
                                                        elevation: 2,
                                                        borderWidth: 1,
                                                        height: 50,
                                                        borderColor: COLORS.gray

                                                },
                                                textInput: {
                                                        fontSize: 18,


                                                },
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
                                                key: GOOGLE_API_KEY,
                                                language: 'en',
                                        }}
                                />


                                {/* search */}
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
                )
        }



        return (
                <>
                        <BottomSheet
                                ref={bs}
                                snapPoints={[330, 0]}
                                borderRadius={10}
                                renderContent={ListAddress}
                                initialSnap={1}
                                callbackNode={fall}
                                enabledGestureInteraction={true}
                        />
                        <View style={{ flex: 1, backgroundColor: COLORS.white2 }}>
                                <FlatList
                                        data={Mainproduct}
                                        ListHeaderComponent={
                                                <View>
                                                        <InitalAdress logout={logout} onPress={bs} />
                                                        <CarouselFunction />
                                                        <View style={{ margin: 5 }} >
                                                                <Text style={{ ...FONTS.h3, fontWeight: '700', marginLeft: 8 }}>Categorey</Text>
                                                        </View>
                                                        {categorey()}
                                                        <Section title="Today Best Deal" />

                                                </View>
                                        }
                                        keyExtractor={(item) => item.name}
                                        ListFooterComponent={
                                                <View>
                                                        <Image source={require('../../assets/badiya/62265-walking-taco.gif')} style={{ width: SIZES.width, height: 200 }} />

                                                        <View style={{ height: 10 }} />
                                                </View>
                                        }
                                        renderItem={({ item }) => {
                                                return (
                                                        <CardItem
                                                                containerStyle={{
                                                                        height: 150,
                                                                        marginHorizontal: SIZES.padding,
                                                                        marginBottom: SIZES.radius
                                                                }}

                                                                data={item}
                                                                onpress={() => { }}

                                                        />)
                                        }}
                                />





                        </View>
                </>
        )
}
