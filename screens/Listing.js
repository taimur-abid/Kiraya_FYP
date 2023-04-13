import React, {useRef, useEffect, useState} from 'react';
import ProductsCard from './ProductsCard';
import ProductDetails from './ProductDetails';
import { newData } from './data';

import {
  StyleSheet,
  Text,
  View,
  Button,
  DrawerLayoutAndroid,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {FlatList} from 'react-native';
import products from './DataSetProducts';
import AddProductScreen from './AddProduct';
import axios from 'axios';

const Listing = (props, {navigation}) => {


  useEffect(() => {
    console.log('In use effect');
    getProducts()
  }, []);
  
  const getProducts = async () => {
    try {
      const response = await axios.get('https://ce4c-38-7-184-18.ngrok-free.app/PRODUCTS');
      const data = response.data;
      newData.push(...data);
      console.log(newData);
    } catch (error) {
      console.log('error: ', error);
    }
  };



  const onProductPress = productId => {
    const product = newData.find(p => p._id === productId);
    props.navigation.navigate('ProductDetails', {product});
  };

  const renderProduct = ({item}) => (
    <ProductsCard product={item} onPress={() => onProductPress(item._id)} />
  );

  const drawer = useRef(null);

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  const categories = [
    {name: 'Electronics', image: require('./images/responsive.png')},
    {name: 'Outdoor', image: require('./images/jacket.png')},
    {name: 'Games', image: require('./images/toys.png')},
    {name: 'Weddings', image: require('./images/mirror-ball.png')},
    {name: 'Kitchen', image: require('./images/kitchen.png')},
    {name: 'Sports', image: require('./images/sport.png')},
    {name: 'Tools', image: require('./images/tools.png')},
    {name: 'Clothing', image: require('./images/clothes.png')},
    {name: 'Vehicles', image: require('./images/car.png')},
    {name: 'Gardening', image: require('./images/gardening.png')},
    {name: 'Music', image: require('./images/guitar.png')},
    {name: 'Others', image: require('./images/other.png')},
  ];

  const handleCategoryPress = category => {
    console.log(`Navigating to ${category.name} screen`);
  };

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <View style={styles.BlueView}>
          <View style={{width: 50, height: 50}}>
            <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
              <Image
                style={{width: 30, height: 30, marginTop: 10, marginLeft: 9}}
                source={require('./images/Menu.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.kirayaFont}>Kiraya - کرایہ</Text>

          <TextInput
            style={styles.BlueInput}
            placeholder="  Search..."
            placeholderTextColor={'#FFFFFF'}></TextInput>

          <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
            <Image
              style={styles.tinyLogo}
              source={require('./images/cart.png')}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                width: 200,
                fontSize: 18,

                fontWeight: 'bold',
                color: 'black',
                marginTop: 10,
              }}>
              BROWSE CATEGORIES
            </Text>
            <ScrollView
              style={styles.scrollView2}
              horizontal={true}
              contentContainerStyle={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
                paddingVertical: 8,
              }}>
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleCategoryPress(category)}>
                  <View style={styles.categoryItem}>
                    <Image
                      style={{
                        width: 33,
                        height: 33,
                      }}
                      source={category.image}
                    />
                    <Text style={{fontWeight: 'bold', color: '#000000'}}>
                      {category.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Text
              style={{
                width: 200,
                fontSize: 18,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'black',
              }}>
              HOT RENTALS
            </Text>

            {/* <View>
              <Text>{data}</Text>
            </View> */}

            <FlatList
              data={newData.slice(0,10)}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />

            <Text
              style={{
                width: 200,
                fontSize: 18,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'black',
              }}>
              NEWEST
            </Text>
            <FlatList
              data={newData.slice(11,20)}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <Text
              style={{
                width: 200,
                fontSize: 18,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'black',
              }}>
              BROWSE ALL
            </Text>
            <FlatList
              data={newData.slice(20,40)}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />

                <FlatList
              data={newData.slice(40,60)}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />  
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => props.navigation.navigate('CategoryAdd')}>
          <Text
            style={{
              color: 'white',
              fontSize: 40,
              fontWeight: 'bold',
              bottom: 2,
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B2CCDF',
  },
  detailsContainer: {
    position: 'absolute',

    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',

    alignItems: 'center',
  },
  scrollView: {
    flexDirection: 'column',
    // marginVertical: 100,
    marginTop: 0,
    bottom: 0,
    marginBottom: 0,
    overflow: 'scroll',
    backgroundColor: '#B2CCFF',
  },
  scrollView2: {
    marginHorizontal: -10,
    marginVertical: 700,
    marginTop: -20,
    marginBottom: -10,
    top: 15,
    overflow: 'scroll',
    backgroundColor: '#FFFFFF',
  },
  scrollView3: {
    marginHorizontal: 0,
    marginVertical: 20,
    marginTop: 40,
    marginBottom: 20,
    overflow: 'scroll',
    backgroundColor: '#FFFFDD',
  },
  
  scrollView2: {
    marginTop: 20,
    marginBottom: 20,
    overflow: 'scroll',
    backgroundColor: '#000080',
  },

  categoryItem: {
    height: 65,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 30,
  },

  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },

  buttonStyle: {
    backgroundColor: '#fc454e',
    width: 66,
    height: 66,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },

  BlueView: {
    //position: 'absolute',
    width: 430,
    height: 114,
    left: 0,
    top: 0,
    backgroundColor: '#0E538C',
  },

  tinyLogo: {
    position: 'absolute',
    width: 70,
    height: 70,
    bottom: 15,
    marginLeft: 320,
  },
  kirayaFont: {
    position: 'relative',
    bottom: 25,
    fontWeight: '400',
    fontSize: 26,
    lineHeight: 27,
    textAlign: 'center',
    color: '#FFFFFF',
  },

  BlueInput: {
    position: 'relative',
    width: 275,
    height: 44,
    bottom: 15,
    marginLeft: 30,
    textShadowColor: '#FFFFFF',
    backgroundColor: '#000000',
    fontSize: 20,
    opacity: 0.25,
    color: '#FFFFFF',
    borderRadius: 25,
  },
  ReviewTag: {
    width: 329,
    top: 5,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center',
    height: 100,
    backgroundColor: '#D9D9D9',
    borderRadius: 22,
  },
});

export default Listing;
