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

const Num = ({ num }) => {
  return (
    <>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 23,
          margin: 3,
        }}
      >
        <Text>1</Text>
      </TouchableOpacity>
    </>
  );
};

const FillForm = ({ setshowTable, double }) => {
  var myMap = new Map();
  myMap.size = 4;
  return (
    <>
      <View
        style={{
          backgroundColor: "#263742",
          width: "100%",
          top: "39%",
          height: 320,
          position: "absolute",
          zIndex: 2000,
        }}
      >
        <View
          style={{
            backgroundColor: "#263742",
            width: "55%",
            height: 70,
            position: "relative",
            top: -40,
            left: "46.5%",
            zIndex: 2000,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Text style={{ color: "white", fontSize: 20 }}>{">"}</Text>
            </TouchableOpacity>
            <Text style={{ color: "white", fontSize: 13 }}>טבלאות</Text>
            <TouchableOpacity>
              <Text style={{ color: "white", fontSize: 20 }}>{"<"}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              padding: 20,
              backgroundColor: "white",
            }}
            onPress={() => {
              setshowTable(false);
            }}
          >
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderColor: "white",
            width: "90%",
            height: "60%",
            borderWidth: 1,
            borderRadius: 8,
            alignSelf: "center",
            position: "relative",
            top: -40,
            padding: 10,
          }}
        >
          <Text style={{ color: "white", marginBottom: 5 }}>מלא את טבלה 1</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 23,
                margin: 3,
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ color: "white" }}>בחר מספר חזק</Text>
          <View
            style={{
              width: "100%",
              height: 50,
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 7,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              margin: 2,
            }}
          >
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                margin: 2,
              }}
            >
              <Text style={{ color: "white" }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                margin: 2,
              }}
            >
              <Text style={{ color: "white" }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                margin: 2,
              }}
            >
              <Text style={{ color: "white" }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                margin: 2,
              }}
            >
              <Text style={{ color: "white" }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                margin: 2,
              }}
            >
              <Text style={{ color: "white" }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                margin: 2,
              }}
            >
              <Text style={{ color: "white" }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                margin: 2,
              }}
            >
              <Text style={{ color: "white" }}>1</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default FillForm;
