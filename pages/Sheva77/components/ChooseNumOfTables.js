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

const ChooseNumOfTables = ({
  settableNum,
  tableNum,
  shitati,
  hagralot,
  setHagralot,
  setHagralotMultiplicaton,
}) => {
  const route = useRoute();

  return (
    <>
      {route.name === "Sheva77Page" && (
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
          <Text
            style={{
              fontSize: 15,
              color: "white",
              fontFamily: "fb-Spacer",
            }}
          >
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
                  // setHagralotMultiplicaton(3);
                }}
              >
                <Text
                  style={{
                    fontFamily: "fb-Spacer-bold",
                  }}
                >
                  3
                </Text>
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
                  // setHagralotMultiplicaton(2);
                }}
              >
                <Text
                  style={{
                    fontFamily: "fb-Spacer-bold",
                  }}
                >
                  2
                </Text>
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
                  // setHagralotMultiplicaton(1);
                }}
              >
                <Text
                  style={{
                    fontFamily: "fb-Spacer-bold",
                  }}
                >
                  1
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {route.name === "SumPage777" && (
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
          <Text style={{ fontSize: 15, color: "white" }}>בחר מספר הגרלות</Text>
          <View style={{}}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  borderColor: "white",
                  borderWidth: 1,
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: hagralot === -1 ? "#8CC63F" : null,
                }}
                onPress={() => {
                  // settableNum(1);
                  setHagralot(-1);
                  setHagralotMultiplicaton(1);
                }}
              >
                <Text style={{ color: "white" }}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  borderColor: "white",
                  borderWidth: 1,
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: hagralot === 4 ? "#8CC63F" : null,
                }}
                onPress={() => {
                  // settableNum(4);
                  setHagralot(4);
                  setHagralotMultiplicaton(4);
                }}
              >
                <Text style={{ color: "white" }}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  borderColor: "white",
                  borderWidth: 1,
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: hagralot === 6 ? "#8CC63F" : null,
                }}
                onPress={() => {
                  // settableNum(6);
                  setHagralot(6);
                  setHagralotMultiplicaton(6);
                }}
              >
                <Text style={{ color: "white" }}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  borderColor: "white",
                  borderWidth: 1,
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: hagralot === 8 ? "#8CC63F" : null,
                }}
                onPress={() => {
                  // settableNum(8);
                  setHagralot(8);
                  setHagralotMultiplicaton(8);
                }}
              >
                <Text style={{ color: "white" }}>8</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default ChooseNumOfTables;
