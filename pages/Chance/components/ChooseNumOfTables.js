import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";

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

const ChooseNumOfTables = ({ settableNum, tableNum, shitati }) => {
  const route = useRoute();

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
            {shitati && (
              <TouchableOpacity
                style={{
                  borderRadius: 30,
                  backgroundColor: tableNum === 4 ? "#8CC63F" : "white",
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 3,
                }}
                onPress={() => {
                  settableNum(4);
                }}
              >
                <Text>רב צ'אנס</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </>
  );
};

export default ChooseNumOfTables;
