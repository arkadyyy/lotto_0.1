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
import { useRoute } from "@react-navigation/native";

const ChooseForm = ({ color }) => {
  const route = useRoute();

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
          {route.name === "ChancePage" ?
            <Text>צ'אנס</Text>
            : route.name === "RavChancePage" ?
              <Text>רב צ'אנס</Text>
              : <Text>צ'אנס שיטתי</Text>}

        </View>
        {/* <View
          style={{
            backgroundColor: color,
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
            <Text style={{ color: "#E62321" }}>שלח טופס</Text>
          </Button>
        </View> */}
      </View>
    </>
  );
};

export default ChooseForm;
