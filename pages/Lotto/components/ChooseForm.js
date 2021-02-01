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
import chooseFormStyles from "./chooseFormStyles";

const ChooseForm = ({ double,setdouble }) => {
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
          <Text>בחר סוג טופס</Text>
          <View>
            <Button
              small
              rounded
              style={
                double === false
                ? chooseFormStyles.radioRegularButon
                : chooseFormStyles.radioDubbleButon
               }
               onPress={() => {setdouble(false)}}
>
              <Text>רגיל</Text>
            </Button>
          </View>

          <View>
            <Button
              small
              rounded
                 style={ double === true
                  ? chooseFormStyles.radioRegularButon
                  : chooseFormStyles.radioDubbleButon
                 }
                 onPress={() => {setdouble(true)}}
            >
              <Text>דאבל</Text>
            </Button>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#E62321",
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
        </View>
      </View>
    </>
  );
};

export default ChooseForm;
