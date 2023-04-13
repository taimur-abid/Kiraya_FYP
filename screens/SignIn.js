import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.CircleBlue} />
      <View style={styles.CircleDark} />
      <Image style={styles.tinyLogo} source={require('./images/Girl.png')} />
      <Text style={styles.FontOnboard}>Welcome Onboard!</Text>
      <Text style={styles.FontUser}>Become a verified User</Text>
     

     <View style={{flexDirection:'column',flex:1,top:230}}>

     <Text style={styles.Texts}>Email </Text>

      <View style={styles.GreyBox}>

      <View style={styles.EditTexts}>

          <TextInput 
            style={styles.TextInputs} 
            placeholder=" JOHNDOE@gmail.com"
            keyboardType="email-address">
          </TextInput>

          
        </View>

    
    </View>

    <Text style={styles.Texts}>Password </Text>

    <View style={styles.GreyBox}>

      <View style={styles.EditTexts}>

          <TextInput 
            style={styles.TextInputs} 
            placeholder=" *******"
            keyboardType="default"
            secureTextEntry={true}>
          </TextInput>

          
        </View>

    
    </View>

    <TouchableOpacity>
    <Text style={{
    alignSelf:'baseline',
    color:'#5C83BC',
    marginLeft:24,
    paddingLeft:20,
    paddingTop:10}}>Forgot your Password?</Text>
    </TouchableOpacity>



        
    <TouchableOpacity style={styles.SigninBox} onPress={() => navigation.navigate('Listing')}>
        <Text style={{color:'#FFFFFF',alignSelf:'center',paddingVertical:8,fontSize:20,fontWeight:'bold'}}>
          Sign In
        </Text>
    </TouchableOpacity>
    
    <Text style={{alignSelf:'center',top:100,fontSize:20,fontWeight:'bold'}}>Or</Text>


    <TouchableOpacity style={styles.SignupBox} onPress={() => navigation.navigate('Profile')}>

    <Text style={{color:'#FFFFFF',alignSelf:'center',paddingVertical:8,fontSize:14,fontWeight:'bold',marginTop:4}}>
          Not a member? <Text style={{color:'#000000'}}>Sign up now</Text>
        </Text>

    </TouchableOpacity>



    

  
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

  Texts:{
    fontWeight:'bold',
    fontSize:18,
    alignSelf:'baseline',
    color:'#000000',
    letterSpacing:0.06,
    textAlign:'left',
    marginLeft:24,
    paddingLeft:20,
    paddingTop:20
  },

    GreyBox:{
      
      width: 330,
      height: 36,
      alignSelf:'center',
      backgroundColor: '#D9D9D9',
      borderRadius:25,
      top:5
      
    },

    SigninBox:{
      
      width: 120,
      height: 46,
      alignSelf:'center',
      backgroundColor:'#5C83BC',
      borderRadius:25,
      top:60
      
    },

    SignupBox:{
      
      width: 190,
      height: 46,
      alignSelf:'center',
      backgroundColor:'#5C83BC',
      borderRadius:25,
      top:140
      
    },

    BlackLine: {
      width: 360,
      alignItems:'center',
      paddingBottom:1,
      marginTop:20,
      marginBottom:20,
      paddingTop:5,
      marginLeft:20,
      height: 1,
      backgroundColor: '#000000',
      borderRadius: 12
    },

  EditTexts: {

    flexDirection:'row',
    alignItems:'center',
    marginLeft:20,
    alignSelf:'baseline',
    paddingLeft:20
  },
  TextInputs :{
    color:'#5C83BC',
    fontSize:17,
    fontWeight:'bold',
    width:280,
  
    paddingTop:6
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
    letterSpacing: 0.06
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

export default SignIn;
