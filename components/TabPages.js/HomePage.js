import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import BannerCodeScanner from "../BannerCodeScanner";
import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  Input,
  NativeBaseProvider,
  ScrollView,
  Stack,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  configureFonts,
  MD3LightTheme,
  PaperProvider,
} from "react-native-paper";
import Category from "./Category";
import Notification from "./Notification";
import ProductDetailsScreen from "./ProductDetailsScreen";

const fontConfig = {
  fontFamily: "NotoSans",
};
const image = {
  uri: "https://scontent.fvca1-1.fna.fbcdn.net/v/t1.15752-9/346104659_775955203919344_5780054629775945075_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=GKxszT18zQIAX9B2tKR&_nc_ht=scontent.fvca1-1.fna&oh=03_AdQUFrziig1tgvGJ153iHzmrgzNdoe3zFy0X0xHbowueyw&oe=6491300C",
};

const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({ config: fontConfig }),
};
function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView>
        <View style={styles.container}>
          <Box
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 30,
            }}
          >
            <Stack space={3} alignItems="center">
              <HStack space={3} alignItems="center">
                <Text style={styles.txt}>Find goods quickly</Text>

                <Button
                  onPress={() => navigation.navigate("Notifications")}
                  style={styles.btn}
                >
                  <Feather name="bell" size={20} color="black" />
                </Button>
              </HStack>
            </Stack>
          </Box>

          <Stack space={3} alignItems="center">
            <HStack space={3} alignItems="center">
              <View style={styles.input}>
                <Input
                  variant="rounded"
                  placeholder="What kind of products are you 
          looking for?"
                  h="10"
                  style={{ fontSize: 20 }}
                />
              </View>
              <Button
                onPress={() => navigation.navigate("Scan")}
                style={styles.btn2}
              >
                <AntDesign name="filter" size={20} color="black" />
              </Button>
            </HStack>
          </Stack>
          <Category navigation={navigation} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
function ScanScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <BannerCodeScanner />
    </View>
  );
}
const StackTab = createNativeStackNavigator();
const HomePage = () => {
  return (
    <NavigationContainer independent={true}>
      <StackTab.Navigator>
        <StackTab.Screen name="Home" component={HomeScreen} />
        <StackTab.Screen
          name="Scan"
          animationEnabled={true}
          component={ScanScreen}
        />
        <StackTab.Screen
          name="Notifications"
          animationEnabled={true}
          component={Notification}
        />
        <StackTab.Screen
          name="Product Details"
          animationEnabled={true}
          component={ProductDetailsScreen}
        />
      </StackTab.Navigator>
    </NavigationContainer>
  );
};

export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontSize: 40,
    width: "80%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  btn: {
    width: "15%",
    shadowOpacity: 0.3,
    backgroundColor: "white",
    borderRadius: "35px",
  },
  input: {
    width: "70%",
  },
  btn2: {
    width: "15%",
    shadowOpacity: 0.3,
    backgroundColor: "white",
    borderRadius: "20px",
  },
  category: {
    fontSize: "20px",
    paddingLeft: 20,
    paddingTop: 20,
  },
});
