import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import NavBar from "../../components/NavBar";
import BlankSquare from "../../components/BlankSquare";
import { Button, List, Toast } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import ChooseNumOfTables from "./components/ChooseNumOfTables";
import ChooseForm from "./components/ChooseForm";
import chanceListstyles from "./ChanceListStyles";
import EStyleSheet from "react-native-extended-stylesheet";
import { useSelector, useDispatch } from "react-redux";
import TableChanceShitati from "./components/TableChanceShitati";
import FillFormShitati from "./components/ShitatiFillForm";

const ChancePageShitati = ({ navigation }) => {
  const store = useSelector((state) => state);

  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(1);
  const [formNum, setformNum] = useState(1);
  const [investNum, setinvestNum] = useState(5);
  const [opendTableNum, setopendTableNum] = useState(0);
  const [allCounters, setallCounters] = useState([{ formNum: 1, counter: 0 }]);

  const [tablesCheck, settablesCheck] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");
  const [trimedFullTables, settrimedFullTables] = useState([]);

  const [cardTypeUsed, setcardTypeUsed] = useState([]);

  const [fullTables, setfullTables] = useState([
    {
      tableNum: 1,
      choosenCards: [
        { type: "spade", cards: [] },
        { type: "heart", cards: [] },
        { type: "diamond", cards: [] },
        { type: "clubs", cards: [] },
      ],
    },
  ]);

  const dispatch = useDispatch();

  const autoFillForm = async (tableNum, formNum) => {
    await deletForm();
    const cardArr = ["7", "8", "9", "10", "J", "Q", "K", "A"];

    //filtered are all fulltables that are not gonna change
    let filtered = fullTables.filter((table) => table.tableNum !== 1);
    // console.log("filtered : ", filtered);
    //usedtable is the table we are currently changing, auto filling
    let usedTable = fullTables.find((table) => table.tableNum === 1);
    // console.log("usedTable : ", usedTable);

    usedTable.choosenCards = [
      { type: "spade", cards: [] },
      { type: "heart", cards: [] },
      { type: "diamond", cards: [] },
      { type: "clubs", cards: [] },
    ];

    var shuffled = cardArr.sort(function () {
      return 0.5 - Math.random();
    });
    var selected = shuffled.slice(0, tableNum);
    let x;

    //resetting usedtable cards be4 putting enw ones

    let randomNumArr = [0, 1, 2, 3];

    for (let i = 0; i < tableNum; i++) {
      x = Array.from({ length: tableNum }, (v, i) => {
        let shitatiArr = [];

        var shuffled2 = cardArr.sort(function () {
          return 0.5 - Math.random();
        });
        shitatiArr.push(shuffled2.slice(0, 4));

        return shitatiArr;
      });

      let random = Math.floor(Math.random() * randomNumArr.length);
      usedTable.choosenCards[randomNumArr[random]].cards = x[0][0];
      setcardTypeUsed([
        ...cardTypeUsed,
        usedTable.choosenCards[randomNumArr[random]].type,
      ]);
      randomNumArr.splice(random, 1);
    }
    // selected.forEach((card, index) => {
    //   let random = Math.floor(Math.random() * randomNumArr.length);

    //   usedTable.choosenCards[randomNumArr[random]].cards = [card];

    //   console.log("usedtable choosencards : ", usedTable.choosenCards);

    //   randomNumArr.splice(random, 1);
    //   console.log("randomNumArr : ", randomNumArr);
    // });
    setfullTables([...filtered, usedTable]);

    /////////// done with setting fulltables,now resetting fillform counter

    let updatedAllCounters = allCounters.map((counter, index) => {
      if (counter.formNum <= formNum) {
        counter.counter = 4 * tableNum;
        return counter;
      } else {
        return counter;
      }
    });
    setallCounters(updatedAllCounters);

    //setting cardtypeUsed
  };

  const deletForm = () => {
    setcardTypeUsed([]);
    setfullTables([
      {
        tableNum: 1,
        choosenCards: [
          { type: "spade", cards: [] },
          { type: "heart", cards: [] },
          { type: "diamond", cards: [] },
          { type: "clubs", cards: [] },
        ],
      },
    ]);

    let updatedAllCounters = allCounters.map((counter, index) => {
      counter.counter = 0;
      return counter;
    });
    setallCounters(updatedAllCounters);
  };

  const checkTables = (
    fullTables,
    tableNum,
    settablesCheck,
    setfullTables,
    formNum
  ) => {
    let returnedState = false;
    let fulltablesCopy = fullTables.slice(0);
    console.log(tableNum);

    let checkedFullTables2 = fulltablesCopy.slice(0);

    checkedFullTables2.sort((table1, table2) => {
      return table1.tableNum - table2.tableNum;
    });

    checkedFullTables2.splice(formNum, checkedFullTables2.length);

    console.log("checkedFullTables2 : ", checkedFullTables2);

    if (checkedFullTables2.length !== formNum) {
      returnedState = true;
      seterrorMsg("אנא מלא את כל הטבלאות");
    }

    if (store.user === -1) {
      returnedState = true;

      seterrorMsg("יש להתחבר על מנת להמשיך");
    }

    let counter = 0;
    checkedFullTables2.forEach((table) => {
      table.choosenCards.forEach((card) => {
        if (card.cards.length === 1) {
          counter++;
        }
      });
    });

    if (counter !== tableNum) {
      returnedState = true;
    }
    settablesCheck(returnedState);
    settrimedFullTables(checkedFullTables2);
  };

  useEffect(() => {
    setfullTables([
      {
        tableNum: 1,
        choosenCards: [
          { type: "spade", cards: [] },
          { type: "heart", cards: [] },
          { type: "diamond", cards: [] },
          { type: "clubs", cards: [] },
        ],
      },
    ]);

    let updatedAllCounters = allCounters.map((counter, index) => {
      counter.counter = 0;
      return counter;
    });
    setallCounters(updatedAllCounters);
  }, [tableNum]);

  useEffect(() => {
    checkTables(fullTables, tableNum, settablesCheck, setfullTables, formNum);
    console.log("fullTables : ", fullTables);
    console.log("allCounters : ", allCounters);
  }, [fullTables, tableNum]);

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
                    fontSize: 35,
                    color: "#E62321",
                    fontFamily: "fb-Spacer",
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
                  autoFillForm(tableNum, formNum);
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
              <FillFormShitati
                choosenCards
                tableNum={tableNum}
                setshowTable={setshowTable}
                fullTables={fullTables}
                setfullTables={setfullTables}
                opendTableNum={opendTableNum}
                setopendTableNum={setopendTableNum}
                allCounters={allCounters}
                setallCounters={setallCounters}
                formNum={formNum}
                autoFillForm={autoFillForm}
                cardTypeUsed={cardTypeUsed}
                setcardTypeUsed={setcardTypeUsed}
              />
            )}
            <View style={chanceListstyles.listContainerBorder}>
              <List style={chanceListstyles.listContainer}>
                <ScrollView>
                  {Array.from(Array(formNum)).map((x, index) => (
                    <TableChanceShitati
                      tableIndex={index + 1}
                      formNum={formNum}
                      tableNum={tableNum}
                      fullTables={fullTables}
                      setfullTables={setfullTables}
                      setshowTable={setshowTable}
                      setopendTableNum={setopendTableNum}
                    />
                  ))}
                </ScrollView>
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
                  if (tablesCheck === true) {
                    Toast.show({
                      textStyle: { fontFamily: "fb-Spacer" },
                      text: errorMsg,
                      buttonText: "סגור",
                      position: "top",
                      // type: "warning",
                      buttonStyle: {
                        backgroundColor: "white",
                        borderRadius: 8,
                      },
                      textStyle: { color: "white", fontFamily: "fb-Spacer" },
                      buttonTextStyle: {
                        color: "black",
                        fontFamily: "fb-Spacer",
                      },
                      duration: 2500,
                    });
                  }
                  if (tablesCheck === false) {
                    navigation.navigate("SumPageChance", {
                      tableNum: tableNum,
                      investNum: investNum,
                      fullTables: fullTables,
                      gameType: "chance_shitati",
                    });
                  }
                }}
                style={chanceListstyles.sendFormBtn}
              >
                <Text style={chanceListstyles.sendFormBtnText}>
                  המשך לשליחת טופס
                </Text>
              </Button>
            </View>
          </View>
          <View style={{ flexDirection: "row", margin: 12 }}>
            <View style={{ height: "50%", backgroundColor: "white" }}></View>
            <Text
              style={{
                flex: 4,
                fontSize: 20,
                fontFamily: "fb-Spacer",
                alignSelf: "flex-start",
              }}
            >
              הסבר על הגרלות צ'אנס
            </Text>
            <View style={{ flexDirection: "row", flex: 1, left: 20 }}>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "baseline",
                  borderRadius: 100,
                  backgroundColor: "#1F3842",
                }}
              >
                <Text style={{ fontSize: 20, color: "white" }}>+</Text>
              </TouchableOpacity>

              <Text
                style={{
                  flex: 1,
                  fontFamily: "fb-Spacer",
                  alignSelf: "center",
                }}
              >
                {" "}
                עוד...
              </Text>
            </View>
          </View>
          {/* <View style={chanceListstyles.lottoExplanationContainer}>
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
          </View> */}
        </View>
      </ScrollView>
    </>
  );
};
export default ChancePageShitati;
