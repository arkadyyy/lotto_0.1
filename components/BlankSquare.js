import React from "react";
import { View } from "react-native";

const BlankSquare = () => {
  return (
    <View>
      <View
        style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
      ></View>
      <View
        style={{ backgroundColor: "white", width: "100%", height: 100 }}
      ></View>
      <View
        style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
      ></View>
    </View>
  );
};

export default BlankSquare;
