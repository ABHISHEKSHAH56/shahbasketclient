import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image,TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, FONTS, SIZES} from '../../constants';
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import {GOOGLE_API_KEY} from '@env';
import {useNavigation} from '@react-navigation/native';
import Mapstyle from '../Home/Componment/Mapstyle';
import Feather from 'react-native-vector-icons/Feather';
import Svg, {Path} from 'react-native-svg';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function HomeMap() {
  const navigation = useNavigation();
  const destination = useSelector(state => state.address.destination);
  const [formateedAdress, setformateedAdress] = React.useState(null);
  console.log(destination, 'jjhnhgvb');
  const dispatch = useDispatch();
  return (
    <View style={{flex:1}}>
      
        <MapView
          provider={PROVIDER_GOOGLE}
          style={StyleSheet.absoluteFillObject}
          initialRegion={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}>
          {destination?.location && (
            <Marker
             
              
              draggable
              onDragEnd={e => {
                const {coordinate} = e.nativeEvent;
                Geocoder.init(GOOGLE_API_KEY, {language: 'en'});
                Geocoder.from(coordinate.latitude, coordinate.longitude).then(
                  json => {
                    setformateedAdress(json.results[0].formatted_address);
                  },
                );
                dispatch({
                  type: 'SET_DESTENATION',
                  payload: {
                    location: {
                      lat: coordinate.latitude,
                      lng: coordinate.longitude,
                    },
                    description: formateedAdress,
                  },
                });
              }}
              coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,
              }}
              identifier="destination">
              <View
                style={[
                  styles.tooltip,
                  {
                    borderLeftColor: '#02dc9f',
                  },
                ]}>
                <View>
                <Text style={{fontSize:12,fontWeight:'bold'}}>YOUR ORDER WILL DELIVER HERE </Text>
                <Text style={{color: '#a4a6ac',fontSize:10}}>Adjust  the pin accuratley </Text>
                        </View>
                
                <Svg
                  width="18"
                  height="15"
                  style={{
                    position: 'absolute',
                    bottom: -15,
                    left: 100,
                  }}
                  viewBox="0 0 18 15">
                  <Path d="M9 15L0.339745 0L17.6603 0L9 152" fill="#FFF" />
                </Svg>
              </View>
              <View
                style={[
                  styles.dotwrapper,
                  {
                    backgroundColor: 'rgba(2,213,155,.25)',
                  },
                ]}>
                <Image source={require('./final.png')} style={ styles.dot} />
               
              </View>
            </Marker>
          )}
        </MapView>
            <View>
                 <SafeAreaView style={{marginHorizontal:20}}>
                     <TouchableOpacity style={{
                        flexDirection:'row',
                        alignItems:'center'
                       
                    }} onPress={()=>navigation.pop()}   >
                        <Feather name="arrow-left" size={30} style={{marginTop:15}} />
                    </TouchableOpacity>

                   </SafeAreaView>
            </View>
            
             <View style={styles.bottomwrapper}>
                
                 <View style={styles.Note}>
                         <View style={{}}>
                                 <Text style={{fontWeight:'bold',marginVertical:5,color:'#091353',fontSize:15}}>Your Location Detected</Text>
                                 <TextInput 
                                 placeholder="Not Able to Detect" 
                                 style={{
                                         
                                         height:50,
                                         color:'#000',
                                         fontWeight:'700',
                                         backgroundColor:'#fff',                                         
                                         marginHorizontal:3,
                                         borderRadius:8,
                                         borderWidth:1,
                                         borderColor:COLORS.darkBlue,
                                         paddingHorizontal:15
                                 }}
                                  value={destination.description } />

                         </View>
                         <View style={{}}>
                                 <Text style={{fontWeight:'bold',marginVertical:5,color:'#091353',fontSize:15}}>Complete Address *</Text>
                                 <TextInput 
                                 placeholder="Floor,Near By"
                                 style={{
                                         
                                        height:50,
                                        color:'#000',
                                        fontWeight:'700',
                                        backgroundColor:'#fff',                                         
                                        marginHorizontal:3,
                                        borderRadius:8,
                                        borderWidth:1,
                                        borderColor:COLORS.darkBlue,
                                        paddingHorizontal:15
                                         
                                 }}
                                   />

                         </View>
                
                    
                 </View>
                 <TouchableWithoutFeedback style={[styles.footerAction,{backgroundColor:COLORS.gray}]}>
                     <Text style={styles.footertext}>Confirm</Text>
                   
                 </TouchableWithoutFeedback>

             </View>

      

      
    </View>
  );
}


//  import React from 'react'
//  import { StyleSheet, Text, View } from 'react-native'
//  import MapView, { Marker} from 'react-native-maps'
//  import { SafeAreaView } from 'react-native-safe-area-context';
//  import { SIZES } from "../../constants";


//  import MapViewDirections from 'react-native-maps-directions'
//  const aspectRation=SIZES.width/SIZES.height;
//  export default function HomeMap() {
//      return (
//          <View style={{
//              flex:1
//          }}>
//              <MapView provider="google"
            
//              initialRegion={{
//                  latitude: 28.6510303,
//                  longitude: 77.1834421,
//                  latitudeDelta: 0.01,
//                  longitudeDelta: 0.01,

//                }}

            
            
//              >
//              <Marker
//              coordinate={{
//                  latitude: 28.6510303,
//                  longitude: 77.1834421,

//              }}>

//              </Marker>
//              <Marker
//              coordinate={{
//                  latitude:28.6554182,
//                  longitude:77.16462,

//              }}>
//                  <View style={[
//                      styles.dotwrapper,
//                      {
//                          backgroundColor:'rgba(247,70,86,.25)'
//                      }
//                  ]}>
//                      <View style={[
//                      styles.dot,
//                      {
//                          backgroundColor:'#f74656'
//                      }
//                  ]}>

//                      </View>


//                  </View>

//              </Marker>
            



//              </MapView>
     
//          </View>
//      )
//  }

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
            height:35,
            width:30,
            borderRadius:25
        },
        tooltip:{
            width:250,
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
            
            paddingHorizontal:10,
            paddingVertical:10
        },
        footerAction:{
            width:SIZES.width,           
            alignItems:'center',
            paddingTop:20,
            paddingBottom:20,
           
        },
        footertext:{
            fontWeight:'bold',
            color:'#fff',
            fontSize:16
        }
    })
    
    
//      <View
//          style={{backgroundColor: COLORS.white2, height: SIZES.height / 3 - 10}}>
//          <View style={{marginVertical: SIZES.padding, marginHorizontal: 5}}>
//            <Text style={{fontSize: 16, fontWeight: '700'}}>
//              Select Delivery Location
//            </Text>
//          </View>
//          <Divider />
//          <Text style={{margin: 5, fontWeight: '700', color: COLORS.gray}}>
//            YOUR LOCATION
//          </Text>
//          <View style={{marginLeft: 15, marginRight: 15, marginTop: 25}}>
//            {destination.description ? (
//              <Text numberOfLines={1}>{destination.description}</Text>
//            ) : (
//              <Text numberOfLines={1}>
//                Not able to detect...change pin somewhere around
//              </Text>
//            )}
//          </View>
//          <Divider />
//          <View style={{flex: 1, justifyContent: 'center'}}>
//            <Button
//              mode="contained"
//              color={destination.description ? COLORS.green : COLORS.gray}
//              onPress={() =>
//                destination.description
//                  ? navigation.navigate('FormAddress')
//                  : null
//              }>
//              Confirm Location
//            </Button>
//          </View>
//        </View>