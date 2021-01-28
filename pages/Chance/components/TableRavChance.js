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
  tableNum,
  fullTables,
  setfullTables,
}) => {
  useEffect(() => {
    //if we pressed on a card and we added it to pressed.symbolsPressed ...
    if (pressed.symbolsPressed.length >= 1) {
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
    console.log(" pressed : ", pressed);
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
            : counter > 4
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

          console.log(pressed);
        }}
      >
        <Text style={{ color: "black" }}>{symbol}</Text>
      </TouchableOpacity>
    </>
  );
};

const TableRavChance = ({ tableNum, fullTables, setfullTables }) => {
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

  useEffect(() => {
    setfullTables({
      gameType: tableNum,
      choosenCards: [
        { cards: [...pressedSpade.symbolsPressed], type: pressedSpade.type },
        { cards: [...pressedHeart.symbolsPressed], type: pressedHeart.type },
        {
          cards: [...pressedDiamond.symbolsPressed],
          type: pressedDiamond.type,
        },
        { cards: [...pressedClubs.symbolsPressed], type: pressedClubs.type },
      ],
    });
  }, [counter]);

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
                tableNum={tableNum}
                fullTables={fullTables}
                setfullTables={setfullTables}
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
                tableNum={tableNum}
                fullTables={fullTables}
                setfullTables={setfullTables}
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
                tableNum={tableNum}
                fullTables={fullTables}
                setfullTables={setfullTables}
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
                tableNum={tableNum}
                setfullTables={setfullTables}
                fullTables={fullTables}
              />
            ))}
          </View>
        </View>
      </ListItem>
    </>
  );
};

export default TableRavChance;
