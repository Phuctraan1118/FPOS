import * as React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeBaseProvider, Center, StatusBar } from "native-base";

import { Provider } from "react-redux";

import HomePage from "./TabPages.js/HomePage";
import ShoppingPage from "./TabPages.js/ShoppingPage";
import InfoPage from "./TabPages.js/InfoPage";
import { store } from "../store";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#e91e63"
          labelStyle={{ fontSize: 12 }}
          style={{ backgroundColor: "tomato" }}
        >
          <Tab.Screen
            name="Home"
            component={HomePage}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />

          <Tab.Screen
            name="Shopping"
            component={ShoppingPage}
            options={{
              tabBarLabel: "Products",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />
          {/* <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
            }}
          /> */}
          <Tab.Screen
            name="Info"
            component={InfoPage}
            options={{
              tabBarLabel: "InfoPage",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          {/* <Tab.Screen
            name="ShoppingCart"
            component={ShoppingCart}
            options={{
              tabBarLabel: "ShoppingCart",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cart" color={color} size={26} />
              ),
            }}
          /> */}
          {/* <Tab.Screen
            name="ItemDetails"
            component={ItemDetails}
            options={{
              tabBarLabel: "ItemDetails",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cart" color={color} size={26} />
              ),
            }}
          /> */}
        </Tab.Navigator>
      </NativeBaseProvider>
      <StatusBar style="auto" />
    </Provider>
  );
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
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
