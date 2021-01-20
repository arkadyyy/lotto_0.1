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
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 5 ? "#A53200" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                settableNum(5);
              }}
            >
              <Text style={{ color: tableNum === 5 ? "black" : "#A53200" }}>
                5
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 4 ? "#A53200" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                settableNum(4);
              }}
            >
              <Text style={{ color: tableNum === 4 ? "black" : "#A53200" }}>
                4
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 3 ? "#A53200" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                settableNum(3);
              }}
            >
              <Text style={{ color: tableNum === 3 ? "black" : "#A53200" }}>
                3
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 2 ? "#A53200" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                settableNum(2);
              }}
            >
              <Text style={{ color: tableNum === 2 ? "black" : "#A53200" }}>
                2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 1 ? "#A53200" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                settableNum(1);
              }}
            >
              <Text style={{ color: tableNum === 1 ? "black" : "#A53200" }}>
                1
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default ChooseNumOfTables;
