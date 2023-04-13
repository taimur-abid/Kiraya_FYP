import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NegotiationScreen = () => {
  const [price, setPrice] = useState(100);

  const handleAddPrice = () => {
    setPrice(price + 10);
  };

  const handleSubtractPrice = () => {
    if (price > 10) {
      setPrice(price - 10);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Negotiate the Price</Text>
      <View style={styles.priceContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubtractPrice}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity style={styles.button} onPress={handleAddPrice}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  price: {
    fontSize: 36,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  submitButton: {
    width: '100%',
    backgroundColor: '#0080ff',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default NegotiationScreen;
