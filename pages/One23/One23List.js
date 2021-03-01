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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCoffee,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import LottoListstyles from "../Lotto/LottoListStyles";
//////////////////////////////////////////////////////////////

const One23List = (props) => {
  const { navigation } = props;

  return (
    <>
      <NavBar navigation={navigation} screenName={"One23List"} />

      <Container>
        <ScrollView>
          <View style={homestyles.container}>
            <View>
              <BlankSquare color={"#FF5F00"} gameName='הגרלת 123' />
            </View>

            <List
              style={{
                width: "100%",
                marginTop: "10%",
              }}
            >
              <ListItem
                style={{
                  backgroundColor: "#FF5F00",
                  width: "100%",
                  marginLeft: null,
                  marginVertical: "2%",
                }}
              >
                <Left>
                  <View>
                    <Text
                      style={{
                        fontSize: 33,
                        color: "white",
                        marginHorizontal: 8,
                        fontFamily: "fb-Spacer-bold",
                      }}
                    >
                      123
                    </Text>
                  </View>
                </Left>

                <Right>
                  <View>
                    <Button
                      small
                      style={{
                        borderRadius: 13,
                        backgroundColor: "white",
                      }}
                      onPress={() => navigation.navigate("One23Page")}
                    >
                      <Text
                        style={{
                          color: "red",
                          fontSize: 10,
                          padding: 15,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        שחק עכשיו
                      </Text>
                    </Button>
                  </View>
                </Right>
              </ListItem>
            </List>
            <View style={{ flexDirection: "row", margin: 12 }}>
          <View style={{ height: "50%", backgroundColor: "white" }}></View>
          <Text style={{ flex: 4, fontSize:25, fontFamily: "fb-Spacer",alignSelf:"flex-start" }}>
              הסבר על הגרלות 123
          </Text>
            <View style={{flexDirection:"row",flex:1,left:20}}>
            <TouchableOpacity style={{
              width: 20,
              height: 20,
              justifyContent: "center",
              alignItems: "center",
              alignSelf:"baseline",
              borderRadius: 100,
              backgroundColor: "#1F3842",
            }}>
            <Text style={{ fontSize: 20, color: "white" }}>+</Text>
          </TouchableOpacity>

          <Text style={{ flex: 1, fontFamily: "fb-Spacer",alignSelf:"center" }}> עוד...</Text>
            </View>
            </View>
            <View
              style={{
                padding: 1,
                backgroundColor: "#F2F2F2",
                marginHorizontal: 8,
                fontFamily: "fb-Spacer",
              }}
            >
              <Text style={{ fontSize: 10, fontFamily: "fb-Spacer" }}>
                לאחר התשלום אנו בלוטומטיק מקבלים את הטופס שמילאתם ושולחים אותו
                עבורכם בנקודת מכירה מורשית של מפעל הפיס, את הטופס שמילאנו עבורגם
                בנקודה אנו סורקים ושולחים לכם לתיבת הדואר האלקטרוני ומעלים את
                הטופס הסרוק לאזור האישי שלכם באפליקציה. הטופס מהקורי יישמר אצלנו
                במשרדי החברה ובמידה וזכיתם בסכום העולה על 11,000 ש"ח יימסר לכם
                הטופס באופן אישי.
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: 30,
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

export default One23List;
