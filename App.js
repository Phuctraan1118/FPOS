import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BannerCodeScanner from "./components/BannerCodeScanner";
import MyTabs from "./components/MyTabs";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>
    //     <BannerCodeScanner />;
    //   </Text>
    // </View>

    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
});
