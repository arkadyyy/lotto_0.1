import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import ExtraAndOtomatChooseStyles from "./ExtraAndOtomatChooseStyles.js"
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
import ExtraFormPage from "../../ExtraFormPage.js";

const ExtraAndOtomatChoose = ({
  settableNum,
  tableNum,
  tzerufimNumber,
  setTzerufimNumber,
  hazakimNumber,
  setHazakimNumber,
  screenName
}) => {
  
  const route = useRoute();
  const [otomatic, setOtomatic] = useState(true);
  const [extra, setExtra] = useState(true);
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
              borderColor:otomatic === false ? 'white' : "#8CC63F",
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
            color={otomatic === false ? 'white' : "#8CC63F"}
            />
          </View>
      
        
              <TouchableOpacity
            style={
              
              otomatic === true
                ? ExtraAndOtomatChooseStyles.selectedRadioButon
                : ExtraAndOtomatChooseStyles.notSelectedRadioButon
            }
            onPress={() => {
                  setOtomatic(true);
                }}
              >
                <Text style={{ color:"white" }}>
                          כן אוטומטי מתחדש
                </Text>
           
              </TouchableOpacity>
              <View style={{ marginLeft:4,marginTop:9, borderLeftColor:"white",height:20,width:10,borderLeftWidth:1 }}></View>

              <View style={{
              borderRadius: 30,
              borderColor: otomatic === true ? 'white' : "#8CC63F",
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
              color={otomatic === true ? 'white' : "#8CC63F"}
            />
          </View>

              <TouchableOpacity
            style={
              otomatic=== true
                ? ExtraAndOtomatChooseStyles.notSelectedRadioButon
            : ExtraAndOtomatChooseStyles.selectedRadioButon
              }
                onPress={() => {
                  setOtomatic(false);
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
      {screenName==="lottoPages" &&
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
          אקסטרה
          </Text>
        <View style={{ flexDirection: "row"  }}>
        <View style={{
              borderRadius: 30,
              borderColor: extra===true ? "#8CC63F" : "white",
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
            color={extra === false ? 'white' : "#8CC63F"}
            />
          </View>
      
        
              <TouchableOpacity
            style={
              extra === true
                ? ExtraAndOtomatChooseStyles.selectedRadioButon
                : ExtraAndOtomatChooseStyles.notSelectedRadioButon
             }
                onPress={() => {
                  setExtra(true);
                }}
              >
                <Text style={{ color:  "white" }}>
                  כן אקסטרה
                </Text>
           
              </TouchableOpacity>
              <View style={{ marginLeft:4,marginTop:9, borderLeftColor:"white",height:20,width:10,borderLeftWidth:1 }}></View>

              <View style={{
              borderRadius: 30,
              borderColor: extra === true ? 'white' : "#8CC63F",
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
            color={extra === true ? 'white' : "#8CC63F"}
            />
          </View>

              <TouchableOpacity
            style={
              extra === false
                ? ExtraAndOtomatChooseStyles.selectedRadioButon
                : ExtraAndOtomatChooseStyles.notSelectedRadioButon
            
            }
                onPress={() => {
                  setExtra(false);
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
      }
     
    </>
  );
};

export default ExtraAndOtomatChoose;
