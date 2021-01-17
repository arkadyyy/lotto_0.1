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
import ViewForm from "../ViewForm";

const PaymentHistory = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
            flex: 0.5,
          }}
        >
          מספר
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            backgroundColor: "#263742",
            padding: 7,
            marginLeft: 2,
            marginRight: 2,
            flex: 0.5,
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
            flex: 1.5,
          }}
        >
          סה"כ בש"ח
        </Text>
      </View>

      <List
        style={{
          marginLeft: 20,
          marginRight: 20,
          backgroundColor: "#00AEEF",

          width: "98%",
          marginTop: 10,
        }}
      >
        <ListItem>
          <View style={{ marginRight: 45 }}>
            <Text style={{ fontSize: 12, color: "white" }}>01234</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={{ fontSize: 12, color: "white" }}>01.02.20</Text>
            <Text style={{ fontSize: 12, color: "white" }}>15:00</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={{ fontSize: 12, color: "white" }}>51.00</Text>
          </View>
          <View>
            <Button
              disabled
              style={{ borderColor: "white", padding: 5, marginLeft: "30%" }}
              small
              bordered
              onPress={() => {
                setOpen(true);
              }}
            >
              <Text style={{ fontSize: 12, color: "white" }}>חויב</Text>
            </Button>
          </View>
        </ListItem>
        <ListItem>
          <View style={{ marginRight: 45 }}>
            <Text style={{ fontSize: 12, color: "white" }}>01234</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={{ fontSize: 12, color: "white" }}>01.02.20</Text>
            <Text style={{ fontSize: 12, color: "white" }}>15:00</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={{ fontSize: 12, color: "white" }}>51.00</Text>
          </View>
          <View>
            <Button
              disabled
              style={{ borderColor: "white", padding: 5, marginLeft: "30%" }}
              small
              bordered
              onPress={() => {
                setOpen(true);
              }}
            >
              <Text style={{ fontSize: 12, color: "white" }}>חויב</Text>
            </Button>
          </View>
        </ListItem>
        <ListItem>
          <View style={{ marginRight: 45 }}>
            <Text style={{ fontSize: 12, color: "white" }}>01234</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={{ fontSize: 12, color: "white" }}>01.02.20</Text>
            <Text style={{ fontSize: 12, color: "white" }}>15:00</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={{ fontSize: 12, color: "white" }}>51.00</Text>
          </View>
          <View>
            <Button
              disabled
              style={{ borderColor: "white", padding: 5, marginLeft: "30%" }}
              small
              bordered
              onPress={() => {
                setOpen(true);
              }}
            >
              <Text style={{ fontSize: 12, color: "white" }}>חויב</Text>
            </Button>
          </View>
        </ListItem>
        <ListItem>
          <View style={{ marginRight: 45 }}>
            <Text style={{ fontSize: 12, color: "white" }}>01234</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={{ fontSize: 12, color: "white" }}>01.02.20</Text>
            <Text style={{ fontSize: 12, color: "white" }}>15:00</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={{ fontSize: 12, color: "white" }}>51.00</Text>
          </View>
          <View>
            <Button
              disabled
              style={{ borderColor: "white", padding: 5, marginLeft: "30%" }}
              small
              bordered
              onPress={() => {
                setOpen(true);
              }}
            >
              <Text style={{ fontSize: 12, color: "white" }}>חויב</Text>
            </Button>
          </View>
        </ListItem>
      </List>
    </>
  );
};

export default PaymentHistory;
