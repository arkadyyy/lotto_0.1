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
                
                backgroundColor: route.name==="LottoPage" && tableNum === 2 || route.name==="LottoShitatiPage" && tableNum === 8 ? "#8CC63F" : "white",
                borderColor: "white",
                borderWidth: 1,
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
                
              }}
              onPress={() => {
                {
                  route.name === "LottoPage" ? (
                    
                    settableNum(2)
                  // ) :
                  // route.name === "LottoShitatyList" ?(
                  //   settableNum(8)
                ) : null
                } 

              }}
            >
                 {
                  route.name === "LottoPage" ? (
                  <Text style={{ color: tableNum === 2 ? "white" : "#E62321" }}>2</Text>
                    ) :
                  route.name === "LottoShitatyPage" ?(
                    <Text style={{ color: tableNum === 8 ? "white" : "#E62321" }}>8</Text>
                    ) : null
                }
              {/* <Text style={{ color: "black" }}>7</Text> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 4 ? "#8CC63F" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                settableNum(4);
                
              //   route.name === "LottoList" ? (

              //     settableNum(6)
              //   ) :
              //     route.name === "LottoShitatyList" ? (
              //       settableNum(0)
              // ) : null
              } 
              }
            >
              {/* <Text>6</Text> */}

                {
                  route.name === "LottoPage" ? (
                  <Text style={{ color: tableNum === 4 ? "white" : "#E62321" }}>4</Text>
                    ) :
                  route.name === "LottoShitatyPage" ?(
                    <Text style={{ color: tableNum === 6 ? "white" : "#E62321" }}>6=5</Text>
                    ) : null
                }


            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                // backgroundColor: tableNum === 5|| tableNum === 9 ? "#8CC63F" : "white",
                backgroundColor: tableNum === 6 ? "#8CC63F" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                // settableNum(5);


                route.name === "LottoPage" ? (

                  settableNum(6)
                // ) :
                // route.name === "LottoShitatyList" ?(
                //   settableNum(9)
              ) : null
              } 

              }
            >
              
              
              {
                  route.name === "LottoPage" ? (
                  <Text style={{ color: tableNum === 6 ? "white" : "#E62321" }}>6</Text>
                    ) :
                  route.name === "LottoShitatyPage" ?(
                    <Text style={{ color: tableNum === 9 ? "white" : "#E62321" }}>9</Text>
                    ) : null
                }


            </TouchableOpacity>
            <TouchableOpacity
                
              style={{

              

                width: 25,
                height: 25,
                borderRadius: 30,
                
                backgroundColor: route.name==="LottoPage" && tableNum === 8 || route.name==="LottoShitatiPage" && tableNum === 10 ? "#8CC63F" : "white",

                margin: 5,
                justifyContent: "center",
                alignItems: "center",
                         
        
             
              }}

          
          
              onPress={() => {
                

                {
                  route.name === "LottoPage" ? (
  
                    settableNum(8)
                  ) :
                  route.name === "LottoShitatyList" ?(
                    settableNum(10)
                ) : null
                } 

              }}
            >


                  {
                  route.name === "LottoPage" ? (
                  <Text style={{ color: tableNum === 8 ? "white" : "#E62321" }}>8</Text>
                    ) :
                  route.name === "LottoShitatyPage" ?(
                    <Text style={{ color: tableNum === 10 ? "white" : "#E62321" }}>10</Text>
                    ) : null
                }


           
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 10 || tableNum === 11 ? "#8CC63F" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
              
                {
                  route.name === "LottoPage" ? (
  
                    settableNum(10)
                  ) :
                  route.name === "LottoShitatyPage" ?(
                    settableNum(11)
                ) : null
                } 
              }}
            >
              
              {
                  route.name === "LottoPage" ? (
                  <Text style={{ color: tableNum === 10 ? "white" : "#E62321" }}>10</Text>
                    ) :
                  route.name === "LottoShitatyPage" ?(
                    <Text style={{ color: tableNum === 11 ? "white" : "#E62321" }}>11</Text>
                    ) : null
                }

            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: tableNum === 12 ? "#8CC63F" : "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                // settableNum(2);
                {
                  route.name === "LottoPage" ? (
  
                    settableNum(12)
                  ) :
                  route.name === "LottoShitatyList" ?(
                    settableNum(12)
                ) : null
                } 
              }}
            >
              
              {
                  route.name === "LottoPage" ? (
                  <Text style={{ color: tableNum === 12 ? "white" : "#E62321" }}>12</Text>
                    ) :
                  route.name === "LottoShitatyPage" ?(
                    <Text style={{ color: tableNum === 12 ? "white" : "#E62321" }}>12</Text>
                    ) : null
                }

            </TouchableOpacity>
            {route.name === "LottoPage" && (
              <TouchableOpacity
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 30,
                  backgroundColor: tableNum === 14 ? "#8CC63F" : "white",
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  settableNum(14);
                }}
              >
                 {
                  route.name === "LottoPage" ? (
                  <Text style={{ color: tableNum === 14 ? "white" : "#E62321" }}>14</Text>
                    
                    ) : null
                }
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </>
  );
};

export default ChooseNumOfTables;
