import React from "react";
import { useState, useEffect } from "react";
import LogInPage from "../LogIn/LogInPage";
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
  Spinner,
} from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Auth } from "aws-amplify";

import NavBar from "../../components/NavBar";
import { color } from "react-native-reanimated";
import ColorLine from "../../components/ColorLine";
import { useSelector, useDispatch } from "react-redux";
import { SignUp, SignUpConfirmation } from "../../redux/actions/actions";
import axios from "axios";

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

function CheckFields(
  setfieldCheck,
  gender,
  firstName,
  lastName,
  ID,
  phoneNum,
  Email,
  age,
  address,
  date,
  agreement,
  password
) {
  if (gender === "") {
    setfieldCheck(true);
  } else if (firstName === "") {
    setfieldCheck(true);
  } else if (lastName === "") {
    setfieldCheck(true);
  } else if (ID === "") {
    setfieldCheck(true);
  } else if (phoneNum === "" || phoneNum.length !== 10 || phoneNum.includes()) {
    setfieldCheck(true);
  } else if (Email === "") {
    setfieldCheck(true);
  } else if (age === false) {
    setfieldCheck(true);
  } else if (address === "") {
    setfieldCheck(true);
  } else if (date === "") {
    setfieldCheck(true);
  } else if (agreement === "") {
    setfieldCheck(true);
  } else if (password === "") {
    setfieldCheck(true);
  } else {
    setfieldCheck(false);
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
  const [address, setaddress] = useState("");
  const [bidrthday, setbidrthday] = useState("");
  const [agreement, setAgreement] = useState(false);
  // const [date, setdate] = useState("");
  const [password, setpassword] = useState(null);
  const [showPassword, setshowPassword] = useState(true);
  const [fieldCheck, setfieldCheck] = useState(true);

  const [confirmationCode, setconfirmationCode] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    let x = currentDate.toISOString().split("T")[0].split("-");

    console.log(currentDate.toISOString().split("T")[0].split("-"));

    let y = [];

    y.push(x[2], ".", x[1], ".", x[0]);

    setDate(y.join(""));
    console.log(date);
  };

  /////

  const [date, setDate] = useState("");

  const [show, setShow] = useState(false);

  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(store.signUp);
    if (store.signUp === 3) {
      navigation.navigate("LogInPage");
    }
  }, [store]);

  useEffect(() => {
    let accessToken;
    let jwt;
    Auth.currentSession().then((res) => {
      accessToken = res.getAccessToken();
      jwt = accessToken.getJwtToken();

      setjwtState(jwt);
    });

    setTimeout(() => {
      axios
        .get("http://52.90.122.190:5000/my_space/active_forms", {
          headers: {
            Authorization: jwt,
          },
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }, 5000);
  }, []);

  useEffect(() => {
    CheckFields(
      setfieldCheck,
      gender,
      firstName,
      lastName,
      ID,
      phoneNum,
      Email,
      age,
      address,
      date,
      agreement,
      password
    );
    console.log(fieldCheck);
  }, [
    gender,
    firstName,
    lastName,
    ID,
    phoneNum,
    Email,
    age,
    address,
    date,
    agreement,
    password,
  ]);

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
            {/* {store.signUp === 3 && <LogInPage />} */}
            {store.signUp === 1 && <Spinner />}
            {store.signUp === -2 && <Text>{store.message}</Text>}
            {store.signUp === 2 && (
              <>
                <View
                  style={[
                    signInstyles.detailsSquare,
                    { height: "80%", padding: 20 },
                  ]}
                >
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                    }}
                  >
                    הכנס קוד
                  </Text>
                  <TextInput
                    key={"PHONE_NUM"}
                    style={signInstyles.signInPageInput}
                    onChangeText={(text) => setconfirmationCode(text)}
                  />

                  <Button
                    onPress={() => {
                      console.log(confirmationCode);
                      dispatch(SignUpConfirmation(Email, confirmationCode));
                    }}
                    rounded
                    style={{
                      backgroundColor: "#FBB03B",
                      borderColor: "white",
                      borderWidth: 2,
                      borderRadius: 17,
                      flex: 1,

                      marginHorizontal: 70,
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
              </>
            )}

            {store.signUp === -1 && (
              <>
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
                      <Label style={{ fontSize: 12, marginLeft: 10 }}>
                        נייד
                      </Label>
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
                      <Label style={{ fontSize: 12, marginLeft: 10 }}>
                        ת"ז
                      </Label>
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
                    <Label style={{ fontSize: 12, marginLeft: 10 }}>
                      אימייל
                    </Label>
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
                    <Label style={{ fontSize: 12, marginLeft: 10 }}>
                      כתובת
                    </Label>
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
                      {date === "" ? "תאריך לא נבחר" : String(date)}
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
                      <Label style={{ fontSize: 12, marginLeft: 10 }}>
                        סיסמה
                      </Label>
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
                    disabled={fieldCheck}
                    rounded
                    style={{
                      backgroundColor: fieldCheck ? "#999" : "#FBB03B",
                      borderColor: "white",
                      borderWidth: 2,
                      borderRadius: 17,
                      flex: 1,

                      marginHorizontal: 70,
                    }}
                    onPress={async () => {
                      dispatch(
                        SignUp(
                          Email,
                          password,
                          phoneNum,
                          lastName,
                          address,
                          gender,
                          date,
                          firstName,
                          ID
                        )
                      );
                      console.log({
                        gender: gender,
                        firstName: firstName,
                        lastName: lastName,
                        phoneNum: phoneNum.replace("05", "+972"),
                        password: password,
                        ID: ID,
                        Email: Email,
                        date: date,
                        address: address,
                      });
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
                      // await Auth.signUp({
                      //   username: Email,
                      //   password: password,
                      //   attributes: {
                      //     email: Email,
                      //     phone_number: phoneNum, // optional - E.164 number convention .replace('0', '+972')
                      //     family_name: lastName,
                      //     address: address,
                      //     gender: gender,
                      //     birthdate: "13.05.1996",
                      //     name: firstName,
                      //     "custom:ID": ID,
                      //   },
                      // });

                      // try {
                      //   await Auth.confirmSignUp("arkados2@gmail.com", "351364");
                      // } catch (error) {
                      //   console.log("error confirming sign up", error);
                      // }
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
              </>
            )}
          </View>

          <ColorLine />
        </View>
      </ScrollView>
    </>
  );
};

export default SignIn;
