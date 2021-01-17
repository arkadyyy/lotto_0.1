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
import drawerstyles from "../../DrawerContent/DrawerContentStyles";
const MyWins = () => {
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
            flex: 1,
          }}
        >
          מספר זכיה
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            backgroundColor: "#263742",
            padding: 7,
            marginLeft: 2,
            marginRight: 2,
            flex: 1,
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
            flex: 1,
          }}
        >
          סה"כ בש"ח
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            backgroundColor: "#263742",
            padding: 7,
            marginLeft: 2,
            marginRight: 2,
            flex: 1,
          }}
        >
          משחק
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            backgroundColor: "#263742",
            padding: 7,
            marginLeft: 2,
            marginRight: 2,
            flex: 1,
          }}
        >
          טופס
        </Text>
      </View>

      <List
        style={{
          marginLeft: 20,
          marginRight: 20,
          backgroundColor: "#00AEEF",

          width: "98%",
          marginTop: 10,
          flexWrap: "wrap",
        }}
      >
        <ListItem style={{ backgroundColor: "#00AEEF" }}>
          <View style={{ marginRight: 20 }}>
            <Text style={{ fontSize: 12, color: "white" }}>01234</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={{ fontSize: 12, color: "white" }}>01.02.20</Text>
            <Text style={{ fontSize: 12, color: "white" }}>15:00</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={{ fontSize: 12, color: "white" }}>51.00</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={{ fontSize: 12, color: "white" }}>לוטו</Text>
          </View>
          <View>
            <Button
              style={{ borderColor: "white", paddingLeft: 3, paddingRight: 3 }}
              small
              bordered
            >
              <Text style={{ fontSize: 12, color: "white" }}>צפה בטופס</Text>
            </Button>
          </View>
        </ListItem>
        <ListItem style={{ backgroundColor: "#00AEEF" }}>
          <View style={{ marginRight: 20 }}>
            <Text style={{ fontSize: 12, color: "white" }}>01234</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={{ fontSize: 12, color: "white" }}>01.02.20</Text>
            <Text style={{ fontSize: 12, color: "white" }}>15:00</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={{ fontSize: 12, color: "white" }}>51.00</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={{ fontSize: 12, color: "white" }}>לוטו</Text>
          </View>
          <View>
            <Button
              style={{ borderColor: "white", paddingLeft: 3, paddingRight: 3 }}
              small
              bordered
            >
              <Text style={{ fontSize: 12, color: "white" }}>צפה בטופס</Text>
            </Button>
          </View>
        </ListItem>
        <ListItem style={{ backgroundColor: "#00AEEF" }}>
          <View style={{ marginRight: 20 }}>
            <Text style={{ fontSize: 12, color: "white" }}>01234</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={{ fontSize: 12, color: "white" }}>01.02.20</Text>
            <Text style={{ fontSize: 12, color: "white" }}>15:00</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={{ fontSize: 12, color: "white" }}>51.00</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text style={{ fontSize: 12, color: "white" }}>לוטו</Text>
          </View>
          <View>
            <Button
              style={{ borderColor: "white", paddingLeft: 3, paddingRight: 3 }}
              small
              bordered
            >
              <Text style={{ fontSize: 12, color: "white" }}>צפה בטופס</Text>
            </Button>
          </View>
        </ListItem>
      </List>
    </>
  );
};

export default MyWins;
