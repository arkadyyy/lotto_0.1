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
import signInstyles from "./SignInStyles";
import {
  Button,
  Label,
  Spinner,
} from "native-base";
import { Auth } from "aws-amplify";
import EStyleSheet from "react-native-extended-stylesheet";

import NavBar from "../../components/NavBar";
import { color } from "react-native-reanimated";
// import ColorLine from "./components/ColorLine";
import { useSelector, useDispatch } from "react-redux";
// import { SignUp, SignUpConfirmation } from "../../redux/actions/actions";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

///////////////////////////////////////////////////////////////////////





const PaymentAnnouncment = ({ navigation }) => {
 
 
  return (
    <>
      <NavBar navigation={navigation} screenName={"PaymentAnnouncment"} />

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
           

                          <>
                              <View style={[signInstyles.whiteSquare], { height: EStyleSheet.value("$rem") * 400 }}>
                              <Text
                    style={{
                      fontSize: EStyleSheet.value("$rem") * 20,
paddingTop:EStyleSheet.value("$rem") * 10,
                                          fontFamily: "fb-Spacer-bold",
                      right:EStyleSheet.value("$rem") * 80
                    }}
                  >
התשלום בוצע בהצלחה!    </Text>
                </View>

              <TouchableOpacity
                 style={{
                  backgroundColor: "#FBB03B",
                  // backgroundColor: fieldCheck ? "#999" : "#FBB03B",
                  // backgroundColor: "#FBB03B",
                  borderColor: "white",
                  borderWidth: 2,
                  borderRadius: 17,
                  height:50,
                  width: 170,
                  alignSelf: "center"

                  //   marginHorizontal: 70,
                }}
              onPress={()=>navigation.navigate("Home")}
              >
                <Text>
                  חזור למסך הבית
                </Text>
                </TouchableOpacity>
              
          
                              
              </>
            
          </View>

          <ColorLine />
        </View>
      </ScrollView>
    </>
  );
};

export default PaymentAnnouncment;
