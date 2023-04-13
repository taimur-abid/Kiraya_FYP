import React, {useState} from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import DataSetProducts from './DataSetProducts';
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Button,
  StatusBar,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


import uuid from 'react-native-uuid';
import addProduct from './AddPData';

const AddProductScreen = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [filePath, setFilePath] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  
  const [city, setCity] = React.useState("");
    
    const data = [
        {key:'1', value:'Islamabad'},
        {key:'2', value:'Lahore'},
        {key:'3', value:'Karachi'},
        {key:'4', value:'Multan',},
        {key:'5', value:'Sialkot'},
        {key:'6', value:'Peshawer'},
        {key:'7', value:'Rawalpindi'},
    ]
  
  
    const handleAddProduct = () => {
      // Perform validation on the input fields
      if (
        title.trim() === '' ||
        description.trim() === '' ||
        price.trim() === ''
      ) {
        Alert.alert(
          'Invalid input',
          'Please enter a title, description, and price for the product.',
          [{text: 'OK'}],
        );
        return;
      }

      //addProduct(title, description, city, price)
      setTitle('');
      setDescription('');
      setPrice('');
      setCity('');
      
  
      // Submit the product to the server and navigate back to the previous screen
      // const product = {
      //   title,
      //   description,
      //   price,
      //   image,
      // };
  
      // TODO: Submit the product to the server using an API call
  
      // Clear the form fields
      // setTitle('');
      // setDescription('');
      // setPrice('');
      // setImage('');
  
      // Alert.alert('Success', 'The product has been added successfully.', [
      //   {text: 'OK'},
      // ]);
    };
  
  
    const chooseFile = () => {
      let options = {
        mediaType: 'photo',
        maxWidth: 900,
        maxHeight: 950,
        //multiple:true,
        //includeBase64: true,
        quality: 1,
      };
  
      launchImageLibrary(options, response => {
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
      <View style={styles.container}>
        <Text style={styles.loremIpsum}></Text>
        <View style={styles.rect1}>
          <Text style={styles.kiraya}>Kiraya - کرایہ</Text>
        </View>
        <ScrollView style={{marginTop: 60}} showsVerticalScrollIndicator={false}>
          <StatusBar hidden />
          <View style={styles.formGroup}>
            <Text style={styles.label}>Image</Text>
            <View style={styles.imageContainer}>
              {filePath ? (
                <TouchableOpacity onPress={() => chooseFile('photo')}>
                  <Image source={{uri: filePath.uri}} style={styles.imageStyle} />
                </TouchableOpacity>
              ) : (
                <Text style={styles.imagePlaceholder}>No image selected</Text>
              )}
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={(text) => setPrice(text)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Condition</Text>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity
              style={styles.ButtonStyles}
              onPress={() => setIsChecked(!isChecked)}>
                <Text style={{fontWeight:'bold'}}>NEW</Text>
              {isChecked && (
                <View
                  style={styles.highlighted}
                />
              )}
            </TouchableOpacity>
  
  
            <TouchableOpacity
              style={styles.ButtonStyles}
              onPress={() => setIsChecked1(!isChecked1)}>
                <Text style={{fontWeight:'bold'}}>USED</Text>
              {isChecked1 && (
                <View
                  style={styles.highlighted}
                />
              )}
            </TouchableOpacity>
            </View>
          </View>
  
          <View style={styles.formGroup}>
            <Text style={styles.label}>Location</Text>
  
          <SelectList 
          setSelected={(val) => setCity(val)} 
          data={data} 
          save="value"
      />
          </View>
  
  
          <View style={styles.formGroup}>
            <Button title="Add Product" onPress={handleAddProduct} />
          </View>
        </ScrollView>
      </View>
    );
  };


const styles = StyleSheet.create({
  container: {
    //flex:1,
    padding: 20,
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: 20,
  },
  ButtonStyles:{
    width: 80,
    height: 34,
    borderRadius: 12,
    margin:5,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlighted:{
  width: 70,
  height: 10,
  borderRadius: 3,
  backgroundColor: 'rgba(14,83,140,1)',
} ,
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#000',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  imageStyle: {
    width: 350,
    height: 200,
    margin: 5,
  },
  kiraya: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    textAlign: 'center',
    height: 33,
    width: 183,
    lineHeight: 10,
    fontSize: 22,
    marginTop: 48,
    marginLeft: 136,
    paddingTop: 15,
  },
  imageContainer: {
    marginTop: 10,
  },
  rect1: {
    top: -3,
    left: -15,
    width: 454,
    height: 97,
    position: 'absolute',
    backgroundColor: 'rgba(14,83,140,1)',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  imagePlaceholder: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 10,
  },
});
export default AddProductScreen;

