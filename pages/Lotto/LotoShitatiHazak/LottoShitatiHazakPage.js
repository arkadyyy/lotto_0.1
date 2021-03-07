import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import NavBar from "../../../components/NavBar";
import BlankSquare from "../../../components/BlankSquare";
import LottoListstyles from "../LottoListStyles";
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
  Toast,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import ChooseNumOfTables from "../../Lotto/components/ChooseNumOfTables";
import ChooseForm from "../components/ChooseForm";
import ShitatiHazakFillForm from "./ShitatiHazakFillForm";
import ShitatiHazakTable from "./ShitatiHazkTable";
import { autoFill } from "./ShitatiHazakFillForm";
import EStyleSheet from "react-native-extended-stylesheet";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

const LottoShitatiHazakPage = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(1);
  // const [tzerufimNumber, setTzerufimNumber] = useState(8);
  const [hazakimNumber, setHazakimNumber] = useState(4);
  // const [opendTableTzerufimNum, setOpendTableTzerufimNum] = useState(8);
  const [opendTableHazakimNumber, setOpendTableHazakimNumber] = useState(4);
  const [double, setdouble] = useState(false);
  const [fullTables, setFullTables] = useState([]);
  const [indexOfTable, setIndexOfTable] = useState(1);
  const [opendTableNum, setopendTableNum] = useState(1);
  const [tablesCheck, settablesCheck] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");

  const store = useSelector((state) => state);

  const autoFillForm = () => {
    let numbers = autoFill(hazakimNumber);

    let table = {
      tableNum: 1,
      choosenNums: numbers.randomNumbers,
      // strongNum: numbers.randomChoosenStrongNums,
      choosenStrongNums: numbers.randomChoosenStrongNums,
    };
    setFullTables([table]);
  };

  const checkTables = (fullTables, tableNum) => {
    let returnedState = false;

    console.log(tableNum);

    let checkedFullTables = fullTables.sort((table1, table2) => {
      return table1.tableNum - table2.tableNum;
    });
    checkedFullTables.slice(0, tableNum - 1);
    console.log("checkedFullTables : ", checkedFullTables);

    if (checkedFullTables.length !== tableNum) {
      returnedState = true;
      seterrorMsg("אנא מלא את הטבלה");
    }

    if (store.user === -1) {
      returnedState = true;

      seterrorMsg("יש להתחבר על מנת להמשיך");
    }

    checkedFullTables.forEach((table) => {
      if (table.choosenNums.includes(" ")) {
        returnedState = true;
      }
      if (table.strongNum === " ") {
        returnedState = true;
      }
    });
    return returnedState;
  };

  useEffect(() => {
    settablesCheck(checkTables(fullTables, tableNum));
    console.log("tablesCheck : ", tablesCheck);
    console.log("fullTables : ", fullTables);
  }, [fullTables, tableNum]);

  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} />
        <BlankSquare gameName='הגרלת לוטו' color='#E62321' />
        <ChooseForm setdouble={setdouble} double={double} />
        <View style={{ margin: 15 }}>
          <View style={LottoListstyles.lottoPageContainer}>
            <View style={LottoListstyles.header}>
              <View style={LottoListstyles.topNumCircle}>
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
                  fontSize: 17,
                  color: "white",
                  fontFamily: "fb-Spacer-bold",
                }}
              >
                מלא את הטופס
              </Text>
            </View>

            <ChooseNumOfTables
              hazakimNumber={hazakimNumber}
              setHazakimNumber={setHazakimNumber}
            />

            <Text style={LottoListstyles.subHeader}>
              בחר 7 מספרים ו-{hazakimNumber} מספרים חזקים
            </Text>
            <View style={LottoListstyles.autoBtnContainer}>
              <Button
                onPress={autoFillForm}
                style={LottoListstyles.autoBtn}
                small
                rounded
                bordered
              >
                <Text style={LottoListstyles.autoBtnText}>
                  מלא טופס אוטומטי
                </Text>
              </Button>
              <Button
                onPress={() => setFullTables([])}
                style={LottoListstyles.autoBtn}
                small
                rounded
                bordered
              >
                <Text style={LottoListstyles.autoBtnText}>
                  מחק טופס אוטומטית
                </Text>
              </Button>
            </View>
            {showTable && (
              <ShitatiHazakFillForm
                setshowTable={setshowTable}
                setFullTables={setFullTables}
                fullTables={fullTables}
                indexOfTable={indexOfTable}
                hazakimNumber={hazakimNumber}
                // opendTableNum={opendTableNum}
                // opendTableTzerufimNum={opendTableTzerufimNum}
              />
            )}
            <View style={LottoListstyles.listContainerBorder}>
              <List style={LottoListstyles.listContainer}>
                <ScrollView>
                  {/* {Array.from(Array(tableNum)).map((x, index) => ( */}
                  <ShitatiHazakTable
                    // tzerufimNumber={tzerufimNumber}
                    hazakimNumber={hazakimNumber}
                    double={double}
                    key={1}
                    index={1}
                    setshowTable={setshowTable}
                    setIndexOfTable={1}
                    fullTables={fullTables}
                    setopendTableNum={setopendTableNum}
                    // setOpendTableTzerufimNum={setOpendTableTzerufimNum}
                    // opendTableTzerufimNum={opendTableTzerufimNum}
                  />
                  {/* ))} */}
                </ScrollView>
              </List>
            </View>
            <View style={LottoListstyles.sendFormBtnContainer}>
              <Button
                onPress={() => {
                  if (tablesCheck === true) {
                    Toast.show({
                      text: errorMsg,
                      buttonText: "סגור",
                      position: "top",
                      // type: "warning",
                      buttonStyle: {
                        backgroundColor: "white",
                        borderRadius: 8,
                      },
                      textStyle: { color: "white" },
                      buttonTextStyle: { color: "black" },
                      duration: 2500,
                    });
                  }
                  if (tablesCheck === false) {
                    navigation.navigate("SumPageLotto", {
                      tableNum: tableNum,
                      screenName: "לוטו שיטתי חזק",
                      fullTables: fullTables,
                      gameType: "shitati_hazak",
                      hazakimNumber: hazakimNumber,
                    });
                  }
                }}
                style={LottoListstyles.sendFormBtn}
              >
                <Text style={LottoListstyles.sendFormBtnText}>
                  המשך לשליחת טופס
                </Text>
              </Button>
            </View>
          </View>

          {/* <View style={{ flexDirection: "row", margin: 12 }}>
            <View style={{ height: "50%", backgroundColor: "white" }}></View>
            <Text
              style={{
                flex: 4,
                fontSize: 20,
                fontFamily: "fb-Spacer",
                alignSelf: "flex-start",
              }}
            >
              הסבר על הגרלות לוטו
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
          </View> */}
        </View>
      </ScrollView>
    </>
  );
};
export default LottoShitatiHazakPage;
