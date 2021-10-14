import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Categoreycart from '../../components/card/Categoreycart'
import Maincate from '../../components/card/Maincate'
import PosterCard from '../../components/card/PosterCard'
import Carousel from '../../components/Carousel'
import Logocomponment from '../../components/Headercomponment/Logocomponment'
import SearchComponment from '../../components/Headercomponment/SearchComponment'
import Showmore from '../../components/Headercomponment/Showmore'
import Categoreycard1 from '../../components/MainComponent/Categoreycard1'
import ProductCard1 from '../../components/MainComponent/ProductCard1'
import ProductCard2 from '../../components/MainComponent/ProductCard2'
import ProductCard3 from '../../components/MainComponent/ProductCard3'
import { COLORS, FONTS, SIZES } from '../../constants'

const cateitem=[
    {
        id:1,
        name:"Apple",
        Qty:"kg",
        rate:"12.00",
        image:require('../../assets/categorey/p1.png'),
        bg:'#79B4B7'
    },
    {
        id:2,
        name:"Apple",
        Qty:"kg",
        rate:"12.00",
        image:require('../../assets/categorey/p5.png'),
        bg:'#BEBEF4'
    },{
        id:3,
        name:"Apple",
        Qty:"kg",
        rate:"12.00",
        image:require('../../assets/categorey/p4.png'),
        bg:'#B8DFD8'
    },{
        id:4,
        name:"Apple",
        Qty:"kg",
        rate:"12.00",
        image:require('../../assets/categorey/p2.png'),
        bg:'#DDDDDD'
    },{
        id:5,
        name:"Apple",
        Qty:"kg",
        rate:"12.00",
        image:require('../../assets/categorey/p3.png'),
        bg:'#B980D0'
    },
]
export default function NewHome({navigation}) {
    
    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:COLORS.white2}} >
            <SafeAreaView>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    marginTop:20,
                    marginBottom:5,
                    marginHorizontal:10

                    
                    }}>
                        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
                        <Icon name="menu" size={24 } color={COLORS.gray} />
                        </TouchableWithoutFeedback>
                        
                        
                        <TouchableOpacity>
                        <Image source={require('../../assets/categorey/user.png')} style={{
                            height:50,
                            width:50,
                            borderRadius:50,
                            borderColor:'#000',
                            borderWidth:2
                        }} />
                        </TouchableOpacity>
                    

                </View>
            </SafeAreaView>
            <Logocomponment />
            {/* search */}
            <SearchComponment onPress={()=>navigation.navigate('searchScreen')} />
            <Showmore onPress={()=>{}} label="Show More" heading="Shop By Categorey" />
            <Maincate />
            <Showmore onPress={()=>{}} label="Show More" heading="Best Deal" />
                        {/* anewstyle */}
                        <ProductCard2 />
                        <ProductCard2 />
                        <ProductCard2 />
                        <ProductCard2 />
           



            <Carousel />
            <Showmore onPress={()=>{}} label="Show More" heading="Trendeing" />
                        {/* anewstyle */}
            <ProductCard3 />
            <ProductCard3 />
            <ProductCard3 />
           


            
            <Showmore onPress={()=>{}} label="Show More" heading="Shop By Categorey" />
            <PosterCard />
             

           
            <Showmore onPress={()=>{}} label="Show More" heading="Shop By Categorey" />

            {/* categoreyItem */}
            <FlatList
                data={cateitem}
                style={{
                    marginVertical:4
                }}
                
                keyExtractor={(item,index)=>`catelist-${index}`}
                horizontal={true}               
                renderItem={({item})=>{
                    return (
                        <ProductCard1 item={item} />
                    )
                }}

            
            
            />
            <View style={{height:100}}>

            </View>

                            


                        
                       
                       
                        
                        
                        
                        
        </ScrollView>
        <View style={{ height: 50, position: 'absolute', bottom: 0, backgroundColor: '#7b2cbf', left: 0, right: 0, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>

        <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', marginHorizontal: SIZES.padding, marginVertical: 15 }}>
                        <Text style={{ color: COLORS.white, fontWeight: '700', }}> ITEM | </Text>
                        
                        <Text style={{ color: COLORS.white, fontWeight: '600', fontSize: 14, marginLeft: 3 }}>Rs 500.00 + </Text>

                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: SIZES.padding, marginVertical: 15 }}>
                        <Text style={{ color: COLORS.white, fontWeight: '700', fontSize: 12 }}>View Cart</Text>
                        {/* <Image source={icons.cart} style={{ width: 15, height: 15, tintColor: COLORS.white, marginLeft: 5 }} /> */}
                </View>


        </TouchableOpacity>
</View>
</>
    )
}

