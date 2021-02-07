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

const Timer = ({ color, usedDate }) => {
  const [seconds, setseconds] = useState(null);
  const [minutes, setminutes] = useState(null);
  const [hours, sethours] = useState(null);
  const [days, setdays] = useState(null);

  setInterval(function () {
    let countDownDate = new Date(usedDate).getTime();
    let now = new Date().getTime();
    let timeleft = countDownDate - now;

    var daysLeft = Math.floor(timeleft / (1000 * 60 * 60 * 24));

    setdays(daysLeft);
    var hoursLeft = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    sethours(hoursLeft);
    var minutesLeft = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));

    setminutes(minutesLeft);
    var secondsLeft = Math.floor((timeleft % (1000 * 60)) / 1000);

    setseconds(secondsLeft);

    console.log("days : ", daysLeft);
    console.log("hours : ", hoursLeft);
    console.log("minutes : ", minutesLeft);
    console.log("seconds : ", secondsLeft);
  }, 1000);

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
              <Text style={{ color: "white" }}>{seconds}</Text>
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
                <Text style={{ color: "white" }}>{minutes}</Text>
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
              <Text style={{ color: "white" }}>{hours}</Text>
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
                <Text style={{ color: "white" }}>{days}</Text>
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

  const [usedDate, setusedDate] = useState(0);

  useEffect(() => {
    axios
      .get("http://52.90.122.190:5000/games/time")
      .then((res) => {
        let days;
        let hours;
        let minutes;
        let seconds;

        if (route.name === "LottoPage" || route.name === "LottoList") {
          setusedDate(res.data["לוטו"]);
        } else if (route.name === "ChanceList" || route.name === "ChancePage") {
          setusedDate(res.data["צ'אנס"]);
        } else if (
          route.name === "Sheva77List" ||
          route.name === "Sheva77Page"
        ) {
          setusedDate(res.data["777"]);
        } else if (route.name === "One23Page" || route.name === "One23List") {
          setusedDate(res.data["123"]);
        }

        // let countDownDate = new Date(usedDate).getTime();
        // console.log("countdowndate : ", countDownDate);

        // setInterval(function () {
        //   let countDownDate = new Date(usedDate).getTime();
        //   let now = new Date().getTime();
        //   let timeleft = countDownDate - now;

        //   days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        //   // settimer({ ...timer, days: days });
        //   setdays(days);
        //   hours = Math.floor(
        //     (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        //   );
        //   // settimer({ ...timer, hours: hours });
        //   sethours(hours);
        //   minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        //   // settimer({ ...timer, minutes: minutes });
        //   setminutes(minutes);
        //   seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        //   // settimer({ ...timer, seconds: seconds });
        //   setseconds(seconds);

        //   // console.log("days : ", days);
        //   // console.log("hours : ", hours);
        //   // console.log("minutes : ", minutes);
        //   // console.log("seconds : ", seconds);
        //   // console.log("timer : ", timer);
        // }, 1000);

        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
              <Text style={{ fontSize: 19, marginVertical: 6 }}>
                {gameName}{" "}
              </Text>
              <Text>עד 10,000,000 </Text>
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
