import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
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
  Content,
} from "native-base";

const ActiveForms = ({ activeforms }) => {
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 12,
                backgroundColor: "#263742",
                padding: 7,
                marginLeft: 2,
                marginRight: 2,
                fontFamily: "fb-Spacer",
              }}
            >
              משחק ומס' הגרלה
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 12,
                backgroundColor: "#263742",
                padding: 7,
                marginLeft: 2,
                marginRight: 2,

                fontFamily: "fb-Spacer",
              }}
            >
              תאריך ושעה
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 12,
                backgroundColor: "#263742",
                padding: 7,
                marginLeft: 2,
                marginRight: 2,
                fontFamily: "fb-Spacer",
              }}
            >
              עלות הטופס
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 12,
                backgroundColor: "#263742",
                padding: 7,
                marginLeft: 2,
                marginRight: 2,
                fontFamily: "fb-Spacer",
              }}
            >
              שכפול הטופס
            </Text>
          </View>

          <View
            style={{
              marginLeft: 20,
              marginRight: 20,
              backgroundColor: "#00AEEF",
              height: 200,
              width: "100%",
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                borderBottomWidth: 1,
                borderBottomColor: "white",
                marginBottom: 10,
                fontFamily: "fb-Spacer",
              }}
            >
              אין ברשותך טפסים פעילים.
            </Text>
            <Button
              rounded
              style={{
                backgroundColor: "#FBB03B",
                borderColor: "white",
                borderWidth: 2,
                flex: 1,

                marginHorizontal: 70,
              }}
            >
              <Text
                style={{
                  color: "white",
                  flex: 1,
                  fontSize: 30,
                  textAlign: "center",
                  fontFamily: "fb-Spacer-bold",
                }}
              >
                שלח טופס
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ActiveForms;
