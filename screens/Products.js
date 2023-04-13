import React from 'react';
import {
    Button,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  


  const Products= (props) => {
    return (
        <View style={{padding:20}}>
        <TouchableOpacity
        style={{flexDirection: 'column'}}>
        <Image
          style={{flexDirection: 'row', width: 95, height: 117}}
          source={props.image}
        />
        <Text
          style={{
            flexDirection: 'row',
            width: 85,
            height: 22,
            fontSize: 10,
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {props.price}
        </Text>
        <Text
          style={{
            flexDirection: 'row',
            width: 85,
            height: 22,
            fontSize: 9,
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#5A5A5A',
          }}>
          {props.city}
        </Text>
      </TouchableOpacity>
      </View>
    );
  };
  
  export default Products;
  