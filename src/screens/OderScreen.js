// import {
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useEffect, useRef, useState } from "react";
// import { FontAwesome5 } from "@expo/vector-icons";
// import moment from "moment";
// import MmapView, { Marker, Polyline } from "react-native-maps";

// const OderScreen = () => {
//     const [tip,setTip] = useState(0);
//   const time = moment().format("LT");
//   const mapView = useRef(null);
//   const [coodinates] = useState([
//     {
//       latitude: 12.9716,
//       longitude: 77.5946,
//     },
//     {
//       latitude: 13.0451,
//       longitude: 77.6269,
//     },
//   ]);
//   useEffect(() => {
//     mapView.current.fitToCoordinates(coodinates, {
//       edgePadding: {
//         top: 50,
//         bottom: 50,
//         left: 50,
//         right: 50,
//       },
//     });
//   }, []);

//   return (
//     <ScrollView>
//       <View
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "space-between",
//           height: 80,
//           backgroundColor: "#fc8019",
//           padding: 10,
//         }}
//       >
//         <View style={{ marginLeft: 10 }}>
//           <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
//             Delivery in 20 minutes
//           </Text>
//           <Text
//             style={{
//               color: "white",
//               fontSize: 17,
//               fontWeight: "600",
//               marginTop: 5,
//             }}
//           >
//             Order placed at {time}
//           </Text>
//         </View>
//         <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
//           HELP
//         </Text>
//       </View>
//       <MapView
//         ref={mapView}
//         style={{ width: "100%", height: 400 }}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         <Marker coodinate={[0]} />
//         <Marker coodinate={[1]} />

//         <Polyline
//           coordinates={coodinates}
//           strokeColor="black"
//           lineDashPattern={[4]}
//           strokeWidth={1}
//         />
//       </MapView>

//       <View
//         style={{
//           height: 320,
//           width: "100%",
//           backgroundColor: "white",
//           borderTopLeftRadius: 20,
//           borderTopRightRadius: 20,
//         }}
//       >
//         <View style={{ padding: 10 }}>
//           <View>
//             <Text
//               style={{ fontWeight: "500", fontSize: 17, textAlign: "center" }}
//             >
//               Dingane's Food has accepted your order
//             </Text>
//             <View style={{ flexDirection: "row", marginTop: 20 }}>
//               <FontAwesome5
//                 name="hand-holding-heart"
//                 size={24}
//                 color="#fc8019"
//               />
//               <View style={{ marginLeft: 10 }}>
//                 <Text
//                   style={{
//                     fontSize: 18,
//                     fontWeight: "500",
//                     paddingHorizontal: 2,
//                     marginBottom: 6,
//                   }}
//                 >
//                   Tip your hunger Saviour
//                 </Text>
//                 <Text
//                   style={{
//                     fontSize: 16,
//                     fontWeight: "600",
//                     color: "#696969",
//                     marginRight: 10,
//                     paddingHorizontal: 2,
//                   }}
//                 >
//                   Thank you for ordering
//                 </Text>
//                 <Pressable
//                   style={{
//                     paddingTop: 20,
//                     flexDirection: "row",
//                     alignItems: "center",
//                   }}
//                 >
//                   <TouchableOpacity
//                     activeOpacity={0.6}
//                     onPress={() => setTip(30)}
//                     style={{
//                       backgroundColor: "#F5F5F5",
//                       marginHorizontal: 10,
//                       paddingHorizontal: 10,
//                       borderRadius: 7,
//                     }}
//                   >
//                     <Text
//                       style={{
//                         padding: 10,
//                         color: "#002D62",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       R30
//                     </Text>
//                   </TouchableOpacity>

//                   <TouchableOpacity
//                     activeOpacity={0.6}
//                     onPress={() => setTip(30)}
//                     style={{
//                       backgroundColor: "#F5F5F5",
//                       marginHorizontal: 10,
//                       borderRadius: 7,
//                       alignItems: "center",
//                     }}
//                   >
//                     <Text
//                       style={{
//                         padding: 4,
//                         color: "#002D62",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       R50
//                     </Text>
//                     <Text
//                       style={{
//                         paddingHorizontal: 10,
//                         color: "white",
//                         fontWeight: "bold",
//                         backgroundColor: "orange",
//                         fontSize: 14,
//                       }}
//                     >
//                       Most Tipped
//                     </Text>
//                   </TouchableOpacity>

//                   <TouchableOpacity
//                     activeOpacity={0.6}
//                     onPress={() => setTip(70)}
//                     style={{
//                       backgroundColor: "#F5F5F5",
//                       marginHorizontal: 10,
//                       paddingHorizontal: 10,
//                       borderRadius: 7,
//                     }}
//                   >
//                     <Text
//                       style={{
//                         padding: 10,
//                         color: "#002D62",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       R70
//                     </Text>
//                   </TouchableOpacity>
//                 </Pressable>
//               </View>
//             </View>
//             {tip ? (
//               <View>
//                 <Text
//                   style={{
//                     color: "#fc8019",
//                     padding: 10,
//                     marginLeft: 10,
//                     marginRight: 10,
//                     fontSize: 16,
//                     fontWeight: "600",
//                   }}
//                 >
//                   please pay {"R"} {tip} to your delivery agent at the time of
//                   delivery
//                 </Text>
//                 <TouchableOpacity
//                   onPress={() => setTip(0)}
//                   activeOpacity={0.7}
//                   style={{
//                     padding: 10,
//                     marginLeft: 10,
//                     marginRight: 10,
//                     position: "absolute",
//                     top: 40,
//                     paddingBottom: 40,
//                   }}
//                 >
//                   <Text
//                     style={{ color: "red", fontSize: 14, fontWeight: "700" }}
//                   >
//                     (Cancel)
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             ) : null}
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default OderScreen;

// const styles = StyleSheet.create({});
