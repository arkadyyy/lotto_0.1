import React from "react";
import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
import signInstyles from "../SignIn/SignInStyles";
import {
  Container,
  Item,
  Content,
  Header,
  Input,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Card,
  CardItem,
  Radio,
  ListItem,
  CheckBox,
} from "native-base";
// import Hr from "azir-hr";
import Hr from "react-native-hr-component";

import NavBar from "../../components/NavBar";

const SignIn = ({ navigation }) => {
  return (
    <>
      <NavBar navigation={navigation} titleText='הרשמה ופרטי תשלום' />

      <View
        style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
      ></View>
      <ScrollView>
        <View style={signInstyles.container}>
          <View style={signInstyles.blanksquare}></View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
            ></View>
            {/* 00ADEF Deep Sky Blue*/}

            <View style={signInstyles.whiteSquare}>
              <Text
                style={{
                  flex: 2,
                  flexDirection: "row",
                  fontSize: 25,
                }}
              >
                לקוח חדש
              </Text>

              <Button
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 130,
                  height: 40,
                  margin: 10,
                  borderRadius: 13,
                  backgroundColor: "#000000",
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>
                  רשום? התחבר עכשיו
                </Text>
              </Button>
            </View>

            <View style={signInstyles.detailsSquare}>
              <Content>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      flex: 0.7,
                      color: "white",
                      // textAlign: "left",
                      // margin: 20,
                      // marginStart: 25,
                    }}
                  >
                    פרטי לקוח
                  </Text>

                  <View style={signInstyles.radioGenderButons}>
                    <Button rounded style={signInstyles.radioGenderButon}>
                      <Text style={{ color: "white" }}>גבר</Text>
                    </Button>
                    <Button rounded style={signInstyles.radioGenderButon}>
                      <Text style={{ color: "white" }}>אישה</Text>
                    </Button>
                  </View>
                </View>

                <View style={signInstyles.inputWrapper}>
                  <View style={signInstyles.signInPageInputs}>
                    <Item style={signInstyles.signInPageInput}>
                      <Input placeholder='שם פרטי' />
                    </Item>
                    <Item style={signInstyles.signInPageInput}>
                      <Input placeholder='טלפון נייד' />
                    </Item>
                  </View>
                  <View style={signInstyles.signInPageInputs}>
                    <Item style={signInstyles.signInPageInput}>
                      <Input placeholder='שם משפחה' />
                    </Item>
                    <Item style={signInstyles.signInPageInput}>
                      <Input placeholder='מספר תעודת זהות' />
                    </Item>
                  </View>

                  <Item last rounded style={signInstyles.signInPageInput}>
                    <Input
                      fontSize={12}
                      // style={{ color: "blue", fontFamily: "Arial" }}
                      placeholder='דוא"ל'
                    />
                  </Item>
                </View>

                <Content>
                  <ListItem>
                    <CheckBox checked={true} />
                    <Body>
                      <Text style={{ color: "white", fontSize: 12 }}>
                        אני מעל גיל 18
                      </Text>
                    </Body>
                  </ListItem>
                  <ListItem>
                    <CheckBox checked={false} color='white' />
                    <Body>
                      <Text style={{ color: "white", fontSize: 12 }}>
                        אני מאשר את תנאי השימוש באתר ואת התקנון
                      </Text>
                    </Body>
                  </ListItem>
                </Content>
              </Content>
              {/* <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignSelf: "center",
                  textAlign: "center",
                }}
              ></View> */}
              <Button
                rounded
                style={{
                  backgroundColor: "#FBB03B",
                  borderColor: "white",
                  borderWidth: 1,
                  flex: 0.5,
                }}
                onPress={console.log("submit")}
              >
                <Text
                  style={{
                    color: "white",
                    flex: 1,
                    fontSize: 30,
                    textAlign: "center",
                  }}
                >
                  הבא
                </Text>
              </Button>
            </View>
          </View>
        </View>

        <Hr lineColor='blue' thickness={1} />
      </ScrollView>
    </>
  );
};

export default SignIn;
