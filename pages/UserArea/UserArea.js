import React, { useState, useEffect } from "react";
import userAreaStyles from "./UserAreaStyles";
import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  View,
  TouchableOpacity,
} from "react-native";

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

import NavBar from "../../components/NavBar";
import ColorLine from "../../components/ColorLine";
import ViewForm from "./ViewForm";
import BlankSquare from "../../components/BlankSquare";
import SendHistory from "./SendHistory/SendHistory";
import ActiveForms from "./ActiveForms/ActiveForms";
import Withdrawal from "./Withdrawal/WithDrawal";
import MyWins from "./MyWins/MyWins";
import PaymentHistory from "./PaymentHistory/PaymentHistory";
import HistoryRefund from "./HistoryRefund/HistoryRefund";
import { useSelector, useDispatch } from "react-redux";
const UserArea = ({ navigation }) => {
  const [screen, setScreen] = useState("activeForms");
  const store = useSelector((state) => state);
  const username = store.user.attributes.name;

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <>
      <NavBar navigation={navigation} />
      <ScrollView style={{ flex: 1 }}>
        <View>
          <BlankSquare color={"#00AEEF"} />
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
                  <TouchableOpacity
                    style={[
                      userAreaStyles.toucheable,
                      screen === "activeForms" && {
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                      },
                    ]}
                    onPress={() => {
                      setScreen("activeForms");
                    }}
                  >
                    <Text style={{ fontSize: 10 }}>טפסים פעילים</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      userAreaStyles.toucheable,
                      screen === "sendHistory" && {
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                      },
                    ]}
                    onPress={() => {
                      setScreen("sendHistory");
                    }}
                  >
                    <Text style={{ fontSize: 10 }}>היסטורית שליחות</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      userAreaStyles.toucheable,
                      screen === "myWins" && {
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                      },
                    ]}
                    onPress={() => {
                      setScreen("myWins");
                    }}
                  >
                    <Text style={{ fontSize: 10 }}>הזכיות שלי</Text>
                  </TouchableOpacity>
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
                  <TouchableOpacity
                    style={[
                      userAreaStyles.toucheable,
                      screen === "Withdrawal" && {
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                      },
                    ]}
                    onPress={() => {
                      setScreen("Withdrawal");
                    }}
                  >
                    <Text style={{ fontSize: 10 }}>משיכות</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      userAreaStyles.toucheable,
                      screen === "PaymentHistory" && {
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                      },
                    ]}
                    onPress={() => {
                      setScreen("PaymentHistory");
                    }}
                  >
                    <Text style={{ fontSize: 10 }}>היסטורית תשלומים</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      userAreaStyles.toucheable,
                      screen === "myWins2" && {
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                      },
                    ]}
                    onPress={() => {
                      setScreen("myWins2");
                    }}
                  >
                    <Text style={{ fontSize: 10 }}>הזכיות שלי</Text>
                  </TouchableOpacity>
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
                  <TouchableOpacity
                    style={[
                      userAreaStyles.toucheable,
                      screen === "HistoryRefund" && {
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                      },
                    ]}
                    onPress={() => {
                      setScreen("HistoryRefund");
                    }}
                  >
                    <Text style={{ fontSize: 11 }}>היסטורית החזרים</Text>
                  </TouchableOpacity>
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
              <Text style={{ fontSize: 20, color: "black" }}>
                שלום , {username}
              </Text>
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
            {screen === "myWins" && <MyWins />}
            {screen === "Withdrawal" && <Withdrawal />}
            {screen === "PaymentHistory" && <PaymentHistory />}
            {screen === "myWins2" && <SendHistory />}
            {screen === "HistoryRefund" && <HistoryRefund />}

            <ColorLine />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default UserArea;
