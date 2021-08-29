import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../../constants'
import { categoreyItem, Mainproduct } from '../../constants/dummyData'
import CardItem from '../../components/Card'
import { Appbar, Divider } from 'react-native-paper'
import { useSelector } from 'react-redux'





function renderemptyerror() {
        return (
                <View style={{ marginHorizontal: SIZES.padding, marginVertical: SIZES.padding * 3 }}>
                        <Image source={require("../../assets/messages/search1.gif")} resizeMode='contain' style={{ width: SIZES.width, height: 300 }} />
                </View>
        )
}





export default function Search({ navigation }) {
        const product = useSelector(state => state.shop.products)
        const [search, setsearch] = useState('')
        const [categorySelect, setcategorySelect] = useState('All')






        const filterData = React.useMemo(() => {
                let filterProduct = product;
                if (search) {
                        filterProduct = filterProduct.filter(
                                (item) => item.name.toLowerCase().includes(search.toLowerCase()) ||
                                        item.englishName.toLowerCase().includes(search.toLowerCase())

                        );

                }

                if (categorySelect !== 'All') {


                        filterProduct = filterProduct.filter((item) => item.categorey === categorySelect);

                }
                return filterProduct;




        }, [categorySelect, product, search]);










        function RendercategoreyItem() {

                return (
                        <FlatList

                                horizontal
                                style={{ marginVertical: 10 }}

                                showsHorizontalScrollIndicator={false}
                                data={categoreyItem}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => {
                                        return (
                                                <TouchableOpacity onPress={() => setcategorySelect(item.name)}  >
                                                        <View style={{ marginLeft: 10, borderWidth: 2, minHeight: 25, minWidth: 90, borderRadius: 5, backgroundColor: item.name === categorySelect ? COLORS.blue : 'transparent' }}>
                                                                <Text style={{ textAlign: 'center', color: item.name === categorySelect ? COLORS.white : COLORS.black, fontSize: 14 }}>{item.name}</Text>
                                                        </View>
                                                </TouchableOpacity>
                                        )

                                }}


                        />
                )
        }




        return (
                <View style={{ backgroundColor: COLORS.white, flex: 1 }}>
                        {/* {Header(navigation)} */}
                        <View >
                                <Text style={{ marginTop: 10, textAlign: 'center', fontWeight: '700', }}>SEARCH</Text>

                                <View style={{ marginHorizontal: SIZES.padding, marginVertical: 10, flexDirection: 'row', alignItems: 'center', }}>
                                        <TextInput
                                                style={{
                                                        flex: 3,
                                                        height: 45,
                                                        borderColor: COLORS.gray,
                                                        borderWidth: 2,
                                                        borderRadius: 15


                                                }}
                                                autoFocus={true}
                                                placeholder="search....."
                                                keyboardType="default"
                                                value={search}
                                                onChangeText={(e) => setsearch(e)}
                                        />
                                        <View style={{ position: 'absolute', right: 2 }}>
                                                <Image source={icons.search} style={{ width: 30, height: 30, marginTop: 5, margin: 4 }} />
                                        </View>
                                </View>
                                <Text style={{ marginHorizontal: 5, fontWeight: '700' }}>Categorey</Text>

                                {RendercategoreyItem(categorySelect, setcategorySelect)}
                                <View style={{ height: 1, borderColor: COLORS.green, borderBottomWidth: 2, }}>

                                </View>




                        </View>







                        <FlatList
                                data={filterData}
                                ListHeaderComponent={
                                        <View style={{ marginBottom: SIZES.padding }}>

                                        </View>
                                }
                                keyExtractor={(item) => item._id}
                                ListEmptyComponent={renderemptyerror}
                                ListFooterComponent={
                                        <View>

                                                <View style={{ height: 10 }} />
                                        </View>
                                }
                                renderItem={({ item }) => {
                                        return (

                                                <View>

                                                        <CardItem
                                                                containerStyle={{
                                                                        height: 150,
                                                                        marginHorizontal: SIZES.padding,
                                                                        marginBottom: SIZES.radius
                                                                }}

                                                                data={item}
                                                                onpress={() => { }}

                                                        />
                                                        <Divider />
                                                </View>

                                        )
                                }}
                        />

                </View>
        )
}
