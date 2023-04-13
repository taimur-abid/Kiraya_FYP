import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.CircleShape} />
      <View
        style={{
          width: 209,
          top: 129,
          left: 130,
          height: 204,
          position: 'absolute',
          borderRadius: 300 / 2,
          backgroundColor: '#1F3846',
        }}
      />
      <View
        style={{
          width: 110,
          height: 110,
          left: 283,
          top: 203,
          position: 'absolute',
          borderRadius: 300 / 2,
          backgroundColor: '#9FB0DB',
        }}
      />
      <Image style={styles.tinyLogo} source={require('./images/Kiraya.png')} />
      <Text style={styles.FontKiraya}>Welcome to Kiraya - کرایہ</Text>
      <Text style={styles.FontUtellize}>Utilize to Monetize</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Onboard')}>
        <Text style={styles.setFontSizeOne}>Get Started</Text>
      </TouchableOpacity>
      <View
        style={{
          width: 105,
          height: 86,
          left: -17,
          top: 654,
          position: 'absolute',
          borderRadius: 300 / 2,
          backgroundColor: '#5C83BC',
        }}
      />
      <View
        style={{
          width: 75,
          height: 72,
          left: 44,
          top: 685,
          position: 'absolute',
          borderRadius: 300 / 2,
          backgroundColor: '#B7BABF',
        }}
      />
      <View
        style={{
          width: 55.55,
          height: 55.06,
          left: 53.96,
          top: 652,
          position: 'absolute',
          borderRadius: 300 / 2,
          backgroundColor: '#1F3846',
        }}
      />
    </View>
  );
};







const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#B2CCDF',
  },
  tinyLogo: {
    width: 150,
    height: 160,
    position: 'absolute',
    left: 140,
    top: 260,
  },
  setFontSizeOne: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    width: 280,
    left: 67,
    top: 560,
    textAlign: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderColor: '#000000',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderWidth: 3,
    backgroundColor: '#808080',
    padding: 10,
  },
  CircleShape: {
    width: 250,
    top: 0,
    left: 180,
    height: 251,
    position: 'absolute',
    borderRadius: 300 / 2,
    backgroundColor: '#5C83BC',
  },
  FontKiraya: {
    position: 'absolute',
    width: 263,
    height: 45,
    left: 79,
    top: 428,
    fontFamily: 'Inter',
    fontSize: 23,
    textAlign: 'center',
    color: '#000000',
    fontWeight: '900',
  },

  FontUtellize: {
    position: 'absolute',
    width: 186,
    height: 25,
    left: 115,
    top: 478,
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
    
  },
});

export default Home;
