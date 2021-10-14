import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context';
import { SIZES } from '../../../constants'
import Mapstyle from './Mapstyle';

const aspectRation=SIZES.width/SIZES.height;
export default function MapView() {
    return (
        <View style={{
            flex:1
        }}>
            <MapView provider="google"
            style={style.absolutefillobject}
            initialRegion={{
                latitude: -6.337131,
                longitude: 107.279725,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01*aspectRation,

              }}

            customMapStyle={Mapstyle}
            
            >
            <Marker
            coordinate={{
                latitude:-6.335495,
                longitude:107.280031,

            }}>
                <View style={[styles.tooltip,{
                    borderLeftColor:'#02dc9f'
                }]}>
                    <Text style={{color:'#a4a6ac'}}>R.A Delhi</Text>
                    <Feather style={{color:'#a4a6ac'}} name="chevron-right" size={20} />
                    <Svg width="18" height="15"  style={{
                        position:'absolute',
                        bottom:-15,
                        left:100,
                    }} viewBox="0 0 18 15">
                        <Path d="M9 15L0.339745 0L17.6603 0L9 152" fill="#FFF" />
                    </Svg>
                </View>
                <View style={[
                    styles.dotwrapper,
                    {
                        backgroundColor:'rgba(2,213,155,.25)'
                    }
                ]}>
                    <View style={[
                    styles.dot,
                    {
                        backgroundColor:'#02d59b'
                    }
                ]}>

                    </View>


                </View>

            </Marker>
            <Marker
            coordinate={{
                latitude:-6.335495,
                longitude:107.280031,

            }}>
                <View style={[
                    styles.dotwrapper,
                    {
                        backgroundColor:'rgba(247,70,86,.25)'
                    }
                ]}>
                    <View style={[
                    styles.dot,
                    {
                        backgroundColor:'#f74656'
                    }
                ]}>

                    </View>


                </View>

            </Marker>
            <MapViewDirections

            origin={{

            }}
            destination={{

            }}
            apikey={}
            mode="WALKING"
            strokeColor="#5b5c69"
            strokeWidth={4} lineDasPattern={[6,6]}
            
            />




            </MapView>
            <View>
                <SafeAreaView style={{marginHorizontal:20}}>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center'
                    }}>
                        <Feather name="arrow-left" size={24} />
                    </View>

                </SafeAreaView>
            </View>
            <View style={styles.bottomwrapper}>
                <View style={styles.Note}>
                   <Text style={{fontWeight:'bold',color:'#868891'}}>Note:</Text>
                   <Text style={{color:'#868891'}}>
                       this is a fucking idea you know
                   </Text>
                </View>
                <View style={styles.footerAction}>
                    <Text style={styles.footertext}>Confirm</Text>

                </View>

            </View>
     
        </View>
    )
}

const styles = StyleSheet.create({
    dotwrapper:{
        width:30,
        height:30,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    dot:{
        height:10,
        width:10,
        borderRadius:10
    },
    tooltip:{
        width:220,
        backgroundColor:'#fff',
        position:'relative',
        borderLeftWidth:6,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowRadius:5,
        shadowOpacity:0.05,
        borderRadius:5,
        marginBottom:20
    },
    bottomwrapper:{
        position:'absolute',
        bottom:0,
        width:SIZES.width

    },
    Note:{
        backgroundColor:'#f5f5f6',
        alignItems:'center',
        paddingHorizontal:40,
        paddingVertical:10
    },
    footerAction:{
        width:SIZES.width,
        backgroundColor:'#000',
        alignItems:'center',
        paddingTop:20,
        paddingBottom:40
    },
    footertext:{
        fontWeight:'bold',
        color:'#fff',
        fontSize:16
    }
})
