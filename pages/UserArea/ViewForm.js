import React from "react";
import { View, Text } from "react-native";

const ViewForm = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          backgroundColor: "#263742",
          borderColor: "white",
          borderWidth: 1,
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>7</Text>
      </View>
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          backgroundColor: "white",
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>6</Text>
      </View>
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          backgroundColor: "#FFFF00",
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>5</Text>
      </View>
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          backgroundColor: "white",
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>4</Text>
      </View>
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          backgroundColor: "white",
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          backgroundColor: "white",
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          backgroundColor: "white",
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
    </View>
  );
};

export default ViewForm;
