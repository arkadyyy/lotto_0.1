import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import NavBar from "../../components/NavBar";
import BlankSquare from "../../components/BlankSquare";
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
import { ScrollView } from "react-native-gesture-handler";
import ChooseNumOfTables from "./components/ChooseNumOfTables";
import ChooseForm from "./components/ChooseForm";
import FillForm from "./components/FillForm";
import TableRavChance from "./components/TableRavChance";
import chanceListstyles from "./ChanceListStyles";

const RavChancePage = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(4);
  const [investNum, setinvestNum] = useState(5);
  const [counter, setcounter] = useState(0);
  const [filledForm, setfilledForm] = useState([]);
  const [fullTables, setfullTables] = useState({
    gameType: 1,
    choosenCards: [],
  });

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

    var usedPressedArr = [];

    for (let index = 1; index <= tableNum; index++) {
      // console.log("i am inside for ");
      // let index = Math.floor(Math.random() * 4) + 1;
      let card =
        setPressedArr[Math.floor(Math.random() * setPressedArr.length)];
      console.log("card inside for : ", card);
      usedPressedArr.push(card);

      setPressedArr.splice(setPressedArr.indexOf(card), 1);
      // console.log("spliced number : ", Math.floor(Math.random() * 4) );
      // setPressedArr.splice(Math.floor(Math.random() * 4), 1);
    }

    usedPressedArr.forEach((pressed) => {
      let card = cardArr[Math.floor(Math.random() * cardArr.length)];

      pressed[1]({ ...pressed[0], symbolsPressed: [card] });
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

  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} />
        <BlankSquare gameName="הגרלת צ'אנס" color='#009943' />
        <ChooseForm color='#009943'  />
        
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

            <ChooseNumOfTables settableNum={4} tableNum={4} />

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

            <View style={chanceListstyles.autoBtnContainer}>
              <TouchableOpacity
                onPress={() => {
                  autoFillForm(tableNum);
                  console.log(tableNum);
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
ravChance={"ravChnce"}
              />
            )}
              <View style={chanceListstyles.listContainerBorder}>

              <List
                style={{
                  alignItems: "flex-start",
                  height: 400,
                  marginLeft: -17,
    flexWrap: "wrap",

                }}
              >
                {/* <Text
                  style={{
                    color: "white",
                    alignSelf: "flex-start",
                    marginHorizontal: 25,
                    marginVertical: 10,
                  }}
                >
                  בחר צירוף
                </Text> */}
                <ScrollView>

                <TableRavChance
                  fullTables={fullTables}
                  setfullTables={setfullTables}
                  tableNum={tableNum}
                  setshowTable={setshowTable}
                  pressedClubs={pressedClubs}
                  pressedHeart={pressedHeart}
                  pressedDiamond={pressedDiamond}
                  pressedSpade={pressedSpade}
                />
                                </ScrollView>

              </List>
            </View>
            <View style={chanceListstyles.investNumBox}>
              <Text style={{
   color: "white",
   marginVertical: 7,
   fontFamily: "fb-Spacer",
   fontSize: 15,              }}>
                בחר את סכום ההשקעה{" "}
              </Text>
              <View style={{
                flexDirection: "row"
              }}>
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
                  <Text>5</Text>
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
                  <Text>10</Text>
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
                  <Text>25</Text>
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
                  <Text>50</Text>
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
                  <Text>70</Text>
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
                  <Text>100</Text>
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
                  <Text>250</Text>
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
                  <Text>500</Text>
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
                  let summary = { RavChance: fullTables, investNum: investNum };
                  navigation.navigate("SumPageChance", {
                    tableNum: 4,
                    investNum: investNum,
                    fullTables: fullTables,
                    gameType: "rav_chance",
                  });
                }}
                style={{
                  borderRadius: 17,
                  backgroundColor: "#E62321",
                  borderColor: "white",
                  borderWidth: 2,
                  padding: 10,
                }}
              >
                <Text style={{ color: "white", fontSize: 28 }}>
                  המשך לשליחת טופס
                </Text>
              </Button>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              zIndex: -2,
            }}
          >
            <Text style={{ fontSize: 18 }}>הסבר על הגרלות לוטו</Text>
            <TouchableOpacity>
              <Text>עוד</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default RavChancePage;
