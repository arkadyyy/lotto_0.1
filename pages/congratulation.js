import React from "react";
import { useState } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  View,
  Image,
} from "react-native";
import homestyles from "./Home/HomeStyles";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Card,
  CardItem,
} from "native-base";
import Hr from "react-native-hr-component";
import NavBar from "../components/NavBar";
import styles from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleDoubleLeft, faChevronDown, faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import BlankSquare from "../components/BlankSquare";
import signInstyles from "./SignIn/SignInStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

//////////////////////////////////////////////////////////////

export default function congratulation ({ navigation }) {
  return (
    <>
      <NavBar navigation={navigation} screenName={"congratulation"} />
      <View

style={{
  width: "100%", height: 7,
  // backgroundColor:pageComeFrom==="sideBar"? "#00ADEF" : "#F2F2F2"
  backgroundColor: "#00ADEF"
}}
      ></View>
          <View style={signInstyles.blanksquare}></View>
       <View

style={{
  width: "100%", height: 7,
  // backgroundColor:pageComeFrom==="sideBar"? "#00ADEF" : "#F2F2F2"
  backgroundColor: "#00ADEF"
}}
></View>
      <View style={{
        height: 350,
        width: "90%",
        backgroundColor: "#263742",
        alignSelf: "center",
        marginTop: 40,
        marginBottom: 40,
        justifyContent: "center",
        
        
      }} >
        <View style={{}}>
        <Image
                  style={{ width: 90, height: 90,alignSelf:"center" }}
          source={require("../../lottoMatic/assets/congradulation.png")}
          tintColor='#00ADEF'
              />
          
        </View>
        <Text style={{color:"white",fontFamily: "fb-Spacer-bold"}}>
        ברכות!
        </Text>  
        <Text style={{color:"white",fontFamily: "fb-Spacer-bold"}}>
          הטופס שלך נשלח בהצלחה.
        </Text>  
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("UserArea");
          }}
        >
          <View style={{flexDirection:"row"}}>
        <Text style={{color:"white",fontFamily: "fb-Spacer-bold"}}>
            עבור לאזור אישי
          </Text>
          <FontAwesomeIcon color={"white"} size={"10"} icon={faAngleDoubleLeft}/>
          </View>
        </TouchableOpacity>
      </View>
      
      <ColorLine />

    </>
  );
}
