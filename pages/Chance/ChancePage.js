import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import NavBar from "../../components/NavBar";
import BlankSquare from "../../components/BlankSquare";
import { Button, List } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import ChooseNumOfTables from "./components/ChooseNumOfTables";
import ChooseForm from "./components/ChooseForm";
import FillForm from "./components/FillForm";
import Table from "./components/Table";
import chanceListstyles from "./ChanceListStyles";
import EStyleSheet from "react-native-extended-stylesheet";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ChancePage = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(1);
  const [investNum, setinvestNum] = useState(5);
  const [counter, setcounter] = useState(0);
  const [fullTables, setfullTables] = useState({
    gameType: 1,
    choosenCards: [],
  });
  // const [fullTables, setfullTables] = useState({
  //   gameType: 1,
  //   choosenCards: [
  //     {
  //       cardType: "heart",
  //       card: ["K"],
  //     },
  //   ],
  // });
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
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("fulltables from chancePage : ", fullTables);
  }, [fullTables]);

  useEffect(() => {
    const filterEmptyFullTables = fullTables.choosenCards.filter(
      (x) => x.card.length !== 0
    );
    console.log("filterEmptyFullTables : ", filterEmptyFullTables);

    setfullTables({ ...fullTables, choosenCards: filterEmptyFullTables });
  }, [pressedSpade, pressedHeart, pressedDiamond, pressedClubs]);

  useEffect(() => {
    // console.log("i am here resetting fulltables");

    setcounter(0);

    setpressedSpade({
      ...pressedSpade,
      symbolsPressed: [],
    });
    setpressedHeart({
      ...pressedHeart,
      symbolsPressed: [],
    });

    setpressedClubs({
      ...pressedClubs,
      symbolsPressed: [],
    });
    setpressedDiamond({
      ...pressedDiamond,
      symbolsPressed: [],
    });

    setfullTables({
      gameType: tableNum,
      choosenCards: [],
    });
  }, [tableNum]);

  const autoFillForm = async (tableNum) => {
    await deletForm();
    const cardArr = ["7", "8", "9", "10", "J", "Q", "K", "A"];
    var setPressedArr = [
      [pressedHeart, setpressedHeart],
      [pressedSpade, setpressedSpade],
      [pressedClubs, setpressedClubs],
      [pressedDiamond, setpressedDiamond],
    ];

    for (let index = 0; index < 4 - tableNum; index++) {
      // let index = Math.floor(Math.random() * 4) + 1;

      console.log("index inside for : ", index);
      setPressedArr.splice(Math.floor(Math.random() * 4) + 1, 1);
    }

    setPressedArr.forEach((pressed) => {
      let index = cardArr[Math.floor(Math.random() * cardArr.length)];

      pressed[1]({ ...pressed[0], symbolsPressed: [index] });
    });
  };

  const deletForm = () => {
    setcounter(0);

    setpressedSpade({
      ...pressedSpade,
      symbolsPressed: [],
    });
    setpressedHeart({
      ...pressedHeart,
      symbolsPressed: [],
    });

    setpressedClubs({
      ...pressedClubs,
      symbolsPressed: [],
    });
    setpressedDiamond({
      ...pressedDiamond,
      symbolsPressed: [],
    });

    setfullTables({
      gameType: tableNum,
      choosenCards: [],
    });
  };

  useEffect(() => {
    // setfullTables({
    //   gameType: tableNum,
    //   choosenCards: [
    //     ...fullTables.choosenCards,
    //     {
    //       cardType: pressedSpade.type,
    //       card: pressedSpade.symbolsPressed,
    //     },
    //   ],
    // });

    if (counter >= 1) {
      // console.log("counter is bigger/equal than 1");
      //first of all , remove its old object in fullTables be4 we put its new object
      let filtered = fullTables.choosenCards.filter(
        (x) => x.cardType !== pressedSpade.type
      );

      //now we set updated fulltables
      setfullTables({
        gameType: tableNum,
        choosenCards: [
          ...filtered,
          {
            cardType: pressedSpade.type,
            card: pressedSpade.symbolsPressed,
          },
        ],
      });
    }
  }, [pressedSpade]);

  useEffect(() => {
    // setfullTables({
    //   gameType: tableNum,
    //   choosenCards: [
    //     ...fullTables.choosenCards,
    //     {
    //       cardType: pressedHeart.type,
    //       card: pressedHeart.symbolsPressed,
    //     },
    //   ],
    // });

    if (counter >= 1) {
      // console.log("counter is bigger/equal than 1");
      //first of all , remove its old object in fullTables be4 we put its new object
      let filtered = fullTables.choosenCards.filter(
        (x) => x.cardType !== pressedHeart.type
      );

      //now we set updated fulltables
      setfullTables({
        gameType: tableNum,
        choosenCards: [
          ...filtered,
          {
            cardType: pressedHeart.type,
            card: pressedHeart.symbolsPressed,
          },
        ],
      });
    }
  }, [pressedHeart]);

  useEffect(() => {
    // setfullTables({
    //   gameType: tableNum,
    //   choosenCards: [
    //     ...fullTables.choosenCards,
    //     {
    //       cardType: pressedDiamond.type,
    //       card: pressedDiamond.symbolsPressed,
    //     },
    //   ],
    // });

    if (counter >= 1) {
      // console.log("counter is bigger/equal than 1");
      //first of all , remove its old object in fullTables be4 we put its new object
      let filtered = fullTables.choosenCards.filter(
        (x) => x.cardType !== pressedDiamond.type
      );

      //now we set updated fulltables
      setfullTables({
        gameType: tableNum,
        choosenCards: [
          ...filtered,
          {
            cardType: pressedDiamond.type,
            card: pressedDiamond.symbolsPressed,
          },
        ],
      });
    }
  }, [pressedDiamond]);

  useEffect(() => {
    // setfullTables({
    //   gameType: tableNum,
    //   choosenCards: [
    //     ...fullTables.choosenCards,
    //     {
    //       cardType: pressedClubs.type,
    //       card: pressedClubs.symbolsPressed,
    //     },
    //   ],
    // });

    if (counter >= 1) {
      // console.log("counter is bigger/equal than 1");
      //first of all , remove its old object in fullTables be4 we put its new object
      let filtered = fullTables.choosenCards.filter(
        (x) => x.cardType !== pressedClubs.type
      );

      //now we set updated fulltables
      setfullTables({
        gameType: tableNum,
        choosenCards: [
          ...filtered,
          {
            cardType: pressedClubs.type,
            card: pressedClubs.symbolsPressed,
          },
        ],
      });
    }
  }, [pressedClubs]);

  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} />
        <BlankSquare gameName="הגרלת צ'אנס" color='#009943' />
        <ChooseForm color='#009943' />
        <View style={{ margin: 15 }}>
          <View style={chanceListstyles.chancePageContainer}>
            <View style={chanceListstyles.header}>
              <View style={chanceListstyles.topNumCircle}>
                <Text style={{ fontSize: 20, color: "#009943" }}>1</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  fontFamily: "fb-Spacer-bold",
                }}
              >
                מלא את הטופס
              </Text>
            </View>

            <ChooseNumOfTables settableNum={settableNum} tableNum={tableNum} />

            <View style={chanceListstyles.autoBtnContainer}>
              <TouchableOpacity
                onPress={() => {
                  autoFillForm(tableNum);
                }}
                style={chanceListstyles.autoBtn}
              >
                <Text style={chanceListstyles.autoBtnText}>
                  מלא טופס אוטומטי
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={deletForm}
                style={chanceListstyles.autoBtn}
              >
                <Text style={chanceListstyles.autoBtnText}>
                  מחק טופס אוטומטית
                </Text>
              </TouchableOpacity>
            </View>

            {showTable && (
              <FillForm
                choosenCards
                tableNum={tableNum}
                setshowTable={setshowTable}
                fullTables={fullTables}
                setfullTables={setfullTables}
                counter={counter}
                setcounter={setcounter}
                pressedSpade={pressedSpade}
                setpressedSpade={setpressedSpade}
                pressedHeart={pressedHeart}
                setpressedHeart={setpressedHeart}
                pressedDiamond={pressedDiamond}
                setpressedDiamond={setpressedDiamond}
                pressedClubs={pressedClubs}
                setpressedClubs={setpressedClubs}
              />
            )}
            <View
              style={{
                borderColor: showTable ? "transparent" : "white",
                borderRadius: 7,
                borderWidth: 1,
                width: "95%",
                alignSelf: "center",
                marginTop: 20,
                padding: 2,
              }}
            >
              <List
                style={{
                  alignItems: "flex-end",
                  height: 250,
                  marginLeft: -17,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    alignSelf: "flex-start",
                    marginHorizontal: 25,
                    marginVertical: 10,
                    fontFamily: "fb-Spacer-bold",

                    fontSize: 15,
                  }}
                >
                  בחר צירוף
                </Text>
                <Table
                  tableNum={tableNum}
                  fullTables={fullTables}
                  setfullTables={setfullTables}
                  setshowTable={setshowTable}
                  pressedClubs={pressedClubs}
                  pressedHeart={pressedHeart}
                  pressedDiamond={pressedDiamond}
                  pressedSpade={pressedSpade}
                />

                <TouchableOpacity
                  style={{
                    alignSelf: "center",
                    backgroundColor: "#8CC63F",
                    padding: 7,
                    borderRadius: 8,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "white", marginHorizontal: 7 }}>
                    {" "}
                    טופס נוסף
                  </Text>
                  <Text>
                    {" "}
                    <FontAwesomeIcon
                      color='white'
                      border={true}
                      inverse
                      icon={faPlus}
                    />{" "}
                  </Text>
                </TouchableOpacity>
              </List>
            </View>
            <View style={chanceListstyles.investNumBox}>
              <Text
                style={{
                  color: "white",
                  marginVertical: 7,
                  fontFamily: "fb-Spacer",
                  fontSize: 15,
                }}
              >
                בחר את סכום ההשקעה{" "}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(5);
                  }}
                  style={
                    investNum === 5
                      ? chanceListstyles.investBtnSelected
                      : chanceListstyles.investBtn
                  }
                >
                  <Text
                    style={
                      investNum === 5
                        ? { color: "white", fontFamily: "fb-Spacer" }
                        : { color: "black", fontFamily: "fb-Spacer" }
                    }
                  >
                    5
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(10);
                  }}
                  style={
                    investNum === 10
                      ? chanceListstyles.investBtnSelected
                      : chanceListstyles.investBtn
                  }
                >
                  <Text
                    style={
                      investNum === 10
                        ? { color: "white", fontFamily: "fb-Spacer" }
                        : { color: "black", fontFamily: "fb-Spacer" }
                    }
                  >
                    10
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(25);
                  }}
                  style={
                    investNum === 25
                      ? chanceListstyles.investBtnSelected
                      : chanceListstyles.investBtn
                  }
                >
                  <Text
                    style={
                      investNum === 25
                        ? { color: "white", fontFamily: "fb-Spacer" }
                        : { color: "black", fontFamily: "fb-Spacer" }
                    }
                  >
                    25
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(50);
                  }}
                  style={
                    investNum === 50
                      ? chanceListstyles.investBtnSelected
                      : chanceListstyles.investBtn
                  }
                >
                  <Text
                    style={
                      investNum === 50
                        ? { color: "white", fontFamily: "fb-Spacer" }
                        : { color: "black", fontFamily: "fb-Spacer" }
                    }
                  >
                    50
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(70);
                  }}
                  style={
                    investNum === 70
                      ? chanceListstyles.investBtnSelected
                      : chanceListstyles.investBtn
                  }
                >
                  <Text
                    style={
                      investNum === 70
                        ? { color: "white", fontFamily: "fb-Spacer" }
                        : { color: "black", fontFamily: "fb-Spacer" }
                    }
                  >
                    70
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(100);
                  }}
                  style={
                    investNum === 100
                      ? chanceListstyles.investBtnSelected
                      : chanceListstyles.investBtn
                  }
                >
                  <Text
                    style={
                      investNum === 100
                        ? { color: "white", fontFamily: "fb-Spacer" }
                        : { color: "black", fontFamily: "fb-Spacer" }
                    }
                  >
                    100
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(250);
                  }}
                  style={
                    investNum === 250
                      ? chanceListstyles.investBtnSelected
                      : chanceListstyles.investBtn
                  }
                >
                  <Text
                    style={
                      investNum === 250
                        ? { color: "white", fontFamily: "fb-Spacer" }
                        : { color: "black", fontFamily: "fb-Spacer" }
                    }
                  >
                    250
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(500);
                  }}
                  style={
                    investNum === 500
                      ? chanceListstyles.investBtnSelected
                      : chanceListstyles.investBtn
                  }
                >
                  <Text
                    style={
                      investNum === 500
                        ? { color: "white", fontFamily: "fb-Spacer" }
                        : { color: "black", fontFamily: "fb-Spacer" }
                    }
                  >
                    500
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 25,
                zIndex: 1,
              }}
            >
              <Button
                onPress={() => {
                  let summary = { chance: fullTables, investNum };
                  navigation.navigate("SumPageChance", {
                    tableNum: tableNum,
                    investNum: investNum,
                    fullTables: fullTables,
                    gameType: "regular",
                  });
                }}
                style={chanceListstyles.sendFormBtn}
              >
                <Text style={chanceListstyles.sendFormBtnText}>
                  המשך לשליחת טופס
                </Text>
              </Button>
            </View>
          </View>
          <View style={chanceListstyles.lottoExplanationContainer}>
            <Text style={{ fontSize: 18 }}>הסבר על הגרלות לוטו</Text>
            <TouchableOpacity>
              <Text
                style={{
                  marginRight: 10,
                  paddingRight: 5,
                  paddingTop: 2,
                  fontSize: EStyleSheet.value("$rem") * 15,
                }}
              >
                עוד
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default ChancePage;
