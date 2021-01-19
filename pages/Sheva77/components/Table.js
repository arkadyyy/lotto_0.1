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

const Table = ({ setshowTable, double }) => {
  return (
    <>
      <ListItem
        style={{
          backgroundColor: "#FBB03B",
          flexWrap: "wrap",
          marginTop: 4,
          height: 55,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>טבלה 1</Text>
        <TouchableOpacity
          onPress={() => {
            setshowTable(true);
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",

                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#CC1D64" }}>7</Text>
            </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#CC1D64" }}>6</Text>
            </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#CC1D64" }}>5</Text>
            </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#CC1D64" }}>4</Text>
            </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#CC1D64" }}>3</Text>
            </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#CC1D64" }}>2</Text>
            </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#CC1D64" }}>1</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ListItem>
    </>
  );
};

export default Table;
