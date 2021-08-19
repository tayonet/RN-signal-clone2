import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "red",
  },
  container: {
    flexDirection: "row",
    marginTop: 10,

    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightContainer: {
    // backgroundColor: "red",

    flex: 1,
    justifyContent: "center",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  badgeConatainer: {
    backgroundColor: "#3777f0",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    position: "absolute",
    //left: 38,
    top: 1,
    borderWidth: 1,
    borderColor: "white",
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 3,
  },
  text: {
    color: "grey",
  },
});

export default styles;
