import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray'
  },
  addPost: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addPostLabel: {
    marginLeft: 5,
    color: "gray",
  },
  visitProfileIcon: {
    marginLeft: "auto",
  },
});