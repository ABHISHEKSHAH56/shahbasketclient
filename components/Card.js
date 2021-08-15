import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Button } from 'react-native-paper'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import RNPickerSelect from '@react-native-picker/picker'
import inr from './inr.png'
export default function CardItem({ data, containerStyle, imageStyle, onpress }) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: 'row',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,

      }}
      onPress={onpress}

    >
      <View style={{ alignItems: 'center' }}>
        <Image source={data.image} style={{ height: 110, width: 110, margin: 4, marginTop: 10 }} />
        <View style={{ position: 'absolute', left: 10, backgroundColor: COLORS.orange, borderRadius: 4, marginTop: 5 }}>
          <Text style={{ alignSelf: 'center', padding: 2, fontSize: 10, fontWeight: '700', color: COLORS.white }}>Fresh</Text>
        </View>



      </View>
      <View style={{ flex: 3, justifyContent: 'space-around' }}>
        <Text style={{ alignSelf: 'center', fontWeight: '700', ...FONTS.h3 }}>{data.name}</Text>


        <Text style={{ alignSelf: 'center' }}>1kg </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image source={inr} />
          <Text>
            {data.price}
          </Text>
        </View>

      </View>

      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <TouchableOpacity style={{ backgroundColor: 'blue', borderRadius: 10 }}>
          <Text style={{ color: COLORS.white, marginTop: 1, alignSelf: 'center' }}>ADD</Text>
        </TouchableOpacity>

      </View>

    </TouchableOpacity>
  )
}
