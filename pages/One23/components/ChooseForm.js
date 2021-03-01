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

const ChooseForm = ({}) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: 15,
            flex: 2,
          }}
        >
          <Text style={{ color: "#FF6B00", fontFamily: "fb-Spacer" }}>
            הגרלות 123
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#FF6B00",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          <Button
            style={{ backgroundColor: "white", padding: 10 }}
            small
            rounded
          >
            <Text style={{ color: "#FF6B00" }}>שלח טופס</Text>
          </Button>
        </View>
      </View>
    </>
  );
};

export default ChooseForm;
