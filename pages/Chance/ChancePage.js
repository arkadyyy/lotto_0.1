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
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const ChancePage = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(1);
  const [formNum, setformNum] = useState(1);
  const [investNum, setinvestNum] = useState(5);
  const [counter, setcounter] = useState(0);
  const [fullTables, setfullTables] = useState({
    gameType: 1,
    choosenCards: [],
  });
  // const [fullTables, setfullTables] = useState({
  //  tableNum  : 0,
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

  const autoFillForm = async (tableNum) => {
    await deletForm();
    const cardArr = ["7", "8", "9", "10", "J", "Q", "K", "A"];
    var setPressedArr = [
      [pressedHeart, setpressedHeart],
      [pressedSpade, setpressedSpade],
      [pressedClubs, setpressedClubs],
      [pressedDiamond, setpressedDiamond],
    ];

    var usedPressedArr = [];

    for (let index = 1; index <= tableNum; index++) {
      let card =
        setPressedArr[Math.floor(Math.random() * setPressedArr.length)];

      usedPressedArr.push(card);
      setPressedArr.splice(setPressedArr.indexOf(card), 1);
    }
    usedPressedArr.forEach((pressed) => {
      let card = cardArr[Math.floor(Math.random() * cardArr.length)];

      pressed[1]({ ...pressed[0], symbolsPressed: [card] });
    });

    setcounter(tableNum);
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

  ///////////////////

  // useEffect(() => {
  //   console.log("fulltables from chancePage : ", fullTables);
  // }, [fullTables]);

  useEffect(() => {
    setfullTables({
      ...fullTables,
      gameType: tableNum,
      choosenCards: [
        ...fullTables.choosenCards,
        {
          pressedSpade,
          pressedHeart,
          pressedDiamond,
          pressedClubs,
        },
      ],
    });
    console.log("fullTables :", fullTables);
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

  useEffect(() => {
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
    if (counter >= 1) {
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
                <Text
                  style={{
                    fontSize: 20,
                    color: "#009943",
                    fontFamily: "fb-Spacer-bold",
                  }}
                >
                  1
                </Text>
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

            {/* <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                margin: 20,
                flex: 1,
              }}
            > */}
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
            {/* </View> */}

            <View style={chanceListstyles.autoBtnContainer}>
              <TouchableOpacity
                onPress={() => {
                  autoFillForm(tableNum);
                  console.log("pressedSpade : ", pressedSpade);
                  console.log("pressedHeart : ", pressedHeart);
                  console.log("pressedDiamond : ", pressedDiamond);
                  console.log(" pressedClubs : ", pressedClubs);
                  console.log(" fullTables : ", fullTables);
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
            <View style={chanceListstyles.listContainerBorder}>
              <List style={chanceListstyles.listContainer}>
                <ScrollView>
                  {Array.from(Array(formNum)).map((x, index) => (
                    <Table
                      tableIndex={index}
                      formNum={formNum}
                      tableIndex={index + 1}
                      tableNum={tableNum}
                      fullTables={fullTables}
                      setfullTables={setfullTables}
                      setshowTable={setshowTable}
                      pressedClubs={pressedClubs}
                      pressedHeart={pressedHeart}
                      pressedDiamond={pressedDiamond}
                      pressedSpade={pressedSpade}
                    />
                  ))}
                </ScrollView>
              </List>
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <TouchableOpacity
                style={{
                  alignSelf: "center",
                  // backgroundColor: "#8CC63F",
                  borderColor: "white",
                  borderWidth: 1,
                  borderRadius: 19,
                  margin: 5,
                  paddingHorizontal: 20,
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 7,
                  flexDirection: "row",
                }}
                onPress={() => {
                  setformNum(formNum + 1);
                }}
              >
                <Text style={chanceListstyles.autoBtnText}> טופס נוסף</Text>
                <Text>
                  {" "}
                  <FontAwesomeIcon
                    size={12}
                    color='white'
                    border={true}
                    inverse
                    icon={faPlus}
                  />{" "}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  alignSelf: "center",
                  // backgroundColor: "#8CC63F",
                  borderColor: "white",
                  borderWidth: 1,
                  borderRadius: 19,
                  margin: 5,
                  paddingHorizontal: 20,
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 7,
                  flexDirection: "row",
                }}
                onPress={() => {
                  setformNum(formNum - 1);
                }}
              >
                <Text style={chanceListstyles.autoBtnText}> הסר טופס</Text>
                <Text>
                  {" "}
                  <FontAwesomeIcon
                    size={12}
                    color='white'
                    border={true}
                    inverse
                    icon={faMinus}
                  />{" "}
                </Text>
              </TouchableOpacity>
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
