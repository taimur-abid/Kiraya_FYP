import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Onboard from './screens/Onboard';
import Cnic from './screens/Cnic';
import Email from './screens/Email';
import Listing from './screens/Listing';
import PhoneNum from './screens/PhoneNum';
import Profile from './screens/Profile';
import SignIn from './screens/SignIn';
import SignUp from './screens/Signup';
import Category from './screens/Category';
import Product1 from './screens/Products/Product1';
import Product2 from './screens/Products/Product2';
import Product3 from './screens/Products/Product3';
import Product4 from './screens/Products/Product4';
import Product5 from './screens/Products/Product5';
import Product6 from './screens/Products/Product6';
import Product7 from './screens/Products/Product7';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Onboard" component={Onboard} options={{headerShown: false}} />
        <Stack.Screen name="PhoneNum" component={PhoneNum}  options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
        <Stack.Screen name="Email" component={Email}  options={{headerShown: false}}/>
        <Stack.Screen name="Cnic" component={Cnic} options={{headerShown: false}} />
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp}  options={{headerShown: false}}/>
        <Stack.Screen name="Listing" component={Listing}  options={{headerShown: false}}/>
        <Stack.Screen name="Category" component={Category}  options={{headerShown: false}}/>
        <Stack.Screen name="Product1" component={Product1}  options={{headerShown: false}}/>
        <Stack.Screen name="Product2" component={Product2}  options={{headerShown: false}}/>
        <Stack.Screen name="Product3" component={Product3}  options={{headerShown: false}}/>
        <Stack.Screen name="Product4" component={Product4}  options={{headerShown: false}}/>
        <Stack.Screen name="Product5" component={Product5}  options={{headerShown: false}}/>
        <Stack.Screen name="Product6" component={Product6}  options={{headerShown: false}}/>
        <Stack.Screen name="Product7" component={Product7}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MyStack;