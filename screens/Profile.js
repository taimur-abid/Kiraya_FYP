import React,{useState} from 'react';
import {
    Button,
    Image,
    StyleSheet,TextInput,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    Platform,
    PermissionsAndroid,
  } from 'react-native';
  import {
    launchImageLibrary
  } from 'react-native-image-picker';
  
  
  const Profile = ({navigation}) => {

    const [name,setName] =useState("")
    const [username,setUsername] =useState("")
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [location,setLocation] =useState("")
    const [cnic,setCnic] =useState("")
    const [filePath, setFilePath] = useState({});


    const requestCameraPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission',
              message: 'App needs camera permission',
            },
          );
          // If CAMERA Permission is granted
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          console.warn(err);
          return false;
        }
      } else return true;
    };

    const requestExternalWritePermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'External Storage Write Permission',
              message: 'App needs write permission',
            },
          );
          // If WRITE_EXTERNAL_STORAGE Permission is granted
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          console.warn(err);
          alert('Write permission err', err);
        }
        return false;
      } else return true;
    };
  
 const chooseFile = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 900,
      maxHeight: 950,
      
      //includeBase64: true,
      quality: 1,
    };
    launchImageLibrary(options,async (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }

      console.log('base64 -> ', response.assets[0].base64);
      console.log('uri -> ', response.assets[0].uri);
      console.log('width -> ', response.assets[0].width);
      console.log('height -> ', response.assets[0].height);
      console.log('fileSize -> ', response.assets[0].fileSize);
      console.log('type -> ', response.assets[0].type);
      console.log('fileName -> ', response.assets[0].fileName);
      setFilePath(response.assets[0]);

      
    });

  };
  


  
      const submitData = () =>{
        fetch("https://45f0-38-7-184-32.in.ngrok.io/register",{
        method:"post",
        headers:{
           
           'Content-Type':'application/json',
          
        },
        body:JSON.stringify({
          name,
          username,
          email,
          password,
          location,
          cnic
        })
        
      })
      .then(res=>res.text())
      .then(data=>{
        console.log(data)
      })

      }
     
      
    
    
    return (
  
      <View style={styles.container}>
        <View style={{flexDirection:'column',alignItems:'center',flex:1}}>
        <TouchableOpacity style={styles.uploadBtnContainer} onPress={() => chooseFile('photo')}>
     
        { <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.data,
          }}
        /> }
        <Image
          source={{uri: filePath.uri}}
          style={styles.imageStyle}
        />
        </TouchableOpacity>

        

          {/* <Image style={{width:80,height:80,top:50}} source={require('./gardening.png')}/> */}
              
          <Text style={{top:20,fontWeight:'700',fontSize:20,color:'#000000',textDecorationLine: 'underline'}}>Create Profile</Text>


              <View style={styles.EditTexts}>

                <Text style={styles.Texts}>Name : </Text>

                  <TextInput 
                    style={styles.TextInputs} 
                    placeholder=" John Doe"
                    value={name}
                    keyboardType="email-address"
                    onChangeText={text=>setName(text)}>
                  </TextInput>

              </View>

              <View style={styles.BlackLine}/>


              <View style={styles.EditTexts}>

              <Text style={styles.Texts}>Username :</Text>

                  <TextInput 
                   style={styles.TextInputs} 
                    placeholder="  JohnDoe12"
                    keyboardType="email-address"
                    value={username}
                    onChangeText={text=>setUsername(text)}>
                  </TextInput>

              </View>

              <View style={styles.BlackLine}/>

              <View style={styles.EditTexts}>

              <Text style={styles.Texts}>Email :</Text>

                  <TextInput 
                   style={styles.TextInputs}  
                    keyboardType="default"
                    placeholder=" JohnDoe@gmail.com"
                    value={email}
                    onChangeText={text=>setEmail(text)}>
                  </TextInput>

              </View>

              <View style={styles.BlackLine}/>

              <View style={styles.EditTexts}>

              <Text style={styles.Texts}>Password : </Text>

                  <TextInput 
                    style={styles.TextInputs} 
                    placeholder=" *******"
                    keyboardType="default"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text=>setPassword(text)}
                    >
                  </TextInput>

              </View>

              <View style={styles.BlackLine}/>

              <View style={styles.EditTexts}>

              <Text style={styles.Texts}>Location : </Text>

                  <TextInput 
                   style={styles.TextInputs} 
                    placeholder="  Lahore , Punjab"
                    keyboardType="email-address"
                    value={location}
                    onChangeText={text=>setLocation(text)}>
                  </TextInput>

              </View>

              <View style={styles.BlackLine}/>

              <View style={styles.EditTexts}>

                <Text style={styles.Texts}>CNIC : </Text>

                    <TextInput 
                      style={styles.TextInputs} 
                      placeholder=" XXXXX-XXXXXXX-X"
                      keyboardType="email-address"
                      value={cnic}
                      onChangeText={text=>setCnic(text)}>
                    </TextInput>

              </View>

              <View style={styles.BlackLine}/>
       
            
          
          
       
           
  
          <TouchableOpacity style={styles.Bluebutton} onPress={()=> submitData()}>
            <Text style={{textAlign:'center',marginTop:11,color:'#000000',fontWeight:'700'}}>REGISTER</Text>
          </TouchableOpacity>
  
          <View style={{flexDirection:'row',alignItems:'center',top:120}}>
  
           
            <Text style={{textAlign:'center',color:'#000000',fontWeight:'400',fontSize:15}}>Already have an account? </Text>
         
            {/* */}
            <TouchableOpacity  onPress={() => navigation.navigate('PhoneNum')} >
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
    imageStyle: {
      width: 125,
      height: 125,
    },
    Texts:{
      fontWeight:'bold',
      fontSize:18,
      color:'#000000',
      letterSpacing:0.06,
      textAlign:'left'},

    EditTexts: {

      flexDirection:'row',
      alignItems:'center',
      top:50,
      alignSelf:'baseline',
      paddingLeft:20
    },
    TextInputs :{
      color:'#5C83BC',
      fontSize:20,
      fontWeight:'bold',
      width:280,
      alignItems:'center',
    paddingTop:12},
  


    Bluebutton: {
      top:90,
      width: 143,
      height: 45,
      borderRadius: 33,
      backgroundColor: '#5C83BC',
    },
    uploadBtnContainer: {
      top:20,
      height: 125,
      width: 125,
      borderRadius: 125 / 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderStyle: 'dashed',
      borderWidth: 1,
      overflow: 'hidden',
    },
    uploadBtn: {
      top:20,
      textAlign: 'center',
      fontSize: 16,
      opacity: 0.3,
      fontWeight: 'bold',
    },
  
    BlackLine: {
      width: 360,
      paddingBottom:1,
      paddingTop:1,
      top:50,
      height: 1,
      backgroundColor: '#000000',
      borderRadius: 12
    },
  });
  
  export default Profile;
  

  