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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCheck,
  faCheckCircle,
  faTimes,
  faQuestion,
  faQuestionCircle,
  faEye,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
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
import { useRoute } from "@react-navigation/native";

///////////////////////////////////////////////////////////////////////

const getAge = (birthDate) => {
  let age = +Math.floor(
    (new Date() - new Date(birthDate).getTime()) / 3.15576e10
  );
  return +age;
};

const validateEmail = (text) => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
};

const validateID = (text) => {
  if (text.length === 9 && text !== "") {
    return true;
  } else {
    return false;
  }
};

const validatePhoneNum = (text) => {
  let isnum = /^\d+$/.test(text);
  let length = text.length;

  // console.log("isnum : ", isnum);

  if (length === 10 && isnum) {
    return true;
  } else {
    return false;
  }
};

const validatePassword = (text) => {
  if (text.length >= 8) {
    return true;
  } else {
    return false;
  }
};

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
  } else if (phoneNum === "" || phoneNum.length !== 10) {
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

  if (/^\d+$/.test(phoneNum) && phoneNum.length === 10) {
  }
}

const ResetInputs = (
  setGender,
  setFirstName,
  setLastName,
  setID,
  setPhoneNum,
  setEmail,
  setAge,
  setaddress,
  setDate,
  setAgreement,
  setpassword
) => {
  setGender("");
  setFirstName("");
  setLastName("");
  setID("");
  setPhoneNum("");
  setEmail("");
  setAge(false);
  setaddress("");
  setDate("");
  setAgreement(false);
  setpassword("");
};

const Payment = ({ navigation }) => {
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
  const [password, setpassword] = useState("");
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
  const route = useRoute();
//   useEffect(() => {
//     console.log(store.signUp);
//     if (store.signUp === 3) {
//       navigation.navigate("LogInPage");
//     }
//   }, [store]);

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
    // console.log("checkfields : ", fieldCheck);
    // console.log("validatephonenum : ", validatePhoneNum(phoneNum));
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
      <NavBar navigation={navigation} screenName={"Payment"} />

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
            {store.signUp === -2 && (
              <>
                <FontAwesomeIcon size={70} icon={faExclamationTriangle} />
                <Text style={{ marginVertical: 13 }}>{store.message}</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#FBB03B",
                    borderColor: "white",
                    borderWidth: 2,
                    borderRadius: 17,
                    flex: 1,
                    padding: 10,
                    paddingHorizontal: 40,
                    marginVertical: 50,
                  }}
                  onPress={() => {
                    dispatch({ type: "RESET_SIGNUP" });
                  }}
                >
                  <Text>חזרה</Text>
                </TouchableOpacity>
              </>
            )}
            {store.signUp === 2 && (
              <>
                <View
                  style={[
                    signInstyles.detailsSquare,
                    { height: "80%", padding: 20 },
                  ]}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                      }}
                    >
                      הכנס קוד
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch({ type: "RESET_SIGNUP" });
                      }}
                    >
                      <Text>חזרה</Text>
                    </TouchableOpacity>
                  </View>
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

                  {/* <TouchableOpacity
                    style={{
                      alignSelf: "center",
                      marginVertical: 17,

                      borderBottomWidth: 1,
                    }}
                  >
                    <Text>לא קיבלתי קוד</Text>
                  </TouchableOpacity>

                  <TextInput style={signInstyles.signInPageInput} /> */}
                </View>
              </>
            )}

            {store.signUp === -1 && (
              <>
                <View style={[signInstyles.whiteSquare]}>
                  <Text
                    style={{
                      fontSize: 27,

                      fontFamily: "fb-Spacer-bold",
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
                            color: "white",
                            fontSize: 10,
                            padding: 15,
                            fontFamily: "fb-Spacer-bold",
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
                        fontFamily: "fb-Spacer",
                      }}
                    >
                      פרטי תשלום
                    </Text>

                    
                  </View>

{/* מספר כרטיס מכאן */}
                  <View
                    style={{
                      alignItems: "stretch",

                      flex: 1,
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Label
                        style={{
                          fontSize: 12,
                          marginHorizontal: 10,
                          fontFamily: "fb-Spacer",
                        }}
                      >
                                              מספר כרטיס
                      </Label>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <TextInput
                        value={firstName}
                        key={"FIRST_NAME"}
                        style={signInstyles.signInPageInput}
                        onChangeText={(text) => setFirstName(text)}
                      />
                      <FontAwesomeIcon
                        style={{
                          color: firstName === "" ? "transparent" : "black",
                        }}
                        icon={faCheckCircle}
                      />
                    </View>
                                  </View>
{/* עד כאן מספר כרטיס */}
                    
<View style={{flexDirection:"row"}}>
                                  {/* מכאן תוקף               */}
                  <View
                    style={{
                      alignItems: "stretch",

                      flex: 1,
                    }}
                     >                 
                    <View style={{ flexDirection: "row" }}>
                      <Label
                        style={{
                          fontSize: 12,
                          marginHorizontal: 10,
                          fontFamily: "fb-Spacer",
                        }}
                      >
                          תוקף
                      </Label>
                    </View>
                                      
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <TextInput
                        value={phoneNum}
                        maxLength={10}
                        key={"PHONE_NUM"}
                        style={signInstyles.signInPageInput}
                        onChangeText={(text) => {
                          validatePhoneNum(text);
                          setPhoneNum(text);
                        }}
                      />
                      <FontAwesomeIcon
                        style={{
                          color: validatePhoneNum(phoneNum)
                            ? "black"
                            : "transparent",
                        }}
                        icon={faCheckCircle}
                      />
                                      </View>
                                      
                  </View>

                          {/* עד כאן תוקף         */}

                         {/* CW מכאן */}
                  <View
                    style={{
                      alignItems: "stretch",

                      flex: 1,
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Label
                        style={{
                          fontSize: 12,
                          marginHorizontal: 10,
                          fontFamily: "fb-Spacer",
                        }}
                        >
                        CW                      
                     </Label>
                    </View>
              
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <TextInput
                        value={lastName}
                        style={signInstyles.signInPageInput}
                        key={"LAST_NAME"}
                        onChangeText={(text) => setLastName(text)}
                      />
                      <FontAwesomeIcon
                        style={{
                          color: lastName === "" ? "transparent" : "black",
                        }}
                        icon={faCheckCircle}
                      />
                    </View>
                  </View>


{/* עד כאן CW */}
</View>

                   {/* מכאן שם בעל הכרטיס                */}
                  <View
                    style={{
                      alignItems: "stretch",
                      flex: 1,
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Label
                        style={{
                          fontSize: 12,
                          marginHorizontal: 10,
                          fontFamily: "fb-Spacer",
                        }}
                      >
שם בעל הכרטיס                      </Label>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <TextInput
                        value={ID}
                        maxLength={9}
                        key={"ID"}
                        style={signInstyles.signInPageInput}
                        onChangeText={(text) => setID(text)}
                      />
                      <FontAwesomeIcon
                        style={{
                          color: !validateID(ID) ? "transparent" : "black",
                        }}
                        icon={faCheckCircle}
                      />
                    </View>
                  </View>

                                  {/* עד כאן שם בעל הכרטיס */}

                 
                 
                 
                 

                  <Button
                    disabled={fieldCheck}
                    rounded
                    style={{
                      backgroundColor: fieldCheck ? "#FFAC32" : "#FBB03B",
                      borderColor: "white",
                      borderWidth: 2,
                      borderRadius: 17,
                      flex: 1,

                      marginHorizontal: 70,
                    }}
                    onPress={() => {
                      setGender(""),
                        setFirstName(""),
                        setLastName(""),
                        setID(""),
                        setPhoneNum(""),
                        setEmail(""),
                        setAge(false),
                        setaddress(""),
                        setDate(""),
                        setAgreement(false),
                        setpassword("");

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
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        flex: 1,
                        fontSize: 30,
                        textAlign: "center",
                        fontFamily: "fb-Spacer-bold",
                      }}
                    >
                      אישור
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

export default Payment;

// console.log(
//   "month : ",
//   new Date(date.replace(/\./g, "/")).getMonth()
// );
// console.log(
//   new Date().getFullYear() -
//     new Date(date.replace(/\./g, "/")).getFullYear()
// );
