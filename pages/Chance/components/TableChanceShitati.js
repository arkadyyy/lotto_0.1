import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  CardItem,
  List,
  ListItem,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react";

const Num = ({
  symbol,
  setpressed,
  pressed,
  setcounter,
  counter,
  tablesUsed,
  settablesUsed,
  tableNum,
  typeArr,
  settypeArr,
}) => {
  const disabled = (pressed, tablesUsed, tableNum, typeArr) => {
    if (pressed.symbolsPressed.includes(symbol)) {
      return false;
    } else if (typeArr.length > tableNum) {
      return true;
    } else if (pressed.numberOfPress >= 4) {
      return true;
    } else if (tablesUsed >= tableNum && pressed.symbolsPressed.length >= 4) {
      return true;
    } else if (pressed.symbolsPressed.length >= 4) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <TouchableOpacity
        disabled={disabled(pressed, tablesUsed, tableNum, typeArr)}
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
        onPress={() => {
          // {numberOfPress :0 ,symbolsPressed : []}
          if (
            pressed.symbolsPressed.includes(symbol) &&
            pressed.symbolsPressed.length === 1
          ) {
            settypeArr(typeArr.filter((type) => type !== pressed.type));
            settablesUsed(tablesUsed - 1);
            setpressed({
              numberOfPress: pressed.numberOfPress - 1,
              symbolsPressed: pressed.symbolsPressed.filter(
                (x) => x !== symbol
              ),
              type: pressed.type,
            });
            setcounter(counter - 1);
          } else if (pressed.symbolsPressed.includes(symbol)) {
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
              numberOfPress: pressed.numberOfPress + 1,
              symbolsPressed: [...pressed.symbolsPressed, symbol],
              type: pressed.type,
            });

            if (pressed.symbolsPressed.length === 0) {
              settypeArr([...typeArr, pressed.type]);
              settablesUsed(tablesUsed + 1);
            }
          }

          console.log("pressed : ", pressed);
        }}
      >
        <Text style={{ color: "black" }}>{symbol}</Text>
      </TouchableOpacity>
    </>
  );
};

const TableChanceShitati = ({ tableNum }) => {
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
  const [pressedSpade, setpressedSpade] = useState({
    numberOfPress: 0,
    symbolsPressed: [],
    type: "spade",
  });
  const [pressedHeart, setpressedHeart] = useState({
    numberOfPress: 0,
    symbolsPressed: [],
    type: "heart",
  });
  const [pressedDiamond, setpressedDiamond] = useState({
    numberOfPress: 0,
    symbolsPressed: [],
    type: "diamond",
  });
  const [pressedClubs, setpressedClubs] = useState({
    numberOfPress: 0,
    symbolsPressed: [],
    type: "clubs",
  });

  const [counter, setcounter] = useState(0);
  const [tablesUsed, settablesUsed] = useState(0);
  const [typeArr, settypeArr] = useState([]);

  useEffect(() => {
    setcounter(counter + 1);

    // if (
    //   pressedSpade.numberOfPress === 0 ||
    //   pressedHeart.numberOfPress === 0 ||
    //   pressedDiamond.numberOfPress === 0 ||
    //   pressedClubs.numberOfPress === 0
    // ) {
    //   settablesUsed(tablesUsed - 1);
    // }
    // if (
    //   pressedSpade.numberOfPress === 1 ||
    //   pressedHeart.numberOfPress === 1 ||
    //   pressedDiamond.numberOfPress === 1 ||
    //   pressedClubs.numberOfPress === 1
    // ) {
    //   settablesUsed(tablesUsed + 1);
    // }

    // console.log("tablesUsed : ", tablesUsed);
    // console.log("tableNum : ", tableNum);
    console.log("typeArr : ", typeArr);
    console.log("counter : ", counter);
  }, [pressedSpade, pressedHeart, pressedDiamond, pressedClubs]);

  return (
    <>
      <ListItem
        style={{
          flexWrap: "wrap",

          height: 85,
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              style={{ width: 40, height: 50, borderRadius: 7 }}
              source={require("C:/fullstack/lottoMatic/assets/chance/spade.png")}
            />
            {symbols.map((symbol, index) => (
              <Num
                key={index}
                pressed={pressedSpade}
                setpressed={setpressedSpade}
                symbol={symbol}
                setcounter={setcounter}
                counter={counter}
                tablesUsed={tablesUsed}
                settablesUsed={settablesUsed}
                tableNum={tableNum}
                typeArr={typeArr}
                settypeArr={settypeArr}
              />
            ))}
          </View>
        </View>
      </ListItem>
      <ListItem
        style={{
          flexWrap: "wrap",
          marginTop: 4,
          height: 85,
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 7,
            }}
          >
            <Image
              style={{ width: 40, height: 50, borderRadius: 7 }}
              source={require("C:/fullstack/lottoMatic/assets/chance/heart.png")}
            />
            {symbols.map((symbol, index) => (
              <Num
                key={index}
                pressed={pressedHeart}
                setpressed={setpressedHeart}
                symbol={symbol}
                setcounter={setcounter}
                counter={counter}
                tablesUsed={tablesUsed}
                settablesUsed={settablesUsed}
                tableNum={tableNum}
                typeArr={typeArr}
                settypeArr={settypeArr}
              />
            ))}
          </View>
        </View>
      </ListItem>
      <ListItem
        style={{
          flexWrap: "wrap",
          marginTop: 4,
          height: 85,
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 7,
            }}
          >
            <Image
              style={{ width: 40, height: 50, borderRadius: 7 }}
              source={require("C:/fullstack/lottoMatic/assets/chance/diamond.png")}
            />
            {symbols.map((symbol, index) => (
              <Num
                key={index}
                pressed={pressedDiamond}
                setpressed={setpressedDiamond}
                symbol={symbol}
                setcounter={setcounter}
                counter={counter}
                tablesUsed={tablesUsed}
                settablesUsed={settablesUsed}
                tableNum={tableNum}
                typeArr={typeArr}
                settypeArr={settypeArr}
              />
            ))}
          </View>
        </View>
      </ListItem>
      <ListItem
        noBorder={true}
        style={{
          flexWrap: "wrap",
          marginTop: 4,
          height: 85,
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 7,
            }}
          >
            <Image
              style={{ width: 40, height: 50, borderRadius: 7 }}
              source={require("C:/fullstack/lottoMatic/assets/chance/clubs.png")}
            />
            {symbols.map((symbol, index) => (
              <Num
                key={index}
                pressed={pressedClubs}
                setpressed={setpressedClubs}
                symbol={symbol}
                setcounter={setcounter}
                counter={counter}
                tablesUsed={tablesUsed}
                settablesUsed={settablesUsed}
                tableNum={tableNum}
                typeArr={typeArr}
                settypeArr={settypeArr}
              />
            ))}
          </View>
        </View>
      </ListItem>
    </>
  );
};

export default TableChanceShitati;
