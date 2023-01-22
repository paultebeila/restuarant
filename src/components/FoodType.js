import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FoodType = () => {
    const types = [
        {
            id: "0",
            image: "call your first images here",
            name: "Name of food type"
        },
        {
            id: "1",
            image: "call your second images here",
            name: "Name of food type"
        }
    ]
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item, index) => (
            <View style={{margin:10}} key={index}>
                <Image source={{uri:item.image}} style={{width:60, height:60, borderRadius:30}} />
                <Text style={{marginTop:6, textAlign:"center"}}>{item.name}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default FoodType

const styles = StyleSheet.create({})