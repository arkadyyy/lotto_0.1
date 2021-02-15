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
import signInstyles from "../SignIn/SignInStyles";
import {
  Button,
  Label,
  Spinner,
} from "native-base";
import { Auth } from "aws-amplify";

import NavBar from "../../components/NavBar";
import { color } from "react-native-reanimated";
import ColorLine from "../../components/ColorLine";
import { useSelector, useDispatch } from "react-redux";
import { SignUp, SignUpConfirmation } from "../../redux/actions/actions";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

///////////////////////////////////////////////////////////////////////





const validateCW = (text) => {
  if (text.length === 3 && text !== "") {
    return true;
  } else {
    return false;
  }
};

const validateCardNum = (text) => {
  let isnum = /^\d+$/.test(text);
  let length = text.length;

  // console.log("isnum : ", isnum);

  if (length === 10 && isnum) {
    return true;
  } else {
    return false;
  }
};



function CheckFields(
  setfieldCheck,
  name,
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

const Payment = ({ navigation }) => {
  const [lastName, setLastName] = useState("");
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
                    // { height: "80%", padding: 20 },
                  ]}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 2,
                      marginTop:-20
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
                        value={cardNum}
                        key={"CARD_NUM"}
                        style={signInstyles.signInPageInput}
                        onChangeText={(text) => setCardNum([...cardNum,text])}
                      />
                      <FontAwesomeIcon
                        style={{
                          color: cardNum === 16 ? "transparent" : "black",
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
                        value={cardNum}
                        maxLength={10}
                        key={"PHONE_NUM"}
                        style={signInstyles.signInPageInput}
                        onChangeText={(text) => {
                          valiExpirationDateCardNum(text);
                          setCardNum(text);
                        }}
                      />
                      <FontAwesomeIcon
                        style={{
                          color: valiExpirationDateCardNum(cardNum)
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
                        value={CW}
                        maxLength={9}
                        key={"CW"}
                        style={signInstyles.signInPageInput}
                        onChangeText={(text) => setCW(text)}
                      />
                      <FontAwesomeIcon
                        style={{
                          color: !validateCW(CW) ? "transparent" : "black",
                        }}
                        icon={faCheckCircle}
                      />
                    </View>
                  </View>

                                  {/* עד כאן שם בעל הכרטיס */}

                 
                    <View style={{flexDirection:"row", justifyContent:"center",paddingBottom:20}}>
                                      
                                  <Image
                      style={{
                        width: 130,
                        height: 25,
                        position: "relative",
                        right: "2%",
                        top: 3,
                        resizeMode: "contain",
                      }}
                      source={require("../../assets/home/toppng.com_visa_mastercard_american_express_logos_american_express_1530x261.png")}
                    />
                                 
                 </View>
                      

                  <Button
                    disabled={fieldCheck}
                    rounded
                    style={{
                      backgroundColor: fieldCheck ? "#FFAC32" : "#FBB03B",
                      borderColor: "white",
                      borderWidth: 2,
                      borderRadius: 17,
                        flex: 1,
                        width: 170,
                      alignSelf:"center"

                    //   marginHorizontal: 70,
                    }}
                    onPress={() => {
                        Name(""),
                        setCW(""),
                        setCardNum(""),
                        
                        setAge(false),
                        setExpirationDate(""),
                        setAgreement(false),
                        

                      dispatch(
                        SignUp(
                          Name,
                          cardNum,
                          expirationDate,
                          CW
                        )
                      );
                      console.log({
                        Name: Name,
                        cardNum: cardNum.replace("05", "+972"),
                        CW: CW,
                        
                        expirationDate: expirationDate,
a                      });
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
