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
  // Col,
  Row
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const Table = ({ setshowTable, double, index, setopendTableNum }) => {
  const index1 = index * 2 - 1;
  const index2 = index * 2;
  const route = useRoute();

  return (
    <>
      <ListItem
        style={{
          backgroundColor: "#8CC63F",
          flexWrap: "wrap",
          marginTop: 4,
          height: 55,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 13 }}>טבלה {index1} </Text>
        <TouchableOpacity
          onPress={() => {
            setshowTable(true);
            setopendTableNum(index1);
          }}
        >
          <View style={{ flexDirection: "row" }}>
           
            {route.name === "LottoPage" && (
               <>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",

                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "black" }}>7</Text>
            </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>6</Text>
            </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>5</Text>
            </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>4</Text>
            </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>3</Text>
            </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>2</Text>
            </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>1</Text>
                </View>
                </>
            )}
            {route.name === "LottoShitatyPage" && (
              <>
              
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",

                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "black" }}>2</Text>
                    </View>
                   
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>3</Text>
                    </View>
                   
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>4</Text>
                    </View>
                   
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>5</Text>
                    </View>
                  
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>6</Text>
                      </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>7</Text>
                      </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>6</Text>
                      </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 30,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>7</Text>
                      </View>
                </>
            )}
              
          </View>
        </TouchableOpacity>
        {double && (
          <View
            style={{
              width: 35,
              height: 35,
              backgroundColor: "#FF838C",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 20,
              position: "absolute",
              left: 255,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>X2</Text>
          </View>
        )}
      </ListItem>
      {route.name === "LottoPage" && (
              <>
      <ListItem
        style={{
          backgroundColor: "#8CC63F",
          flexWrap: "wrap",
          marginTop: 4,
          height: 55,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 13 }}>טבלה {index2}</Text>
        <TouchableOpacity
          onPress={() => {
            setopendTableNum(index2);
            setshowTable(true);
          }}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            {/* {route.name === "LottoPage" && (
              <> */}
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 30,
                    backgroundColor: "white",

                    margin: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "black" }}>7</Text>
                </View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 30,
                    backgroundColor: "white",
                    margin: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>6</Text>
                </View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 30,
                    backgroundColor: "white",
                    margin: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>5</Text>
                </View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 30,
                    backgroundColor: "white",
                    margin: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>4</Text>
                </View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 30,
                    backgroundColor: "white",
                    margin: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>3</Text>
                </View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 30,
                    backgroundColor: "white",
                    margin: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>2</Text>
                </View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 30,
                    backgroundColor: "white",
                    margin: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>1</Text>
                </View>
            
            
             
          </View>
        </TouchableOpacity>
        {double && (
          <View
            style={{
              width: 35,
              height: 35,
              backgroundColor: "#FF838C",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 20,
              position: "absolute",
              left: 255,
              justifyContent: "center",
              alignItems: "center",
              zIndex: 3,
            }}
          >
            <Text style={{ color: "white" }}>X2</Text>
          </View>
        )}
      </ListItem>
      </>)}
    </>
  );
};

export default Table;
