import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  navbar: {
    padding: 10,
    backgroundColor: "palegreen",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  headerText: {
    fontSize: 18,
    marginRight: 30
  },
  img: {
    width: 60,
    height: 60,
  },
});

export { s };
