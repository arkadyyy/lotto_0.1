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
<<<<<<< HEAD
import axios from "axios";
=======
import EStyleSheet from "react-native-extended-stylesheet";
>>>>>>> 4d4a5dcebd397a133c363723d2bebb1a0e94e295

const Timer = ({ color }) => {
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View>
          <View style={{ margin: 5, flexDirection: "row" }}>
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
              <Text style={{ color: "white" }}>0</Text>
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
              <Text style={{ color: "white" }}>0</Text>
            </View>
          </View>
          <Text style={{ marginLeft: 18, fontSize: 10 }}>שניות</Text>
        </View>

        <View>
          <View>
            <View style={{ margin: 5, flexDirection: "row" }}>
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
                <Text style={{ color: "white" }}>0</Text>
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
                <Text style={{ color: "white" }}>0</Text>
              </View>
            </View>
            <Text style={{ marginLeft: 15, fontSize: 10 }}>דקות</Text>
          </View>
        </View>
        <View>
          <View style={{ margin: 5, flexDirection: "row" }}>
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
              <Text style={{ color: "white" }}>0</Text>
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
              <Text style={{ color: "white" }}>0</Text>
            </View>
          </View>
          <Text style={{ marginLeft: 18, fontSize: 10 }}>שעות</Text>
        </View>
        <View>
          <View>
            <View style={{ margin: 5, flexDirection: "row" }}>
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
                <Text style={{ color: "white" }}>0</Text>
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
                <Text style={{ color: "white" }}>0</Text>
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

// var myfunc = setInterval(function () {
//   var now = new Date().getTime();
//   var timeleft = countDownDate - now;

//   var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
// }, 1000);

const BlankSquare = ({ color, gameName }) => {
  const route = useRoute();

  const [lottoDate, setlottoDate] = useState(null);
  const [chanceDate, setchanceDate] = useState(null);
  const [sheva77Date, setsheva77Date] = useState(null);
  const [one23Date, setone23Date] = useState(null);

  useEffect(() => {
    axios
      .get("http://52.90.122.190:5000/games/time")
      .then((res) => {
        setlottoDate(res.data["לוטו"]);
        setchanceDate(res.data["צ'אנס"]);
        setsheva77Date(res.data["777"]);
        setone23Date(res.data["123"]);

        let days;
        let hours;
        let minutes;
        let seconds;

        let countDownDate = new Date(res.data["777"]).getTime();
        console.log("countdowndate : ", countDownDate);

        setInterval(function () {
          let countDownDate = new Date(res.data["777"]).getTime();
          let now = new Date().getTime();
          let timeleft = countDownDate - now;

          days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
          hours = Math.floor(
            (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
          seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

          // console.log("days : ", days);
          // console.log("hours : ", hours);
          // console.log("minutes : ", minutes);
          // console.log("seconds : ", seconds);
        }, 1000);

        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {route.name === "UserArea"
        ? (
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
        )
      : route.name === "ResultList" 
        ? (
        <View>
          <View
            style={{ width: "100%", height: 7, backgroundColor: color }}
          ></View>
          <View
            style={{ backgroundColor: "#F2F2F2", width: "100%", height: 100 }}
              ></View>
          <View
            style={{ backgroundColor: "white", width: "100%", height: 100 }}
              ></View>
          <View
            style={{ width: "100%", height: 7, backgroundColor: color }}
          ></View>
        </View>
        )
      : route.name === "ResultLotto" || "ResultChance" || "Result777" || "Result123" 
        ? (
        <View>
          <View
            style={{ width: "100%", height: 7, backgroundColor: color }}
          ></View>
         
          <View
            style={{ backgroundColor: "#F2F2F2", width: "100%", height: EStyleSheet.value("$rem") * 140 }}
              ></View>
          <View
            style={{ width: "100%", height: 7, backgroundColor: color }}
          ></View>
        </View>
        )
       
        : (
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
              <Text style={{ fontSize: 19, marginVertical: 6 }}>
                {gameName}{" "}
              </Text>
              <Text>עד 10,000,000 </Text>
            </View>
            <Timer color={color} />
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
