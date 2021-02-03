import React from "react";
import { useState, useEffect } from "react";

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
import DateTimePicker from "@react-native-community/datetimepicker";
import { Auth } from "aws-amplify";

import NavBar from "../../components/NavBar";
import { color } from "react-native-reanimated";
import ColorLine from "../../components/ColorLine";
import { useSelector } from "react-redux";

// signUp(
//   Email,
//   password,
//   phoneNum,
//   lastName,
//   address,
//   gender,
//   date,
//   firstName,
//   ID
// );

// async function signUp(
//   email,
//   password,
//   phone_number,
//   family_name,
//   address,
//   gender,
//   birthdate,
//   name,
//   customID
// ) {
//   try {
//     const { user } = await Auth.signUp({
//       username: email,
//       password,
//       attributes: {
//         email,
//         phone_number, // optional - E.164 number convention
//         family_name,
//         address,
//         gender,
//         birthdate,
//         name,
//         "custom:ID": customID,
//       },
//     });
//     console.log("singup was succsessful @!@!~~~~ : ", user);
//   } catch (error) {
//     console.log("error signing up:", error);
//   }
// }

const SignIn = ({ navigation }) => {
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [Email, setEmail] = useState("");
  const [age, setAge] = useState(false);
  const [address, setaddress] = useState("");
  const [bidrthday, setbidrthday] = useState("");
  const [agreement, setAgreement] = useState(false);
  // const [date, setdate] = useState("");
  const [password, setpassword] = useState(null);
  const [showPassword, setshowPassword] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    let x = String(currentDate).split("T")[0].split(" ");
    let y = [];
    y.push(x[2], x[1], x[3]);

    setDate(y.join());
  };

  /////

  const [date, setDate] = useState("");

  const [show, setShow] = useState(false);

  const store = useSelector((state) => state);

  // useEffect(() => {
  //   // email,
  //   // password,
  //   // phone_number,
  //   // family_name,
  //   // address,
  //   // gender,
  //   // birthdate,
  //   // name,
  //   // customID

  //   console.log("i am here");
  // }, []);

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
                }}
              >
                <Label style={{ fontSize: 12, marginLeft: 10 }}>כתובת</Label>
                <TextInput
                  key={"ADDRESS"}
                  style={signInstyles.signInPageInput}
                  fontSize={12}
                  onChangeText={(text) => setaddress(text)}
                />
              </View>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <TouchableOpacity
                  style={{
                    borderColor: "white",
                    borderWidth: 2,
                    borderRadius: 7,
                    padding: 7,

                    flex: 1,
                  }}
                  onPress={() => {
                    setShow(true);
                  }}
                >
                  <Text>בחר תאריך לידה</Text>
                </TouchableOpacity>
                <Text style={{ flex: 2 }}>
                  {date === "" ? "בחר תאריך" : String(date)}
                </Text>
                {show && (
                  <DateTimePicker
                    testID='dateTimePicker'
                    value={new Date()}
                    mode='date'
                    is24Hour={false}
                    display='spinner'
                    onChange={onChange}
                  />
                )}
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
                  onChangeText={(text) => setpassword(text)}
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
                onPress={async () => {
                  // console.log({
                  //   gender: gender,
                  //   firstName: firstName,
                  //   lastName: lastName,
                  //   phoneNum: phoneNum,
                  //   ID: ID,
                  //   Email: Email,
                  //   date: date,
                  // });
                  // signUp(
                  //   Email,
                  //   password,
                  //   phoneNum,
                  //   lastName,
                  //   address,
                  //   gender,
                  //   date,
                  //   firstName,
                  //   ID
                  // );
                  // signUp(
                  //   "arkados2@gmail.com",
                  //   "Arkady555",
                  //   "0527323002",
                  //   "likovizki",
                  //   "geva binyamin yasmin 4",
                  //   "male",
                  //   "13/5/1996",
                  //   "arkady",
                  //   "321352262"
                  // );
                  await Auth.signUp({
                    username: "arkados2@gmail.com",
                    password: "arkady555",
                    attributes: {
                      email: "arkados2@gmail.com",
                      phone_number: "+972527323002", // optional - E.164 number convention
                      family_name: "likovizki",
                      address: " geva binyamin yasmin 4",
                      gender: "male",
                      birthdate: "13.05.1996",
                      name: "arkady",
                      "custom:ID": "321352262",
                    },
                  });

                  try {
                    await Auth.confirmSignUp("arkados2@gmail.com", "351364");
                  } catch (error) {
                    console.log("error confirming sign up", error);
                  }
                }}
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
