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
import LottoListstyles from "./LottoListStyles";
//////////////////////////////////////////////////////////////

const LottoList = (props) => {
  const { navigation } = props;

  return (
    <>
      <NavBar navigation={navigation} screenName={"LottoList"} />

      <Container>
        <ScrollView>
          <View style={homestyles.container}>
            <View>
              <BlankSquare gameName='הגרלת לוטו' color={"#E62321"} />
            </View>

            <List
              style={{
                width: "100%",
                marginTop: "10%",
              }}
            >
              <ListItem
                style={{
                  backgroundColor: "red",
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
                        marginHorizontal: 20,
                        fontFamily: "fb-Spacer-bold",
                      }}
                    >
                      לוטו רגיל
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
                      onPress={() => navigation.navigate("LottoPage")}
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
              <ListItem
                style={{
                  backgroundColor: "red",
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

                        marginHorizontal: 20,
                        fontFamily: "fb-Spacer-bold",
                      }}
                    >
                      דאבל לוטו
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
                      onPress={() => navigation.navigate("DoubleLottoPage")}
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
              <ListItem
                style={{
                  backgroundColor: "#E50000",
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
                        marginHorizontal: 20,
                        fontFamily: "fb-Spacer-bold",
                      }}
                    >
                      לוטו שיטתי
                    </Text>
                  </View>
                </Left>

                <Right>
                  <View>
                    <Button
                      onPress={() => navigation.navigate("LottoShitatiPage")}
                      small
                      style={{
                        borderRadius: 13,
                        backgroundColor: "white",
                      }}
                      // onPress={() => navigation.navigate("Home")}
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
              <ListItem
                style={{
                  backgroundColor: "#D10000",
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
                        marginHorizontal: 20,
                        fontFamily: "fb-Spacer-bold",
                      }}
                    >
                      לוטו שיטתי חזק
                    </Text>
                  </View>
                </Left>

                <Right>
                  <View>
                    <Button
                      onPress={() =>
                        navigation.navigate("LottoShitatiHazakPage")
                      }
                      small
                      style={{
                        borderRadius: 13,
                        backgroundColor: "white",
                      }}
                      // onPress={() => navigation.navigate("Home")}
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
            {/* <View style={{ flexDirection: "row", margin: 12 }}>
              <Text style={{ flex: 3, fontSize: 25, fontFamily: "fb-Spacer" }}>
                הסבר על הגרלת הלוטו
              </Text>
              <TouchableOpacity style={LottoListstyles.roundButton1}>
                <Text style={{ fontSize: 20, color: "white" }}>+</Text>
              </TouchableOpacity>

              <Text style={{ flex: 1, fontFamily: "fb-Spacer" }}>עוד</Text>
            </View> */}
            <View style={{ flexDirection: "row", margin: 12 }}>
              <View style={{ height: "50%", backgroundColor: "white" }}></View>
              <Text
                style={{
                  flex: 4,
                  fontSize: 16,
                  fontFamily: "fb-Spacer",
                  alignSelf: "flex-start",
                  paddingHorizontal: 8,
                }}
              >
                הסבר על הגרלות לוטו
              </Text>
              {/* <View style={{ flexDirection: "row", flex: 1 }}>
                <TouchableOpacity
                  style={{
                    width: 20,
                    height: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "baseline",
                    borderRadius: 100,
                    backgroundColor: "#1F3842",
                  }}
                >
                  <Text style={{ fontSize: 20, color: "white" }}>+</Text>
                </TouchableOpacity>

                <Text
                  style={{
                    flex: 1,
                    fontFamily: "fb-Spacer",
                    alignSelf: "center",
                  }}
                >
                  {" "}
                  עוד...
                </Text>
              </View> */}
            </View>
            <View
              style={{
                padding: 1,
                backgroundColor: "#F2F2F2",
                marginHorizontal: 8,
                fontFamily: "fb-Spacer",
              }}
            >
              <Text
                style={{ fontSize: 10, fontFamily: "fb-Spacer", padding: 10 }}
              >
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

export default LottoList;
