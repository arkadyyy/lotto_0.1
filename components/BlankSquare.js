import React from "react";
import { View, Text } from "react-native";
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

const BlankSquare = ({ color }) => {
  const route = useRoute();
  return (
    <>
      {route.name === "UserArea" && (
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
      )}
      {route.name === "LottoPage" && (
        <View style={{ marginBottom: 6 }}>
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
              <Text style={{ fontSize: 19 }}>הגרלת לוטו </Text>
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
                  <Text style={{ marginLeft: 15 }}>שניות</Text>
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
                  <Text style={{ marginLeft: 15 }}>דקות</Text>
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
                  <Text style={{ marginLeft: 15 }}>שעות</Text>
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
        </View>
      )}
    </>
  );
};

export default BlankSquare;
