import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import FoodType from "../components/FoodType";
import QuickFood from "../components/QuickFood";
import { Ionicons } from "@expo/vector-icons";
import place from "../data/place";
import MenuItems from "../components/MenuItems";

function Home() {
  const data = place;
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View style={styles.search}>
        <TextInput
          style={{ fontSize: 17 }}
          placeholder="Search any food you would like to order"
        />
        <AntDesign name="search1" size={24} color="#E52850" />
      </View>
      {/* Image slider Component */}

      {/* <Carousel /> */}

      {/* Food types */}
      {/* <FoodType /> */}

      {/* Quick Food */}
      <QuickFood />

      {/* Filter buttons */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            width:120,
          }}
        >
          <Text style={{marginRight:10}}>Filter</Text>
          <Ionicons name="filter" size={20} color="black" />
        </Pressable>

        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            width:120
          }}
        >
          <Text>Sort by Ratings</Text>
        </Pressable>

        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <Text>Sort by Price</Text>
        </Pressable>
      </View>
      {data.map((item,index) => (
        <MenuItems key={index} item={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderColor: "#C0C0C0",
    borderRadius: 7,
  },
});

export default Home;
