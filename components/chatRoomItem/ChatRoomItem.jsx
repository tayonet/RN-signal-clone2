import React from "react";
import { View, Text, Image, FlatList, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/core";
const ChatRoomItem = ({ chatRoom }) => {
  const navigation = useNavigation();
  const user = chatRoom.users[1];
  console.log(user.imageUri);

  const onPress = () => {
    navigation.navigate("ChatRoom", { id: chatRoom.id });
  };
  return (
    <Pressable onPress={onPress} style={styles.container}>
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
    </Pressable>
  );
};

export default ChatRoomItem;
