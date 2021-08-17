import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Button } from 'react-native-paper'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import RNPickerSelect from '@react-native-picker/picker'
import inr from './inr.png'
import SelectDropdown from 'react-native-select-dropdown'

const countries = ["1kg", "500gm", "250gm", "100gm"]
export default function CardItem({ data, containerStyle, onpress }) {
  const [click, setclick] = useState(false)
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        elevation: 1,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...containerStyle,

      }}
      onPress={onpress}

    >
      <View style={{ position: 'absolute', top: 0, left: 0, backgroundColor: COLORS.orange, borderRadius: 3, borderTopRightRadius: 3 }}>
        <Text style={{ color: COLORS.white, fontSize: 10, padding: 2, fontWeight: '700' }}>Fresh</Text>
      </View>
      <TouchableOpacity style={{ flex: 3, justifyContent: 'flex-start', marginTop: 30, marginLeft: 5 }}>
        <Text style={{ fontWeight: '700', fontSize: 17 }}>{data.name}</Text>
        <Text style={{ fontWeight: '500', color: COLORS.gray, fontSize: 12 }}>Genrally used in {data.description} </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ margin: 2, color: COLORS.gray }}>Quantity: </Text>
          <View style={{ margin: 2, width: 60, borderWidth: 1, borderColor: COLORS.blue, borderRadius: 4 }}>
            <Text style={{ textAlign: 'center' }} >{data.qty}</Text>

          </View>

        </View>

        <View style={{ flexDirection: 'row', margin: 2 }}>

          <Image source={inr} style={{ height: 15, width: 15 }} />
          <Text style={{ fontWeight: '700' }}>{data.price}</Text>
        </View>

      </TouchableOpacity>


      <View style={{}}>
        <Image source={data.image} style={{ height: 100, width: 110, margin: 4, marginTop: 10 }} resizeMode='contain' />
      </View>
      <View style={{ position: 'absolute', bottom: 3, right: 20, borderRadius: 3, borderTopRightRadius: 3 }}>
        <TouchableOpacity onPress={() => setclick(!click)} style={{ width: 60, height: 25, backgroundColor: click ? COLORS.gray : '#eb416e', borderRadius: 8 }} >
          {
            click ? <Text style={{ color: COLORS.white, textAlign: 'center', padding: 2, fontSize: 12, fontFamily: '900' }} >ADDED +</Text>
              : <Text style={{ color: COLORS.white, textAlign: 'center', padding: 2, fontSize: 12, fontFamily: '900' }} >ADD +</Text>

          }
        </TouchableOpacity>
      </View>



    </View>
  )
}
