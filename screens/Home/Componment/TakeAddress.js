import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
export default function TakeAddress() {
    return (
        <View style={styles.container} >
            <SafeAreaView>
                <View style={styles.card}>
                    <View style={styles.drop}>
                        <Text style={styles.dropText}> Drop Address</Text>
                        <TouchableOpacity>
                            <Feather name="x" size={24} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.search}>
                        <View style={styles.inputwrapper}>
                            <View style={styles.pinkdot} />
                            <TextInput placeholderTextColor="#afb1b6" placeholder="where are to deliver?" />
                        </View>
                        <View>
                                <Feather name="search" size={20} />
                        </View>

                        
                    </View>
                    <View style={styles.bottomCard}>
                        <View style={styles.bottomCardPin}>
                            <Fontisto name="map-marker-alt" size={20} style={styles.bottomCardIcon} />
                            <Text style={styles.bottomCardText}>Tap To Select From Map</Text>
                        </View>
                        <TouchableOpacity style={styles.bottomCircle}>
                            <Feather name="arrow-right" size={20} style={{color:'#fff'}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff'

    },
    card:{
        padding:20,
        marginHorizontal:10,
        borderColor:'#efefef',
        borderWidth:1,
        borderRadius:20,
        marginTop:30,


    },
    drop:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',


    },
    dropText:{
        fontWeight:'bold',
        color:'#ff5563'

    },
    search:{
        marginVertical:15,
        padding15,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:5,
        borderColor:'#efeff0',
        borderWidth:2

    },
    inputwrapper:{
        flexDirection:'row',
        alignItems:'center',


    },
    pinkdot:{
        width:10,
        height:10,
        borderRadius:10,
        backgroundColor:'#ff5563',
        marginRight:10

    },
   bottomCard:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       marginTop:20,

   },
   bottomCardPin:{
       flexDirection:'row',
       alignItems:'center'

   },
   bottomCardIcon:{
       color:'#ff4858',
       marginRight:10,


   },
   bottomCardText:{
       color:'#92939b',
       fontWeight:'500',
       fontSize:16

   },
   bottomCircle:{
       width:50,
       height:50,
       borderRadius:50,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#000'

   }
   
})
