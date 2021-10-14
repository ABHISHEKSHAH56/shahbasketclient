// import React, { useEffect, useState } from 'react'
// import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
// import { COLORS, FONTS, icons, SIZES } from '../../constants'
// import { categoreyItem, Mainproduct } from '../../constants/dummyData'
// import CardItem from '../../components/Card'
// import { Appbar, Divider } from 'react-native-paper'
// import { useSelector } from 'react-redux'
import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Logocomponment from '../../components/Headercomponment/Logocomponment'
import SearchComponment from '../../components/Headercomponment/SearchComponment'
import Categoreycard1 from '../../components/MainComponent/Categoreycard1'
import ProductCard2 from '../../components/MainComponent/ProductCard2'
import { COLORS, FONTS, SIZES } from '../../constants'


const cate=[
        {
            id:1,
            name:"Favourite"
        },
        {
            id:2,
            name:"Vegetable"
        },{
            id:3,
            name:"Fruit"
        },{
            id:4,
            name:"Green"
        },{
            id:5,
            name:"Seasnal"
        },
    ]




// function renderemptyerror() {
//         return (
//                 <View style={{ marginHorizontal: SIZES.padding, marginVertical: SIZES.padding * 3 }}>
//                         <Image source={require("../../assets/messages/search1.gif")} resizeMode='contain' style={{ width: SIZES.width, height: 300 }} />
//                 </View>
//         )
// }





export default function Search({ navigation }) {
        const [categorey, setcategorey] = useState("Favourite")
        // const product = useSelector(state => state.shop.products)
        // const cart = useSelector(state => state.shop.cart)
        // const subtotal = cart.reduce((a, c) => a + c.price, 0)
        // const [search, setsearch] = useState('')
        // const [categorySelect, setcategorySelect] = useState('All')






        // const filterData = React.useMemo(() => {
        //         let filterProduct = product;
        //         if (search) {
        //                 filterProduct = filterProduct.filter(
        //                         (item) => item.name.toLowerCase().includes(search.toLowerCase()) ||
        //                                 item.englishName.toLowerCase().includes(search.toLowerCase())

        //                 );

        //         }

        //         if (categorySelect !== 'All') {


        //                 filterProduct = filterProduct.filter((item) => item.categorey === categorySelect);

        //         }
        //         return filterProduct;




        // }, [categorySelect, product, search]);










        





        return (

               <View  style={{backgroundColor:COLORS.white2}} >
               <SafeAreaView>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    marginTop:20,
                    marginBottom:5,
                    marginHorizontal:10

                    
                    }}>
                        <TouchableWithoutFeedback onPress={()=>navigation.pop()} >
                        <Icon name="arrow-left" size={24 } color={COLORS.gray} />
                        </TouchableWithoutFeedback>
                        
                        <View>
                            <Text style={{fontWeight:'bold',textTransform:'uppercase',fontSize:18}}>
                                Search
                            </Text>
                        </View>
                        <TouchableOpacity>
                        <Icon name="filter" size={24 } color={COLORS.gray} />
                        </TouchableOpacity>
                    

                </View>
            </SafeAreaView>
            {/* search */}
            <SearchComponment />

             {/* categorey */}
             <View style={{marginVertical:5}}>
                    <FlatList
                        data={cate}
                        style={{marginVertical:5}}
                        
                        keyExtractor={(item,index)=>index+3}
                        horizontal={true}
                        renderItem={({item})=>{
                            return (
                                <Categoreycard1 categorey={categorey} setcategorey={setcategorey} item={item} />
                                
                                )
                        }}

                    
                    
                    />
             </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <ProductCard2 />
                <View style={{height:250}}></View>

            </ScrollView> 
            
               









            </View>
            





            















        )
}
