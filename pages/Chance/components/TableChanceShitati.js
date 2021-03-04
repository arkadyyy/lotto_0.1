import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import { ListItem, Label } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react";

const TableChanceShitati = ({
  setshowTable,
  pressedSpade,
  pressedHeart,
  pressedDiamond,
  pressedClubs,
  tableIndex,
  fullTables,
  setopendTableNum,
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
  const [usedSpade, setusedSpade] = useState([" ", " ", " ", " "]);
  const [usedHeart, setusedHeart] = useState([" ", " ", " ", " "]);
  const [usedDiamond, setusedDiamond] = useState([" ", " ", " ", " "]);
  const [usedClubs, setusedClubs] = useState([" ", " ", " ", " "]);

  useEffect(() => {
    let spadeCards;
    let heartCards;
    let diamondCards;
    let clubsCards;

    const fullTablesCopy2 = JSON.parse(JSON.stringify(fullTables));

    let iterable = fullTablesCopy2[0].choosenCards;
    console.log("iterable : ", iterable);

    spadeCards = iterable[0].cards;
    heartCards = iterable[1].cards;
    diamondCards = iterable[2].cards;
    clubsCards = iterable[3].cards;

    if (spadeCards.length <= 4) {
      let length = 4 - spadeCards.length;
      let x = Array.from({ length: length }, (v, i) => " ");

      spadeCards.concat(x);

      setusedSpade(spadeCards.concat(x));
    } else if (heartCards.length <= 4) {
      let length = 4 - heartCards.length;
      let x = Array.from({ length: length }, (v, i) => " ");
      heartCards.concat(x);
      setusedHeart(heartCards.concat(x));
    } else if (diamondCards.length <= 4) {
      let length = 4 - diamondCards.length;
      let x = Array.from({ length: length }, (v, i) => " ");
      diamondCards.concat(x);
      setusedDiamond(diamondCards.concat(x));
    } else if (clubsCards.length <= 4) {
      let length = 4 - clubsCards.length;
      let x = Array.from({ length: length }, (v, i) => " ");
      clubsCards.concat(x);
      setusedClubs(clubsCards.concat(x));
    } else {
      setusedSpade([...iterable[1].cards]);
      setusedHeart([...iterable[0].cards]);
      setusedClubs([...iterable[3].cards]);
    }

    // console.log("usedSpade : ", usedSpade);
    // console.log("usedHeart : ", usedHeart);
    // console.log("usedDiamond : ", usedDiamond);
    // console.log("usedClubs : ", usedClubs);
  }, [fullTables]);

  return (
    <>
      <View style={{ alignItems: "flex-start" }}>
        <Label
          style={{
            marginHorizontal: 25,
            marginBottom: -10,
            fontFamily: "fb-Spacer",
            color: "white",
          }}
        >
          {`טופס ${tableIndex}`}
        </Label>
        <ListItem
          noBorder={true}
          style={{
            alignItems: "center",
            // backgroundColor: "yellow",
            width: "90%",
            flexWrap: "wrap",
          }}
          onPress={() => {
            setshowTable(true);
            setopendTableNum(tableIndex);
          }}
        >
          <ListItem
            noBorder={true}
            style={
              {
                // alignItems: "center",
                // marginLeft: 70,
              }
            }
            onPress={() => {
              setshowTable(true);
              setopendTableNum(tableIndex);
              console.log("usedSpade : ", usedSpade);
              console.log("usedHeart : ", usedHeart);
              console.log("usedDiamond : ", usedDiamond);
              console.log("usedClubs : ", usedClubs);
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: 7,
                marginHorizontal: -10,
              }}
            >
              <>
                {usedSpade.map((num, index) =>
                  num === " " ? (
                    <Image
                      key={index}
                      style={{ width: 60, height: 80, borderRadius: 7 }}
                      source={require("C:/fullstack/lottoMatic/assets/chance/spadeCard.png")}
                    />
                  ) : (
                    <View key={index}>
                      <Image
                        style={{ width: 60, height: 80, borderRadius: 7 }}
                        source={require("C:/fullstack/lottoMatic/assets/chance/choosenSpade.png")}
                      />
                      <Text
                        style={{
                          includeFontPadding: false,
                          position: "absolute",
                          left: "35%",
                          top: "50%",
                          fontSize: 25,
                        }}
                        key={index}
                      >
                        {num}
                      </Text>
                    </View>
                  )
                )}
              </>
            </View>
          </ListItem>
          <ListItem
            noBorder={true}
            style={
              {
                // alignItems: "center",
                // marginLeft: 70,
              }
            }
            onPress={() => {
              setshowTable(true);
              setopendTableNum(tableIndex);
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: 7,
                marginHorizontal: -10,
              }}
            >
              <>
                {usedHeart.map((num, index) =>
                  num === " " ? (
                    <Image
                      style={{ width: 60, height: 80, borderRadius: 7 }}
                      source={require("C:/fullstack/lottoMatic/assets/chance/heartCard.png")}
                    />
                  ) : (
                    <>
                      <Image
                        style={{ width: 60, height: 80, borderRadius: 7 }}
                        source={require("C:/fullstack/lottoMatic/assets/chance/choosenHeart.png")}
                      />
                      <Text
                        style={{
                          includeFontPadding: false,
                          position: "absolute",
                          // left: "-50%",
                          top: "50%",
                          fontSize: 25,
                        }}
                        key={index}
                      >
                        {num}
                      </Text>
                    </>
                  )
                )}
              </>
            </View>
          </ListItem>
          <ListItem
            noBorder={true}
            style={
              {
                // alignItems: "center",
                // marginLeft: 70,
              }
            }
            onPress={() => {
              setshowTable(true);
              setopendTableNum(tableIndex);
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: 7,
                marginHorizontal: -10,
              }}
            >
              <>
                {usedDiamond.map((num, index) =>
                  num === " " ? (
                    <Image
                      style={{ width: 60, height: 80, borderRadius: 7 }}
                      source={require("C:/fullstack/lottoMatic/assets/chance/diamondCard.png")}
                    />
                  ) : (
                    <>
                      <Image
                        style={{ width: 60, height: 80, borderRadius: 7 }}
                        source={require("C:/fullstack/lottoMatic/assets/chance/choosenDiamond.png")}
                      />
                      <Text
                        style={{
                          includeFontPadding: false,
                          position: "absolute",
                          // left: "-50%",
                          top: "50%",
                          fontSize: 25,
                        }}
                        key={index}
                      >
                        {num}
                      </Text>
                    </>
                  )
                )}
              </>
            </View>
          </ListItem>
          <ListItem
            noBorder={true}
            style={
              {
                // alignItems: "center",
                // marginLeft: 70,
              }
            }
            onPress={() => {
              setshowTable(true);
              setopendTableNum(tableIndex);
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: 7,
                marginHorizontal: -10,
              }}
            >
              <>
                {usedClubs.map((num, index) =>
                  num === " " ? (
                    <Image
                      style={{ width: 60, height: 80, borderRadius: 7 }}
                      source={require("C:/fullstack/lottoMatic/assets/chance/clubsCard.png")}
                    />
                  ) : (
                    <>
                      <Image
                        style={{ width: 60, height: 80, borderRadius: 7 }}
                        source={require("C:/fullstack/lottoMatic/assets/chance/choosenClubs.png")}
                      />
                      <Text
                        style={{
                          includeFontPadding: false,
                          position: "absolute",
                          // left: "-50%",
                          top: "50%",
                          fontSize: 25,
                        }}
                        key={index}
                      >
                        {num}
                      </Text>
                    </>
                  )
                )}
              </>
            </View>
          </ListItem>
        </ListItem>
      </View>
    </>
  );
};

export default TableChanceShitati;
