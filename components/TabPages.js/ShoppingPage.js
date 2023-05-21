import { Text, View } from "native-base";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Category from "./Category";
const image = {
  uri: "https://scontent.fvca1-1.fna.fbcdn.net/v/t1.15752-9/346104659_775955203919344_5780054629775945075_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=GKxszT18zQIAX9B2tKR&_nc_ht=scontent.fvca1-1.fna&oh=03_AdQUFrziig1tgvGJ153iHzmrgzNdoe3zFy0X0xHbowueyw&oe=6491300C",
};

function ShoppingPage() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
export default ShoppingPage;
