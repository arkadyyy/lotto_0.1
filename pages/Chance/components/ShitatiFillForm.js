import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { ScrollView } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import useForceUpdate from "use-force-update";

const Num = ({
  symbol,
  setpressed,
  pressed,
  setcounter,
  counter,
  usedTableNum,
  allCounters,
  setallCounters,
  usedTable,
  fullTables,
  opendTableNum,
  setusedTable,
  cardTypeUsed,
  setcardTypeUsed,
}) => {
  const [isDisabled, setisDisabled] = useState(false);
  const forceUpdate = useForceUpdate();

  const handleUpdate = () => {
    forceUpdate();
  };

  const disabled = (pressed, cardTypeUsed, usedTableNum) => {
    // disabled={
    //   pressed.symbolsPressed.includes(symbol)
    //     ? false
    //     : pressed.symbolsPressed.length >= 4
    //     ? true
    //     : cardTypeUsed.length >= usedTableNum
    //     ? true
    //     : false
    // }
    let x = false;
    if (pressed.symbolsPressed.includes(symbol)) {
      x = false;
    } else if (
      !cardTypeUsed.includes(pressed.type) &&
      cardTypeUsed.length !== 0 &&
      cardTypeUsed.length >= usedTableNum
    ) {
      x = true;
    } else if (pressed.symbolsPressed.length >= 4) {
      x = true;
    }

    return x;
  };
  useEffect(() => {
    handleUpdate();
  }, [fullTables]);

  return (
    <>
      <TouchableOpacity
        style={{
          width: 21,
          height: 35,
          borderRadius: 6,
          backgroundColor: pressed.symbolsPressed.includes(symbol)
            ? "#009943"
            : "white",

          margin: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
        disabled={disabled(pressed, cardTypeUsed, usedTableNum)}
        onPress={() => {
          console.log("pressed : ", pressed);
          console.log("cardTypeUsed :~~~~~~~ ", cardTypeUsed);
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

          if (
            cardTypeUsed.indexOf(pressed.type) === -1 &&
            cardTypeUsed.length <= usedTableNum
          ) {
            setcardTypeUsed([...cardTypeUsed, pressed.type]);
          } else if (pressed.symbolsPressed.length === 1) {
            console.log("i am here !");

            let filtered = cardTypeUsed.filter((type) => type !== pressed.type);
            console.log("filtered : ", filtered);
            setcardTypeUsed(filtered);
          }
        }}
      >
        <Text
          style={{
            color: pressed.symbolsPressed.includes(symbol) ? "white" : "black",
            fontFamily: "fb-Spacer-bold",
          }}
        >
          {symbol}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const FillForm = ({
  tableNum,
  fullTables,
  setfullTables,
  setshowTable,

  ravChance,
  typeArr,
  settypeArr,
  shitatiPage,
  settablesUsed,
  tablesUsed,
  opendTableNum,
  setopendTableNum,
  allCounters,
  setallCounters,
  formNum,
  autoFillForm,
  cardTypeUsed,
  setcardTypeUsed,
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
  const [usedTable, setusedTable] = useState([]);
  const [usedTableNum, setusedTableNum] = useState(tableNum);
  const [counter, setcounter] = useState(
    allCounters.find((counter) => counter.formNum === opendTableNum).counter
  );
  const [autoFillFormFired, setautoFillFormFired] = useState(false);

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

  const arrowClickedRight = () => {
    if (opendTableNum > 1) {
      setopendTableNum(opendTableNum - 1);
    }
  };

  const arrowClickedLeft = () => {
    if (opendTableNum < formNum) {
      setopendTableNum(opendTableNum + 1);
    }
  };

  const deleteFilled = () => {
    setpressedClubs({ ...pressedClubs, symbolsPressed: [] });
    setpressedHeart({ ...pressedHeart, symbolsPressed: [] });
    setpressedDiamond({ ...pressedDiamond, symbolsPressed: [] });
    setpressedSpade({ ...pressedSpade, symbolsPressed: [] });
  };

  const autoFill = async (opendTableNum, usedTableNum) => {
    const cardArr = ["7", "8", "9", "10", "J", "Q", "K", "A"];
    let randomNumArr = [0, 1, 2, 3];

    const pressed = [
      [pressedSpade, setpressedSpade],
      [pressedHeart, setpressedHeart],
      [pressedDiamond, setpressedDiamond],
      [pressedClubs, setpressedClubs],
    ];

    await pressed.forEach((pressed) => {
      pressed[0].symbolsPressed = [];
    });

    var shuffled = cardArr.sort(function () {
      return 0.5 - Math.random();
    });
    var selected = shuffled.slice(0, tableNum);
    console.log("selected : ", selected);

    selected.forEach((card, index) => {
      let random = Math.floor(Math.random() * randomNumArr.length);

      pressed[random][1]({ ...pressed[random][0], symbolsPressed: [card] });

      randomNumArr.splice(random, 1);
      pressed.splice(random, 1);
      console.log("randomnumarr : ", randomNumArr);
    });
  };

  useEffect(() => {
    setusedTableNum(tableNum);
  }, [tableNum]);

  useEffect(() => {
    setallCounters(counter);
    console.log();
  }, [counter]);

  useEffect(() => {
    if (opendTableNum !== 0) {
      setusedTable(
        fullTables.find((table) => table.tableNum === opendTableNum)
      );

      let usedTable = fullTables.find(
        (table) => table.tableNum === opendTableNum
      ).choosenCards;

      setpressedSpade({
        ...pressedSpade,
        symbolsPressed: usedTable.find((x) => x.type === "spade").cards,
      });
      setpressedHeart({
        ...pressedHeart,
        symbolsPressed: usedTable.find((x) => x.type === "heart").cards,
      });
      setpressedDiamond({
        ...pressedDiamond,
        symbolsPressed: usedTable.find((x) => x.type === "diamond").cards,
      });
      setpressedClubs({
        ...pressedClubs,
        symbolsPressed: usedTable.find((x) => x.type === "clubs").cards,
      });
    }
    let counterMatches = allCounters.find(
      (counter) => counter.formNum === opendTableNum
    ).counter;

    setcounter(counterMatches);
  }, [opendTableNum]);

  useEffect(() => {
    setusedTable({
      tableNum: opendTableNum,
      choosenCards: [
        { type: "spade", cards: pressedSpade.symbolsPressed },
        { type: "heart", cards: pressedHeart.symbolsPressed },
        { type: "diamond", cards: pressedDiamond.symbolsPressed },
        { type: "clubs", cards: pressedClubs.symbolsPressed },
      ],
    });

    let filtered = fullTables.filter(
      (table) => table.tableNum !== opendTableNum
    );
    if (autoFillFormFired === false) {
      setfullTables([
        ...filtered,
        {
          tableNum: opendTableNum,
          choosenCards: [
            { type: "spade", cards: pressedSpade.symbolsPressed },
            { type: "heart", cards: pressedHeart.symbolsPressed },
            { type: "diamond", cards: pressedDiamond.symbolsPressed },
            { type: "clubs", cards: pressedClubs.symbolsPressed },
          ],
        },
      ]);
    }
  }, [pressedSpade, pressedHeart, pressedDiamond, pressedClubs]);

  useEffect(() => {
    if (autoFillFormFired === true) {
      let usedtable = fullTables.find(
        (table) => table.tableNum === usedTableNum
      )[0];
      console.log("usedtable  ##### : ", usedtable);

      // setpressedSpade({
      //   ...pressedSpade,
      //   symbolsPressed: usedtable.choosenCards.find((x) => x.type === "spade")
      //     .cards,
      // });
      // setpressedHeart({
      //   ...pressedHeart,
      //   symbolsPressed: usedtable.choosenCards.find((x) => x.type === "heart")
      //     .cards,
      // });
      // setpressedDiamond({
      //   ...pressedDiamond,
      //   symbolsPressed: usedtable.choosenCards.find((x) => x.type === "diamond")
      //     .cards,
      // });
      // setpressedClubs({
      //   ...pressedClubs,
      //   symbolsPressed: usedtable.choosenCards.find((x) => x.type === "clubs")
      //     .cards,
      // });
      deleteFilled();
      autoFill(opendTableNum, usedTableNum);
    }

    setautoFillFormFired(false);
  }, [autoFillFormFired]);

  useEffect(() => {
    let filteredAllCounters = allCounters.filter(
      (counter) => counter.formNum !== opendTableNum
    );
    setallCounters([
      ...filteredAllCounters,
      { formNum: opendTableNum, counter: counter },
    ]);
  }, [counter]);

  useEffect(() => {
    setcounter(
      allCounters.find((counter) => counter.formNum === opendTableNum).counter
    );
    console.log("allCounters from shitatifillForm : ", allCounters);
  }, [allCounters]);

  return (
    <>
      <View
        style={{
          backgroundColor: "#263742",
          width: "100%",
          top: "10%",
          height: ravChance ? 650 : 630,
          position: "absolute",
          zIndex: 2000,
        }}
      >
        {/* {top 90 deg box} */}
        <View
          style={{
            backgroundColor: "#263742",

            height: 75,

            flexDirection: "row",
            // flex:1,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 30,
            marginHorizontal: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => {
                    autoFill(opendTableNum, usedTableNum);
                    console.log(usedTableNum);
                  }}
                  style={{
                    width: 30,
                    height: 30,
                    borderColor: "white",
                    borderWidth: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 23,
                    margin: 3,
                  }}
                >
                  <Image
                    style={{ width: 22.5, height: 12.5 }}
                    source={require("C:/fullstack/lottoMatic/assets/fillTable.png")}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: 30,
                    height: 30,
                    borderColor: "white",
                    borderWidth: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 23,
                    margin: 3,
                  }}
                  onPress={() => {
                    deleteFilled();
                  }}
                >
                  <Image
                    style={{ width: 22.5, height: 12.5 }}
                    source={require("C:/fullstack/lottoMatic/assets/removeForm.png")}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: 30,
                    height: 30,
                    borderColor: "white",
                    borderWidth: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 23,
                    margin: 3,
                  }}
                  onPress={() => {
                    setautoFillFormFired(true);
                    autoFillForm(tableNum, formNum);
                  }}
                >
                  <Image
                    style={{ width: 22.5, height: 12.5 }}
                    source={require("C:/fullstack/lottoMatic/assets/fillForm.png")}
                  />
                </TouchableOpacity>
              </View>

              {/* <View
                style={{
                  top: 3,
                  left: 7,
                  borderLeftWidth: 1,
                  borderLeftColor: "white",
                  marginRight: 13,
                  height: 33,
                }}
              ></View>

              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "#DB1267",
                  borderRadius: 30,
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  borderLeftColor: "white",
                  height: 25,
                  width: 25,
                  marginVertical: 4,
                  top: 3,
                }}
              >
                <FontAwesomeIcon
                  color='#DB1267'
                  borderColor='#DB1267'
                  borderWidth={30}
                  inverse
                  size={25}
                  icon={faAngleRight}
                  onPress={() => {
                    if (opendTableNum < formNum) {
                      setopendTableNum(opendTableNum + 1);
                    }
                  }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                flex: 1,
              }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "#DB1267",
                  borderRadius: 30,
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  height: 25,
                  width: 25,
                  marginVertical: 4,
                  top: 3,
                }}
              >
                <FontAwesomeIcon
                  color='#DB1267'
                  borderColor='#DB1267'
                  borderWidth={30}
                  inverse
                  size={25}
                  icon={faAngleLeft}
                  onPress={() => {
                    if (opendTableNum > 1) {
                      setopendTableNum(opendTableNum - 1);
                    }
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  top: 3,
                  left: 7,
                  borderLeftWidth: 1,
                  borderLeftColor: "white",
                  marginRight: 13,
                  height: 33,
                }}
              ></View> */}

              <TouchableOpacity
                style={{
                  height: 25,
                  padding: 7,
                  backgroundColor: "white",
                  borderRadius: 13,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 6,
                  marginVertical: 4,
                  top: 3,
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
          </View>
        </View>
        {/* {fill numbers} */}
        <View
          style={{
            borderColor: "white",
            width: "96%",
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
                fontSize: 17,
                marginHorizontal: 5,
                fontFamily: "fb-Spacer",
              }}
            >
              {`מלא טופס ${opendTableNum}`}
            </Text>
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
                shitatiPage={shitatiPage}
                usedTableNum={usedTableNum}
                symbol={symbol}
                setpressed={setpressedSpade}
                pressed={pressedSpade}
                setcounter={setcounter}
                counter={counter}
                usedTable={usedTable}
                opendTableNum={opendTableNum}
                fullTables={fullTables}
                setusedTable={setusedTable}
                cardTypeUsed={cardTypeUsed}
                setcardTypeUsed={setcardTypeUsed}
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
                shitatiPage={shitatiPage}
                usedTableNum={usedTableNum}
                symbol={symbol}
                setpressed={setpressedHeart}
                pressed={pressedHeart}
                setcounter={setcounter}
                counter={counter}
                usedTable={usedTable}
                fullTables={fullTables}
                opendTableNum={opendTableNum}
                setusedTable={setusedTable}
                cardTypeUsed={cardTypeUsed}
                setcardTypeUsed={setcardTypeUsed}
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
                shitatiPage={shitatiPage}
                usedTableNum={usedTableNum}
                symbol={symbol}
                setpressed={setpressedDiamond}
                pressed={pressedDiamond}
                setcounter={setcounter}
                counter={counter}
                usedTable={usedTable}
                fullTables={fullTables}
                opendTableNum={opendTableNum}
                setusedTable={setusedTable}
                cardTypeUsed={cardTypeUsed}
                setcardTypeUsed={setcardTypeUsed}
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
                shitatiPage={shitatiPage}
                usedTableNum={usedTableNum}
                symbol={symbol}
                setpressed={setpressedClubs}
                pressed={pressedClubs}
                setcounter={setcounter}
                counter={counter}
                usedTable={usedTable}
                fullTables={fullTables}
                opendTableNum={opendTableNum}
                setusedTable={setusedTable}
                cardTypeUsed={cardTypeUsed}
                setcardTypeUsed={setcardTypeUsed}
              />
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

export default FillForm;
