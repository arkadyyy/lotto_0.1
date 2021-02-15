import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

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
import chooseFormStyles from "./chooseFormStyles";
import { useRoute } from "@react-navigation/native";



const ChooseForm = ({numOfNum,sheva77,setSheva77,sheva78,setSheva78,sheva79,setSheva79,navigation}) => {
  const route = useRoute();

  
  useEffect(() => {
   console.log("numOfNum:",numOfNum);
      //   setSheva77(true);
      //   setSheva78(false);
      // setSheva79(false);
      // console.log("777777");
    
    console.log("route:",route.name);
  },[route.name])
  
  return (
    <>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: 15,
            flex: 4,
          }}
        >
          <Text style={{ fontFamily: "fb-Spacer" }}>בחר סוג טופס</Text>
          <View>
            <Button
              small
              rounded
              style={
                sheva77 === true
                  ? chooseFormStyles.radioTrueButon
                  : chooseFormStyles.radioFalseButon
              }
              onPress={() => {
                setSheva77(true);
                setSheva78(false);
                setSheva79(false);
                navigation.navigate("Sheva77Page");

              }}
            >
              <Text style={{ fontFamily: "fb-Spacer-bold" }}>777</Text>
            </Button>
          </View>

          <View>
            <Button
              small
              rounded
              style={
                sheva78 === true
                  ? chooseFormStyles.radioTrueButon
                  : chooseFormStyles.radioFalseButon
              }
              onPress={() => {
                setSheva78(true);
                setSheva77(false);
                setSheva79(false);
                navigation.navigate("Sheva778Page");
              }}
            >
              <Text style={{ fontFamily: "fb-Spacer-bold" }}>778</Text>
            </Button>
          </View>
          <View>
            <Button
              small
              rounded
              style={
                sheva79 === true
                  ? chooseFormStyles.radioTrueButon
                  : chooseFormStyles.radioFalseButon
              }
              onPress={() => {
                setSheva79(true);
                setSheva78(false);
                setSheva77(false);
                navigation.navigate("Sheva779Page"), {
                  // sheva77: sheva77,
                  // sheva78: sheva78,
                  // sheva79: sheva79,
                };

              }}
            >
              <Text style={{ fontFamily: "fb-Spacer-bold" }}>779</Text>
            </Button>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          <View style={{ padding: 10 }}>
            {/* <Text style={{ color: "#E62321", fontFamily: "fb-Spacer-bold" }}>
              שלח טופס
            </Text> */}
          
        </View>
        </View>
      </View>
    </>
  );
};

export default ChooseForm;
