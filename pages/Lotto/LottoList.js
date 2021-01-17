import React from "react";
import { useState } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCoffee,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
//////////////////////////////////////////////////////////////

const LottoList = (props) => {
  const { navigation } = props;

  return (
    <>
      <NavBar navigation={navigation} screenName={"LottoList"} />
      
      <Container>
        <ScrollView>
        <View
        style={{ width: "100%", height: "1%", backgroundColor: "#FF0000" }}
      ></View>  
      <View
        style={{ backgroundColor: "#F2F2F2", width: "100%", height: 100 }}
      ></View>
        

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
                  <Text style={{ fontSize: 24, color: "white" }}>
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
                        fontWeight: "bold",
                        color: "red",
                        fontSize: 10,
                        padding: 15,
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
                  <Text style={{ fontSize: 24, color: "white" }}>
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
                    // onPress={() => navigation.navigate("Home")}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "red",
                        fontSize: 10,
                        padding: 15,
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
                  <Text style={{ fontSize: 24, color: "white" }}>
                    לוטו שיטתי
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
                    // onPress={() => navigation.navigate("Home")}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "red",
                        fontSize: 10,
                        padding: 15,
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
                  <Text style={{ fontSize: 24, color: "white" }}>
                    לוטו שיטתי חזק
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
                    // onPress={() => navigation.navigate("Home")}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "red",
                        fontSize: 10,
                        padding: 15,
                      }}
                    >
                      לוטו שיטתי חזק{" "}
                    </Text>
                  </Button>
                </View>
              </Right>
            </ListItem>
          </List>
          <View>
            <Text>הסבר על הגרלת האוטו</Text>
            <Button><Text>+</Text></Button>
            <Text>עוד..</Text>
</View>
          <View
            style={{  padding: 1,backgroundColor:"#F2F2F2"}}
          >
            <Text style={{fontSize: 10}}>
            לאחר התשלום אנו בלוטומטיק מקבלים את הטופס שמילאתם ושולחים אותו עבורכם בנקודת מכירה מורשית של מפעל הפיס, את הטופס שמילאנו עבורגם בנקודה אנו סורקים ושולחים לכם לתיבת הדואר האלקטרוני ומעלים את הטופס הסרוק לאזור האישי שלכם באפליקציה. הטופס מהקורי יישמר אצלנו במשרדי החברה ובמידה וזכיתם בסכום העולה על 11,000 ש"ח יימסר לכם הטופס באופן אישי.
            </Text>
          </View>
          <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width:"100%",
        padding: 30,
      }}
    >
      <View style={{ width: '25%', height: 1, backgroundColor: "#EB2874" }}></View>
      <View style={{ width: '25%', height: 1, backgroundColor: "#009943" }}></View>
      <View style={{ width: '25%', height: 1, backgroundColor: "#E62321" }}></View>
      <View style={{ width: '25%', height: 1, backgroundColor: "#FF6B00" }}></View>
    </View>
      
          


        </ScrollView>

      </Container>
      
    </>
  );
};

export default LottoList;
