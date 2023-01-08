import React from 'react';
import {
  Button,
  Image,
  StyleSheet,TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const Cart= ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.CircleBlue} />
      <View style={styles.CircleDark} />
      <View style={{flexDirection:'column',alignItems:'center',flex:1}}>

        
      <Text style={{top:176,fontWeight:'bold',fontSize:26,color:'#000000',textDecorationLine: 'underline'}}>THIS IS YOUR CART</Text>
        
        

       
      </View>
    </View>
  );
  };
  

  const styles = StyleSheet.create({
    container: {
      flex:8,
      justifyContent: 'center',
      paddingHorizontal: 10,
      backgroundColor: '#FFFFFF',
    },
  
  
    CircleBlue: {
      width: 124,
      height: 121,
      left: -46,
      top: 37,
      position: 'absolute',
      borderRadius: 300 / 2,
      backgroundColor: '#5C83BC',
    },
    Bluebutton: {
      position:'absolute',
      top:550,
      width: 143,
      height: 45,
      borderRadius: 33,
      backgroundColor: '#5C83BC',
    },
  
    CircleDark: {
      width: 92,
      height: 93,
      left: -22,
      top: -17,
      position: 'absolute',
      borderRadius: 300 / 2,
      backgroundColor: '#1F3846',
    },
  });
  export default Cart;
  