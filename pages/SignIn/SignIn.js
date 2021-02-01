import React from "react";
import { useState } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
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
  Label,
} from "native-base";
import { Auth } from "aws-amplify";

import NavBar from "../../components/NavBar";
import { color } from "react-native-reanimated";
import ColorLine from "../../components/ColorLine";
import { useSelector } from "react-redux";

async function signUp(username, password, email, phone_number, ID, address) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
        phone_number, // optional - E.164 number convention
        ID,
        address,
      },
    });
    console.log(user);
  } catch (error) {
    console.log("error signing up:", error);
  }
}

const SignIn = ({ navigation }) => {
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [Email, setEmail] = useState("");
  const [age, setAge] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [showPassword, setshowPassword] = useState(true);
  const store = useSelector((state) => state);
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
                {store.user.attributes ? null : (
                  <Button
                    small
                    style={{
                      borderRadius: 13,
                      backgroundColor: "#000000",
                    }}
                    onPress={() => navigation.navigate("LogInPage")}
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
                )}
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
                      style={
                        gender === "male"
                          ? signInstyles.radioGenderButonSelected
                          : signInstyles.radioGenderButon
                      }
                      onPress={() => setGender("male")}
                    >
                      <Text style={{ color: "white" }}>זכר</Text>
                    </Button>
                  </View>

                  <View>
                    <Button
                      small
                      rounded
                      style={
                        gender === "female"
                          ? signInstyles.radioGenderButonSelected
                          : signInstyles.radioGenderButon
                      }
                      onPress={() => setGender("female")}
                    >
                      <Text style={{ color: "white" }}>נקבה</Text>
                    </Button>
                  </View>
                </View>
              </View>

              <View style={signInstyles.signInPageInputs}>
                <View
                  style={{
                    alignItems: "stretch",

                    flex: 1,
                  }}
                >
                  <Label style={{ fontSize: 12, marginLeft: 10 }}>
                    שם פרטי
                  </Label>
                  <TextInput
                    key={"FIRST_NAME"}
                    style={signInstyles.signInPageInput}
                    onChangeText={(text) => setFirstName(text)}
                  />
                </View>
                <View
                  style={{
                    alignItems: "stretch",

                    flex: 1,
                  }}
                >
                  <Label style={{ fontSize: 12, marginLeft: 10 }}>נייד</Label>
                  <TextInput
                    key={"PHONE_NUM"}
                    style={signInstyles.signInPageInput}
                    onChangeText={(text) => setPhoneNum(text)}
                  />
                </View>
              </View>
              <View style={signInstyles.signInPageInputs}>
                <View
                  style={{
                    alignItems: "stretch",

                    flex: 1,
                  }}
                >
                  <Label style={{ fontSize: 12, marginLeft: 10 }}>
                    שם משפחה
                  </Label>
                  <TextInput
                    style={signInstyles.signInPageInput}
                    key={"LAST_NAME"}
                    onChangeText={(text) => setLastName(text)}
                  />
                </View>

                <View
                  style={{
                    alignItems: "stretch",
                    flex: 1,
                  }}
                >
                  <Label style={{ fontSize: 12, marginLeft: 10 }}>ת"ז</Label>
                  <TextInput
                    key={"ID"}
                    style={signInstyles.signInPageInput}
                    onChangeText={(text) => setID(text)}
                  />
                </View>
              </View>
              <View
                style={{
                  alignItems: "stretch",
                }}
              >
                <Label style={{ fontSize: 12, marginLeft: 10 }}>אימייל</Label>
                <TextInput
                  key={"EMAIL"}
                  style={signInstyles.signInPageInput}
                  fontSize={12}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View
                style={{
                  alignItems: "stretch",
                  marginVertical: 8,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Label style={{ fontSize: 12, marginLeft: 10 }}>סיסמה</Label>
                  <TouchableOpacity
                    style={{ marginHorizontal: 10 }}
                    onPress={() => {
                      setshowPassword(!showPassword);
                    }}
                  >
                    <Text>
                      {showPassword === true ? " הראה סיסמה" : "הסתר סיסמה"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <TextInput
                  secureTextEntry={showPassword}
                  key={"EMAIL"}
                  style={signInstyles.signInPageInput}
                  fontSize={12}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>

              <ListItem noBorder>
                <CheckBox
                  style={{ borderRadius: 13 }}
                  color='#263742'
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
                  color='#263742'
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
