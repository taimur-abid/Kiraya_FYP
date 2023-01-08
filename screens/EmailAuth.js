import React from 'react';
import {
  Button,
  Image,
  StyleSheet,TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const EmailAuth= ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.CircleBlue} />
      <View style={styles.CircleDark} />
      <View style={{flexDirection:'column',alignItems:'center',flex:1}}>

        
        <Text style={{top:176,fontWeight:'bold',fontSize:26,color:'#000000',textDecorationLine: 'underline'}}>4 Step Verification</Text>
        
        <Text style={{top:185,fontWeight:'300',fontSize:20,color:'#000000'}}>Before you get started...</Text>
        
        <Text style={{top:210,fontWeight:'700',fontSize:20,color:'#000000',textDecorationLine: 'underline'}}>Email OTP Verification</Text>
        
        <Text style={{top:220,fontWeight:'500',fontSize:15,color:'#000000',letterSpacing:0.06,textAlign:'center'}}> In order to rent on the app, we need to verify your Email Address

        {"\n"} Enter OTP sent to your Email Address. </Text>

        <View style={{flexDirection:'row',alignItems:'center',top:300,left:50}}>

            <Text style={{fontWeight:'bold',fontSize:14,color:'#000000',letterSpacing:0.06,textAlign:'center'}}>OTP :</Text>

            <TextInput 
            style={{color:'#5C83BC',fontSize:15,fontWeight:'bold',width:180}} 
            placeholder="i.e XXXXXX"
            keyboardType="email-address">
            </TextInput>

        </View>

        <TouchableOpacity style={styles.Bluebutton}  onPress={() => navigation.navigate('Cnic')}>
          <Text style={{textAlign:'center',marginTop:11,color:'#000000',fontWeight:'700'}}>Verify</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row',alignItems:'center',top:450}}>

         
          <Text style={{textAlign:'center',color:'#000000',fontWeight:'400',fontSize:15}}>Already have an account? </Text>
          
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={{color:'#029381'}}>Sign In</Text>
        </TouchableOpacity>

           
        </View>

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
  export default EmailAuth;
  