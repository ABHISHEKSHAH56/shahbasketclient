import React from 'react'
import { View, Text, TouchableWithoutFeedback, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Fcon from 'react-native-vector-icons/Ionicons'
import Showmore from '../../components/Headercomponment/Showmore'
import ProductCard2 from '../../components/MainComponent/ProductCard2'
import { COLORS, FONTS, icons, SIZES } from '../../constants'

export default function Checkout({navigation}) {
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
                        <TouchableOpacity onPress={()=>navigation.pop()} style={{height:25,width:25,borderRadius:25}}>
                        <Icon name="arrow-left" size={24 }  />
                        </TouchableOpacity>
                        
                        <View style={{width:SIZES.width-80,elevation:1,backgroundColor:'#fff',borderRadius:25,paddingVertical:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontWeight:'bold',textAlign:'center',fontSize:18}}>Checkout</Text>
                            
                        </View>
                       
                    

                </View>
            </SafeAreaView>
           <View style={{flexDirection:'row',justifyContent:'space-evenly',marginVertical:20,marginHorizontal:15}}>
              <View style={{flexDirection:'row',}}>
                  <Image source={icons.check_circle}  style={{width:15,height:15,tintColor:COLORS.primary}} />
                  <Text style={{marginLeft:2,fontWeight:'bold',fontSize:12}}>Delivery</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                  <Image source={icons.check_circle}  style={{width:15,height:15,tintColor:COLORS.gray}} />
                  <Text style={{marginLeft:2,fontWeight:'bold',fontSize:12,color:COLORS.gray}}>Payment</Text>
              </View>     
              
           </View>
           {/* details */}

          
               <View style={{height:SIZES.height-200,backgroundColor:'#EAEFF5',marginHorizontal:10}}>
                   <ScrollView>
                       <View style={{marginVertical:15}}>
                           <View style={{marginHorizontal:15,}}>
                               <Text style={{fontWeight:'bold',fontSize:16,color:'#f28482'}}>Delivery Address</Text>
                           </View>
                           <View style={{marginHorizontal:10,marginTop:10}}>
                                <View style={{
                                    height:120,
                                    width:SIZES.width-100,
                                    marginHorizontal:25,
                                    backgroundColor:'#fff',
                                    borderRadius:15,
                                    elevation:2,
                                    justifyContent:'space-around'
                                    
                                    
                                }}>
                                    <View style={{paddingHorizontal:15,paddingTop:15}}>
                                     <Text style={{overflow:'hidden',color:COLORS.black,fontSize:14}} >16/1301 E-Block Bapa Nagar Padam Singh Road Karol Bagh ,110005</Text>
                                    </View>

                                    <View style={{flexDirection:'row',justifyContent:'flex-end',paddingRight:10}}>
                                        <Text style={{paddingRight:4,fontSize:12,color:COLORS.gray}}>Delivery Address</Text>
                                        <Image source={icons.check_circle} style={{width:25,height:25,tintColor:COLORS.green}} />


                                    </View>


                               </View>
                               {/* add address */}
                               {/* <View style={{
                                    height:100,
                                    width:40,
                                    backgroundColor:'#fff',
                                    borderRadius:15,
                                    elevation:2 ,
                                   
                                    justifyContent:'center',
                                    alignItems:"center"                              
                                    
                                }}>
                                    
                                    <Icon name='plus' size={35} color={COLORS.blue} />
                                       
                                   

                                    </View> */}


                           </View>


                          
                       </View>

                       {/* ordersummary */}
                       <View style={{marginVertical:15}}>
                           <View style={{marginHorizontal:15,marginBottom:5}}>
                               <Text style={{fontWeight:'bold',fontSize:16,color:'#f28482'}}>Order Summary</Text>
                           </View>
                           <View style={{marginHorizontal:25,height:1,borderWidth:1,borderRadius:10,borderColor:"#fff"}}></View>
                            
                            {/* items */}
                            <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:15,marginVertical:10}}>
                                <Text style={{flex:2,fontSize:16,fontWeight:'bold'}}>Tomato</Text>
                                <Text style={{flex:1,marginRight:4}}>Qty: 2 Kg</Text>
                                <Text style={{flex:1}}>Rs 100</Text>
                            </View>
                            <View style={{marginHorizontal:25,height:1,borderWidth:1,borderRadius:10,borderColor:"#fff"}}></View>
                           
                            <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:15,marginVertical:10}}>
                                <Text style={{flex:2,fontSize:16,fontWeight:'bold'}}>Tomato</Text>
                                <Text style={{flex:1,marginRight:4}}>Qty: 2 Kg</Text>
                                <Text style={{flex:1}}>Rs 100</Text>
                            </View>
                            <View style={{marginHorizontal:25,height:1,borderWidth:1,borderRadius:10,borderColor:"#fff"}}></View>
                           
                            <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:15,marginVertical:10}}>
                                <Text style={{flex:2,fontSize:16,fontWeight:'bold'}}>Tomato</Text>
                                <Text style={{flex:1,marginRight:4}}>Qty: 2 Kg</Text>
                                <Text style={{flex:1}}>Rs 100</Text>
                            </View>
                            <View style={{marginHorizontal:25,height:1,borderWidth:1,borderRadius:10,borderColor:"#fff"}}></View>
                           
                            <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:15,marginVertical:10}}>
                                <Text style={{flex:2,fontSize:16,fontWeight:'bold'}}>Tomato</Text>
                                <Text style={{flex:1,marginRight:4}}>Qty: 2 Kg</Text>
                                <Text style={{flex:1}}>Rs 100</Text>
                            </View>
                            
                           
                           
{/* ***************************************************************************************************** */}
                    
                        
                        
                        
                        
                        </View>   

                   </ScrollView>

               </View>
            <View style={{marginHorizontal:5,flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={icons.info}  style={{height:25,width:25}}/>
                    <Text style={{fontWeight:'bold',marginHorizontal:10,fontSize:16}}>Total:</Text>
                    <Text >Rs 400.00</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Payment')} style={{backgroundColor:COLORS.blue,flexDirection:"row",justifyContent:'center',borderRadius:10,width:120,height:40,alignItems:'center'}}>
                    <Text style={{color:COLORS.white,fontWeight:'bold',marginRight:4}}>CONFIRM</Text>
                    <Image source={icons.check_circle} style={{height:20,width:20,tintColor:COLORS.white}}/>
                </TouchableOpacity>
            </View>
            









        </View>
    )
}
