import { StyleSheet, Text, View } from "react-native";

const one23listStyles = StyleSheet.create({
  roundButton1: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    // padding: 10,
    borderRadius: 100,
    backgroundColor: "#1F3842",
  },
  investBtn: {
    width: 28,
    height: 28,
    backgroundColor: "white",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
    marginVertical: 5,
  },
  investBtnSelected: {
    width: 28,
    height: 28,
    backgroundColor: "#FBB03B",
    shadowColor: "green",
    shadowOffset: { width: 7, height: 7 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 3,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
    marginVertical: 5,
  },
  fillFormCardSize: {
    backgroundColor: "white",
    width: 25,
    height: 25,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 7,
    marginHorizontal: 2,
  },
});
export default one23listStyles;
