import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Onboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.CircleBlue} />
      <View style={styles.CircleDark} />
      <Image style={styles.tinyLogo} source={require('./images/Girl.png')} />
      <Text style={styles.FontOnboard}>Welcome Onboard!</Text>
      <Text style={styles.FontUser}>Become a verified User</Text>
      <View style={styles.Rectangle}>
        <Text style={styles.setFont}>
          Establish Identity Faster Approvals Prevent Scams Earn your stars
        </Text>
        <View
          style={{
            position: 'absolute',
            left: 216,
            width: 65,
            height: 116,
            backgroundColor: '#60A1D8',
            borderRadius: 22,
          }}
        />
        <Image
          style={{
            width: 60,
            height: 60,
            position: 'absolute',
            left: 185,
            top: 25,
          }}
          source={require('./images/image.png')}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          width: 450,
          height: 3,
          left: 0,
          top: 385,
          backgroundColor: '#000000',
          borderRadius: 12,
        }}
      />
      <View
        style={{
          height: 50,
          position: 'absolute',
          width: 430,
          top: 392,
          backgroundColor: '#60A1D8',
          alignItems: 'center',
        }}
        >
        <Text
          style={{
            marginTop: 11,
            fontWeight: 'bold',
            fontSize: 20,
            color: '#000000',
          }}>
          1) Create your Profile
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          width: 450,
          height: 3,
          left: 0,
          top: 445,
          backgroundColor: '#000000',
          borderRadius: 12,
        }}
      />
      <View
        style={{
          height: 50,
          position: 'absolute',
          width: 430,
          top: 452,
          backgroundColor: '#60A1D8',
          alignItems: 'center',
        }}
        >
        <Text
          style={{
            marginTop: 11,
            fontWeight: 'bold',
            fontSize: 20,
            color: '#000000',
          }}>
          2) Verify your Mobile Number
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          width: 450,
          height: 3,
          left: 0,
          top: 505,
          backgroundColor: '#000000',
          borderRadius: 12,
        }}
      />
      <View
        style={{
          height: 50,
          position: 'absolute',
          width: 430,
          top: 512,
          backgroundColor: '#60A1D8',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Email')}>
        <Text
          style={{
            marginTop: 11,
            fontWeight: 'bold',
            fontSize: 20,
            color: '#000000',
          }}>
          3) Verify your email
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          width: 450,
          height: 3,
          left: 0,
          top: 565,
          backgroundColor: '#000000',
          borderRadius: 12,
        }}
      />
      <View
        style={{
          height: 50,
          position: 'absolute',
          width: 430,
          top: 572,
          backgroundColor: '#60A1D8',
          alignItems: 'center',
        }}
        >
        <Text
          style={{
            marginTop: 11,
            fontWeight: 'bold',
            fontSize: 20,
            color: '#000000',
          }}>
          4) Verify your CNIC
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          width: 450,
          height: 3,
          left: 0,
          top: 625,
          backgroundColor: '#000000',
          borderRadius: 12,
        }}
      />
      <Text
        style={{top: 290, fontSize: 14, color: '#000000', textAlign: 'center'}}>
        To make Kiraya a safe a secure platform for everyone, please take these
        4 steps to verify your identity.
      </Text>

      <TouchableOpacity
        style={{
          height: 50,
          left: 10,
          position: 'absolute',
          width: 100,
          top: 685,
          backgroundColor: '#B2CCDF',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('SignIn')}>
        <Text
          style={{
            marginTop: 11,
            fontWeight: 'bold',
            fontSize: 20,
            color: '#000000',
          }}>
          Sign In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 50,
          left: 160,
          position: 'absolute',
          width: 100,
          top: 685,
          backgroundColor: '#B2CCDF',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Profile')}>
        <Text
          style={{
            marginTop: 11,
            fontWeight: 'bold',
            fontSize: 20,
            color: '#000000',
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 150,
          left: 300,
          position: 'absolute',
          width: 100,
          top: 680,
          backgroundColor: '#B2CCDF',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Listing')}>
        <Text
          style={{
            marginTop: 11,
            fontWeight: 'bold',
            fontSize: 20,
            color: '#000000',
            textAlign: 'center',
          }}>
          Sign Up Later
        </Text>
      </TouchableOpacity>
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

  setFont: {
    fontSize: 19,
    color: '#000000',
    fontWeight: 'bold',
    position: 'absolute',
    width: 150,
    height: 97,
    left: 25,
    top: 19,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0.06,
  },
  tinyLogo: {
    width: 60,
    height: 90,
    position: 'absolute',
    left: 20,
    top: 105,
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

  CircleDark: {
    width: 92,
    height: 93,
    left: -22,
    top: -17,
    position: 'absolute',
    borderRadius: 300 / 2,
    backgroundColor: '#1F3846',
  },
  FontOnboard: {
    position: 'absolute',
    width: 244,
    height: 39,
    left: 82,
    top: 135,
    fontSize: 25,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
  },

  FontUser: {
    position: 'absolute',
    width: 244,
    height: 39,
    left: 80,
    top: 168,
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
  },
  Rectangle: {
    position: 'absolute',
    width: 281,
    height: 116,
    left: 65,
    top: 214,
    backgroundColor: '#D9D9D9',
    borderRadius: 25,
  },
});

export default Onboard;
