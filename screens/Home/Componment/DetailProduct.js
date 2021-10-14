import React from 'react'
import { Image, ScrollView, ScrollViewComponent, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Feather'
import { SIZES } from '../../../constants'
export default function DetailProduct() {
    return (
        <View style={{
            flex:1,
            backgroundColor:'#FFF'
        }}>
           <SafeAreaView style={{
               backgroundColor:'#49c074',
               borderBottomLeftRadius:40,
               borderBottomRightRadius:40,
           }}>
               <View style={{
                   flexDirection:'row',
                   justifyContent:'space-between',
                   padding:20,
                   paddingBottom:50,

               }}>
                   <TouchableOpacity>
                       <Icon style={{color:'#FFFF'}} name="chevron-left" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                       <Icon name="heart" size={24} />
                    </TouchableOpacity>

               </View>
           </SafeAreaView>

           <View style={{
               backgroundColor:'#ecfbf1',
               marginHorizontal:20,
               paddingVertical:20,
               borderRadius:20,
               marginTop:-30
           }}>
               <Text style={{color:'#00312d',fontFamily:'Montserrat-Bold',fontSize:24,textAlign:'center'}}>Freash Lemon</Text>
               <Text style={{color:'#545a58',fontFamily:'Montserrat-Bold',fontSize:24,textAlign:'center'}}>(Nimbu)</Text>
               <View style={{
                   alignItems:'center',

               }}>
                   <Image style={{
                       height:SIZES.height/3,
                       overflow:'hidden'
                   }} source={require("../../../assets/categorey/details.png")} resizeMode="center" />
               </View>
           </View>
           <View style={{
               alignSelf:'center',
               marginTop:-30

           }}>
               <View style={{
                   flexDirection:'row',
                   alignSelf:'baseline',
                   backgroundColor:'#fff',
                   padding:10,
                   borderRadius:30,

               }}>
                   <View style={{
                       backgroundColor:'#49c074',
                       width:40,
                       height:40,
                       borderRadius:40,
                       justifyContent:'center',
                       alignItems:'center'
                   }}>
                       <Icon  name="minus" style={{color:'#FFFF'}} size={30} />
                    </View>
                    <View style={{
                           marginHorizontal:20,
                           justifyContent:'center'
                    }}>
                        <Text style={{fontSize:18}}>500gm</Text>
                    </View>
                    <View style={{
                       backgroundColor:'#49c074',
                       width:40,
                       height:40,
                       borderRadius:40,
                       justifyContent:'center',
                       alignItems:'center'
                   }}>
                       <Icon  name="plus" style={{color:'#FFFF'}} size={30} />
                    </View>
               </View>
           </View>
           <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:20,}} >
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        marginBottom:20
                    }}>
                        <View >
                            <Text style={{color:'#00312d',fontSize:18}}>Description</Text>
                        </View>
                        <View >
                            <Text style={{color:'#083733',fontSize:16}} >$25.00</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{color:'#666666',fontSize:16}}>
                            aaj me bhut khus hu madarchod samxa d hdhgdg  &  hgdhgdhgh d gsgsgs ghsghsgsh gsgsgshshs gshgs.hhshgsshs
                        </Text>
                    </View>
                    </ScrollView>
                    <View style={{
               paddingHorizontal:20,
               marginTop:30,
           }}>
                            <View style={{
                                backgroundColor:'#346473',
                                padding:20,
                                borderRadius:20,
                                marginTop:40,
                                shadowColor:'#0000',
                                shadowOffset:{
                                    height:3,
                                    width:0,

                                },
                                shadowRadius:5,
                                shadowOpacity:0.5,
                                elevation:1 

                            }}>
                                <TouchableOpacity>
                                    <Text style={{color:'#fff', textAlign:'center', fontSize:16}}>Add to basket </Text>
                                </TouchableOpacity>
                            </View>
           </View>



        </View>
    )
}

const styles = StyleSheet.create({
    iconsHeader:{

    }
})
