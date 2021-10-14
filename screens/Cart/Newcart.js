import React from 'react'
import { View, Text, TouchableWithoutFeedback, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Fcon from 'react-native-vector-icons/Ionicons'
import Showmore from '../../components/Headercomponment/Showmore'
import ProductCard2 from '../../components/MainComponent/ProductCard2'
import { COLORS, FONTS, icons, SIZES } from '../../constants'

export default function Newcart({navigation}) {
    return (
        <View style={{backgroundColor:'#fff',flex:1}}>
           <SafeAreaView>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    marginTop:20,
                    marginBottom:5,
                    marginHorizontal:10

                    
                    }}>
                        <TouchableOpacity onPress={()=>navigation.pop()} style={{backgroundColor:COLORS.green,height:25,width:25,borderRadius:25}}>
                        <Icon name="arrow-left" size={24 } color={COLORS.white} />
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={()=>navigation.navigate('AddressScreen')} style={{width:SIZES.width-80,elevation:1,backgroundColor:'#fff',borderRadius:25,paddingVertical:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <View style={{flex:1,marginLeft:4}}>
                            <Fcon name="location" size={24} color='#F5AC92' style={{width:24,marginRight:5}}  />
                            </View>
                            <View style={{flex:9,marginHorizontal:4}}>
                            <Text  numberOfLines={1}>16/1301 E-block Bapa nagar pdam singh roadg bbdhjdhgdhgd </Text>
                            </View>
                            
                        </TouchableOpacity>
                       
                    

                </View>
            </SafeAreaView>
           <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10,marginHorizontal:15}}>
               <Text style={{fontWeight:'bold',fontSize:14}}> 4 Items </Text>
               <TouchableOpacity>
                   <Text style={{color:'#F5AC92',fontWeight:'bold'}}>Add more +</Text>
               </TouchableOpacity>
           </View>
           <ScrollView>
               <View>
               <ProductCard2 />
               <ProductCard2 />
               <ProductCard2 />
               <ProductCard2 />
               <ProductCard2 />
               </View>
               <View>
                   <View style={{marginHorizontal:15}}>
                       <Text style={{fontWeight:'bold',...FONTS.h3}}>Bill Details</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginVertical:5}}>
                        <Text style={{color:COLORS.gray}}>Subtotal</Text>
                        <Text style={{color:COLORS.gray,fontWeight:'bold'}}>Rs 45.00</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginVertical:5}}>
                        <Text style={{color:COLORS.gray}}>Shipping Charges</Text>
                        <Text style={{color:COLORS.gray,fontWeight:'bold'}}>Rs 0.00</Text>
                    </View>
                    
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginVertical:5}}>
                        <Text style={{fontWeight:'bold'}}>Subtotal</Text>
                        <Text style={{fontWeight:'bold'}}>Rs 45.00</Text>
                    </View>
               </View>
               <View style={{height:100}}>

               </View>
              
           </ScrollView>
           <View style={{position:'absolute',bottom:0,backgroundColor:'#fff',right:0,left:0}}>
               <TouchableOpacity onPress={()=>navigation.navigate('Checkout')} style={{ flexDirection:'row',  backgroundColor:'#f94144' ,height:45,marginHorizontal:30,marginVertical:20,width:SIZES.width-SIZES.width/4,borderRadius:15,alignItems:"center",justifyContent:'center'}}>
                    <Text style={{color:'#fff',fontWeight:"bold",fontSize:14}}>Proceed to Checkout </Text>
                    <Icon name="arrow-right" size={24} color="#fff" />
               </TouchableOpacity>

           </View>

        </View>
    )
}
