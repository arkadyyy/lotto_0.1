import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShekelSign } from "@fortawesome/free-solid-svg-icons";
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

const PaymentHistory = ({ paymentHistory }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(paymentHistory);
    console.log(paymentHistory[0]["תאריך ושעה"].split(" ")[0]);
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
            flex: 1.4,
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
            flex: 1.2,
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
            flex: 0.7,
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
        {paymentHistory.length === 0 ? (
          <View>
            <View
              style={{
                flexDirection: "column",
                height: 200,
                width: "100%",
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
                }}
              >
                לא התבצעו תשלומים
              </Text>
            </View>
          </View>
        ) : (
          paymentHistory.map((payment, index) => {
            return (
              <ListItem key={index}>
                <View style={{ marginRight: 45, flex: 2 }}>
                  <Text style={{ fontSize: 12, color: "white" }}>
                    {payment["מספר"]}
                  </Text>
                </View>
                <View style={{ marginRight: 40, flex: 3 }}>
                  <Text style={{ fontSize: 12, color: "white" }}>
                    {payment["תאריך ושעה"]}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 12, color: "white" }}>
                    {payment['סה"כ בשקלים']}{" "}
                    {/* <FontAwesomeIcon
                      style={{ marginVertical: 7, marginLeft: -4 }}
                      icon={faShekelSign}
                      color='white'
                    /> */}
                  </Text>
                  <Text style={{ fontSize: 12, color: "white" }}>
                    {payment["סטטוס חיוב"]}
                  </Text>
                </View>
                <View></View>
              </ListItem>
            );
          })
        )}
      </List>
    </>
  );
};

export default PaymentHistory;
