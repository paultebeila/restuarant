// import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import React, { useEffect } from "react";
// import LottieView from "lottie-react-native";
// import { useNavigation } from "@react-navigation/native"

// const LoadingScreen = () => {
//     const navigation = useNavigation();
//     useEffect(() => {
//         setTimeout(() => {
//             navigation.replace("Order")
//         }, 2000);
//     },[])
//   return (
//     <SafeAreaView>
//       <LottieView
//         source={require("../../assets/splash.png")}
//         style={{
//           height: 260,
//           width: 300,
//           alignSelf: "center",
//           marginTop: 40,
//           justifyContent: "center",
//         }}
//         autoPlay
//         loop={false}
//         speed={0.7}
//       />
//       <Text style={{marginTop:20, fontSize:20, fontWeight:"600", textAlign:"center"}}>Your order has been Received</Text>
//       <LottieView
//         source={require("../../assets/icon.png")}
//         style={{
//           height: 300,
//           width: 300,
//           alignSelf: "center",
//           top: 100,
//           position: "absolute"
//         }}
//         autoPlay
//         loop={false}
//         speed={0.7}
//       />
//     </SafeAreaView>
//   );
// };

// export default LoadingScreen;

// const styles = StyleSheet.create({});
