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

const GetInTouch = ({ navigation }) => {
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
      <NavBar navigation={navigation} screenName={"GetInTouch"} />

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
                      right:EStyleSheet.value("$rem") * 140
                    }}
                  >
                    צור קשר
                  </Text>
                </View>

                <View
                                  style={{   
                                      height: EStyleSheet.value("$rem") * 500,
                                      backgroundColor: "#00ADEF",
                                      width: "90%",
                                  padding:20,
                                      flex: 1,
                                      margin: 20,
                                    //   flexDirection: "column",
                                    //   alignContent:"flex-end"
                                  }}
                >
                  <View
                        style={{
                        // paddingTop:10,
                      flex: 1,
                      flexDirection: "column",
                      justifyContent: "center",
                      marginTop:-10,
                      marginLeft:-10
                    }}
                  >
                    <Text
                      style={{
                        flex: 1,
                        color: "white",
                        fontFamily: "fb-Spacer-bold",
                        
                      }}
                    >
                                          צוות לוטומטיק כאן תמיד בכל שאלה!
                 </Text>
                    <Text
                      style={{
                        flex: 1,
                        color: "white",
                        fontFamily: "fb-Spacer",
                        // textAlign:"center"
                      }}
                    >
ניתן ליצור איתנו קשר דרך הטופס </Text>
                    <Text
                      style={{
                        flex: 1,
                        color: "white",
                                              fontFamily: "fb-Spacer",
                        
                      }}
                    >
 ולקבל עזרה מנציג שירות בכל נושא שתבחרו.              </Text>

                    
                  </View>

{/* שם מלא*/}
                  <View
                    style={{
                      alignItems: "stretch",
                                          left: EStyleSheet.value("$rem") * -20,
                                          flex: 1,
                    }}
                  >
                    <View style={{ flexDirection: "row",alignSelf:"center",left:EStyleSheet.value("$rem") * 14 }}>
                      <Label
                        style={{
                          fontSize: EStyleSheet.value("$rem") * 14,
                          marginHorizontal: EStyleSheet.value("$rem") * 10,
                          fontFamily: "fb-Spacer",
                          top: EStyleSheet.value("$rem") * 10,
                                                
                                                 color: "navy"
                        }}
                      >
שם מלא                      </Label>
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
                      {/* <FontAwesomeIcon
                        style={{
                          color: cardNum === 16 ? "transparent" : "black",
                        }}
                        icon={faCheckCircle}
                      /> */}
                    </View>
                                  </View>
{/* עד כאן שם מלא */}
                    


{/* מס חשבון*/}
<View
                    style={{
                      alignItems: "stretch",
                      left: EStyleSheet.value("$rem") * -20,

                      flex: 1,
                    }}
                  >
                    <View style={{ flexDirection: "row",alignSelf:"center",left:EStyleSheet.value("$rem") * 14 }}>
                      <Label
                        style={{
                          fontSize: EStyleSheet.value("$rem") * 14,
                          marginHorizontal: EStyleSheet.value("$rem") * 1,
                                                  fontFamily: "fb-Spacer",
                                                  top: EStyleSheet.value("$rem") * 10,
                                                
                                                 color: "navy"
                        }}
                      >
מס' חשבון                      </Label>
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
                      {/* <FontAwesomeIcon
                        style={{
                          color: cardNum === 16 ? "transparent" : "black",
                        }}
                        icon={faCheckCircle}
                      /> */}
                    </View>
                                  </View>
{/* עד כאן מס חשבון */}
{/* טלפון*/}
<View
                    style={{
                      alignItems: "stretch",
                      left: EStyleSheet.value("$rem") * -20,

                      flex: 1,
                    }}
                  >
                    <View style={{ flexDirection: "row",alignSelf:"center",left:EStyleSheet.value("$rem") * 14 }}>
                      <Label
                        style={{
                          fontSize: EStyleSheet.value("$rem") * 14,
                          marginHorizontal: EStyleSheet.value("$rem") * 1,
                                                  fontFamily: "fb-Spacer",
                                                  top: EStyleSheet.value("$rem") * 10,
                                                
                                                 color: "navy"
                        }}
                      >
טלפון               </Label>
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
                      {/* <FontAwesomeIcon
                        style={{
                          color: cardNum === 16 ? "transparent" : "black",
                        }}
                        icon={faCheckCircle}
                      /> */}
                    </View>
                                  </View>
{/* עד כאן טלפון */}
{/* דוא"ל*/}
<View
                    style={{
                      alignItems: "stretch",
                      left: EStyleSheet.value("$rem") * -20,

                      flex: 1,
                    }}
                  >
                    <View style={{ flexDirection: "row",alignSelf:"center",left:EStyleSheet.value("$rem") * 14 }}>
                      <Label
                        style={{
                          fontSize: EStyleSheet.value("$rem") * 14,
                          marginHorizontal: EStyleSheet.value("$rem") * 1,
                                                  fontFamily: "fb-Spacer",
                                                  top: EStyleSheet.value("$rem") * 10,
                                                
                                                 color: "navy"
                        }}
                      >
דוא"ל                     </Label>
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
                      {/* <FontAwesomeIcon
                        style={{
                          color: cardNum === 16 ? "transparent" : "black",
                        }}
                        icon={faCheckCircle}
                      /> */}
                    </View>
                                  </View>
{/* דוא"ל */}
                    
                                  
<View style={{flexDirection:"row"}}>             
</View>

                  

                 
                    <View style={{flexDirection:"row", justifyContent:"center",paddingBottom:20}}>
                                      
                                  {/* <Image
                      style={{
                        width: 130,
                        height: 25,
                        position: "relative",
                        right: "2%",
                        top: 3,
                        resizeMode: "contain",
                      }}
                      source={require("../../assets/home/toppng.com_visa_mastercard_american_express_logos_american_express_1530x261.png")}
                    /> */}
                                 
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
                      alignSelf:"center",
                      left: EStyleSheet.value("$rem") * -20,

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
                      שלח
                    </Text>
                  </Button>

                  <View
                    style={{
                      flex: 2,
                      flexDirection: "column",
                    //   justifyContent: "flex-start",
                      alignItems: "baseline",
                      marginBottom: 2,
                    paddingTop:25

                    }}
                  >
                    <Text
                      style={{
                        flex: 1,
                        color: "white",
                                              fontFamily: "fb-Spacer",
                        
                        
                      }}
                    >
                             או ניתן ליצור קשר באמצעות הפרטים הבאים
                    </Text>
                        <Text
                      style={{
                        flex: 1,
                        color: "white",
                                              fontFamily: "fb-Spacer",
                        
                        
                      }}
                    >
                                          טלפון לתמיכה טכנית: 054-0000000
                    </Text>
                        <Text
                      style={{
                        flex: 1,
                        color: "white",
                                              fontFamily: "fb-Spacer",
                        marginTop:-20
                        
                      }}
                    >
דוא"ל : lotomatic@gmail.com                    </Text>

                    
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

export default GetInTouch;
