import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import ChatRoomScreen from "./screens/ChatRoomScreen";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoomScreen}
          options={{
            headerTitle: ChatRoomHeader,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerTitle: HomeHeader }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeHeader = (props) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        width: width - 40, // change for mobile
        paddingLeft: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={require("./assets/imgs/user2.jpg")}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />
      <Text style={{ flex: 1, textAlign: "center", fontWeight: "bold" }}>
        Signal
      </Text>
      <Feather
        name="camera"
        size={24}
        color="black"
        style={{ marginLeft: 10 }}
      />
      <Feather
        name="edit-2"
        size={24}
        color="black"
        style={{ marginLeft: 20 }}
      />
    </View>
  );
};

const ChatRoomHeader = (props) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        width: width - 80, // change for mobile
        paddingLeft: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={require("./assets/imgs/user2.jpg")}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />
      <Text style={{ flex: 1, marginLeft: 10, fontWeight: "bold" }}>
        {props.children}
      </Text>
      <Feather
        name="camera"
        size={24}
        color="black"
        style={{ marginLeft: 10 }}
      />
      <Feather
        name="edit-2"
        size={24}
        color="black"
        style={{ marginLeft: 20 }}
      />
    </View>
  );
};
