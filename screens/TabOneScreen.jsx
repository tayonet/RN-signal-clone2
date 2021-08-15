import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import ChatRoomItem from "../components/chatRoomItem";

import chatRoomData from "../assets/dummy-data/ChatRooms";

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <View style={styles.page}>
        <FlatList
          data={chatRoomData}
          renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
          showsVerticalScrollIndicator={false}
          // onEndReached={}
          ListHeaderComponent={() => (
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Messages</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
