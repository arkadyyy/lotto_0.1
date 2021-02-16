import React from "react";
import { useState, useEffect } from "react";
// import LogInPage from "../LogIn/LogInPage";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
    TextInput,
  Image
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
import signInstyles from "../pages/SignIn/SignInStyles";
import {
  Button,
  Label,
  Spinner,
} from "native-base";
import { Auth } from "aws-amplify";
import EStyleSheet from "react-native-extended-stylesheet";

import NavBar from "./NavBar";
import { color } from "react-native-reanimated";
// import ColorLine from "./components/ColorLine";
import { useSelector, useDispatch } from "react-redux";
// import { SignUp, SignUpConfirmation } from "../../redux/actions/actions";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

///////////////////////////////////////////////////////////////////////





// const validateCW = (text) => {
//   if (text.length === 3 && text !== "") {
//     return true;
//   } else {
//     return false;
//   }
// };

// const validateCardNum = (text) => {
//   let isnum = /^\d+$/.test(text);
//   let length = text.length;

//   // console.log("isnum : ", isnum);

//   if (length === 10 && isnum) {
//     return true;
//   } else {
//     return false;
//   }
// };



function CheckFields(
  setfieldCheck,
  Name,
  CW,
  cardNum,
  age,
  expirationDate,
  agreement,
  
) {
  if(Name === "") {
    setfieldCheck(true);
  } else if (CW === "") {
    setfieldCheck(true);
  } else if (cardNum === "" || cardNum.length !== 16) {
    setfieldCheck(true);
  } else if (age === false) {
    setfieldCheck(true);
  } else if (expirationDate === "") {
    setfieldCheck(true);
  } else if (agreement === "") {
    setfieldCheck(true);
  } else {
    setfieldCheck(false);
  }

  if (/^\d+$/.test(cardNum) && cardNum.length === 16) {
  }
}

const ResetInputs = (
  setName,
  setCW,
  setCardNum,
  setAge,
  setExpirationDate,
  setAgreement,
  
) => {
  setName("");
  setCW("");
  setCardNum("");
  setAge(false);
  setExpirationDate("");
  setAgreement(false);
};

const AccessibilityDeclaration = ({ navigation }) => {
  const [Name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [CW, setCW] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [age, setAge] = useState(false);
  const [bidrthday, setbidrthday] = useState("");
  const [agreement, setAgreement] = useState(false);
  // const [date, setdate] = useState("");
  const [fieldCheck, setfieldCheck] = useState(true);

  const [confirmationCode, setconfirmationCode] = useState("");

  const onChange = (event, selectedExpirationDate) => {
    const currentExpirationDate = selectedExpirationDate || expirationDate;
    setShow(Platform.OS === "ios");
    let x = currentExpirationDate.toISOString().split("T")[0].split("-");

    console.log(currentExpirationDate.toISOString().split("T")[0].split("-"));

    let y = [];

    y.push(x[2], ".", x[1], ".", x[0]);

    setExpirationDate(y.join(""));
    console.log(expirationDate);
  };

  /////

  const [expirationDate, setExpirationDate] = useState("");

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
      Name,
      CW,
      cardNum,
      age,
      expirationDate,
      agreement,
      
    );
    // console.log("checkfields : ", fieldCheck);
    // console.log("validatephonenum : ", validatePhoneNum(phoneNum));
  }, [
    
    Name,
    CW,
    cardNum,
    age,
    expirationDate,
    agreement,
    
  ]);

  return (
    <>
      <NavBar navigation={navigation} screenName={"TermsOfUse"} />

      <View
        style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
      ></View>
      <ScrollView style={{ flex: 1 }}>
              <View
                  style={{ backgroundColor: "#fff",
                  flex: 1}}
              >
          <View style={signInstyles.blanksquare}></View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
            ></View>
            {/* 00ADEF Deep Sky Blue*/}
            {/* {store.signUp === 3 && <LogInPage />} */}
           

            {store.signUp === -1 && (
                          <>
                              <View style={[signInstyles.whiteSquare], { height: EStyleSheet.value("$rem") * 20 }}>
                              <Text
                    style={{
                      fontSize: EStyleSheet.value("$rem") * 20,
paddingTop:EStyleSheet.value("$rem") * 10,
                                          fontFamily: "fb-Spacer-bold",
                      right:EStyleSheet.value("$rem") * 70
                    }}
                  >
הצהרת נגישות                  </Text>
                </View>

                <View
                    style={{
                                      height: EStyleSheet.value("$rem") * 600,
                                      backgroundColor: "#00ADEF",
                                      width: "90%",
                                  padding:10,
                                      flex: 1,
                                      margin: 20,
                                    //   flexDirection: "column",
                                    //   flex: 1,
                            // justifyContent:"space-around"
                                  }}
                >
                   <View
                    style={{
                    //   flex: 1,
                    //   flexDirection: "column",
                      
                    //   justifyContent: "center",
                    //   alignSelf: "flex-end",
                    //   marginBottom: 2,
                    //   marginTop:-10,
                    //   left: EStyleSheet.value("$rem") * -10,

                    }}
                  >
           
            <Text style={{ direction: "rtl", fontSize: EStyleSheet.value("$rem") * 20,color:"white",}}>

הצהרת נגישות</Text>
<Text style={{ direction: "rtl", fontSize: EStyleSheet.value("$rem") * 17,color:"white" }}>
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
הצהרת נגישות
</Text>
           
                              </View>
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

export default AccessibilityDeclaration;
