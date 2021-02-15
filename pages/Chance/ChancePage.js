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
import { useSelector, useDispatch } from "react-redux";

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
    console.log("fulltables from chancePage : ", fullTables);
  }, [fullTables]);

  useEffect(() => {
    console.log("i am here resetting fulltables");
    // setfullTables({
    //   gameType: tableNum,
    //   choosenCards: [],
    // });

    setcounter(0);

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

    setpressedClubs({
      numberOfPress: 0,
      symbolsPressed: [],
      type: "clubs",
    });
    setpressedDiamond({
      numberOfPress: 0,
      symbolsPressed: [],
      type: "diamond",
    });
  }, [tableNum]);

  useEffect(() => {
    setfullTables({
      gameType: tableNum,
      choosenCards: [
        ...fullTables.choosenCards,
        {
          cardType: pressedSpade.type,
          card: pressedSpade.symbolsPressed,
        },
      ],
    });
  }, [pressedSpade]);

  useEffect(() => {
    setfullTables({
      gameType: tableNum,
      choosenCards: [
        ...fullTables.choosenCards,
        {
          cardType: pressedHeart.type,
          card: pressedHeart.symbolsPressed,
        },
      ],
    });
  }, [pressedHeart]);

  useEffect(() => {
    setfullTables({
      gameType: tableNum,
      choosenCards: [
        ...fullTables.choosenCards,
        {
          cardType: pressedDiamond.type,
          card: pressedDiamond.symbolsPressed,
        },
      ],
    });
  }, [pressedDiamond]);

  useEffect(() => {
    setfullTables({
      gameType: tableNum,
      choosenCards: [
        ...fullTables.choosenCards,
        {
          cardType: pressedClubs.type,
          card: pressedClubs.symbolsPressed,
        },
      ],
    });
  }, [pressedClubs]);

  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} />
        <BlankSquare gameName="הגרלת צ'אנס" color='#009943' />
        <ChooseForm color='#009943' />
        <View style={{ margin: 15 }}>
          <View style={{ backgroundColor: "#009943", paddingBottom: 20 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 30,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "white",
                  width: 50,
                  height: 50,
                  borderRadius: 33,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 20,
                }}
              >
                <Text style={{ fontSize: 20, color: "#009943" }}>1</Text>
              </View>
              <Text
                style={{
                  fontSize: 17,
                  color: "white",
                  fontFamily: "FbSpacerRegular",
                }}
              >
                מלא את הטופס
              </Text>
            </View>

            <ChooseNumOfTables settableNum={settableNum} tableNum={tableNum} />

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
                  height: 400,
                  marginLeft: -17,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    alignSelf: "flex-start",
                    marginHorizontal: 25,
                    marginVertical: 10,
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
              </List>
            </View>
            <View style={chanceListstyles.investNumBox}>
              <Text style={{ color: "white", marginVertical: 7 }}>
                בחר את סכום ההשקעה{" "}
              </Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
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
                  let summary = { chance: fullTables, investNum };
                  navigation.navigate("SumPageChance", {
                    tableNum: tableNum,
                    investNum: investNum,
                    fullTables: fullTables,
                    gameType: "regular",
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
export default ChancePage;
