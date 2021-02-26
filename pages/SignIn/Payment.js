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
  Image,Switch
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
import { CreditCardInput} from "react-native-credit-card-input";
// import CreditCardInput from "./creditCarsComponents/CreditCardInput.js";

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
const s = StyleSheet.create({
  // switch: {
  //   alignSelf: "center",
  //   marginTop: 20,
  //   marginBottom: 20,
  //   backgroundColor:"red"
  // },
  container: {
    backgroundColor: "#F5F5F5",
    marginTop: 20,
    // marginBottom:20,
    // flexWrap: "wrap",
    // flexDirection: "column",
    height: 450,
    // borderWidth: 1,
    // borderColor:"red"
    // flex:3
    
  },
  label: {
    fontSize: 12,
    marginLeft: 10,
    fontFamily: "fb-Spacer",
    backgroundColor:"transparent",
    color:"black",
    // marginTop: 30,
    
    // top: 3,
    borderColor: "#00ADEF",
    borderWidth: 1,
    // alignSelf:"auto",
      borderRadius: 15,
    // padding: 2,
    // paddingBottom: 30,
      
      // fontSize: 15,
    flex: 1,
    textAlignVertical:"center",
    // height: 420,
    // textAlignVertical:""
    // textDecorationLine: "underline",
    // width:100
    // writingDirection:"rtl"
    alignContent:"stretch"
  },
  input: {
    fontSize: 18,
    color: "black",
    fontFamily: "fb-Spacer",
    // marginStart: 28,
    // direction: "rtl",
    // marginBottom: -10,
    // paddingBottom:10,
    backgroundColor: "white",
    // marginVertical:10,
    borderRadius: 15,
    // textAlignVertical: "center",
    textAlign: "right",
    // alignSelf: "center",
    marginLeft:10,
    // right: 80,
    top: -5,

    // width:100
    // underlineColorAndroid:"transparent"
    
  },
});


const Payment = ({route, navigation }) => {

  const {
    valid
  } = route.params;
  

  const [validation, setValidation] = useState(
    {
      "status": {
        "cvc": " ",
        "expiry": " ",
        "name": " ",
        "number": " ",
      },
      "valid": valid,
      "values": {
        "cvc": " ",
        "expiry": " ",
        "name": " ",
        "number": " ",
      }
    }
  );

  const [fieldCheck, setfieldCheck] = useState(true);
  const [reset, setReset] = useState(false);


  
  useEffect(() => {
    console.log(validation);
    setValidation({

      "status": {
        "cvc": " ",
        "expiry": " ",
        "name": " ",
        "number": " ",
      },
      "valid": valid,
      "values": {
        "cvc": " ",
        "expiry": " ",
        "name": " ",
        "number": " ",
      }
    });
  

},[])
  
  useEffect(() => {
    console.log(validation);
    setValidation({

      "status": {
        "cvc": " ",
        "expiry": " ",
        "name": " ",
        "number": " ",
      },
      "valid": valid,
      "values": {
        "cvc": " ",
        "expiry": " ",
        "name": " ",
        "number": " ",
      }
    });
  
    setReset(false);
},[reset])
 

  const [confirmationCode, setconfirmationCode] = useState("");



  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  // const route = useRoute();

  useEffect(() => {
    setValidation({

      "status": {
        "cvc": " ",
        "expiry": " ",
        "name": " ",
        "number": " ",
      },
      "valid": "false",
      "values": {
        "cvc": " ",
        "expiry": " ",
        "name": " ",
        "number": " ",
      }
    });
    console.log("validation.valid:",validation.valid);
  },[])

  useEffect(() => {
    console.log(store.signUp);
    if (store.signUp === 3) {
      navigation.navigate("LogInPage");
    }
  }, [store]);

 

  // _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
  const _onChange = (form) => {
    // console.log(form);
    setValidation(form);
    console.log("validation:",validation);
    // console.log("object validation details:");
    // console.log("number:", form.values.number);
    // console.log("cvc:", form.values.cvc);
    // console.log("expiry:", form.values.expiry);
    // console.log("name:", form.values.name);
    // console.log("status-name:", form.status.name);
    // console.log("status-expiry:", form.status.expiry);
    // console.log("status-number:", form.status.number);
    // console.log("status-cvc:", form.status.cvc);
  };
  // const _onChange = (form) =>  setValidation(form) ;
  const _onFocus = (field) => console.log("focusing", field);
 
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
                      backgroundColor: fieldCheck ? "#999" : "#FBB03B",
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

            {/* {store.signUp === -1 && ( */}
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
                      flexDirection: "column",
                      // justifyContent: "flex-end,
                      alignItems: "center",
                      marginBottom: 2,
                    marginTop: -20,
                    // paddingBottom:0
                      // paddingHorizontal:20
                    }}
                  >
                    <Text
                      style={{
                        flex: 1,
                        color: "white",
                      fontFamily: "fb-Spacer",
                      alignSelf: "baseline",
                      top: 15,
                      fontSize: 18,
                      // textDecorationLine: "underline",
                      // textDecorationStyle: "solid",
                      
                      }}
                    >
                    פרטי תשלום
                    </Text>
                    <View style={s.container}>
                    {/* <Switch
          style={s.switch}
                   /> */}
                    <CreditCardInput
                       ref={(c) => CCInput = c} 
                      autoFocus
                      requiresName
                      requiresCVC
                      // type={"master-card"}
                      // type
                      // requiresPostalCode
                      textDecorationColor={"transparent"}
                      textDecorationLine={"none"}
                      underlineColorAndroid ={"transparent"}
                      labelStyle={s.label}
                      inputStyle={s.input}
                      validColor={"black"}
                      invalidColor={"red"}
                      placeholderColor={"white"}
                      onFocus={_onFocus}
                      onChange={_onChange}
                      labels={{ number: "מספר כרטיס", expiry: "תוקף", cvc:"CW",name:"שם בעל הכרטיס" }}
                     
                      // placeholders={
                      //   { number: "מספר כרטיס", expiry: "תוקף", cvc: "                      CW", name: "שם בעל הכרטיס" }
                      // }
                      
                      allowScroll={true}
                      cardScale={1}
                      additionalInputsProps={
                        {
                          number:
                          {
                          // right:20,
                            // backgroundColor:"white",
                            
// right:20
                          },
                          name:{
                            textDecorationLine: "none",
                            underlineColorAndroid: "transparent",
                            // top:-20,
                          
                          },
                          cvc: {
                            // backgroundColor: "white",
                            // top:20,
                            
                          },
                          expiry: {
                            top:20
                          }

                        }
                      }

                  />

                    
                  </View>
                  </View>

                  
                    <View style={{flexDirection:"row", justifyContent:"center",paddingBottom:18}}>
                                      
                                  <Image
                      style={{
                        width: 170,
                        height: 50,
                        position: "relative",
                        // right: "2%",
                        // top: 3,
                        resizeMode: "contain",
                      }}
                      source={require("../../assets/home/toppng.com_visa_mastercard_american_express_logos_american_express_1530x261.png")}
                    />
                                 
                 </View>
                      
                {validation.valid === true ?  (
                <Button
                rounded
                style={{
                  backgroundColor: "#FBB03B",
                  // backgroundColor: fieldCheck ? "#999" : "#FBB03B",
                  // backgroundColor: "#FBB03B",
                  borderColor: "white",
                  borderWidth: 2,
                  borderRadius: 17,
                  flex: 1,
                  width: 170,
                  alignSelf: "center"

                  //   marginHorizontal: 70,
                }}
                    onPress={() => {
                      console.log("CCInput:",CCInput);
                      setReset(true);
                    console.log("form or validation", validation);
                    navigation.navigate("PaymentAnnouncment");
                 
                    
                    () =>{
                      CCInput.setValues.values({
                        number: " ",
                        name: " ",
                        expiry: " ",
                        cvc:" "
                      });
                      }
                        
                      

                    dispatch(
                      SignUp(
                        validation
                      )
                    );
                  
                }
                }
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
                ) : (
                  <Button
                  // disabled={fieldCheck}
                  disabled
                  // disabled={true}
                  rounded
                  style={{
                    backgroundColor: "#999",
                    // backgroundColor: fieldCheck ? "#999" : "#FBB03B",
                    // backgroundColor: "#FBB03B",
                    borderColor: "white",
                    borderWidth: 2,
                    borderRadius: 17,
                    flex: 1,
                    width: 170,
                    alignSelf: "center"

                    //   marginHorizontal: 70,
                  }}
                  onPress={ () => {
                     
                      console.log("form or validation", validation);
                      navigation.navigate("PaymentAnnouncment");
                   

                      dispatch(
                        SignUp(
                          validation
                        )
                      );
                    
                  }
                  }
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
)
}
 
                              </View>
          
                              
              </>
            {/* )} */}
          </View>

          <ColorLine />
        </View>
      </ScrollView>
    </>
  );
};

export default Payment;
