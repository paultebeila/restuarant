import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/screens/Home'
import MenuScreen from './src/screens/MenuScreen'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CartScreen from './src/screens/CartScreen'
import LoadingScreen from './src/screens/LoadingScreen'
import OderScreen from './src/screens/OderScreen'
const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
            <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown:false}} />
            <Stack.Screen name="Cart" component={CartScreen} options={{headerShown:false}} />
            {/* <Stack.Screen name="Loading" component={LoadingScreen} options={{headerShown:false}} />
            <Stack.Screen name="Order" component={OderScreen} options={{headerShown:false}} /> */}
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})