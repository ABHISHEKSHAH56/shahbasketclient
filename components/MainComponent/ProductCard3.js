import React, { useState } from 'react'
import { Image, Text,  TouchableOpacity,  View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS, FONTS, SIZES } from '../../constants'

export default function ProductCard3({}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        elevation: 1,
        marginVertical: 5,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        marginHorizontal: 5,
      }}>
      <View
        style={{
          backgroundColor: COLORS.green,
          borderRadius: 3,
          borderTopRightRadius: 3,
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 12,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 12,
            fontWeight: '700',
            transform: [{rotate: '-90deg'}],
          }}>
          Fresh
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          marginHorizontal: 5,
          paddingHorizontal: 5,
        }}>
        <Text style={{fontWeight: 'bold', ...FONTS.h3}}>Potato</Text>
        <Text numberOfLines={2} style={{fontSize: 10, color: COLORS.gray}}>
          All patoto is sweet you know & fresh too one of the best one{' '}
        </Text>
        <Text style={{fontWeight: 'bold', color: '#E2703A'}}>Rs 96.00/Kg</Text>
        <Text
          style={{
            fontSize: 10,
            color: COLORS.gray,
            textDecorationLine: 'line-through',
          }}>
          Rs 102.00/Kg{' '}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightGray2,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/categorey/p2.png')}
          resizeMode="contain"
          style={{height: 80, width: 80, alignSelf: 'center'}}
        />

        {/* <TouchableOpacity  style={{ width: 80, height: 25, backgroundColor: '#eb416e', borderRadius: 8 ,justifyContent:'center'}} >
          <Text style={{ color: COLORS.white, textAlign: 'center', padding: 2, fontSize: 12, fontFamily: '900' }} >ADD+ </Text>
       </TouchableOpacity> */}
        <View
          style={{
            flexDirection: 'row',
            height: 25,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginBottom: 4,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.red,
              height: 18,
              width: 18,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="minus" color="#fff" size={16} />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: COLORS.white,
              width: 50,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              marginHorizontal: 3,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 12}}>2 Kg</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.green,
              height: 18,
              width: 18,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="plus" color="#fff" size={16} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
