import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MenuItems = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("Menu", {
            id: item.id,
            name: item.name,
            image: item.image,
            rating: item.rating,
            address: item.address,
            cost_for_two: item.cost_for_two,
            menu: item.menu,
          })
        }
        style={{ flexDirection: "row" }}
      >
        <View>
          <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            style={{ aspectRatio: 5 / 6, height: 170 }}
            source={{ uri: item.image }}
          >
            <AntDesign
              style={{ position: "absolute", top: 10, right:10 }}
              name="hearto"
              size={24}
              color="white"
            />
          </ImageBackground>
        </View>
        <View style={{ marginLeft:15 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
              {item.rating}
            </Text>
            <Text style={{ marginLeft: 3 }}>*</Text>
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
              {item.time} minutes
            </Text>
          </View>
          <Text style={{ fontSize: 15, color: "black", marginTop: 6 }}>
            {item.address}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
            <Text style={{ marginLeft: 10, fontSize: 15 }}>
              {item.delivery}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({});
