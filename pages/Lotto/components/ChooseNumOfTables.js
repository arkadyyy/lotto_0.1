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

const ChooseNumOfTables = ({ settableNum, tableNum, tzerufimNumber,setTzerufimNumber }) => {
  const route = useRoute();

  return (
    <>
      {route.name === "LottoPage" && (
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
                  borderColor: "white",
                  borderWidth: 1,
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: tableNum === 2 ? "#8CC63F" : "white",
                 

                }}
                onPress={() => {
                  settableNum(2)


                }}
              >
                                 <Text style={{ color: tableNum === 2 ? "white" : "#E62321" }}>2</Text>

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
                  settableNum(4)
                            
                }
                }
              >
             

             <Text style={{ color: tableNum === 4 ? "white" : "#E62321" }}>4</Text>



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
                  settableNum(6)

                }

                }
              >
              
              
              <Text style={{ color: tableNum === 6 ? "white" : "#E62321" }}>6</Text>



              </TouchableOpacity>
              <TouchableOpacity
                
                style={{

              

                  width: 25,
                  height: 25,
                  borderRadius: 30,
                  backgroundColor: tableNum === 8 ? "#8CC63F" : "white",
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}

          
          
                onPress={() => {
                

                  settableNum(8)


                }}
              >


<Text style={{ color: tableNum === 8 ? "white" : "#E62321" }}>8</Text>


           
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 30,
                  backgroundColor: tableNum === 10  ? "#8CC63F" : "white",
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
              
                  settableNum(10)

                }}
              >
              
              <Text style={{ color: tableNum === 10 ? "white" : "#E62321" }}>10</Text>


              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 30,
                  backgroundColor: tableNum === 12  ? "#8CC63F" : "white",
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  settableNum(12)

                }}
              >
              
              <Text style={{ color: tableNum === 12 ? "white" : "#E62321" }}>12</Text>


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
      )}

{route.name === "LottoShitatiPage" && (
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
              בחר מספר צירופים למילוי
            </Text>
          
          <View style={{}}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 30,
                  borderColor: "white",
                  borderWidth: 1,
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: tzerufimNumber === 8 ? "#8CC63F" : "white",
                 
                }}
                onPress={() => {
                 
                      
                        setTzerufimNumber(8)
                    

                }}
              >
               
                      <Text style={{ color: tzerufimNumber === 8 ? "white" : "#E62321" }}>8</Text>
                   
                {/* <Text style={{ color: "black" }}>7</Text> */}
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 30,
                  backgroundColor: tzerufimNumber === 5 ? "#8CC63F" : "white",
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                 
                     
                        setTzerufimNumber(5)
                      
                
              
                }
                }
              >
             

                
                
                      <Text style={{ color: tzerufimNumber === 5 ? "white" : "#E62321" }}>6=5</Text>
                  


              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 30,
                  // backgroundColor: tableNum === 5|| tableNum === 9 ? "#8CC63F" : "white",
                  backgroundColor:  tzerufimNumber === 9 ? "#8CC63F" : "white",
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  setTzerufimNumber(9)

                }

                }
              >
              
              
              <Text style={{ color: tzerufimNumber === 9 ? "white" : "#E62321" }}>9</Text>



              </TouchableOpacity>
              <TouchableOpacity
                
                style={{

              

                  width: 25,
                  height: 25,
                  borderRadius: 30,
                  backgroundColor: tzerufimNumber === 10 ? "#8CC63F" : "white",
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}

          
          
                onPress={() => {
                

                  setTzerufimNumber(10)


                }}
              >

<Text style={{ color: tzerufimNumber === 10 ? "white" : "#E62321" }}>10</Text>


           
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 30,
                  backgroundColor: tzerufimNumber === 11 ? "#8CC63F" : "white",
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
              
                  setTzerufimNumber(11)

                }}
              >
              
              <Text style={{ color: tzerufimNumber === 11 ? "white" : "#E62321" }}>11</Text>


              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 30,
                  backgroundColor:  tzerufimNumber === 12 ? "#8CC63F" : "white",
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  setTzerufimNumber(12)

                }}
              >
              
              <Text style={{ color: tzerufimNumber === 12 ? "white" : "#E62321" }}>12</Text>


              </TouchableOpacity>
              
            </View>
          </View>
        </View>
      )}

    </>
  );
};

export default ChooseNumOfTables;
