import React from "react";

import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
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
import NavBar from "../../components/NavBar";

import ColorLine from "../../components/ColorLine";
import BlankSquare from "../../components/BlankSquare.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCoffee,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import Sheva77Liststyles from "./Sheva77ListStyles";
//////////////////////////////////////////////////////////////

const Seva77List = (props) => {
  const { navigation } = props;

  return (
    <>
      <NavBar navigation={navigation} screenName={"Seva77List"} />

      <ScrollView>
        <View style={homestyles.container}>
          <View>
            <BlankSquare color='#CC1D64' gameName='הגרלת 777' />
          </View>

          <List
            style={{
              width: "100%",
            }}
          >
            <ListItem
              style={{
                backgroundColor: "#FF006A",
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
                    777
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
                    onPress={() => navigation.navigate("Sheva77Page")}
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
                backgroundColor: "#E2005B",
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
                    777 שיטתי 8
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
                    onPress={() => navigation.navigate("Sheva778Page")}
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
                backgroundColor: "#E2005B",
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
                    777 שיטתי 9
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
                    onPress={() => navigation.navigate("Sheva779Page")}
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
            <Text style={{ flex: 3, fontSize: 25, fontFamily: "fb-Spacer" }}>
              {" "}
              777 הסבר על הגרלות{" "}
            </Text>
            <TouchableOpacity style={Sheva77Liststyles.roundButton1}>
              <Text style={{ fontSize: 20, color: "white" }}>+</Text>
            </TouchableOpacity>

            <Text style={{ flex: 1, fontFamily: "fb-Spacer" }}> עוד..</Text>
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
      {/* </Container> */}
    </>
  );
};

export default Seva77List;
