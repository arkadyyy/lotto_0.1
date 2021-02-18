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
  Label,
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
  fullTables,
  setfullTables,
}) => {
  const [isDisabled, setisDisabled] = useState(false);
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
  }, [pressed]);

  useEffect(() => {
    let x = disabled(pressed, tablesUsed, tableNum, typeArr);

    setisDisabled(x);
    console.log(counter);
  }, [counter]);

  // useEffect(() => {
  //   setpressed({
  //     numberOfPress: 0,
  //     symbolsPressed: [],
  //     type: pressed.type,
  //   });
  // }, [tableNum]);

  const disabled = (pressed, tablesUsed, tableNum, typeArr) => {
    if (pressed.symbolsPressed.includes(symbol)) {
      console.log("i am in first if");
      return false;
      //instead of counter / 4 === tableNum i need to replace it with pressed.numberOfPress >= 4
    } else if (typeArr.length === tableNum && counter / 4 === tableNum) {
      console.log("i am in secend if");
      return true;
    } else if (pressed.symbolsPressed.length >= 4) {
      console.log("i am in third if");
      return true;
    } else if (typeArr.length === tableNum && !typeArr.includes(pressed.type)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <TouchableOpacity
        disabled={isDisabled}
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
            setcounter(counter + 1);
          }

          console.log("pressed : ", pressed);
        }}
      >
        <Text style={{ color: "black" }}>{symbol}</Text>
      </TouchableOpacity>
    </>
  );
};

const TableChanceShitati = ({
  tableNum,
  fullTables,
  setfullTables,
  setshowTable,
  counter,
  setcounter,
  settypeArr,
  typeArr,
  pressedSpade,
  pressedHeart,
  pressedDiamond,
  pressedClubs,
  setpressedSpade,
  setpressedHeart,
  setpressedDiamond,
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
  // const [pressedSpade, setpressedSpade] = useState({
  //   numberOfPress: 0,
  //   symbolsPressed: [],
  //   type: "spade",
  // });
  // const [pressedHeart, setpressedHeart] = useState({
  //   numberOfPress: 0,
  //   symbolsPressed: [],
  //   type: "heart",
  // });
  // const [pressedDiamond, setpressedDiamond] = useState({
  //   numberOfPress: 0,
  //   symbolsPressed: [],
  //   type: "diamond",
  // });
  // const [pressedClubs, setpressedClubs] = useState({
  //   numberOfPress: 0,
  //   symbolsPressed: [],
  //   type: "clubs",
  // });

  // const [counter, setcounter] = useState(0);
  // const [tablesUsed, settablesUsed] = useState(0);
  // const [typeArr, settypeArr] = useState([]);

  useEffect(() => {
    setfullTables({
      gameType: tableNum,
      choosenCards: [
        { card: [...pressedSpade.symbolsPressed], cardType: pressedSpade.type },
        { card: [...pressedHeart.symbolsPressed], cardType: pressedHeart.type },
        {
          card: [...pressedDiamond.symbolsPressed],
          cardType: pressedDiamond.type,
        },
        { card: [...pressedClubs.symbolsPressed], cardType: pressedClubs.type },
      ],
    });
  }, [counter]);

  useEffect(() => {
    setcounter(0);

    setfullTables({
      gameType: 1,
      choosenCards: [
        {
          cardType: "heart",
          card: ["K"],
        },
      ],
    });

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
    settypeArr([]);
  }, [tableNum]);

  return (
    <>
      {/* <ListItem
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
                tablesUsed={tablesUsed}
                settablesUsed={settablesUsed}
                tableNum={tableNum}
                typeArr={typeArr}
                settypeArr={settypeArr}
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
                tablesUsed={tablesUsed}
                settablesUsed={settablesUsed}
                tableNum={tableNum}
                typeArr={typeArr}
                settypeArr={settypeArr}
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
                tablesUsed={tablesUsed}
                settablesUsed={settablesUsed}
                tableNum={tableNum}
                typeArr={typeArr}
                settypeArr={settypeArr}
                fullTables={fullTables}
                setfullTables={setfullTables}
              />
            ))}
          </View>
        </View>
      </ListItem> */}




<View style={{ alignItems: "flex-start" }}>
        <Label
          style={{
            marginHorizontal: 25,
            marginBottom: -10,
            fontFamily: "fb-Spacer",
            color: "white",
          }}
        >
          צירוף 1
        </Label>
        <ListItem
          noBorder={true}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            // alignItems: "center",
            // backgroundColor: "yellow",
            // width: "90%",
            // flexWrap: "wrap",
          }}
          onPress={() => {
            setshowTable(true);
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
              {pressedSpade.symbolsPressed.length > 0 ? (
                <>
                  <Image
                    style={{ width: 60, height: 80, borderRadius: 7 }}
                    source={require("C:/fullstack/lottoMatic/assets/chance/choosenSpade.png")}
                  />
                  {pressedSpade.symbolsPressed.map((num, index) => (
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
                  ))}
                </>
              ) : (
                <Image
                  style={{ width: 60, height: 80, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/spadeCard.png")}
                />
              )}
            </View>
          </ListItem>
          <ListItem
            noBorder={true}
            // style={{
            //   flexWrap: "wrap",
            //   marginTop: 4,
            //   height: 85,
            //   alignItems: "center",
            // }}
            onPress={() => {
              setshowTable(true);
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
              {pressedHeart.symbolsPressed.length > 0 ? (
                <>
                  <Image
                    style={{ width: 60, height: 80, borderRadius: 7 }}
                    source={require("C:/fullstack/lottoMatic/assets/chance/choosenHeart.png")}
                  />
                  {pressedHeart.symbolsPressed.map((num, index) => (
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
                  ))}
                </>
              ) : (
                <Image
                  style={{ width: 60, height: 80, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/heartCard.png")}
                />
              )}
            </View>
          </ListItem>
          <ListItem
            noBorder={true}
            // style={{
            //   flexWrap: "wrap",
            //   marginTop: 4,
            //   height: 85,
            //   alignItems: "center",
            // }}
            onPress={() => {
              setshowTable(true);
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
              {pressedDiamond.symbolsPressed.length > 0 ? (
                <>
                  <Image
                    style={{ width: 60, height: 80, borderRadius: 7 }}
                    source={require("C:/fullstack/lottoMatic/assets/chance/choosenDiamond.png")}
                  />
                  {pressedDiamond.symbolsPressed.map((num, index) => (
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
                  ))}
                </>
              ) : (
                <Image
                  style={{ width: 60, height: 80, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/diamondCard.png")}
                />
              )}
            </View>
          </ListItem>
          <ListItem
            noBorder={true}
            // style={{
            //   flexWrap: "wrap",
            //   marginTop: 4,
            //   height: 85,
            //   alignItems: "center",
            // }}
            onPress={() => {
              setshowTable(true);
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
              {pressedClubs.symbolsPressed.length > 0 ? (
                <>
                  <Image
                    style={{ width: 60, height: 80, borderRadius: 7 }}
                    source={require("C:/fullstack/lottoMatic/assets/chance/choosenClubs.png")}
                  />
                  {pressedClubs.symbolsPressed.map((num, index) => (
                    <Text
                      style={{
                        includeFontPadding: false,
                        position: "absolute",
                        // left: "-50%",
                        top: "50%",
                        fontSize: 25,
                        zIndex: 200,
                      }}
                      key={index}
                    >
                      {num}
                    </Text>
                  ))}
                </>
              ) : (
                <Image
                  style={{ width: 60, height: 80, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/clubsCard.png")}
                />
              )}
            </View>
          </ListItem>
        </ListItem>
      </View>

    </>
  );
};

export default TableChanceShitati;
