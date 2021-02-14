import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import { ListItem } from "native-base";
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
    console.log(tableNum);
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

          console.log(pressed);
        }}
      >
        <Text style={{ color: "black" }}>{symbol}</Text>
      </TouchableOpacity>
    </>
  );
};

const Table = ({ tableNum, fullTables, setfullTables, setshowTable }) => {
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

  useEffect(() => {
    setpressedSpade({
      numberOfPress: 0,
      symbolsPressed: [],
      type: "spade",
    });
    setpressedHeart({
      numberOfPress: 0,
      symbolsPressed: [],
      type: "heart",
    });
    setpressedDiamond({
      numberOfPress: 0,
      symbolsPressed: [],
      type: "diamond",
    });
    setpressedClubs({
      numberOfPress: 0,
      symbolsPressed: [],
      type: "clubs",
    });
  }, [tableNum]);

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
  }, [fullTables]);

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ListItem
          style={{
            flexWrap: "wrap",

            height: 85,
            alignItems: "center",
          }}
          onPress={() => {
            setshowTable(true);
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
              {pressedSpade.symbolsPressed.length > 0 &&
                pressedSpade.symbolsPressed.map((num, index) => (
                  <Text index={index}>{num}</Text>
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
          onPress={() => {
            setshowTable(true);
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
              {pressedSpade.symbolsPressed.length > 0 &&
                pressedHeart.symbolsPressed.map((num, index) => (
                  <Text index={index}>{num}</Text>
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
          onPress={() => {
            setshowTable(true);
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
              {pressedSpade.symbolsPressed.length > 0 &&
                pressedDiamond.symbolsPressed.map((num, index) => (
                  <Text index={index}>{num}</Text>
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
          onPress={() => {
            setshowTable(true);
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
              {pressedSpade.symbolsPressed.length > 0 &&
                pressedClubs.symbolsPressed.map((num, index) => (
                  <Text index={index}>{num}</Text>
                ))}
            </View>
          </View>
        </ListItem>
      </View>
    </>
  );
};

export default Table;
