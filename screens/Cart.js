import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import products from './DataSetProducts';
import { TouchableOpacity } from 'react-native';
import { newData } from './data';

const CartScreen = ({ route ,navigation}) => {
  //const { cartItems } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.adtitle}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {newData.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={newData.slice(0,2)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
     
     <TouchableOpacity style={styles.Bluebutton} onPress={()=> navigation.navigate('CheckOut')}>
            <Text style={{textAlign:'center',fontSize:20,marginTop:11,marginBottom:20,color:'#000000',fontWeight:'700'}}>CHECKOUT</Text>
          </TouchableOpacity>
      
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
  empty: {
    fontStyle: 'italic',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    color: '#888',
  },
});

export default CartScreen;
