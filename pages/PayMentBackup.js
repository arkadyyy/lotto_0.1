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
import DateTimePicker from "@react-native-community/datetimepicker";
import {Picker} from '@react-native-picker/picker';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";


import EStyleSheet from "react-native-extended-stylesheet";

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
  let isnum = /^\d+$/.test(text);
  let length = text.length;


  if (length === 3 && isnum) {
    return true;
  } else {
    return false;
  }
};

const validateCardNum = (text) => {
  let isnum = /^\d+$/.test(text);
  let length = text.length;


  if (length === 16 && isnum) {
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
  expirationDate,
  
) {
  if(name === "") {
    setfieldCheck(true);
  } else if (CW === "") {
    setfieldCheck(true);
  } else if (cardNum === "" || cardNum.length !== 16) {
    setfieldCheck(true);
  } else if (expirationDate === ""  || cardNum.length !== 3) {
    setfieldCheck(true);
  } else {
    setfieldCheck(false);
  }
console.log("name:",name, "CW:",CW,"cardNum:",cardNum,"expirationDate:",expirationDate,"setfieldCheck:",setfieldCheck);
  // if (/^\d+$/.test(cardNum) && cardNum.length === 16) {
  // }
}

const ResetInputs = (
  setName,
  setCW,
  setCardNum,
  setExpirationDate,
  
) => {
  setName("");
  setCW("");
  setCardNum("");
  setExpirationDate("");
};

const Payment = ({ navigation }) => {
  const [name, setName] = useState("");
  const [CW, setCW] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

    const [fieldCheck, setfieldCheck] = useState(true);

  const [confirmationCode, setconfirmationCode] = useState("");

  const [monthPicker, setMonthPicker] = useState(" ");
  const [dayPicker, setDayPicker] = useState(" ");

  const onChange = (event, selectedExpirationDate) => {
    const currentExpirationDate = selectedExpirationDate || expirationDate;
    setShow(Platform.OS === "ios");
    let x = currentExpirationDate.toISOString().split("T")[0].split("-");

    // console.log(currentExpirationDate.toISOString().split("T")[0].split("-"));

    let y = [];

    y.push(x[2], ".", x[1], ".", x[0]);

    setExpirationDate(y.join(""));
    console.log(expirationDate);
  };

  /////


  const [show, setShow] = useState(false);

  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const route = useRoute();

  useEffect(() => {
    console.log(store.signUp);
    if (store.signUp === 3) {
      navigation.navigate("LogInPage");
    }
  }, [store]);

  useEffect(() => {
    CheckFields(
      setfieldCheck,
      name,
      cardNum,
      CW,
      expirationDate 
    );
    // console.log("checkfields : ", fieldCheck);
    // console.log("validatephonenum : ", validatePhoneNum(phoneNum));
  }, [
    name,
      cardNum,
      CW,
      expirationDate,
    
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
                        maxLength={16}
                        key={"CARD_NUM"}
                        style={signInstyles.signInPageInput}
                        onChangeText={(text) => {
                          validateCardNum(text);
                          setCardNum(text);
                        }}                      />
                      <FontAwesomeIcon
                       style={{
                        color: validateCardNum(cardNum)
                          ? "black"
                          : "transparent",
                      }}
                        icon={faCheckCircle}
                      />
                    </View>
                                  </View>
{/* עד כאן מספר כרטיס */}
                    
<View style={{flexDirection:"row"}}>
                                  {/* מכאן תוקף               */}
               {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
                   
                    <TouchableOpacity
                      style={{
                        borderColor: "white",
                        borderWidth: 1,
                        borderRadius: 7,
                        padding: 7,
                        fontSize: 10,
                        flex: 1,
                      }}
                      onPress={() => {
                        setShow(true);
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          color: "white",
                          fontFamily: "fb-Spacer",
                        }}
                      >
                       תוקף
                      </Text>
                    </TouchableOpacity>
                    <TextInput
                      editable={false}
                      disabled={true}
                      value={expirationDate === "" ? "תוקף לא נבחר" : String(expirationDate)}
                      style={[
                        signInstyles.signInPageInput,
                        {
                          flex: 2,
                          fontSize: 12,
                          color: "black",
                          textAlign: "center",

                          fontFamily: "fb-Spacer",
                        },
                      ]}
                    />
                    <FontAwesomeIcon
                      style={{
                        color: expirationDate === "" ? "transparent" : "black",
                      }}
                      icon={faCheckCircle}
                    />

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
                  </View> */}
   <View
                    style={{
                      alignItems: "stretch",

                      flex: 1,
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Label
                        style={{
                          fontSize:EStyleSheet.value("$rem") * 12,
                          marginHorizontal: 10,
                          fontFamily: "fb-Spacer",
                        }}
                        >
                        תוקף                      
                     </Label>
                    </View>
              
                    <TouchableOpacity
                      style={{ flexDirection: "row", alignItems: "center",backgroundColor:"white",borderRadius:8,height:30,width:100,left:10,top:8 }}
                      onPress={() => {
                        setShow(true);
                      }}
                      >
                      {/* <TextInput
                        value={lastName}
                        style={signInstyles.signInPageInput}
                        key={"LAST_NAME"}
                        onChangeText={(text) => setLastName(text)}
                      /> */}
                         <Text
                        style={{
                          fontSize: EStyleSheet.value("$rem") * 20,
                          color: "black",
                            fontFamily: "fb-Spacer",
                        left:EStyleSheet.value("$rem") * 31
                        }}
                      >
                       {monthPicker === " " ? " " : String(dayPicker)+"."+ String(monthPicker)}
                      </Text>
                      <FontAwesomeIcon
                        style={{
                            color: expirationDate === "" ? "transparent" : "black",
                          left:72
                        }}
                        icon={faCheckCircle}
                        />
                       
                      </TouchableOpacity>
                      {/* {show && (
                      <DateTimePicker
                        testID='dateTimePicker'
                        value={new Date()}
                        mode='date'
                        is24Hour={false}
                        display='spinner'
                        onChange={onChange}
                      />
                    )} */}
                      {show && (
                        <View style={{flexDirection:"row",alignSelf:"flex-end",left:40}}>
                          <Picker
                            // text styles={{fontFamily: "fb-Spacer-bold"}}
                      selectedValue={monthPicker}
                      style={{height: 50, width: 90}}
                      onValueChange={(itemValue, itemIndex) =>
                      setMonthPicker(itemValue)
                      }>
                      <Picker.Item label="ינו'" value="01" />
                      <Picker.Item label="פבר'" value="02" />
                      <Picker.Item label="מרץ" value="03" />
                      <Picker.Item label="אפריל" value="04" />
                      <Picker.Item label="מאי" value="05" />
                      <Picker.Item label="יוני" value="06" />
                      <Picker.Item label="יולי" value="07" />
                      <Picker.Item label="אוג'" value="08" />
                      <Picker.Item label="ספט'" value="09" />
                      <Picker.Item label="אוק'" value="10" />
                      <Picker.Item label="נוב'" value="11" />
                      <Picker.Item label="דצמ'" value="12" />
                    </Picker>
                     
                      <Picker
                      selectedValue={dayPicker}
                      style={{height: 50, width: 90}}
                      onValueChange={(itemValue, itemIndex) =>
                      setDayPicker(itemValue)
                      }>
                      <Picker.Item label="01" value="01" />
                      <Picker.Item label="02" value="02" />
                      <Picker.Item label="03" value="03" />
                      <Picker.Item label="04" value="04" />
                      <Picker.Item label="05" value="05" />
                      <Picker.Item label="06" value="06" />
                      <Picker.Item label="07" value="07" />
                      <Picker.Item label="08" value="08" />
                      <Picker.Item label="09" value="09" />
                      <Picker.Item label="10" value="10" />
                      <Picker.Item label="11" value="11" />
                      <Picker.Item label="12" value="12" />
                    </Picker>
                   
                        </View>
                    )}
                        
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
                          style={{left:EStyleSheet.value("$rem") * 31}}
                        value={CW}
                        maxLength={3}
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
                        שם בעל הכרטיס
                  </Label>
                    </View>
                   
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <TextInput
                        value={name}
                        style={signInstyles.signInPageInput}
                        key={"NAME"}
                        onChangeText={(text) => setName(text)}
                      />
                      <FontAwesomeIcon
                        style={{
                          color: name === "" ? "transparent" : "black",
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
                      backgroundColor: fieldCheck ? "#999" : "#FBB03B",
                      borderColor: "white",
                      borderWidth: 2,
                      borderRadius: 17,
                        flex: 1,
                        width: 170,
                      alignSelf:"center"

                    //   marginHorizontal: 70,
                    }}
                    onPress={() => {
                        setName(""),
                        setCW(""),
                        setCardNum(""),
                        
                        setExpirationDate(""),
                        

                      dispatch(
                        SignUp(
                          name,
                          cardNum,
                          expirationDate,
                          CW
                        )
                      );
                      console.log({
                        // name: name,
                        // cardNum: cardNum.replace("05", "+972"),
                        // CW: CW,
                        
                        // expirationDate: expirationDate,
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
