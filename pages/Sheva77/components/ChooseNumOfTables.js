import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Card,
  CardItem,
  List,
  ListItem,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const ChooseNumOfTables = ({ settableNum, tableNum }) => {
  return (
    <>
      <View
        style={{
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 7,
          width: "90%",
          margin: 10,
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 15, color: "white" }}>
          בחר מספר טבלאות למילוי
        </Text>
        <View style={{}}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                borderRadius: 30,
                backgroundColor: tableNum === 3 ? "#FBB03B" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                settableNum(3);
              }}
            >
              <Text>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                borderRadius: 30,
                backgroundColor: tableNum === 2 ? "#FBB03B" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                settableNum(2);
              }}
            >
              <Text>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                borderRadius: 30,
                backgroundColor: tableNum === 1 ? "#FBB03B" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                settableNum(1);
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default ChooseNumOfTables;
