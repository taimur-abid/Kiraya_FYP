import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const OrderConfirmation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thank you for your order!</Text>
      <Text style={styles.message}>
        Your order has been received and your profile is now being reviewed by the owner.
      </Text>
      <Text style={styles.orderNumber}>
        Order Number: # 12345632425
      </Text>
      <Button title="Continue Shopping" onPress={() => navigation.navigate('Listing')} />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  orderNumber: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default OrderConfirmation;
