import { View } from "react-native";
import React from "react";
export default ColorLine = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // marginBottom: 30,
        width: "100%",
        marginVertical: 30,
        // zIndex:200
      }}
    >
      <View
        style={{ width: "25%", height: 1, backgroundColor: "#EB2874" }}
      ></View>
      <View
        style={{ width: "25%", height: 1, backgroundColor: "#009943" }}
      ></View>
      <View
        style={{ width: "25%", height: 1, backgroundColor: "#E62321" }}
      ></View>
      <View
        style={{ width: "25%", height: 1, backgroundColor: "#FF6B00" }}
      ></View>
    </View>
  );
};
