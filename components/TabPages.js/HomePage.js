import { View, Text, StyleSheet } from "react-native";
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
  Stack,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Box
        style={{
          paddingTop: 40,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 30,
        }}
      >
        <Stack space={3} alignItems="center">
          <HStack space={3} alignItems="center">
            <Text style={styles.txt}>Find goods quickly</Text>

            <Button style={styles.btn}>
              <Feather name="bell" size={24} color="black" />
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
    </View>
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
      </StackTab.Navigator>
    </NavigationContainer>
  );
};

export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  txt: {
    fontSize: 50,
    width: "70%",
  },
  btn: {
    width: "20%",
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
});
