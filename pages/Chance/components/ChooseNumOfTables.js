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
import chanceListstyles from "../ChanceListStyles";
import EStyleSheet from "react-native-extended-stylesheet";

const ChooseNumOfTables = ({
  settableNum,
  tableNum,
  shitati,
  hagralot,
  setHagralot,
}) => {
  const route = useRoute();

  return (
    <>
      {
        route.name === "ChancePage" &&
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
                  tableNum === 4
                    ? chanceListstyles.investBtnSelected
                    : chanceListstyles.investBtn
                }
                onPress={() => {
                  settableNum(4);
                }}
              >
                <Text>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  tableNum === 3
                    ? chanceListstyles.investBtnSelected
                    : chanceListstyles.investBtn
                }
                onPress={() => {
                  settableNum(3);
                }}
              >
                <Text>3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  tableNum === 2
                    ? chanceListstyles.investBtnSelected
                    : chanceListstyles.investBtn
                }
                onPress={() => {
                  settableNum(2);
                }}
              >
                <Text>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  tableNum === 1
                    ? chanceListstyles.investBtnSelected
                    : chanceListstyles.investBtn
                }
                onPress={() => {
                  settableNum(1);
                }}
              >
                <Text>1</Text>
              </TouchableOpacity>
              
            </View>
          </View>
        </View>
}
      {route.name === "ChanceShitatiPage" 
        &&
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
                  tableNum === 4
                    ? chanceListstyles.investBtnSelected
                    : chanceListstyles.investBtn
                }
                onPress={() => {
                  settableNum(4);
                }}
              >
                <Text>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  tableNum === 3
                    ? chanceListstyles.investBtnSelected
                    : chanceListstyles.investBtn
                }
                onPress={() => {
                  settableNum(3);
                }}
              >
                <Text>3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  tableNum === 2
                    ? chanceListstyles.investBtnSelected
                    : chanceListstyles.investBtn
                }
                onPress={() => {
                  settableNum(2);
                }}
              >
                <Text>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  tableNum === 1
                    ? chanceListstyles.investBtnSelected
                    : chanceListstyles.investBtn
                }
                onPress={() => {
                  settableNum(1);
                }}
              >
                <Text>1</Text>
              </TouchableOpacity>
              {shitati && (
                <TouchableOpacity
                style={
                    tableNum === 5
                      ? chanceListstyles.investBtnSelected
                      : chanceListstyles.investBtn
                  }
                  onPress={() => {
                    settableNum(5);
                  }}
                >
                  <Text
                  style={{
                   textAlign:"center",
                    fontSize: EStyleSheet.value("$rem") * 13,
                  
                }}  
                >רב צ'אנס</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
}
      {route.name === "SumPageChance" && (
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
                  backgroundColor: hagralot === 1 ? "#8CC63F" : null,
                }}
                onPress={() => {
                  // settableNum(1);
                  setHagralot(1);
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
