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

const BlankSquare = ({ color }) => {
  const route = useRoute();
  const [routeName, setrouteName] = useState("");

  useEffect(() => {
    setrouteName(route.name);
  }, [route.name]);
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
            // source={require("C:/fullstack/lottoMatic/assets/LottoPage/lotto_page_balls.png")}
            source={require("C:/fullstack/lottoMatic/assets/LottoPage/lotto_page_balls.png")}
          />
        </View>
      )}
      {route.name === "LottoList" && (
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
          {/* <View
            style={{ width: "100%", height: 7, backgroundColor: color }}
          ></View> */}
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
            // source={require("C:/fullstack/lottoMatic/assets/LottoPage/lotto_page_balls.png")}
            source={require("C:/fullstack/lottoMatic/assets/LottoPage/lotto_page_balls.png")}
          />
        </View>
      )}
      {route.name === "ChanceList" && (
        <View>
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              height: "12%",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View>
              <Text style={{ fontSize: 19, fontWeight: "bold" }}>
                הגרלת צ'אנס{" "}
              </Text>
              <Text style={{ fontSize: 19, fontWeight: "bold" }}>
                עד 10,000,000{" "}
              </Text>
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
                    borderColor: "#009C4B",
                    padding: 3,
                  }}
                >
                  <Text style={{ color: "#009C4B", fontSize: 10 }}>
                    ארכיון תוצאות
                  </Text>
                </Button>
              </View>
            </View>
          </View>
          <View
            style={{ width: "100%", height: 7, backgroundColor: color }}
          ></View>
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
            // source={require("../../lotto_0.1/assets/home/spade.png")}
          />
        </View>
      )}
      {route.name === "ChancePage" && (
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
                    borderColor: color,
                    padding: 3,
                  }}
                >
                  <Text style={{ color: color, fontSize: 10 }}>
                    ארכיון תוצאות
                  </Text>
                </Button>
              </View>
            </View>
          </View>
          <View
            style={{ width: "100%", height: 7, backgroundColor: color }}
          ></View>
          <Image
            resizeMode='contain'
            style={{
              width: 110,
              height: 60,
              position: "relative",
              left: "35%",
              top: -30,

              marginBottom: -30,
            }}
            source={require("C:/fullstack/lottoMatic/assets/chance/chance_page.png")}
          />
        </View>
      )}
      {route.name === "Sheva77List" && (
        <View>
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              height: "12%",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View>
              <Text style={{ fontSize: 19, fontWeight: "bold" }}>
                הגרלת 777{" "}
              </Text>
              <Text style={{ fontSize: 19, fontWeight: "bold" }}>
                עד 10,000,000{" "}
              </Text>
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
                    borderColor: "#009C4B",
                    padding: 3,
                  }}
                >
                  <Text style={{ color: "#FF006A", fontSize: 10 }}>
                    ארכיון תוצאות
                  </Text>
                </Button>
              </View>
            </View>
          </View>
          <View
            style={{ width: "100%", height: 7, backgroundColor: color }}
          ></View>
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
            // source={require("../../lotto_0.1/assets/home/seven.png")}
            source={require("C:/fullstack/lottoMatic/assets/home/seven.png")}
          />
        </View>
      )}

      {route.name === "One23List" && (
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
              <Text style={{ fontSize: 19 }}>הגרלת 123 </Text>
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
          {/* <Image
            resizeMode='contain'
            style={{
              width: 100,
              height: 50,
              position: "relative",
              left: "35%",
              top: -30,

              marginBottom: -30,
            }}
            source={require("C:\fullstack\lottoMatic\assets\home\_123_sml.png")}
          /> */}
        </View>
      )}

      {route.name === "one23Page" && (
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
        </View>
      )}
    </>
  );
};

export default BlankSquare;
