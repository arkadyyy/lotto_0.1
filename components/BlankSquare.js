import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
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

const BlankSquare = ({ color,gameName }) => {
  const route = useRoute();

  return (
    <>
      {route.name === "UserArea" ? (
        <View>
          <View
            style={{ width: "100%", height: 7, backgroundColor: color }}
          ></View>
          <View
            style={{ backgroundColor: "white", width: "100%", height: 100 }}
          ></View>
          <View
            style={{ width: "100%", height: 7, backgroundColor: color }}
          ></View>
        </View>
      ) : (
        <View>
          <View
            style={{ width: "100%", height: 7, backgroundColor: color }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              height: 100,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View>
              <Text style={{ fontSize: 19 }}>{gameName} </Text>
              <Text>עד 10,000,000 </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View>
                <View>
                  <View style={{ margin: 5, flexDirection: "row" }}>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 30,
                        backgroundColor: color,

                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ color: "white" }}>00</Text>
                    </View>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 30,
                        backgroundColor: color,

                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ color: "white" }}>00</Text>
                    </View>
                  </View>
                  <Text style={{ marginLeft: 15, fontSize: 10 }}>שניות</Text>
                </View>
              </View>
              <View>
                <View>
                  <View style={{ margin: 5, flexDirection: "row" }}>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 30,
                        backgroundColor: color,

                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ color: "white" }}>00</Text>
                    </View>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 30,
                        backgroundColor: color,

                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ color: "white" }}>00</Text>
                    </View>
                  </View>
                  <Text style={{ marginLeft: 15, fontSize: 10 }}>דקות</Text>
                </View>
              </View>
              <View>
                <View>
                  <View style={{ margin: 5, flexDirection: "row" }}>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 30,
                        backgroundColor: color,

                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ color: "white" }}>00</Text>
                    </View>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 30,
                        backgroundColor: color,

                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ color: "white" }}>00</Text>
                    </View>
                  </View>
                  <Text style={{ marginLeft: 15, fontSize: 10 }}>שעות</Text>
                </View>
                <Button
                  small
                  rounded
                  bordered
                  style={{
                    backgroundColor: "white",
                    borderColor: "red",
                    padding: 3,
                  }}
                >
                  <Text style={{ color: "red", fontSize: 10 }}>
                    ארכיון תוצאות
                  </Text>
                </Button>
              </View>
            </View>
          </View>
          <View
            style={{ width: "100%", height: 7, backgroundColor: color }}
          ></View>
          {route.name === "LottoList" ? (
            <Image
              resizeMode='contain'
              style={{
                width: 100,
                height: 50,
                position: "relative",
                left: "35%",
                top: -30,

                marginBottom: -30,
              }}
              source={require("C:/fullstack/lottoMatic/assets/LottoPage/lotto_page_balls.png")}
            />
          ) : route.name === "LottoPage" ? (
            <Image
              resizeMode='contain'
              style={{
                width: 100,
                height: 50,
                position: "relative",
                left: "35%",
                top: -30,

                marginBottom: -30,
              }}
              source={require("C:/fullstack/lottoMatic/assets/LottoPage/lotto_page_balls.png")}
            />
          ) : route.name === "ChanceList" ? (
            <Image
              resizeMode='contain'
              style={{
                width: 100,
                height: 50,
                position: "relative",
                left: "35%",
                top: -30,

                marginBottom: -30,
              }}
              source={require("C:/fullstack/lottoMatic/assets/chance/chance_page.png")}
            />
          ) : route.name === "ChancePage" ? (
            <Image
              resizeMode='contain'
              style={{
                width: 100,
                height: 50,
                position: "relative",
                left: "35%",
                top: -30,

                marginBottom: -30,
              }}
              source={require("C:/fullstack/lottoMatic/assets/chance/chance_page.png")}
            />
          ) : route.name === "Sheva77List" ? (
            <Image
              resizeMode='contain'
              style={{
                width: 100,
                height: 50,
                position: "relative",
                left: "35%",
                top: -30,

                marginBottom: -30,
              }}
              source={require("C:/fullstack/lottoMatic/assets/777/777.png")}
            />
              ) : route.name === "One23List" ? (
            <Image
              resizeMode='contain'
              style={{
                width: 100,
                height: 50,
                position: "relative",
                left: "35%",
                top: -30,

                marginBottom: -30,
              }}
              source={require("C:/fullstack/lottoMatic/assets/777/777.png")}
            />
          ) : null}
        </View>
      )}
    </>
  );
};

export default BlankSquare;
