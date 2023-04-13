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




const Category = ({navigation}) => {
  return (
    <View style={styles.container} >
      
      <ScrollView style={styles.scrollView} contentContainerStyle={{flexGrow:1,flexDirection:'column'}}>
            
            

            <Text style={{fontSize:20,fontWeight:'bold',color:'#000000',top:2,alignSelf:'center'}}>Category </Text>
            <Text style={{fontSize:16,fontWeight:'bold',top:2,alignSelf:'center'}}>Islamabad, Pakistan</Text>

            <View style={{width: 420,height: 3,top:10,backgroundColor:'#000000',borderRadius: 12}}/>

            <View style={{flexDirection:'row'}}>
                <Image style={{width: 80,height: 74,top: 20}} source={require('./images/dp.png')} />
                <Text style={{fontSize:19,color:'#000000',top:22,left:12,fontWeight:'400',alignSelf:'center'}}>No Products Found Yet</Text>
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

export default Category;



