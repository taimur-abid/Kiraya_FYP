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




const Listing = ({navigation}) => {
  return (
    <View style={styles.container} >
      <View style={styles.BlueView}>
        <Text style={styles.kirayaFont}>Kiraya - کرایہ</Text>

        <TextInput style={styles.BlueInput} placeholder="  Search..." placeholderTextColor={"#FFFFFF"}>
        </TextInput>
        <Image style={styles.tinyLogo} source={require('./cart.png')} /> 

      </View>
      
      <ScrollView style={styles.scrollView} contentContainerStyle={{alignItems: 'center',flexGrow:1,flexDirection:'column'}}> 
            <Text style={{position:'absolute',width:132,left:140,top:-2,fontWeight:'bold',color:'black'}}>Browse Categories</Text>
            <View style={styles.GreyCat}>
              <TouchableOpacity style={styles.Category1} onPress={() => navigation.navigate('Category')}>
              <Image style={{position: 'absolute',width: 33,height: 33,left: -65,top: -30,}} source={require('./responsive.png')} /> 
              <Text style={{position: 'absolute',width: 48,height: 10,left: -70,top: 3,fontSize:9,color:'black',fontWeight:'bold'}}>Electronics</Text>
              </TouchableOpacity> 

              <TouchableOpacity style={styles.Category2} onPress={() => navigation.navigate('Category')}>
              <Image style={{position: 'absolute',width: 33,height: 33,left: -70,top: -30,}} source={require('./jacket.png')} /> 
              <Text style={{position: 'absolute',width: 59,height: 10,left: -78,top: 3,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center'}}>Outdoor Gear</Text>
              </TouchableOpacity> 

              <TouchableOpacity style={styles.Category3} onPress={() => navigation.navigate('Category')}>
              <Image style={{position: 'absolute',width: 33,height: 33,left: -70,top: -30,}} source={require('./toys.png')} /> 
              <Text style={{position: 'absolute',width: 59,height: 10,left: -78,top: 3,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center'}}>Toys & Games</Text>
              </TouchableOpacity> 

              <TouchableOpacity style={styles.Category4} onPress={() => navigation.navigate('Category')}>
              <Image style={{position: 'absolute',width: 33,height: 33,left: -70,top: -30,}} source={require('./mirror-ball.png')} /> 
              <Text style={{position: 'absolute',width: 83,height: 12,left: -93,top: 3,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center'}}>Party & Weddings</Text>
              </TouchableOpacity> 

              <TouchableOpacity style={styles.Category5} onPress={() => navigation.navigate('Category')}>
              <Image style={{position: 'absolute',width: 33,height: 33,left: -70,top: -30,}} source={require('./kitchen.png')} /> 
              <Text style={{position: 'absolute',width: 80,height: 12,left: -93,top: 6,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center'}}>Home & Kitchen</Text>
              </TouchableOpacity> 

              <TouchableOpacity style={styles.Category6} onPress={() => navigation.navigate('Category')}>
              <Image style={{position: 'absolute',width: 33,height: 33,left: -70,top: -30,}} source={require('./sport.png')} /> 
              <Text style={{position: 'absolute',width: 81,height: 12,left: -93,top: 6,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center'}}>Sporting Goods</Text>
              </TouchableOpacity> 

              <TouchableOpacity style={styles.Category7} onPress={() => navigation.navigate('Category')}>
              <Image style={{position: 'absolute',width: 33,height: 33,left: -70,top: -30,}} source={require('./tools.png')} /> 
              <Text style={{position: 'absolute',width: 60,height: 12,left: -83,top: 6,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center'}}>Tools</Text>
              </TouchableOpacity> 

              <TouchableOpacity style={styles.Category8} onPress={() => navigation.navigate('Category')}>
              <Image style={{position: 'absolute',width: 33,height: 33,left: -70,top: -30,}} source={require('./clothes.png')} /> 
              <Text style={{position: 'absolute',width: 60,height: 12,left: -83,top: 6,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center'}}>Clothing</Text>
              </TouchableOpacity> 

              <TouchableOpacity style={styles.Category9} onPress={() => navigation.navigate('Category')}>
              <Image style={{position: 'absolute',width: 33,height: 33,left: -70,top: -30,}} source={require('./car.png')} /> 
              <Text style={{position: 'absolute',width: 60,height: 12,left: -83,top: 6,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center'}}>Cars</Text>
              </TouchableOpacity> 

              <TouchableOpacity style={styles.Category10} onPress={() => navigation.navigate('Category')}>
              <Image style={{position: 'absolute',width: 33,height: 33,left: -70,top: -30,}} source={require('./gardening.png')} /> 
              <Text style={{position: 'absolute',width: 60,height: 12,left: -83,top: 6,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center'}}>Gardening</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.Category11} onPress={() => navigation.navigate('Category')}>
              <Image style={{position: 'absolute',width: 33,height: 33,left: -70,top: -30,}} source={require('./guitar.png')} /> 
              <Text style={{position: 'absolute',width: 60,height: 12,left: -83,top: 6,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center'}}>Music</Text>
              </TouchableOpacity>  

              <TouchableOpacity style={styles.Category12} onPress={() => navigation.navigate('Category')}>
              <Image style={{position: 'absolute',width: 33,height: 33,left: -70,top: -30,}} source={require('./other.png')} /> 
              <Text style={{position: 'absolute',width: 60,height: 12,left: -83,top: 6,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center'}}>Others</Text>
              </TouchableOpacity>
            </View>

            <Text style={{flexDirection:'row',width:152,top:30,fontWeight:'bold',color:'black'}}>POPULAR NATIONWIDE</Text>

          <ScrollView style={styles.scrollView2} horizontal={true} contentContainerStyle={{ flexGrow: 1 ,flexDirection:'row'}}>

          <Text style={{color:'#FFFFDD'}}>      </Text>

              <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('Product1')}>
                <Image style={{flexDirection:'row',width: 95,height: 117}} source={require('./bbq.webp')} /> 
                <Text style={{flexDirection: 'row',width: 85,height: 22,fontSize:10,color:'black',fontWeight:'bold',textAlign:'center'}}>PKR 200 / per day</Text> 
                <Text style={{flexDirection: 'row',width: 85,height: 22,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center',color:'#5A5A5A'}}>Islamabad</Text>
              </TouchableOpacity>

              <Text style={{color:'#FFFFDD'}}>            </Text>

              <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('Product2')}>
                <Image style={{flexDirection: 'row',width: 95,height: 117}} source={require('./grillbro.png')} /> 
                <Text style={{flexDirection: 'row',width: 85,height: 22,fontSize:10,color:'black',fontWeight:'bold',textAlign:'center'}}>PKR 400 / per day</Text> 
                <Text style={{flexDirection: 'row',width: 85,height: 22,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center',color:'#5A5A5A'}}>Karachi</Text>
              </TouchableOpacity>

              <Text style={{color:'#FFFFDD'}}>            </Text>

              <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('Product3')}>
                <Image style={{flexDirection: 'row',width: 95,height: 117}} source={require('./bbqchicken.jpg')} /> 
                <Text style={{flexDirection: 'row',width: 85,height: 22,fontSize:10,color:'black',fontWeight:'bold',textAlign:'center'}}>PKR 100 / per day</Text> 
                <Text style={{flexDirection: 'row',width: 85,height: 22,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center',color:'#5A5A5A'}}>Lahore</Text>
              </TouchableOpacity>

              <Text style={{color:'#FFFFDD'}}>            </Text>

              <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('Product7')}>
                <Image style={{flexDirection: 'row',width: 95,height: 117 }} source={require('./skates.jpg')} /> 
                <Text style={{flexDirection: 'row',width: 85,height: 22,fontSize:10,color:'black',fontWeight:'bold',textAlign:'center'}}>PKR 100 / per day</Text> 
                <Text style={{flexDirection: 'row',width: 85,height: 22,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center',color:'#5A5A5A'}}>Lahore</Text>
              </TouchableOpacity>

             

              
          </ScrollView> 

              <Text style={{position:'absolute',width:152,top:410,fontWeight:'bold',color:'black',textAlign:'center'}}>NEWEST</Text>

              <ScrollView style={styles.scrollView3} horizontal={true} contentContainerStyle={{ flexGrow: 1 ,flexDirection:'row'}}>

              <Text style={{color:'#FFFFDD'}}>      </Text>

                  <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('Product4')}>
                    <Image style={{flexDirection:'column',width: 95,height: 117}} source={require('./hiking.jpg')} /> 
                    <Text style={{flexDirection: 'column',width: 85,height: 22,fontSize:10,color:'black',fontWeight:'bold',textAlign:'center'}}>PKR 200 / per day</Text> 
                    <Text style={{flexDirection: 'column',width: 85,height: 22,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center',color:'#5A5A5A'}}>Islamabad</Text>
                  </TouchableOpacity>

                  <Text style={{color:'#FFFFDD'}}>            </Text>

                  <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('Product5')}>
                    <Image style={{flexDirection: 'row',width: 95,height: 117}} source={require('./speaker2.jpg')} /> 
                    <Text style={{flexDirection: 'row',width: 85,height: 22,fontSize:10,color:'black',fontWeight:'bold',textAlign:'center'}}>PKR 400 / per day</Text> 
                    <Text style={{flexDirection: 'row',width: 85,height: 22,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center',color:'#5A5A5A'}}>Karachi</Text>
                  </TouchableOpacity>

                  <Text style={{color:'#FFFFDD'}}>            </Text>

                  <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('Product6')}>
                    <Image style={{flexDirection: 'row',width: 95,height: 117}} source={require('./tents.jpg')} /> 
                    <Text style={{flexDirection: 'row',width: 85,height: 22,fontSize:10,color:'black',fontWeight:'bold',textAlign:'center'}}>PKR 100 / per day</Text> 
                    <Text style={{flexDirection: 'row',width: 85,height: 22,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center',color:'#5A5A5A'}}>Lahore</Text>
                  </TouchableOpacity>

                  <Text style={{color:'#FFFFDD'}}>            </Text>

                  <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => navigation.navigate('Product7')}>
                    <Image style={{flexDirection: 'row',width: 95,height: 117 }} source={require('./sticks.jpg')} /> 
                    <Text style={{flexDirection: 'row',width: 85,height: 22,fontSize:10,color:'black',fontWeight:'bold',textAlign:'center'}}>PKR 100 / per day</Text> 
                    <Text style={{flexDirection: 'row',width: 85,height: 22,fontSize:9,color:'black',fontWeight:'bold',textAlign:'center',color:'#5A5A5A'}}>Lahore</Text>
                  </TouchableOpacity>

                  <Text style={{color:'#FFFFDD'}}>            </Text>

              </ScrollView> 
          

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
    flexDirection:'column',
    marginHorizontal: -10,
    marginVertical:500,
    marginTop:100,
    marginBottom:0,
    top:15,
    overflow:'scroll',
    backgroundColor:'#FFFFFF',
  },
  scrollView2: {
    marginHorizontal: 0,
    marginVertical:200,
    marginTop:40,
    marginBottom:290,
    overflow:'scroll',
    backgroundColor:'#FFFFDD'
  },
  scrollView3: {
    marginHorizontal: 0,
    marginVertical:0,
    marginTop:-250,
    marginBottom:160,
    overflow:'scroll',
    backgroundColor:'#FFFFDD'
  },

  Category1:{
    position: 'absolute',
    left: 86,
    top: 42,
  },
  Category2:{
    position: 'absolute',
    left: 171,
    top: 42,
  },
  Category3:{
    position: 'absolute',
    left: 255,
    top: 42,
  },
  Category4:{
    position: 'absolute',
    left: 341,
    top: 42,
  },
  Category5:{
    position: 'absolute',
    left: 89,
    top: 99,
  },
  Category6:{
    position: 'absolute',
    left: 174,
    top: 99,
  },
  Category7:{
    position: 'absolute',
    left: 258,
    top: 99,
  },
  Category8:{
    position: 'absolute',
    left: 345,
    top: 99,
  },
  Category9:{
    position: 'absolute',
    left: 89,
    top: 155,
  },
  Category10:{
    position: 'absolute',
    left: 174,
    top: 155,
  },
  Category11:{
    position: 'absolute',
    left: 258,
    top: 155,
  },
  Category12:{
    position: 'absolute',
    left: 345,
    top: 155,
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
  BlueView: {
    position: 'absolute',
    width: 430,
    height: 114,
    left: 0,
    top: 0,
    backgroundColor: '#0E538C',
  },
  BBQ:{
    flexDirection:'row',
    left: 12,
    top: 10,
  },
  tinyLogo: {
    width: 70,
    height: 70,
    position: 'absolute',
    left: 330,
    top: 30,
  },
  kirayaFont: {
    position: 'absolute',
    width: 200,
    height: 40,
    left: 110,
    top: 16,
    fontWeight: '400',
    fontSize: 26,
    lineHeight: 27,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  
  BlueInput: {
    position: 'absolute',
    width: 275,
    height: 44,
    left: 25,
    top: 56,
    textShadowColor:'#FFFFFF',
    backgroundColor :'#000000',
    fontSize:20,
    opacity: 0.25,
    color:'#FFFFFF',
    borderRadius: 25,
  },

});

export default Listing;
