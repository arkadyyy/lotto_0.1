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
