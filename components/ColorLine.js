import { View } from "react-native";
import React from "react";
export default ColorLine = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
      }}
    >
      <View style={{ width: 63, height: 1, backgroundColor: "#EB2874" }}></View>
      <View style={{ width: 63, height: 1, backgroundColor: "#009943" }}></View>
      <View style={{ width: 63, height: 1, backgroundColor: "#E62321" }}></View>
      <View style={{ width: 63, height: 1, backgroundColor: "#FF6B00" }}></View>
    </View>
  );
};
