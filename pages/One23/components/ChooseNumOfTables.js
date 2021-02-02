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
import one23listStyles from "../One23listStyles";
const ChooseNumOfTables = ({
  settableNum,
  tableNum,
  hagralot,
  setHagralot
}) => {
  const route = useRoute();
  return (
    <>
      {route.name === "One23Page" &&
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
                style={
                  tableNum === 5
                    ? one23listStyles.investBtnSelected
                    : one23listStyles.investBtn
                }
                onPress={() => {
                  settableNum(5);
                }}
              >
                <Text style={{ color: tableNum === 5 ? "black" : "#A53200" }}>
                  5
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  tableNum === 4
                    ? one23listStyles.investBtnSelected
                    : one23listStyles.investBtn
                }
                onPress={() => {
                  settableNum(4);
                }}
              >
                <Text style={{ color: tableNum === 4 ? "black" : "#A53200" }}>
                  4
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  tableNum === 3
                    ? one23listStyles.investBtnSelected
                    : one23listStyles.investBtn
                }
                onPress={() => {
                  settableNum(3);
                }}
              >
                <Text style={{ color: tableNum === 3 ? "black" : "#A53200" }}>
                  3
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  tableNum === 2
                    ? one23listStyles.investBtnSelected
                    : one23listStyles.investBtn
                }
                onPress={() => {
                  settableNum(2);
                }}
              >
                <Text style={{ color: tableNum === 2 ? "black" : "#A53200" }}>
                  2
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  tableNum === 1
                    ? one23listStyles.investBtnSelected
                    : one23listStyles.investBtn
                }
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
      }

{route.name === "SumPage123" 
        
      
        && (
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
          בחר מספר הגרלות
          </Text>
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
                  backgroundColor: hagralot === 1 ?  "#8CC63F": "#FF0000" ,
                }}
                onPress={() => {
                  // settableNum(1);
                  setHagralot(1)
                }}
              >
                <Text style={{ color: "white" }}>
                  1
                </Text>
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
                  backgroundColor: hagralot === 4 ?  "#8CC63F": "#FF0000" ,
                }}
                onPress={() => {
                  // settableNum(4);
                  setHagralot(4)
                }}
              >
                <Text style={{ color: "white" }}>
                  4
                </Text>
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
                  backgroundColor: hagralot === 6 ?  "#8CC63F": "#FF0000" ,
                }}
                onPress={() => {
                  // settableNum(6);
                  setHagralot(6)
                }}
              >
                <Text style={{ color: "white" }}>
                  6
                </Text>
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
                  backgroundColor: hagralot === 8 ?  "#8CC63F": "#FF0000" ,
                }}
                onPress={() => {
                  // settableNum(8);
                  setHagralot(8);
                }}
              >
                <Text style={{ color: "white" }}>
                  8
                </Text>
              </TouchableOpacity>
              
              
              
            
            </View>
          </View>
        </View>
      )}

    </>
  );
};

export default ChooseNumOfTables;
