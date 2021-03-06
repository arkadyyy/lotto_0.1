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

const ChooseForm = ({ double, setdouble }) => {
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
          <Text style={{ fontFamily: "fb-Spacer" }}>בחר סוג טופס</Text>
          <View>
            <Button
              small
              rounded
              style={
                double === false
                  ? chooseFormStyles.radioRegularButon
                  : chooseFormStyles.radioDubbleButon
              }
              onPress={() => {
                setdouble(false);
              }}
            >
              <Text style={{ fontFamily: "fb-Spacer-bold" }}>רגיל</Text>
            </Button>
          </View>

          <View>
            <Button
              small
              rounded
              style={
                double === true
                  ? chooseFormStyles.radioRegularButon
                  : chooseFormStyles.radioDubbleButon
              }
              onPress={() => {
                setdouble(true);
              }}
            >
              <Text style={{ fontFamily: "fb-Spacer-bold" }}>דאבל</Text>
            </Button>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          <View style={{ padding: 10 }}>
         
          
        </View>
        </View>
      </View>
    </>
  );
};

export default ChooseForm;
