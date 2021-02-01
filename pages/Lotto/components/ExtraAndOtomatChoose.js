import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faCheck,faCheckCircle,faTimes,faQuestion, faQuestionCircle
  } from "@fortawesome/free-solid-svg-icons";
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
  List,
  ListItem,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const ExtraAndOtomatChoose = ({
  settableNum,
  tableNum,
  tzerufimNumber,
  setTzerufimNumber,
  hazakimNumber,
  setHazakimNumber,
}) => {
  const route = useRoute();

  return (
    <>
        <View
          style={{
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 7,
            width: "90%",
            margin: 10,
          padding: 10,
            
          }}
      >
        
          <Text style={{ fontSize: 25, color: "white",marginTop:10,marginBottom:5 }}>
          אוטומטי מתחדש
          </Text>
        <View style={{ flexDirection: "row"  }}>
        <View style={{
              borderRadius: 30,
              borderColor: "#8CC63F",
              borderWidth: 2,
              // margin: 5,
              justifyContent: "center",
            alignItems: "center",
            height: 25,
            width: 25,
              top:6
              // backgroundColor: tableNum === 2 ? "#8CC63F" : "white",
            }}>
          <FontAwesomeIcon
            
            icon={faCheck}
            color='#8CC63F'
            />
          </View>
      
        
              <TouchableOpacity
                style={{
                  width: 90,
                  height: 30,
                  borderRadius: 30,
                  borderColor: "#8CC63F",
                  borderWidth: 1,
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FF0000",
                }}
                onPress={() => {
                  settableNum(2);
                }}
              >
                <Text style={{ color:  "white" }}>
                          כן אוטומטי מתחדש
                </Text>
           
              </TouchableOpacity>

              <View style={{
              borderRadius: 30,
              borderColor: "white",
              borderWidth: 2,
              // margin: 5,
              justifyContent: "center",
            alignItems: "center",
            height: 25,
            width: 25,
              top:6
              // backgroundColor: tableNum === 2 ? "#8CC63F" : "white",
            }}>
          <FontAwesomeIcon
            
            icon={faTimes}
            color='white'
            />
          </View>

              <TouchableOpacity
                style={{
                  width: 90,
                  height: 30,
                  borderRadius: 30,
                  borderColor: "white",
                  borderWidth: 1,
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FF0000",
                }}
                onPress={() => {
                  settableNum(2);
                }}
              >
                <Text style={{ color:  "white" }}>
                          לא אוטומטי מתחדש
                </Text>
              </TouchableOpacity>
                <Left>
          <FontAwesomeIcon
              icon={faQuestionCircle}
            color='white'
            backgroundColor="white"
            inverse />
              </Left>
        </View>
         
        
        </View>
        <View
          style={{
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 7,
            width: "90%",
            margin: 10,
          padding: 10,
            
          }}
      >
        
          <Text style={{ fontSize: 25, color: "white",marginTop:10,marginBottom:5 }}>
          אקסטרה
          </Text>
        <View style={{ flexDirection: "row"  }}>
        <View style={{
              borderRadius: 30,
              borderColor: "#8CC63F",
              borderWidth: 2,
              // margin: 5,
              justifyContent: "center",
            alignItems: "center",
            height: 25,
            width: 25,
              top:6
              // backgroundColor: tableNum === 2 ? "#8CC63F" : "white",
            }}>
          <FontAwesomeIcon
            
            icon={faCheck}
            color='#8CC63F'
            />
          </View>
      
        
              <TouchableOpacity
                style={{
                  width: 90,
                  height: 30,
                  borderRadius: 30,
                  borderColor: "#8CC63F",
                  borderWidth: 1,
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FF0000",
                }}
                onPress={() => {
                  settableNum(2);
                }}
              >
                <Text style={{ color:  "white" }}>
                  כן אקסטרה
                </Text>
           
              </TouchableOpacity>

              <View style={{
              borderRadius: 30,
              borderColor: "white",
              borderWidth: 2,
              // margin: 5,
              justifyContent: "center",
            alignItems: "center",
            height: 25,
            width: 25,
              top:6
              // backgroundColor: tableNum === 2 ? "#8CC63F" : "white",
            }}>
          <FontAwesomeIcon
            
            icon={faTimes}
            color='white'
            />
          </View>

              <TouchableOpacity
                style={{
                  width: 90,
                  height: 30,
                  borderRadius: 30,
                  borderColor: "white",
                  borderWidth: 1,
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FF0000",
                }}
                onPress={() => {
                  settableNum(2);
                }}
              >
                <Text style={{ color:  "white" }}>
                        לא אקסטרה
                </Text>
              </TouchableOpacity>
                <Left>
          <FontAwesomeIcon
              icon={faQuestionCircle}
            color='white'
            backgroundColor="white"
            inverse />
              </Left>
        </View>
         
        
        </View>
      
     
    </>
  );
};

export default ExtraAndOtomatChoose;
