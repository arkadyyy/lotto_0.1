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
  Content,
} from "native-base";
import Hr from "react-native-hr-component";
import NavBar from "../../components/NavBar";
import ColorLine from "../../components/ColorLine";
import ViewForm from "./ViewForm";
import BlankSquare from "../../components/BlankSquare";
import SendHistory from "./SendHistory/SendHistory";
import ActiveForms from "./ActiveForms/ActiveForms";
import MyWins from "./MyWins/MyWins";
import WithDrawl from "./WithDrawal/WithDrawal";
const UserArea = ({ navigation }) => {
  const [screen, setScreen] = useState("activeForms");
  return (
    <>
      <NavBar navigation={navigation} />
      <ScrollView style={{ flex: 1 }}>
        <View>
          <BlankSquare />
          <View style={{ alignItems: "center" }}>
            {/* {start of userArea navigation} */}

            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Card transparent style={{ flex: 1 }}>
                <CardItem style={{ backgroundColor: "#405A68" }}>
                  <Text style={{ color: "white" }}>טפסים</Text>
                </CardItem>
                <View
                  style={{
                    backgroundColor: "#BFBFBF",
                    padding: 15,
                    height: 120,
                  }}
                >
                  <Button
                    onPress={() => {
                      setScreen("activeForms");
                    }}
                    transparent
                    small
                  >
                    <Text style={{ fontSize: 10 }}>טפסים פעילים</Text>
                  </Button>

                  <Button
                    onPress={() => {
                      setScreen("sendHistory");
                    }}
                    transparent
                    small
                  >
                    <Text style={{ fontSize: 10 }}>היסטורית שליחות</Text>
                  </Button>

                  <Button
                    onPress={() => {
                      setScreen("myWins");
                    }}
                    transparent
                    small
                  >
                    <Text style={{ fontSize: 10 }}>הזכיות שלי</Text>
                  </Button>
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
                    height: 120,
                  }}
                >
                  <Button
                    onPress={() => {
                      setScreen("WithDrawl");
                    }}
                    transparent
                    small
                  >
                    <Text style={{ fontSize: 10 }}>משיכות</Text>
                  </Button>

                  <Button
                    onPress={() => {
                      setScreen("paymentHistory");
                    }}
                    transparent
                    small
                  >
                    <Text style={{ fontSize: 10 }}>היסטורית תשלומים</Text>
                  </Button>

                  <Button
                    onPress={() => {
                      setScreen("myWins");
                    }}
                    transparent
                    small
                  >
                    <Text style={{ fontSize: 10 }}>הזכיות שלי</Text>
                  </Button>
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
                    height: 120,
                  }}
                >
                  <Button
                    onPress={() => {
                      setScreen("refundHistory");
                    }}
                    transparent
                    small
                  >
                    <Text style={{ fontSize: 10 }}>היסטורית החזרים</Text>
                  </Button>
                </View>
              </Card>
            </View>

            {/* {end of userArea navigation} */}

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
            {/* {end of hello user} */}

            {screen === "activeForms" && <ActiveForms />}
            {screen === "sendHistory" && <SendHistory />}
            {screen === "myWins" && <MyWins/>}
             {screen === "WithDrawl" && <WithDrawl />} 
            {/* {screen === "paymentHistory" && <SendHistory />} */}
            {/* {screen === "myWins" && <SendHistory />} */}
            {/* {screen === "refundHistory" && <SendHistory />} */}  

            <ColorLine />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default UserArea;
