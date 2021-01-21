import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";

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

const ChooseNumOfTables = ({ settableNum, tableNum }) => {
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
        <Text style={{ fontSize: 15, color: "white" }}>
          בחר מספר טבלאות למילוי
        </Text>
        <View style={{}}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 7||8 ? "#8CC63F" : "white",
                borderColor: "white",
                borderWidth: 1,
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
                
              }}
              onPress={() => {
                {
                  route.name === "LottoList" ? (
                    
                    settableNum(7)
                  ) :
                  route.name === "LottoShitatyList" ?(
                    settableNum(8)
                ) : null
                } 

              }}
            >
                 {
                  route.name === "LottoPage" ? (
                  <Text style={{ color: tableNum === 7 ? "white" : "#8CC63F" }}>7</Text>
                    ) :
                  route.name === "LottoShitatyPage" ?(
                    <Text style={{ color: tableNum === 8 ? "white" : "#8CC63F" }}>8</Text>
                    ) : null
                }
              {/* <Text style={{ color: "black" }}>7</Text> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 6 ? "#8CC63F" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                // settableNum(6);
                
                route.name === "LottoList" ? (

                  settableNum(6)
                ) :
                  route.name === "LottoShitatyList" ? (
                    settableNum(0)
              ) : null
              } 
              }
            >
              {/* <Text>6</Text> */}

              {
                route.name === "LottoPage" ? (

                  <Text
                    style={{ color: "black" }}>6</Text>
                ) :
                  route.name === "LottoShitatyPage" ? (
                    <Text style={{ color: tableNum === 6  ? "white" : "black" }}>6=5</Text>
                    ) : null
                }



            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 5|| tableNum === 9 ? "#8CC63F" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                // settableNum(5);


                route.name === "LottoList" ? (

                  settableNum(5)
                ) :
                route.name === "LottoShitatyList" ?(
                  settableNum(9)
              ) : null
              } 

              }
            >
              {/* <Text>5</Text> */}
              {route.name === "LottoPage" ? (<Text>5</Text>)
                : route.name === "LottoShitatyPage" ? (<Text>9</Text>) 
            : null }
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 4|| tableNum ===10 ? "#8CC63F" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                // settableNum(4);

                {
                  route.name === "LottoList" ? (
  
                    settableNum(4)
                  ) :
                  route.name === "LottoShitatyList" ?(
                    settableNum(10)
                ) : null
                } 

              }}
            >

              {route.name === "LottoList" ? (
              <Text>4</Text>                
              ) :
              <Text>10</Text>
              }

               {/* <Text>4</Text> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 3 || tableNum === 11 ? "#8CC63F" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                // settableNum(3);
                {
                  route.name === "LottoList" ? (
  
                    settableNum(3)
                  ) :
                  route.name === "LottoShitatyList" ?(
                    settableNum(11)
                ) : null
                } 
              }}
            >
              {/* <Text>3</Text> */}
              {route.name === "LottoList" ? (
              <Text>3</Text>                
              ) :
              <Text>11</Text>
              }

            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 2 || tableNum === 12 ? "#8CC63F" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                // settableNum(2);
                {
                  route.name === "LottoList" ? (
  
                    settableNum(2)
                  ) :
                  route.name === "LottoShitatyList" ?(
                    settableNum(12)
                ) : null
                } 
              }}
            >
              {/* <Text>2</Text> */}
              {route.name === "LottoList" ? (
              <Text>2</Text>                
              ) :
              <Text>12</Text>
              }
            </TouchableOpacity>
            {route.name === "LottoList" && (
              <TouchableOpacity
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 30,
                  backgroundColor: tableNum === 1 || tableNum === 12 ? "#8CC63F" : "white",
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  settableNum(1);
                }}
              >
                <Text>1</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </>
  );
};

export default ChooseNumOfTables;
