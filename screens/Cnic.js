import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';

const Cnic= ({navigation}) => {
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

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 900,
      maxHeight: 1050,
      includeBase64: true,
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
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
    }
  };

  const chooseFile = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 900,
      maxHeight: 950,
      //includeBase64: true,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
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

  return (
    <SafeAreaView style={{flex: 1}}> 

          
      <View style={styles.container}>
      <View style={{flexDirection:'column',alignItems:'center'}}>
        <Text style={{top:100,fontWeight:'bold',fontSize:26,color:'#000000',textDecorationLine: 'underline'}}>4 Step Verification</Text>

        <Text style={{top:110,fontWeight:'300',fontSize:20,color:'#000000'}}>Verify your CNIC..</Text>
        
        <Text style={{top:130,fontWeight:'700',fontSize:20,color:'#000000',textDecorationLine: 'underline'}}>Step 4</Text>
        </View>
        { <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.data,
          }}
          style={styles.imageStyle}
        /> }
        <Image
          source={{uri: filePath.uri}}
          style={styles.imageStyle}
        />

        <Text style={styles.textStyle}>{filePath.uri}</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.Bluebutton}
          onPress={() => captureImage('photo')}>
          <Text style={styles.textStyle}>
            Launch Camera
          </Text>
        </TouchableOpacity>
       
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.Bluebutton}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity>

        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.Bluebutton}
         // }
         onPress={() => setTimeout(() => {
          alert("Verified")
          navigation.navigate('Listing')
      }, 3000)}>
          <Text style={styles.textStyle}>Verify</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.0}
          style={styles.Whitebutton}
         // navigation.navigate('Listing')}
          onPress={() => setTimeout(() => {
            alert("Pictures don't match. Please Upload a clear picture")
        }, 3000)}>
          <Text style={styles.textStyle}>Verify</Text>
        </TouchableOpacity>
 
      </View>
    </SafeAreaView>
  );
};

export default Cnic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderRadius: 125 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    overflow: 'hidden',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },


  Bluebutton: {
    alignItems: 'center',
    marginLeft:15,
    borderRadius: 33,
    backgroundColor: '#5C83BC',
    padding: 5,
    marginVertical: 15,
    width: 150,
  },

  Whitebutton: {
    alignItems: 'center',
    borderRadius: 33,
    top: -80,
    backgroundColor: '#FFFFFF',
    width: 150,
    height:9,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 350,
    height: 200,
    margin: 5,
  },
});