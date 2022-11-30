import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsList } from "./screens/ProductsList.js";
import { ProductDetails } from "./screens/ProductDetails.js";
import { Cart } from "./screens/Cart";
import { CartProvider } from "./CartContext.js";
import { CartIcon } from "./components/CartIcon.js";
import Login from "./screens/Login.jsx";
import Register from "./screens/Register.jsx";


const Stack = createNativeStackNavigator();

function App(){
  return(
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' options={{headerShown: false}}>
            {(props) => <Login {...props} />}
          </Stack.Screen>

          <Stack.Screen name='Register' options={{headerShown: false}}>
            {(props) => <Register {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Products" component={ProductsList} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} options={({navigation}) => ({title: 'Product', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="Cart" component={Cart} options={({navigation}) => ({title: 'Cart', headerRight: () => <CartIcon navigation={navigation} />})} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default App;