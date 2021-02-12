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
import { LogOut } from "../../redux/actions/actions";
import axios from "axios";
import { set } from "react-native-reanimated";
const UserArea = ({ navigation }) => {
  const [screen, setScreen] = useState("activeForms");
  const store = useSelector((state) => state);
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();

  const [pullings, setpullings] = useState([]);
  const [refunds, setrefunds] = useState([]);
  const [paymentHistory, setpaymentHistory] = useState([]);
  const [activeForms, setactiveForms] = useState([]);
  const [formsHistory, setformsHistory] = useState([]);
  const [wins, setwins] = useState([]);

  useEffect(() => {
    axios
      .get("http://52.90.122.190:5000/my_space/pullings", {
        headers: {
          Authorization: store.jwt,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setpullings(res.data.rows);
      });
    axios
      .get("http://52.90.122.190:5000/my_space/refunds", {
        headers: {
          Authorization: store.jwt,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setrefunds(res.data.rows);
      });
    axios
      .get("http://52.90.122.190:5000/my_space/payment_history", {
        headers: {
          Authorization: store.jwt,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setpaymentHistory(res.data.rows);
      });
    axios
      .get("http://52.90.122.190:5000/my_space/active_forms", {
        headers: {
          Authorization: store.jwt,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setactiveForms(res.data.rows);
      });
    axios
      .get("http://52.90.122.190:5000/my_space/forms_history", {
        headers: {
          Authorization: store.jwt,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setformsHistory(res.data.rows);
      });
    axios
      .get("http://52.90.122.190:5000/my_space/wins", {
        headers: {
          Authorization: store.jwt,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setwins(res.data.rows);
      });
  }, []);

  return (
    <>
      <NavBar navigation={navigation} />
      <ScrollView style={{ flex: 1 }}>
        <View>
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
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  fontFamily: "fb-Spacer-bold",
                }}
              >
                שלום ,{name}
              </Text>
              <Button
                onPress={async () => {
                  await navigation.navigate("Home");
                  dispatch(LogOut());
                }}
                style={{
                  paddingLeft: 23,
                  paddingRight: 23,
                  backgroundColor: "#263742",
                }}
                rounded
                small
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                    fontFamily: "fb-Spacer-bold",
                  }}
                >
                  התנתק
                </Text>
              </Button>
            </View>
            {/* {end of hello user} */}
          {/* <BlankSquare color={"#00AEEF"} /> */}
          <View style={{ alignItems: "center" }}>
            {/* {start of userArea navigation} */}

            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Card transparent style={{ flex: 1 }}>
                <CardItem style={{ backgroundColor: "#405A68" }}>
                  <Text
                    style={{ color: "white", fontFamily: "fb-Spacer-bold" }}
                  >
                    טפסים
                  </Text>
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
                    <Text
                      style={{ fontSize: 10, fontFamily: "fb-Spacer-bold" }}
                    >
                      טפסים פעילים
                    </Text>
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
                    <Text
                      style={{ fontSize: 10, fontFamily: "fb-Spacer-bold" }}
                    >
                      היסטורית שליחות
                    </Text>
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
                    <Text
                      style={{ fontSize: 10, fontFamily: "fb-Spacer-bold" }}
                    >
                      הזכיות שלי
                    </Text>
                  </TouchableOpacity>
                </View>
              </Card>
              <Card transparent style={{ flex: 1 }}>
                <CardItem style={{ backgroundColor: "#405A68" }}>
                  <Text
                    style={{ color: "white", fontFamily: "fb-Spacer-bold" }}
                  >
                    תשלומים
                  </Text>
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
                    <Text
                      style={{ fontSize: 10, fontFamily: "fb-Spacer-bold" }}
                    >
                      משיכות
                    </Text>
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
                    <Text
                      style={{ fontSize: 10, fontFamily: "fb-Spacer-bold" }}
                    >
                      היסטורית תשלומים
                    </Text>
                  </TouchableOpacity>
                </View>
              </Card>
              <Card transparent style={{ flex: 1 }}>
                <CardItem style={{ backgroundColor: "#405A68" }}>
                  <Text
                    style={{ color: "white", fontFamily: "fb-Spacer-bold" }}
                  >
                    החזרים
                  </Text>
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
                    <Text
                      style={{ fontSize: 11, fontFamily: "fb-Spacer-bold" }}
                    >
                      היסטורית החזרים
                    </Text>
                  </TouchableOpacity>
                </View>
              </Card>
            </View>

            {/* {end of userArea navigation} */}

           

            {screen === "activeForms" && (
              <ActiveForms navigation={navigation} activeforms={activeForms} />
            )}
            {screen === "sendHistory" && (
              <SendHistory
                navigation={navigation}
                formsHistory={formsHistory}
              />
            )}
            {screen === "myWins" && (
              <MyWins navigation={navigation} wins={wins} />
            )}
            {screen === "Withdrawal" && (
              <Withdrawal navigation={navigation} pullings={pullings} />
            )}
            {screen === "PaymentHistory" && (
              <PaymentHistory
                navigation={navigation}
                paymentHistory={paymentHistory}
              />
            )}

            {screen === "HistoryRefund" && (
              <HistoryRefund navigation={navigation} refunds={refunds} />
            )}

            <ColorLine />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default UserArea;
