import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {products} from './DataSetProducts';
import { newData } from './data';
import ProductsCard from './ProductsCard';

const ProductDetails = ({navigation, route}) => {
  const {product} = route.params;

  const onProductPress = productId => {
    const product = newData.find(p => p.id === productId);
    navigation.navigate('ProductDetails', {product});
  };

  const renderProduct = ({item}) => (
    <ProductsCard product={newData} onPress={() => onProductPress(item.id)} />
  );

  return (
    <View style={styles.detailsContainer}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{flexGrow: 1, flexDirection: 'column'}}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 415, height: 286, top: 1}}
            source={{uri :product.png[0]}}
          />
        </View>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000000',
            left: 20,
            top: 2,
          }}>
          {product.adtitle}
        </Text>
        <Text style={{fontSize: 16, fontWeight: 'bold', left: 20, top: 2}}>
          {product.location}
        </Text>

        <View
          style={{
            width: 420,
            height: 3,
            top: 10,
            backgroundColor: '#000000',
            borderRadius: 12,
          }}
        />

        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 80, height: 74, top: 20}}
            source={require('./images/dp.png')}
          />
          <Text
            style={{
              fontSize: 19,
              color: '#000000',
              top: 22,
              left: 12,
              fontWeight: '400',
            }}>
            Idrees Zohrab
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Negotiation')}
            style={{
              position: 'absolute',
              width: 150,
              height: 37,
              left: 250,
              borderWidth: 2,
              borderColor: 'black',
              top: 20,
              backgroundColor: '#D9D9D9',
              borderRadius: 15,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                color: '#000',
                fontSize: 18,
                top: 4,
              }}>
              Negotiate Price
            </Text>
          </TouchableOpacity>
          <View
            style={{
              position: 'absolute',
              width: 120,
              height: 37,
              left: 265,
              borderWidth: 2,
              borderColor: 'black',
              top: 62,
              backgroundColor: '#D9D9D9',
              borderRadius: 15,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                color: '#000',
                fontSize: 18,
                top: 4,
              }}>
              {product.price}
            </Text>
          </View>
          <Text style={{flexDirection: 'column', top: 50, left: -100}}>
            {' '}
            Verified User
          </Text>
        </View>

        <View
          style={{
            width: 420,
            height: 3,
            top: 30,
            backgroundColor: '#000000',
            borderRadius: 12,
          }}
        />

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000000',
            left: 20,
            top: 35,
          }}>
          DESCRIPTION
        </Text>

        <View
          style={{
            width: 420,
            height: 3,
            top: 40,
            backgroundColor: '#000000',
            borderRadius: 12,
          }}
        />

        <Text
          style={{
            fontSize: 20,
            height: 404,
            flexDirection: 'column',
            overflow: 'scroll',
            color: '#000000',
            left: 10,
            top: 40,
            padding: 10,
          }}>
          {product.description}
        </Text>
        <View
          style={{
            width: 420,
            height: 3,
            top: 0,
            backgroundColor: '#000000',
            borderRadius: 12,
          }}
        />

        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#000000',
          }}>
          Recommended Products
        </Text>

        <View
          style={{
            width: 420,
            height: 3,
            top: 20,
            backgroundColor: '#000000',
            borderRadius: 12,
          }}
        />

        {/* <ScrollView
          style={styles.scrollView3}
          horizontal={true}
          contentContainerStyle={{flexGrow: 1, flexDirection: 'row'}}>   */}
        <ProductsCard product={product} />

        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}></FlatList>
        {/* </ScrollView>  */}

        <View
          style={{
            width: 420,
            height: 3,
            backgroundColor: '#000000',
            borderRadius: 12,
          }}
        />

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000000',
            left: 20,
          }}>
          Rental Rules
        </Text>
        <View style={styles.ReviewTag}>
          <Text
            style={{
              fontSize: 14,
              width: 315,
              height: 210,
              fontWeight: 'bold',
              color: '#000000',
              left: 20,
              lineHeight: 15,
              letterSpacing: 0.06,
              top: 10,
            }}>
            -Must have a verified Kiraya account . -No Late Returns .
          </Text>
        </View>

        <View
          style={{
            width: 420,
            height: 3,
            backgroundColor: '#000000',
            borderRadius: 12,
            top: 12,
          }}
        />

        <View style={styles.ReviewTag}>
          <Text
            style={{
              fontSize: 20,
              width: 315,
              height: 210,
              fontWeight: 'bold',
              color: '#000000',
              left: 95,
              lineHeight: 20,
              letterSpacing: 0.06,
              marginTop: 20,
            }}>
            Leave a Review
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 80, height: 74, top: 1}}
            source={require('./images/dp.png')}
          />

          <TextInput
            style={styles.BlueInput}
            placeholder="  Leave a review"
            placeholderTextColor={'#FFFFFF'}></TextInput>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  details: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: '#888',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default ProductDetails;
