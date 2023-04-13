import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';



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

function CategoryAdd(props,{navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.loremIpsum}></Text>
      <Text style={styles.kiraya}>Kiraya - کرایہ</Text>
      <View style={styles.scrollArea1Stack}>
        <View style={styles.scrollArea1}>
          <ScrollView style={{ marginTop:10,marginVertical: 100,paddingBottom:20}}
            contentContainerStyle={styles.scrollArea1_contentContainerStyle}>
            <Text style={styles.browseCategories1}>Browse Categories</Text>
            {categories.map((category, index) => (
            <TouchableOpacity style={styles.button1} key={index} onPress={() => props.navigation.navigate('AddProduct')}>
              <View style={styles.icon1Row}>
                <Image
                  source={category.image}
                  style={styles.icon1}></Image>
                  <Text style={styles.electronics1}>
                  {category.name}
                  </Text>
                <Image
                  source={require('./images/categs/next.png')}
                  style={styles.icon3}></Image>
              </View>
            </TouchableOpacity>
            ))}
           
          </ScrollView>
        </View>
        <View style={styles.rect1}>
          <View style={styles.loremIpsum1Stack}>
            <Text style={styles.loremIpsum1}></Text>
            <Text style={styles.kiraya1}>Kiraya - کرایہ</Text>
          </View>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  loremIpsum: {
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  kiraya: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    textAlign: 'center',
    height: 33,
    width: 183,
    lineHeight: 0,
    fontSize: 22,
    alignSelf: 'center',
  },
  scrollArea1: {
    top: 95,
    width: 412,
    height: 751,
    position: 'absolute',
    overflow:'scroll',
    backgroundColor: 'rgba(230, 230, 230,1)',
    left: 0,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  scrollArea1_contentContainerStyle: {
    overflow: 'scroll',
    flexDirection: 'column',
    alignItems: 'center',
  },
  browseCategories1: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontWeight:'bold',
    fontSize: 18,
    marginTop: 12,
    marginLeft: 16,
  },
  button1: {
    width: 412,
    height: 56,
    backgroundColor: '#E6E6E6',
    borderWidth: 3,
    borderColor: 'rgba(31,123,229,1)',
    borderStyle: 'solid',
    flexDirection: 'row',
    marginTop: 16,
  },
  icon1: {
    marginLeft:10,
    marginRight:7,
    marginEnd:3,
    height: 40,
    width: 40,
  },
  electronics1: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 20,
    marginTop: 10,
  },
  icon3: {
    position:'absolute',
    left:350,
    top:10,
    height: 23,
    width: 40,
  },
  icon1Row: {
    height: 43,
    flexDirection: 'row',
    flex: 1,
    marginRight: 12,
    marginLeft: 3,
    marginTop: 6,
  },
  rect1: {
    top: 0,
    left: 0,
    width: 412,
    height: 97,
    position: 'absolute',
    backgroundColor: 'rgba(14,83,140,1)',
  },
  loremIpsum1: {
    top: 8,
    left: 3,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  kiraya1: {
    paddingTop: 15,
    top: 0,
    position: 'absolute',
    color: 'rgba(255,255,255,1)',
    textAlign: 'center',
    height: 23,
    width: 183,
    lineHeight: 10,
    fontSize: 22,
    left: 0,
  },
  loremIpsum1Stack: {
    width: 183,
    height: 33,
    marginTop: 41,
    marginLeft: 115,
  },
  scrollArea1Stack: {
    top: 0,
    left: 0,
    width: 412,
    height: 846,
    overflow:'scroll',
    position: 'absolute',
  },
});

export default CategoryAdd;
