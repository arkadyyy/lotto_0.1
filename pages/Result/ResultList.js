import React from "react";
import { useState } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import homestyles from "../Home/HomeStyles";
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
import styles from "../../styles";
import ColorLine from "../../components/ColorLine";
import BlankSquare from "../../components/BlankSquare.js";
import EStyleSheet from "react-native-extended-stylesheet";

import LottoListstyles from "../../pages/Lotto/LottoListStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
//////////////////////////////////////////////////////////////

const ResultList = (props) => {
  const { navigation } = props;

  return (
    <>
      <NavBar navigation={navigation} screenName={"ResultList"} />

      <Container>
        <ScrollView>
          <View>
            <View>
              <BlankSquare color={"#00AEEF"} />
            </View>

            <List
              style={{
                width: "100%",
              }}
            >
              <ListItem
                style={{
                  backgroundColor: "#00AEEF",
                  width: "100%",
                  marginLeft: null,
                  marginVertical: EStyleSheet.value("$rem") * 5,
                }}
              >
                <Left>
                  <View>
                    <Text
                      style={{
                        fontSize: EStyleSheet.value("$rem") * 30,
                        color: "white",
                        fontWeight: "bold",
                        marginLeft: EStyleSheet.value("$rem") * 20,
                        fontFamily: "fb-Spacer-bold",
                      }}
                    >
                      לוטו רגיל
                    </Text>
                  </View>
                </Left>

                <Right>
                  <View style={{ flexDirection: "row" }}>
                    <Button
                      small
                      style={{
                        borderRadius: 13,
                        backgroundColor: "white",
                        width: EStyleSheet.value("$rem") * 105,
                        height: EStyleSheet.value("$rem") * 25,
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                      onPress={() => navigation.navigate("ResultLotto")}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "#00AEEF",
                          fontSize: EStyleSheet.value("$rem") * 17,
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "fb-Spacer-bold",
                          // textAlignVertical:"center",
                          // textAlign:"center"
                        }}
                      >
                        תוצאות
                        <FontAwesomeIcon
                          style={{
                            marginTop: EStyleSheet.value("$rem") * 5,
                            marginRight: EStyleSheet.value("$rem") * 2,
                          }}
                          icon={faAngleDoubleLeft}
                          color={"#00AEEF"}
                        />
                      </Text>
                    </Button>
                  </View>
                </Right>
              </ListItem>
              <ListItem
                style={{
                  backgroundColor: "#00AEEF",
                  width: "100%",
                  marginLeft: null,
                  marginVertical: EStyleSheet.value("$rem") * 5,
                }}
              >
                <Left>
                  <View>
                    <Text
                      style={{
                        fontSize: EStyleSheet.value("$rem") * 30,
                        color: "white",
                        fontWeight: "bold",
                        marginLeft: EStyleSheet.value("$rem") * 20,
                        fontFamily: "fb-Spacer-bold",
                      }}
                    >
                      צ'אנס
                    </Text>
                  </View>
                </Left>

                <Right>
                  <View style={{ flexDirection: "row" }}>
                    <Button
                      small
                      style={{
                        borderRadius: 13,
                        backgroundColor: "white",
                        width: EStyleSheet.value("$rem") * 105,
                        height: EStyleSheet.value("$rem") * 25,
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                      onPress={() => navigation.navigate("ResultChance")}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "#00AEEF",
                          fontSize: EStyleSheet.value("$rem") * 17,
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "fb-Spacer-bold",
                          // textAlignVertical:"center",
                          // textAlign:"center"
                        }}
                      >
                        תוצאות
                        <FontAwesomeIcon
                          style={{
                            marginTop: EStyleSheet.value("$rem") * 5,
                            marginRight: EStyleSheet.value("$rem") * 2,
                          }}
                          icon={faAngleDoubleLeft}
                          color={"#00AEEF"}
                        />
                      </Text>
                    </Button>
                  </View>
                </Right>
              </ListItem>
              <ListItem
                style={{
                  backgroundColor: "#00AEEF",
                  width: "100%",
                  marginLeft: null,
                  marginVertical: EStyleSheet.value("$rem") * 5,
                }}
              >
                <Left>
                  <View>
                    <Text
                      style={{
                        fontSize: EStyleSheet.value("$rem") * 30,
                        color: "white",
                        fontWeight: "bold",
                        marginLeft: EStyleSheet.value("$rem") * 20,
                        fontFamily: "fb-Spacer-bold",
                      }}
                    >
                      777
                    </Text>
                  </View>
                </Left>

                <Right>
                  <View style={{ flexDirection: "row" }}>
                    <Button
                      small
                      style={{
                        borderRadius: 13,
                        backgroundColor: "white",
                        width: EStyleSheet.value("$rem") * 105,
                        height: EStyleSheet.value("$rem") * 25,
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                      onPress={() => navigation.navigate("Result777")}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "#00AEEF",
                          fontSize: EStyleSheet.value("$rem") * 17,
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "fb-Spacer-bold",
                          // textAlignVertical:"center",
                          // textAlign:"center"
                        }}
                      >
                        תוצאות
                        <FontAwesomeIcon
                          style={{
                            marginTop: EStyleSheet.value("$rem") * 5,
                            marginRight: EStyleSheet.value("$rem") * 2,
                          }}
                          icon={faAngleDoubleLeft}
                          color={"#00AEEF"}
                        />
                      </Text>
                    </Button>
                  </View>
                </Right>
              </ListItem>
              <ListItem
                style={{
                  backgroundColor: "#00AEEF",
                  width: "100%",
                  marginLeft: null,
                  marginVertical: EStyleSheet.value("$rem") * 5,
                }}
              >
                <Left>
                  <View>
                    <Text
                      style={{
                        fontSize: EStyleSheet.value("$rem") * 30,
                        color: "white",
                        fontWeight: "bold",
                        marginLeft: EStyleSheet.value("$rem") * 20,
                        fontFamily: "fb-Spacer-bold",
                      }}
                    >
                      123
                    </Text>
                  </View>
                </Left>

                <Right>
                  <View style={{ flexDirection: "row" }}>
                    <Button
                      small
                      style={{
                        borderRadius: 13,
                        backgroundColor: "white",
                        width: EStyleSheet.value("$rem") * 105,
                        height: EStyleSheet.value("$rem") * 25,
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                      onPress={() => navigation.navigate("Result123")}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "#00AEEF",
                          fontSize: EStyleSheet.value("$rem") * 17,
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "fb-Spacer-bold",
                          // textAlignVertical:"center",
                          // textAlign:"center"
                        }}
                      >
                        תוצאות
                        <FontAwesomeIcon
                          style={{
                            marginTop: EStyleSheet.value("$rem") * 5,
                            marginRight: EStyleSheet.value("$rem") * 2,
                          }}
                          icon={faAngleDoubleLeft}
                          color={"#00AEEF"}
                        />
                      </Text>
                    </Button>
                  </View>
                </Right>
              </ListItem>
            </List>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                paddingTop: 30,
              }}
            >
              <View
                style={{ width: "25%", height: 1, backgroundColor: "#EB2874" }}
              ></View>
              <View
                style={{ width: "25%", height: 1, backgroundColor: "#009943" }}
              ></View>
              <View
                style={{ width: "25%", height: 1, backgroundColor: "#E62321" }}
              ></View>
              <View
                style={{ width: "25%", height: 1, backgroundColor: "#FF6B00" }}
              ></View>
            </View>
          </View>
        </ScrollView>
      </Container>
    </>
  );
};

export default ResultList;
