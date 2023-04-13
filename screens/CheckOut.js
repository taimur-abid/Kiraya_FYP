import React, { useState } from 'react';
import products from './DataSetProducts';
import { newData } from './data';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const CheckoutScreen = ({ route, navigation }) => {
 // const { product } = route.params;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handlePress = () => {
    // Submit order to server or perform other actions here
    navigation.navigate('OrderConfirmation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.label}>Product:</Text>
      <Text>{newData[1].adtitle}</Text>
      <Text style={styles.label}>Price:</Text>
      <Text>{newData[1].price}</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email address"
      />
      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your address"
      />
      <Button title="Place Order" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default CheckoutScreen;
