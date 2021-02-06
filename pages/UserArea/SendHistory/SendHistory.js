import React, { useEffect, useState } from "react";
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

const SeeOrDupilcate = ({ index, open, form }) => {
  if (index === open.index) {
    return (
      <View>
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
            {form.tables.map((table, index) => (
              <ViewForm
                numbers={table.numbers}
                strongNum={table.strong_number}
                tableNum={table.table_number}
              />
            ))}
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
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        />
      </View>
    );
  } else {
    return null;
  }
};

const SendHistory = ({ formsHistory }) => {
  const [open, setOpen] = useState({ isOpen: false, index: -1 });

  useEffect(() => {
    console.log("formsHistory : ", formsHistory);
  }, []);
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
            flex: 2,
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
            flex: 2,
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
            flex: 1,
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
        {formsHistory.map((form, index) => {
          let isOpen = false;
          return (
            <>
              <ListItem key={index}>
                <View style={{ marginRight: 45, flex: 2.2 }}>
                  <Text style={{ fontSize: 12, color: "white" }}>
                    {form["משחק ומס׳ הגרלה"]}
                  </Text>
                </View>
                <View style={{ marginRight: 40, flex: 3 }}>
                  <Text style={{ fontSize: 12, color: "white" }}>
                    {form["תאריך ושעה"]}
                  </Text>
                </View>
                <View style={{ marginRight: 40, flex: 1 }}>
                  <Text style={{ fontSize: 12, color: "white" }}>
                    {form["עלות הטופס"]}
                  </Text>
                </View>

                <Button
                  // disabled={index === open.index ? false : true}
                  style={{ borderColor: "white", padding: 5, flex: 1.2 }}
                  small
                  bordered
                  onPress={() => {
                    setOpen({ isOpen: !open.isOpen, index: index });
                  }}
                >
                  <Text style={{ fontSize: 10, color: "white" }}>
                    {open.isOpen && index === open.index
                      ? "סגור"
                      : "שכפל או צפה"}
                  </Text>
                </Button>
              </ListItem>
              {open.isOpen && (
                <SeeOrDupilcate form={form} open={open} index={index} />
              )}
            </>
          );
        })}
      </List>
    </>
  );
};

export default SendHistory;
