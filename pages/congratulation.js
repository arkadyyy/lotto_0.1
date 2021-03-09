import React, { useState,useEffect } from "react";
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
  faAngleDoubleLeft, faChevronDown, faChevronLeft, faTimes
} from "@fortawesome/free-solid-svg-icons";

import BlankSquare from "../components/BlankSquare";
import signInstyles from "./SignIn/SignInStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { CommonActions } from '@react-navigation/native';

//////////////////////////////////////////////////////////////

export default function congratulation({ navigation }) {
  // navigation.dispatch(
  //   CommonActions.reset({
  //     index: 1,
  //     routeNames: [''],

  //   })
  // );
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      e.preventDefault(); // Prevent default action
      unsubscribe() // Unsubscribe the event on first call to prevent infinite loop
      navigation.navigate('Home') // Navigate to your desired screen
    });
 }, [])
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
        padding: 10,
        // position:"relative"
        justifyContent:"space-evenly"
        
      }} >
        <TouchableOpacity style={{ top: -11, left: 5, backgroundColor: "#00ADEF", width: 25, height: 25, borderRadius: 30, justifyContent: "center", alignItems: "center" }}
         onPress={() => {
          navigation.navigate("Home");
        }}
        >

<FontAwesomeIcon icon={faTimes} color={"white"}/>


</TouchableOpacity>
        <View>
        <Image
                  style={{ width: 90, height: 90,alignSelf:"center" }}
          source={require("../../lottoMatic/assets/congradulation.png")}
          tintColor='#00ADEF'
              />
          
        </View>
        <Text style={{color:"white",fontFamily: "fb-Spacer-bold",fontSize:70,alignSelf:"center",top:-15}}>
        ברכות!
        </Text>  
        <Text style={{color:"white",fontFamily: "fb-Spacer-bold",fontSize:25,alignSelf:"center",top:-32}}>
          הטופס שלך נשלח בהצלחה.
        </Text>  
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("UserArea");
          }}
        >
          <View style={{flexDirection:"row",alignSelf:"center"}}>
        <Text style={{color:"white",fontFamily: "fb-Spacer-bold",fontSize:19,padding:4}}>
            עבור לאזור אישי
          </Text>
            <FontAwesomeIcon color={"white"} size={"10"} icon={faAngleDoubleLeft} style={{alignSelf:"center"}}/>
          </View>
        </TouchableOpacity>
      </View>
      
      <ColorLine />

    </>
  );
}
