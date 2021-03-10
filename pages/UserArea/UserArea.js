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

import { Button, Card, CardItem } from "native-base";

import NavBar from "../../components/NavBar";
import ColorLine from "../../components/ColorLine";
import ViewForm from "./ViewForm";
import BlankSquare from "../../components/BlankSquare";
import SendHistory from "./SendHistory/SendHistory";
import ActiveForms from "./ActiveForms/ActiveForms";
import Withdrawal from "./WithDrawal/WithDrawal";
import MyWins from "./MyWins/MyWins";
import PaymentHistory from "./PaymentHistory/PaymentHistory";
import HistoryRefund from "./HistoryRefund/HistoryRefund";
import { useSelector, useDispatch } from "react-redux";
import { LogOut } from "../../redux/actions/actions";
import axios from "axios";
import { set } from "react-native-reanimated";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShekelSign } from "@fortawesome/free-solid-svg-icons";
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
  const [money, setMoney] = useState("1,000,000");

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
        // console.log("!!!!!!!!!!!!!!!",res);
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
      <ScrollView style={{ flex: 1, marginTop: -15 }}>
        <View style={{ marginTop: -10 }}>
          <View style={{ height: 100, marginTop: 15, marginBottom: 40 }}>
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
                שלום,{name}
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
                  marginHorizontal: 10,
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 15,
                backgroundColor: "white",
                margin: 2,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text> {money}</Text>
                <FontAwesomeIcon
                  icon={faShekelSign}
                  size={10}
                  style={{ alignSelf: "center" }}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={async () => {
                    console.log("משוך קרדיט");
                  }}
                  style={{
                    paddingLeft: 23,
                    paddingRight: 23,
                    borderColor: "#263742",
                    borderWidth: 1,
                    borderRadius: 12,
                    padding: 6,
                  }}
                >
                  <Text
                    style={{
                      color: "#263742",
                      fontSize: 12,
                      fontFamily: "fb-Spacer-bold",
                    }}
                  >
                    משוך קרדיט
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={async () => {
                    console.log("טען קרדיט");
                  }}
                  style={{
                    paddingLeft: 23,
                    paddingRight: 23,
                    borderColor: "#263742",
                    borderWidth: 1,
                    borderRadius: 12,
                    padding: 6,
                    marginHorizontal: 2,
                  }}
                >
                  <Text
                    style={{
                      color: "#263742",
                      fontSize: 12,
                      fontFamily: "fb-Spacer-bold",
                    }}
                  >
                    טען קרדיט
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
                    height: 100,
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
                    height: 100,
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
                    height: 100,
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
              <ActiveForms
                navigation={navigation}
                activeforms={activeForms}
              />
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
              <HistoryRefund
                navigation={navigation}
                refunds={refunds}
              />
            )}

            <ColorLine />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default UserArea;
