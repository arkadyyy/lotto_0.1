import React from "react";
import { useState } from "react";

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

import NavBar from "../../components/NavBar";
import { color } from "react-native-reanimated";
import ColorLine from "../../components/ColorLine";

const SignIn = ({ navigation }) => {
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [Email, setEmail] = useState("");
  const [age, setAge] = useState(false);
  const [agreement, setAgreement] = useState(false);

  return (
    <>
      <NavBar navigation={navigation} screenName={"signIn"} />

      <View
        style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
      ></View>
      <ScrollView style={{ flex: 1 }}>
        <View style={signInstyles.container}>
          <View style={signInstyles.blanksquare}></View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
            ></View>
            {/* 00ADEF Deep Sky Blue*/}

            <View style={[signInstyles.whiteSquare]}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                }}
              >
                לקוח חדש
              </Text>

              <View>
                <Button
                  small
                  style={{
                    borderRadius: 13,
                    backgroundColor: "#000000",
                  }}
                  onPress={() => navigation.navigate("Home")}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      fontSize: 10,
                      padding: 15,
                    }}
                  >
                    רשום? התחבר עכשיו
                  </Text>
                </Button>
              </View>
            </View>

            <View
              style={[
                signInstyles.detailsSquare,
                { height: "80%", padding: 20 },
              ]}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 30,
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    color: "white",
                  }}
                >
                  פרטי לקוח
                </Text>

                <View style={signInstyles.radioGenderButons}>
                  <View>
                    <Button
                      small
                      rounded
                      style={signInstyles.radioGenderButon}
                      onPress={() => setGender("men")}
                    >
                      <Text style={{ color: "white" }}>גבר</Text>
                    </Button>
                  </View>

                  <View>
                    <Button
                      small
                      rounded
                      style={signInstyles.radioGenderButon}
                      onPress={() => setGender("women")}
                    >
                      <Text style={{ color: "white" }}>אישה</Text>
                    </Button>
                  </View>
                </View>
              </View>

              <View style={signInstyles.signInPageInputs}>
                <Item style={signInstyles.signInPageInput}>
                  <Input
                    placeholder='שם פרטי'
                    onChangeText={(text) => setFirstName(text)}
                  />
                </Item>
                <Item style={signInstyles.signInPageInput}>
                  <Input
                    placeholder='טלפון נייד'
                    onChangeText={(text) => setPhoneNum(text)}
                  />
                </Item>
              </View>
              <View style={signInstyles.signInPageInputs}>
                <Item style={signInstyles.signInPageInput}>
                  <Input
                    placeholder='שם משפחה'
                    onChangeText={(text) => setLastName(text)}
                  />
                </Item>
                <Item style={signInstyles.signInPageInput}>
                  <Input
                    placeholder='מספר תעודת זהות'
                    onChangeText={(text) => setID(text)}
                  />
                </Item>
              </View>

              <Item last rounded style={signInstyles.signInPageInput}>
                <Input
                  fontSize={12}
                  placeholder='דוא"ל'
                  onChangeText={(text) => setEmail(text)}
                />
              </Item>

              <ListItem noBorder>
                <CheckBox
                  style={{ borderRadius: 13 }}
                  color='white'
                  checked={age}
                  onPress={() => {
                    setAge(!age);
                  }}
                />
                <Body style={{ marginLeft: 20 }}>
                  <Text style={{ color: "white", fontSize: 10 }}>
                    אני מעל גיל 18
                  </Text>
                </Body>
              </ListItem>
              <ListItem noBorder>
                <CheckBox
                  style={{ borderRadius: 13 }}
                  checked={agreement}
                  color='white'
                  onPress={() => {
                    setAgreement(!agreement);
                  }}
                />
                <Body style={{ marginLeft: 20 }}>
                  <Text style={{ color: "white", fontSize: 10 }}>
                    אני מאשר את תנאי השימוש באתר ואת התקנון
                  </Text>
                </Body>
              </ListItem>

              <Button
                rounded
                style={{
                  backgroundColor: "#FBB03B",
                  borderColor: "white",
                  borderWidth: 2,
                  borderRadius: 17,
                  flex: 1,

                  marginHorizontal: 70,
                }}
                onPress={() =>
                  console.log({
                    gender: gender,
                    firstName: firstName,
                    lastName: lastName,
                    phoneNum: phoneNum,
                    ID: ID,
                    Email: Email,
                    age: age,
                    agreement: agreement,
                  })
                }
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

          <ColorLine />
        </View>
      </ScrollView>
    </>
  );
};

export default SignIn;
