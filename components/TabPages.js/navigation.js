import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Pressable, Text } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "../store/cartSlice";
import Category from "./Category";
import ProductDetailsScreen from "./ProductDetailsScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Category"
          component={Category}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>
                  {numberOfItems}
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
