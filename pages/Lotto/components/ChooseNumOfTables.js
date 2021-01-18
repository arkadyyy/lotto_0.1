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
                backgroundColor: tableNum === 7 ? "#8CC63F" : "white",
                borderColor: "white",
                borderWidth: 1,
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                settableNum(7);
              }}
            >
              <Text style={{ color: "black" }}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 6 ? "#8CC63F" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                settableNum(6);
              }}
            >
              <Text>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 5 ? "#8CC63F" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                settableNum(5);
              }}
            >
              <Text>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 4 ? "#8CC63F" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                settableNum(4);
              }}
            >
              <Text>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 3 ? "#8CC63F" : "white",
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
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 2 ? "#8CC63F" : "white",
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
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 1 ? "#8CC63F" : "white",
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
