import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import {COLORS, FONTS, SIZES} from '../../constants';
import { addToCart, adjustItemQty, removeFromCart } from '../../stores/Shopping/shopping-actions';

export default function ProductCard2({data}) {  
  const baseweight=parseFloat(data.baseQty)
  const maxweight=25  
  const [weight, setweight] = useState(baseweight)
  const [measuremnt, setmeasuremnt] = useState("Kg")
  const [addtocart, setaddtocart] = useState(true)
  const dispatch = useDispatch()


  useEffect(() => {
    if (data.isCart === undefined) {
      setaddtocart(true)
    }
    else if (data.isCart) setaddtocart(false)
    setweight(parseFloat(data.qty))    
    if (!data.isCart) setaddtocart(true)
  }, [data])

  const AddToCart=()=>{
      setaddtocart(false)
      dispatch(addToCart(data._id))
      


  }

  const onincrement=()=>{
      if(weight<1)
      {
          
          dispatch(adjustItemQty(data._id,weight+0.25)) 
          setweight(weight+0.25)        
          
      }
      else{
          
          dispatch(adjustItemQty(data._id,weight+1)) 
          setweight(weight+1) 
        }
      
  }
  const ondecriment=()=>{
      if(weight==baseweight)
      {
          
          dispatch(removeFromCart(data._id))
          setaddtocart(true)
          
          
      }
      else if(weight<=1)
      {
         
          
          dispatch(adjustItemQty(data._id,weight-0.25)) 
          setweight(weight-0.25) 
         
          

      }
      else{
        
        dispatch(adjustItemQty(data._id,weight-1))
        setweight(weight-1) 
      }
      
     
  }




  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        backgroundColor: '#fff',
        marginHorizontal: 4,
        borderRadius: 20,
        height: 100,
        shadowColor: COLORS.gray,
        shadowOffset: {
          height: 3,
          width: 5,
        },
        shadowRadius: 4,
        shadowOpacity: 0.1,
        elevation: 4,
      }}>
      <View
        style={{
          flex: 1.2,
          backgroundColor: COLORS.lightGray2,
          borderRadius: 10,
          marginLeft: 5,
          marginVertical: 5,
        }}>
        <Image
          source={require("../../assets/categorey/p4.png")}
          resizeMode="contain"
          style={{height: 80, width: 80, alignSelf: 'center'}}
        />
      </View>
      <View style={{flex: 2, justifyContent: 'center', marginHorizontal: 10}}>
        <Text style={{fontWeight: 'bold', ...FONTS.h3}}>{data.name}</Text>
        <Text numberOfLines={2} style={{fontSize: 10, color: COLORS.gray}}>
         {data.description}
        </Text>
      </View>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <View>
          <Text style={{fontWeight: 'bold', color: '#E2703A'}}>
           
            Rs {data.basePrice}/Kg
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 10,
                color: COLORS.gray,
                textDecorationLine: 'line-through',
              }}>
              Rs {data.basePrice*2}.00/Kg{' '}
            </Text>
            <Text
              style={{
                marginLeft: 4,
                color: COLORS.green,
                fontWeight: '700',
                fontSize: 10,
              }}>
              20% OFF
            </Text>
          </View>
        </View>
        {
          addtocart ?
          <TouchableOpacity onPress={AddToCart} style={{alignSelf:'center' ,backgroundColor:COLORS.green,height:25,width:55,justifyContent:'center',alignItems:'center',borderRadius:10,marginTop:10}} >
          <Text style={{fontWeight:'bold',color:'#fff',paddingVertical:2}}>Add</Text>     
          </TouchableOpacity>:
          <View
          style={{
            flexDirection: 'row',
            height: 25,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={ondecriment}
            style={{
              backgroundColor: COLORS.red,
              height: 20,
              width: 20,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="minus" color="#fff" size={20} />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: COLORS.lightGray2,
              width: 70,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              marginHorizontal: 3,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 12}}> {weight} {measuremnt}</Text>
          </View>
          <TouchableOpacity
            onPress={onincrement}
            style={{
              backgroundColor: COLORS.green,
              height: 20,
              width: 20,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="plus" color="#fff" size={20} />
          </TouchableOpacity>
          </View>
        }
      </View>
    </View>
  );
}
