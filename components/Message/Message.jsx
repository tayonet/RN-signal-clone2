import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Message = ({ message }) => {
  const blue = "#3777f0";
  const grey = "lightgrey";
  const myID = "u1";
  const isMe = message.user.id === myID;

  return (
    <View
      style={[
        styles.container,

        isMe ? styles.rightContainer : styles.leftContainer,
      ]}
    >
      <Text style={{ color: isMe ? "black" : "white" }}>{message.content}</Text>
    </View>
  );
};
export default Message;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3777f0",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: "75%",
    marginRight: "auto",
  },
  text: {
    color: "#fff",
  },
  leftContainer: {
    backgroundColor: "#3777f0",
    marginLeft: 10,
    marginRight: "auto",
  },
  rightContainer: {
    backgroundColor: "lightgrey",
    marginLeft: "auto",
    marginRight: 10,
  },
});
