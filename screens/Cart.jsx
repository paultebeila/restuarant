import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Image,
  Text,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import { CartContext } from "../CartContext";
import { collection, addDoc } from "firebase/firestore"
import { auth, db } from "../config/firebase";



export function Cart({ navigation }) {
  const { items, getItemsCount, getTotalPrice } = useContext(CartContext);

  const [email] = useState(auth.currentUser.email);
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0)
  const [totPrice, setTotPrice] = useState(0)
  console.log(name);
  console.log(price);
  console.log(quantity);
  console.log(totPrice);

  const Pay = (item) => {
    const collectionRef = collection(db, "Orders");

    const Products = {
      productName: name,
      Price: price,
      Quantity: quantity,
      Total_Price: totPrice,
      Email: email,
    };

    addDoc(collectionRef, Products)
      .then(() => {
        alert("Added Order successfully");
        navigation.navigate("Products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.mainTotal}>R {total}</Text>
      </View>
    );
  }

  function renderItem({ item }) {
    
    {setName(item.product.name)}
    {setPrice(item.product.price)}
    {setQuantity(item.qty)}
    {setTotPrice(item.totalPrice)}
    return (
      <>
        <View style={styles.cartLine}>
          <Image style={styles.image} source={item.product.image} />
          <Text style={styles.lineLeft}>
            {item.product.name} x {item.qty}{" "}
            <Text style={styles.productTotal}> R{item.totalPrice}</Text>
          </Text>
        </View>
      </>
    );
  }

  return (
    <View>
      <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.product.id.toString()}
        ListFooterComponent={Totals}
      ></FlatList>

      <Button onPress={Pay} title="Check Out" />
    </View>
  );
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: "row",
    width: "80%",
    paddingVertical: 10,
  },
  image: {
    width: "25%",
    aspectRatio: 1,
    marginRight: 5,
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  productTotal: {
    fontWeight: "bold",
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
  },
  lineRight: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "left",
  },
  mainTotal: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  itemsList: {
    backgroundColor: "#eeeeee",
  },
  itemsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
