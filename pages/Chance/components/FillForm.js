import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { ScrollView } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-regular-svg-icons";
import chanceListstyles from "../ChanceListStyles";

const Num = ({
  symbol,
  setpressed,
  pressed,
  setcounter,
  counter,
  tableNum,
  fullTables,
  setfullTables,
}) => {
  useEffect(() => {
    //if we pressed on a card and we added it to pressed.symbolsPressed ...
    if (counter >= 1) {
      console.log("%");
      //first of all , remove its old object in fullTables be4 we put its new object
      let filtered = fullTables.choosenCards.filter(
        (x) => x.cardType !== pressed.type
      );

      //now we set updated fulltables
      setfullTables({
        gameType: tableNum,
        choosenCards: [
          ...filtered,
          {
            cardType: pressed.type,
            card: pressed.symbolsPressed,
          },
        ],
      });
    }
    console.log("i am here useffect inside num~~");
  }, [counter]);

  return (
    <>
      <TouchableOpacity
        style={{
          width: 21,
          height: 35,
          borderRadius: 6,
          backgroundColor: pressed.symbolsPressed.includes(symbol)
            ? "#8CC63F"
            : "white",

          margin: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
        disabled={
          pressed.symbolsPressed.includes(symbol)
            ? false
            : pressed.symbolsPressed.length > 0
            ? true
            : counter > tableNum - 1
            ? true
            : false
        }
        onPress={() => {
          if (pressed.symbolsPressed.includes(symbol)) {
            setpressed({
              numberOfPress: pressed.numberOfPress - 1,
              symbolsPressed: pressed.symbolsPressed.filter(
                (x) => x !== symbol
              ),
              type: pressed.type,
            });
            setcounter(counter - 1);
          } else {
            setpressed({
              numberOfPress: ++pressed.numberOfPress,
              symbolsPressed: [...pressed.symbolsPressed, symbol],
              type: pressed.type,
            });
            setcounter(counter + 1);
          }
        }}
      >
        <Text style={{ color: "black" }}>{symbol}</Text>
      </TouchableOpacity>
    </>
  );
};

const autoFill = (amount) => {
  let randomNumbers = [];
  let powerNum = 0;
  for (let i = amount; i > 0; i--) {
    let num = Math.floor(Math.random() * 37) + 1;
    randomNumbers.push(num);
  }

  powerNum = Math.floor(Math.random() * 7) + 1;

  console.log(randomNumbers);
  console.log(powerNum);
  return { randomNumbers, powerNum };
};

const FillForm = ({
  tableNum,
  fullTables,
  setfullTables,
  setshowTable,
  counter,
  setcounter,
  pressedSpade,
  setpressedSpade,
  pressedHeart,
  setpressedHeart,
  pressedDiamond,
  setpressedDiamond,
  pressedClubs,
  setpressedClubs,
}) => {
  const [symbols, setsymbols] = useState([
    "A",
    "K",
    "Q",
    "J",
    "10",
    "9",
    "8",
    "7",
  ]);

  useEffect(() => {
    console.log("shit men +_+");
    console.log("counter : ", counter);
  }, []);

  useEffect(() => {
    fullTables.choosenCards.forEach((table) => {
      if (table.cardType === "spade") {
        console.log("table.card spade : ", table.card);
        setpressedSpade({
          numberOfPress: 0,
          symbolsPressed: table.card,
          type: "spade",
        });
      }
      if (table.cardType === "heart") {
        console.log("table.card heart : ", table.card);
        setpressedHeart({
          numberOfPress: 0,
          symbolsPressed: table.card,
          type: "heart",
        });
      }
      if (table.cardType === "diamond") {
        console.log("table.card diamond : ", table.card);
        setpressedDiamond({
          numberOfPress: 0,
          symbolsPressed: table.card,
          type: "diamond",
        });
      }
      if (table.cardType === "clubs") {
        console.log("table.card clubs : ", table.card);
        setpressedClubs({
          numberOfPress: 0,
          symbolsPressed: table.card,
          type: "clubs",
        });
      }
    });
  }, []);

  return (
    <>
      <View
        style={{
          backgroundColor: "#263742",
          width: "100%",
          top: "20%",
          height: 420,
          position: "absolute",
          zIndex: 2000,
        }}
      >
        {/* {top 90 deg box} */}
        <View
          style={{
            backgroundColor: "#263742",

            height: 70,

            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <FontAwesomeIcon
                color='white'
                border={true}
                inverse
                icon={faArrowAltCircleRight}
              />
            </TouchableOpacity>
            <Text
              style={{ color: "white", fontSize: 13, fontFamily: "fb-Spacer" }}
            >
              טבלאות
            </Text>
            <TouchableOpacity>
              <FontAwesomeIcon
                color='white'
                border={true}
                inverse
                icon={faArrowAltCircleLeft}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              height: 25,
              padding: 7,
              backgroundColor: "white",
              borderRadius: 13,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 20,
            }}
            onPress={() => {
              setshowTable(false);
            }}
          >
            <Text style={{ color: "red", fontFamily: "fb-Spacer-bold" }}>
              סגור חלון
            </Text>
          </TouchableOpacity>
        </View>
        {/* {fill numbers} */}
        <View
          style={{
            borderColor: "white",
            width: "90%",
            height: "65%",
            borderWidth: 1,
            borderRadius: 8,
            alignSelf: "center",
            position: "relative",
            top: -40,
            padding: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: 7,
            }}
          >
            <Text
              style={{
                color: "white",
                marginBottom: 5,
                fontSize: 10,
                marginHorizontal: 5,
                fontFamily: "fb-Spacer",
              }}
            >
              מלא צירוף
            </Text>
            <TouchableOpacity
              onPress={() => {
                autoFill(6);
                console.log("iam working 4");
              }}
              style={{
                borderColor: "white",
                borderWidth: 1,
                padding: 3,
                borderRadius: 7,
                marginHorizontal: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: "white",
                  fontFamily: "fb-Spacer-bold",
                }}
              >
                מלא טבלה אוטומטית
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderColor: "white",
                borderWidth: 1,
                padding: 3,
                borderRadius: 7,
                marginHorizontal: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: "white",
                  fontFamily: "fb-Spacer-bold",
                }}
              >
                מחק טבלה אוטומטית
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image
              resizeMode='contain'
              style={{
                width: 40,
                height: 50,
                borderRadius: 7,
                marginHorizontal: 4,
              }}
              source={require("C:/fullstack/lottoMatic/assets/chance/spades_table_fill.png")}
            />
            {symbols.map((symbol, index) => (
              <Num
                key={index}
                pressed={pressedSpade}
                setpressed={setpressedSpade}
                symbol={symbol}
                setcounter={setcounter}
                counter={counter}
                tableNum={tableNum}
                fullTables={fullTables}
                setfullTables={setfullTables}
              />
            ))}
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image
              resizeMode='contain'
              style={{
                width: 40,
                height: 50,
                borderRadius: 7,
                marginHorizontal: 4,
              }}
              source={require("C:/fullstack/lottoMatic/assets/chance/heart_table_fill.png")}
            />
            {symbols.map((symbol, index) => (
              <Num
                key={index}
                pressed={pressedHeart}
                setpressed={setpressedHeart}
                symbol={symbol}
                setcounter={setcounter}
                counter={counter}
                tableNum={tableNum}
                fullTables={fullTables}
                setfullTables={setfullTables}
              />
            ))}
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image
              resizeMode='contain'
              style={{
                width: 40,
                height: 50,
                borderRadius: 7,
                marginHorizontal: 4,
              }}
              source={require("C:/fullstack/lottoMatic/assets/chance/diamond_table_fill.png")}
            />
            {symbols.map((symbol, index) => (
              <Num
                key={index}
                pressed={pressedDiamond}
                setpressed={setpressedDiamond}
                symbol={symbol}
                setcounter={setcounter}
                counter={counter}
                tableNum={tableNum}
                fullTables={fullTables}
                setfullTables={setfullTables}
              />
            ))}
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image
              resizeMode='contain'
              style={{
                width: 40,
                height: 50,
                borderRadius: 7,
                marginHorizontal: 4,
              }}
              source={require("C:/fullstack/lottoMatic/assets/chance/clubs_table_fill.png")}
            />
            {symbols.map((symbol, index) => (
              <Num
                key={index}
                pressed={pressedClubs}
                setpressed={setpressedClubs}
                symbol={symbol}
                setcounter={setcounter}
                counter={counter}
                tableNum={tableNum}
                fullTables={fullTables}
                setfullTables={setfullTables}
              />
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

export default FillForm;
