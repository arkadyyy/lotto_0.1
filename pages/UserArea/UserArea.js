import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
import userAreaStyles from "../UserArea/UserAreaStyles";
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
import Hr from "react-native-hr-component";
import NavBar from "../../components/NavBar";
import ColorLine from "../../components/ColorLine";
import ViewForm from "./ViewForm";

const UserArea = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavBar navigation={navigation} />
      <ScrollView style={{ flex: 1 }}>
        <View>
          <View
            style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
          ></View>
          <View
            style={{ backgroundColor: "white", width: "100%", height: 100 }}
          ></View>
          <View
            style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
          ></View>
          <Container style={{ alignItems: "center" }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Card transparent style={{ flex: 1 }}>
                <CardItem style={{ backgroundColor: "#405A68" }}>
                  <Text style={{ color: "white" }}>טפסים</Text>
                </CardItem>
                <View
                  style={{
                    backgroundColor: "#BFBFBF",
                    padding: 15,
                    height: 90,
                  }}
                >
                  <Text style={{ fontSize: 12 }}>טפסים פעילים</Text>

                  <Text style={{ fontSize: 12 }}>היסטוריית שליחות</Text>

                  <Text style={{ fontSize: 12 }}>הזכיות שלי</Text>
                </View>
              </Card>
              <Card transparent style={{ flex: 1 }}>
                <CardItem style={{ backgroundColor: "#405A68" }}>
                  <Text style={{ color: "white" }}>תשלומים</Text>
                </CardItem>
                <View
                  style={{
                    backgroundColor: "#BFBFBF",
                    padding: 15,
                    height: 90,
                  }}
                >
                  <Text style={{ fontSize: 12 }}>משיכות</Text>

                  <Text style={{ fontSize: 12 }}>היסטורית תשלומים</Text>

                  <Text style={{ fontSize: 12 }}>הזכיות שלי</Text>
                </View>
              </Card>
              <Card transparent style={{ flex: 1 }}>
                <CardItem style={{ backgroundColor: "#405A68" }}>
                  <Text style={{ color: "white" }}>החזרים</Text>
                </CardItem>
                <View
                  style={{
                    backgroundColor: "#BFBFBF",
                    padding: 15,
                    height: 90,
                  }}
                >
                  <Text style={{ fontSize: 12 }}>היסטורית החזרים</Text>
                </View>
              </Card>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 20,
                marginTop: 20,
              }}
            >
              <Text style={{ fontSize: 20, color: "black" }}>שלום , לקוח</Text>
              <Button
                style={{
                  paddingLeft: 23,
                  paddingRight: 23,
                  backgroundColor: "#263742",
                }}
                rounded
                small
              >
                <Text style={{ color: "white", fontSize: 12 }}>התנתק</Text>
              </Button>
            </View>
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
            <>
              <List
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  backgroundColor: "#00AEEF",
                  height: 800,
                  width: "98%",
                  marginTop: 10,
                }}
              >
                <ListItem>
                  <View style={{ marginRight: 45 }}>
                    <Text style={{ fontSize: 12, color: "white" }}>
                      דאבל לוטו
                    </Text>
                    <Text style={{ fontSize: 12, color: "white" }}>01234</Text>
                  </View>
                  <View style={{ marginRight: 40 }}>
                    <Text style={{ fontSize: 12, color: "white" }}>
                      01.02.20
                    </Text>
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
                      <Text style={{ fontSize: 12, color: "white" }}>
                        שכפל או צפה
                      </Text>
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
                    <View>
                      <Text>הצירוף שלי</Text>
                      <ViewForm />
                      <ViewForm />
                      <ViewForm />
                      <ViewForm />
                      <ViewForm />
                      <ViewForm />
                      <ViewForm />
                    </View>
                  </View>
                )}
                <ListItem>
                  <View style={{ marginRight: 45 }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "white",
                      }}
                    >
                      דאבל לוטו
                    </Text>
                    <Text style={{ fontSize: 12, color: "white" }}>01234</Text>
                  </View>
                  <View style={{ marginRight: 40 }}>
                    <Text style={{ fontSize: 12, color: "white" }}>
                      01.02.20
                    </Text>
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
                    >
                      <Text style={{ fontSize: 12, color: "white" }}>
                        שכפל או צפה
                      </Text>
                    </Button>
                  </View>
                </ListItem>
              </List>
            </>
            <ColorLine />
          </Container>
        </View>
      </ScrollView>
    </>
  );
};

export default UserArea;
