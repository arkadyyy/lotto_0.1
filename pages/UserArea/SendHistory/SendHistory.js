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
const SendHistory = () => {
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
          }}
        >
          שכפול הטופס
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
            <Text style={{ fontSize: 12, color: "white" }}>דאבל לוטו</Text>
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
              style={{ borderColor: "white", padding: 5 }}
              small
              bordered
              onPress={() => {
                setOpen(true);
              }}
            >
              <Text style={{ fontSize: 12, color: "white" }}>שכפל או צפה</Text>
            </Button>
          </View>
        </ListItem>

        {open && (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <View>
                <Text>סהכ זכייה</Text>
              </View>
              <Button
                style={{ borderColor: "white", padding: 5 }}
                small
                bordered
              >
                <Text>צפה בטופס</Text>
              </Button>
              <Button
                style={{ borderColor: "white", padding: 5 }}
                small
                bordered
              >
                <Text>תוצאות הגרלה</Text>
              </Button>
              <Button
                style={{ padding: 5 }}
                small
                onPress={() => {
                  setOpen(false);
                }}
              >
                <Text>סגור</Text>
              </Button>
            </View>
            <View style={{ margin: 10 }}>
              <Text
                style={{
                  color: "#263742",
                  fontWeight: "bold",
                  padding: 10,
                }}
              >
                הצירוף שלי
              </Text>
              <View>
                <ViewForm />
                <ViewForm />
                <ViewForm />
                <ViewForm />
                <ViewForm />
                <ViewForm />
                <ViewForm />
                <ViewForm />
                <ViewForm />
                <ViewForm />
                <ViewForm />
              </View>
            </View>
          </View>
        )}

        <ListItem>
          <View style={{ marginRight: 45 }}>
            <Text style={{ fontSize: 12, color: "white" }}>דאבל לוטו</Text>
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
              style={{ borderColor: "white", padding: 5 }}
              small
              bordered
              onPress={() => {
                setOpen(true);
              }}
            >
              <Text style={{ fontSize: 12, color: "white" }}>שכפל או צפה</Text>
            </Button>
          </View>
        </ListItem>

        {open && (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <View>
                <Text>סהכ זכייה</Text>
              </View>
              <Button
                style={{ borderColor: "white", padding: 5 }}
                small
                bordered
              >
                <Text>צפה בטופס</Text>
              </Button>
              <Button
                style={{ borderColor: "white", padding: 5 }}
                small
                bordered
              >
                <Text>תוצאות הגרלה</Text>
              </Button>
              <Button
                style={{ padding: 5 }}
                small
                onPress={() => {
                  setOpen(false);
                }}
              >
                <Text>סגור</Text>
              </Button>
            </View>
            <View style={{ margin: 10 }}>
              <Text
                style={{
                  color: "#263742",
                  fontWeight: "bold",
                  padding: 10,
                }}
              >
                הצירוף שלי
              </Text>
              <View>
                <ViewForm />
                <ViewForm />
                <ViewForm />
                <ViewForm />
                <ViewForm />
                <ViewForm />
                <ViewForm />
                <ViewForm />
                <ViewForm />
                <ViewForm />
                <ViewForm />
              </View>
            </View>
          </View>
        )}
      </List>
    </>
  );
};

export default SendHistory;
