import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Touchable,
  TouchableOpacity
} from 'react-native';
import Products from '../Products';


const DUMMY_PRODUCTS = [
  {
    id: 1,
    product:'Product1',
    title: 'BBQ Grill',
    image:require('./bbq.webp'),
    price: '200 per day',
    city:'Lahore',
    description:
      '!!! End of Summer Deal !!! Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now! Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. Feel free to contact me with any questions.Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.Rental Includes: Ultra Charger Speaker',
    rentalrules:"No late Returns"
  },
  {
    id: 2,
    title: 'BBQ Grill',
    product:'Product2',
    image:require('./grillbro.png'),
    price: '200 per day',
    city:'Lahore',
    description:
      '!!! End of Summer Deal !!! Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now! Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. Feel free to contact me with any questions.Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.Rental Includes: Ultra Charger Speaker',
    rentalrules:"No late Returns"
  },
  {
    id: 3,
    title: 'BBQ Pan',
    product:'Product3',
    image:require('./bbqchicken.jpg'),
    price: '200 per day',
    city:'Lahore',
    description:
      '!!! End of Summer Deal !!! Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now! Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. Feel free to contact me with any questions.Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.Rental Includes: Ultra Charger Speaker',
    rentalrules:"No late Returns"
  },
  {
    id: 4,
    title: 'Roller Skates',
    product:'Product4',
    price: '200 per day',
    city:'Lahore',
    image:require('./bbq.webp'),
    description:
      '!!! End of Summer Deal !!! Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now! Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. Feel free to contact me with any questions.Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.Rental Includes: Ultra Charger Speaker',
    rentalrules:"No late Returns"
  },

  {
    id: 5,
    title: 'Roller Skates',
    product:'Product5',
    price: '200 per day',
    city:'Lahore',
    image:require('./hiking.jpg'),
    description:
      '!!! End of Summer Deal !!! Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now! Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. Feel free to contact me with any questions.Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.Rental Includes: Ultra Charger Speaker',
    rentalrules:"No late Returns"
  },

  {
    id: 6,
    title: 'Roller Skates',
    product:'Product6',
    price: '200 per day',
    city:'Lahore',
    image:require('./speaker2.jpg'),
    description:
      '!!! End of Summer Deal !!! Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now! Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. Feel free to contact me with any questions.Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.Rental Includes: Ultra Charger Speaker',
    rentalrules:"No late Returns"
  },

  {
    id: 7,
    title: 'Roller Skates',
    product:'Product7',
    price: '200 per day',
    city:'Lahore',
    image:require('./tents.jpg'),
    description:
      '!!! End of Summer Deal !!! Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now! Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. Feel free to contact me with any questions.Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.Rental Includes: Ultra Charger Speaker',
    rentalrules:"No late Returns"
  },

  {
    id: 8,
    title: 'Roller Skates',
    price: '200 per day',
    city:'Lahore',
    image:require('./sticks.jpg'),
    description:
      '!!! End of Summer Deal !!! Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now! Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. Feel free to contact me with any questions.Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.Rental Includes: Ultra Charger Speaker',
    rentalrules:"No late Returns"
  },
];

const Product1 = (props,{navigation}) => {
  return (
    
    <View style={styles.container} >
      
      <ScrollView style={styles.scrollView} contentContainerStyle={{flexGrow:1,flexDirection:'column'}}>
            
            <View style={{alignItems:'center'}}>
            <Image style={{width: 415,height: 286,top:1}} source={require('./bbq.webp')} /> 
            </View>

            <Text style={{fontSize:20,fontWeight:'bold',color:'#000000',left:20,top:2}}>Bar B Q Grill</Text>
            <Text style={{fontSize:16,fontWeight:'bold',left:20,top:2}}>Islamabad, Pakistan</Text>

            <View style={{width: 420,height: 3,top:10,backgroundColor:'#000000',borderRadius: 12}}/>

            <View style={{flexDirection:'row'}}>
                <Image style={{width: 80,height: 74,top: 20}} source={require('./dp.png')} />
                <Text style={{fontSize:19,color:'#000000',top:22,left:12,fontWeight:'400'}}>Idrees Zohrab</Text>
                <Text style={{flexDirection:'column',top:50,left:-100}}> Verified User</Text>    
            </View>

            <View style={{width: 420,height: 3,top:30,backgroundColor:'#000000',borderRadius: 12}}/>

            <Text style={{fontSize:20,fontWeight:'bold',color:'#000000',left:20,top:35}}>DESCRIPTION</Text>

            <View style={{width: 420,height: 3,top:40,backgroundColor:'#000000',borderRadius: 12}}/>

            <Text style={{fontSize:20,height:404,flexDirection:'column',overflow:'scroll',color:'#000000',left:10,top:40,padding:10}} >
              !!! End of Summer Deal !!!
              Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now!
              Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. 
              Feel free to contact me with any questions.       
              Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.
              Rental Includes: 
              Ultra Charger 
              Speaker
              </Text>
              <View style={{width: 420,height: 3,top:0,backgroundColor:'#000000',borderRadius: 12}}/>

              <Text style={{fontSize:20,textAlign:'center',fontWeight:'bold',color:'#000000'}}>Recommended Products</Text>

              <View style={{width: 420,height: 3,top:20,backgroundColor:'#000000',borderRadius: 12}}/>

              <ScrollView
          style={styles.scrollView2}
          horizontal={true}
          contentContainerStyle={{flexGrow: 1, flexDirection: 'row'}}>
         
          <Products product={DUMMY_PRODUCTS[1].product} navigation={props.navigation} price={DUMMY_PRODUCTS[1].price} image={DUMMY_PRODUCTS[1].image} city={DUMMY_PRODUCTS[1].city}/>
          <Products product={DUMMY_PRODUCTS[2].product} navigation={props.navigation} price={DUMMY_PRODUCTS[2].price} image={DUMMY_PRODUCTS[2].image} city={DUMMY_PRODUCTS[2].city}/>
          <Products product={DUMMY_PRODUCTS[3].product} navigation={props.navigation} price={DUMMY_PRODUCTS[3].price} image={DUMMY_PRODUCTS[3].image} city={DUMMY_PRODUCTS[3].city}/>
        </ScrollView>
              

              <View style={{width: 420,height: 3,backgroundColor:'#000000',borderRadius: 12}}/>

              <Text style={{fontSize:20,fontWeight:'bold',color:'#000000',left:20}}>Rental Rules</Text>
              <View style={styles.ReviewTag}>
              <Text style={{fontSize:14,width:315,height:210,fontWeight:'bold',color:'#000000',left:20,lineHeight:15,letterSpacing:0.06,top:10}}>-Must have a verified Kiraya account .                 -No Late Returns .</Text>
              </View>

              <View style={{width: 420,height: 3,backgroundColor:'#000000',borderRadius: 12,top:12}}/>

              <View style={styles.ReviewTag}>
              <Text style={{fontSize:20,width:315,height:210,fontWeight:'bold',color:'#000000',left:95,lineHeight:20,letterSpacing:0.06,marginTop:20}}>Leave a Review</Text>
              </View>

              <View style={{flexDirection:'row'}}>
              <Image style={{width: 80,height: 74,top:1}} source={require('./dp.png')} />

              <TextInput style={styles.BlueInput} placeholder="  Leave a review" placeholderTextColor={"#FFFFFF"}>

              </TextInput>
              </View>



 

  
 
    </ScrollView> 
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#B2CCDF',
  },
  scrollView: {
    marginHorizontal: -10,
    marginVertical:700,
    marginTop:-20,
    marginBottom:-10,
    top:15,
    overflow:'scroll',
    backgroundColor:'#FFFFFF',
  },
  scrollView2: {
    marginHorizontal: 0,
    marginVertical: 20,
    marginTop: 40,
    marginBottom: 20,
    overflow: 'scroll',
    backgroundColor: '#FFFFDD',
  },
  BlueInput: {
    width: 275,
    top:5,
    marginTop:20,
    marginBottom:200,
    flexDirection:'row',
    height: 40,
    alignSelf:'center',
    textShadowColor:'#FFFFFF',
    backgroundColor :'#000000',
    fontSize:20,
    opacity: 0.25,
    color:'#FFFFFF',
    borderRadius: 25,
    
  },    
  text: {
    fontSize: 42,
  },
  ReviewTag:{
    width: 329,
    top:5,
    marginTop:20,
    marginBottom:10,
    alignSelf:'center',
    height: 100,
    backgroundColor: '#D9D9D9',
    borderRadius: 22,
  },

  GreyCat: {
    flexDirection:'column',
    width: 350,
    height: 179,
    top: 16,
    backgroundColor: '#D9D9D9',
    borderRadius: 18,
  },
});

export default Product1;
