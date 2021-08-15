import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./styles";

const ChatRoomItem = ({ chatRoom }) => {
  const user = chatRoom.users[1];
  console.log(user.imageUri);
  return (
    <View style={styles.container}>
      <Image source={user.imageUri} style={styles.image} />

      {chatRoom.newMessages && (
        <View style={styles.badgeConatainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )}
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </View>
  );
};

export default ChatRoomItem;
