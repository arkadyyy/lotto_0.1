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
import axios from "axios";
import EStyleSheet from "react-native-extended-stylesheet";

const Timer = ({ color, usedDate }) => {
  const [seconds, setseconds] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [hours, sethours] = useState(0);
  const [days, setdays] = useState(0);

  setInterval(() => {
    let countDownDate = new Date(usedDate).getTime();
    let now = new Date().getTime();
    let timeleft = countDownDate - now;

    let daysLeft = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    if (daysLeft > 0) {
      setdays(daysLeft);
    }
    let hoursLeft = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    if (hoursLeft > 0) {
      sethours(hoursLeft);
    }
    let minutesLeft = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    if (minutesLeft > 0) {
      setminutes(minutesLeft);
    }
    let secondsLeft = Math.floor((timeleft % (1000 * 60)) / 1000);
    if (secondsLeft > 0) {
      setseconds(secondsLeft);
    }

    // console.log("days : ", daysLeft);
    // console.log("hours : ", hoursLeft);
    // console.log("minutes : ", minutesLeft);
    // console.log("seconds : ", secondsLeft);
  }, 1000);

  useEffect(() => {}, []);

  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View>
          <View style={{ margin: 2, flexDirection: "row" }}>
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 7,
                backgroundColor: color,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>{Math.floor(seconds % 10)}</Text>
            </View>
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 7,
                backgroundColor: color,
                marginHorizontal: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>{Math.floor(seconds / 10)}</Text>
            </View>
          </View>
          <Text style={{ marginLeft: 18, fontSize: 10 }}>שניות</Text>
        </View>

        <View>
          <View>
            <View style={{ margin: 2, flexDirection: "row" }}>
              <View
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 7,
                  backgroundColor: color,
                  marginHorizontal: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>
                  {Math.floor(minutes % 10)}
                </Text>
              </View>
              <View
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 7,
                  backgroundColor: color,
                  marginHorizontal: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>
                  {Math.floor(minutes / 10)}
                </Text>
              </View>
            </View>
            <Text style={{ marginLeft: 15, fontSize: 10 }}>דקות</Text>
          </View>
        </View>
        <View>
          <View style={{ margin: 2, flexDirection: "row" }}>
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 7,
                backgroundColor: color,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>{Math.floor(hours % 10)}</Text>
            </View>
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 7,
                backgroundColor: color,
                marginHorizontal: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>{Math.floor(hours / 10)}</Text>
            </View>
          </View>
          <Text style={{ marginLeft: 18, fontSize: 10 }}>שעות</Text>
        </View>
        <View>
          <View>
            <View style={{ margin: 2, flexDirection: "row" }}>
              <View
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 7,
                  backgroundColor: color,
                  marginHorizontal: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>{Math.floor(days % 10)}</Text>
              </View>
              <View
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 7,
                  backgroundColor: color,
                  marginHorizontal: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>{Math.floor(days / 10)}</Text>
              </View>
            </View>
            <Text style={{ marginLeft: 15, fontSize: 10 }}>ימים</Text>
          </View>
          <Button
            small
            rounded
            bordered
            style={{
              backgroundColor: "white",
              borderColor: color,
              padding: 3,
              marginVertical: 15,
            }}
          >
            <Text style={{ color: color, fontSize: 10 }}>ארכיון תוצאות</Text>
          </Button>
        </View>
      </View>
    </>
  );
};

const BlankSquare = ({ color, gameName }) => {
  const route = useRoute();

  const [usedDate, setusedDate] = useState(0);
  const [subHeader, setsubHeader] = useState("");

  useEffect(() => {
    axios
      .get("http://52.90.122.190:5000/games/time")
      .then((res) => {
        if (
          route.name === "LottoPage" ||
          route.name === "LottoList" ||
          route.name === "DoubleLottoList" ||
          route.name === "LottoShitatiPage" ||
          route.name === "LottoShitatiHazakPage" ||
          route.name === "ExtraFormPage"
        ) {
          setusedDate(res.data["לוטו"].time);
          setsubHeader("עד 10,000,000 שח");
        } else if (
          route.name === "ChanceList" ||
          route.name === "ChancePage" ||
          route.name === "RavChancePage" ||
          route.name === "ChanceShitatiPage" ||
          route.name === "SumPageChance"
        ) {
          setusedDate(res.data["צ'אנס"].time);
          setsubHeader("כל שעתיים עד 120,000");
        } else if (
          route.name === "Sheva77List" ||
          route.name === "Sheva77Page" ||
          route.name === "Sheva78Page" ||
          route.name === "Sheva79Page" ||
          route.name === "SumPage777"
        ) {
          setusedDate(res.data["777"].time);
          setsubHeader("עד 70,000 פעמיים ביום");
        } else if (
          route.name === "One23Page" ||
          route.name === "One23List" ||
          route.name === "SumPage123"
        ) {
          setusedDate(res.data["123"].time);
          setsubHeader("כל טופס עד 120,000 ");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (
      route.name === "LottoPage" ||
      route.name === "LottoList" ||
      route.name === "DoubleLottoList" ||
      route.name === "LottoShitatiPage" ||
      route.name === "LottoShitatiHazakPage" ||
      route.name === "ExtraFormPage"
    ) {
      setsubHeader("עד 10,000,000 שח");
    } else if (
      route.name === "ChanceList" ||
      route.name === "ChancePage" ||
      route.name === "RavChancePage" ||
      route.name === "ChanceShitatiPage" ||
      route.name === "SumPageChance"
    ) {
      setsubHeader("כל שעתיים עד 120,000");
    } else if (
      route.name === "Sheva77List" ||
      route.name === "Sheva77Page" ||
      route.name === "Sheva78Page" ||
      route.name === "Sheva79Page" ||
      route.name === "SumPage777"
    ) {
      setsubHeader("עד 70,000 פעמיים ביום");
    } else if (
      route.name === "One23Page" ||
      route.name === "One23List" ||
      route.name === "SumPage123"
    ) {
      setsubHeader("כל טופס עד 120,000 ");
    }
  }, [route]);

  return (
    <>
      {route.name === "UserArea" || route.name === "ResultList" ? (
        <View>
          <View
            style={{ width: "100%", height: 7, backgroundColor: color }}
          ></View>
          {route.name === "ResultList" && (
            <View
              style={{
                backgroundColor: "#f8f8ff",
                width: "100%",
                height: EStyleSheet.value("$rem") * 100,
              }}
            ></View>
          )}
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              height: EStyleSheet.value("$rem") * 100,
            }}
          >
            {route.name === "ResultList" && (
              <>
                <Text
                  style={{
                    fontSize: EStyleSheet.value("$rem") * 30,
                    fontFamily: "fb-Spacer-bold",
                    color: "#263742",
                    paddingRight: EStyleSheet.value("$rem") * 20,
                    paddingBottom: EStyleSheet.value("$rem") * 5,
                    padding: EStyleSheet.value("$rem") * 15,
                  }}
                >
                  תוצאות כל ההגרלות
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Image
                    resizeMode='contain'
                    style={{
                      width: 80,
                      height: 40,
                      position: "relative",
                      // left: "35%",
                      // top: -30,

                      // marginBottom: -30,
                    }}
                    // source={require("C:/fullstack/lottoMatic/assets/home/Chance_sml.png")}
                    source={require("C:/fullstack/lottoMatic/assets/home/logoChance.png")}
                  />
                  <Image
                    resizeMode='contain'
                    style={{
                      width: 80,
                      height: 40,
                      position: "relative",
                      // left: "35%",
                      // top: -30,

                      // marginBottom: -30,
                    }}
                    source={require("C:/fullstack/lottoMatic/assets/home/logo777.png")}
                  />
                  <Image
                    resizeMode='contain'
                    style={{
                      width: 80,
                      height: 40,
                      position: "relative",
                      // left: "35%",
                      // top: -30,

                      // marginBottom: -30,
                    }}
                    source={require("C:/fullstack/lottoMatic/assets/home/logo777.png")}
                  />
                  <Image
                    resizeMode='contain'
                    style={{
                      width: 80,
                      height: 40,
                      position: "relative",
                      // left: "35%",
                      // top: -30,

                      // marginBottom: -30,
                    }}
                    source={require("C:/fullstack/lottoMatic/assets/home/logo123.png")}
                  />
                </View>
              </>
            )}
          </View>
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
              padding: 5,
            }}
          >
            <View>
              <Text style={{ fontSize: 16, marginVertical: 6 }}>
                {gameName}{" "}
              </Text>
              <Text style={{ fontSize: 10 }}>{subHeader}</Text>
            </View>
            <Timer usedDate={usedDate} color={color} />
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
              source={require("C:/fullstack/lottoMatic/assets/home/123_list.png")}
            />
          ) : null}
        </View>
      )}
    </>
  );
};

export default BlankSquare;
