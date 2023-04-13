import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Onboard from './screens/Onboard';
import Cnic from './screens/Cnic';
import Email from './screens/Email';
import Listing from './screens/Listing';
import PhoneNum from './screens/PhoneNum';
import Profile from './screens/Profile';
import SignIn from './screens/SignIn';
import Category from './screens/Category';
import PhoneAuth from './screens/PhoneAuth';
import EmailAuth from './screens/EmailAuth';
import Cart from './screens/Cart';
import ProductDetails from './screens/ProductDetails';
import AddProductScreen from './screens/AddProduct';
import CategoryAdd from './screens/CategoryAdd';
import Negotiation from './screens/Negotiation';
import CheckoutScreen from './screens/CheckOut';
import OrderConfirmation from './screens/OrderConfirmation';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen
        
          name="Listing"
          component={Listing}
          options={{headerShown: false}}
        />
        <Stack.Screen
        
        name="OrderConfirmation"
        component={OrderConfirmation}
        options={{headerShown: false}}
      />
        <Stack.Screen
        
        name="CheckOut"
        component={CheckoutScreen}
        options={{headerShown: false}}
      />
        <Stack.Screen
          name="AddProduct"
          component={AddProductScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Negotiation"
          component={Negotiation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboard"
          component={Onboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PhoneNum"
          component={PhoneNum}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Email"
          component={Email}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cnic"
          component={Cnic}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CategoryAdd"
          component={CategoryAdd}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Listing" component={Listing}  options={{headerShown: false}}/>*/}
        <Stack.Screen
          name="Category"
          component={Category}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="AddProduct"
          component={AddProductScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PhoneAuth"
          component={PhoneAuth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EmailAuth"
          component={EmailAuth}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
