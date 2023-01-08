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




const Product7 = ({navigation}) => {
  return (
    <View style={styles.container} >
      
      <ScrollView style={styles.scrollView} contentContainerStyle={{flexGrow:1,flexDirection:'column'}}>
            
            <View style={{alignItems:'center'}}>
            <Image style={{width: 415,height: 286,top:1}} source={require('./skates.jpg')} /> 
            </View>

            <Text style={{fontSize:20,fontWeight:'bold',color:'#000000',left:20,top:2}}>Skating Shoes</Text>
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

            <Text style={{fontSize:20,height:404,flexDirection:'column',overflow:'scroll',color:'#000000',left:10,top:40,padding:10}} >!!! End of Summer Deal !!!
              Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now!
              Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. 
              Feel free to contact me with any questions.       
              Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.
              Rental Includes: 
              Ultra Charger 
              Speaker</Text>

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

              <TextInput style={styles.BlueInput} placeholder="  Search...." placeholderTextColor={"#FFFFFF"}>

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
  scrollView: {
    marginHorizontal: -10,
    marginVertical:500,
    marginTop:-20,
    marginBottom:0,
    top:15,
    overflow:'scroll',
    backgroundColor:'#FFFFFF',
  },
  text: {
    fontSize: 42,
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

export default Product7;



