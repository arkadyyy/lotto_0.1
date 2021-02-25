import React, { useState, useEffect } from "react";
import LottoListstyles from "./LottoListStyles";
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
  Toast,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import ChooseNumOfTables from "./components/ChooseNumOfTables";
import ChooseForm from "./components/ChooseForm";
import ShitatiFillForm from "./components/ShitatiFillForm";
import ShitatiTable from "./components/ShitatiTable";
import { autoFill } from "../Lotto/components/FillForm";
import EStyleSheet from "react-native-extended-stylesheet";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Touchable } from "react-native";
import { useSelector, useDispatch } from "react-redux";

const LottoShitatiPage = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(1);
  const [tzerufimNumber, setTzerufimNumber] = useState(5);
  const [opendTableTzerufimNum, setOpendTableTzerufimNum] = useState(8);
  const [double, setdouble] = useState(false);
  const [fullTables, setFullTables] = useState([]);
  const [indexOfTable, setIndexOfTable] = useState(1);
  const [opendTableNum, setopendTableNum] = useState(1);
  const [tablesCheck, settablesCheck] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");

  const store = useSelector((state) => state);
  const autoFillForm = () => {
    let numbers = autoFill(tzerufimNumber);
    let table = {
      tableNum: 1,
      choosenNums: numbers.randomNumbers,
      strongNum: numbers.strongNum,
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

      seterrorMsg("עלייך להתחבר על מנת להמשיך");
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
                <Text style={{ fontSize: 20, color: "#E62321" }}>1</Text>
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
              settableNum={settableNum}
              tableNum={tableNum}
              tzerufimNumber={tzerufimNumber}
              setTzerufimNumber={setTzerufimNumber}
            />

            <Text style={LottoListstyles.subHeader}>
              בחר {tzerufimNumber} מספרים וחזק
            </Text>
            <View style={LottoListstyles.autoBtnContainer}>
              <TouchableOpacity
                onPress={autoFillForm}
                style={LottoListstyles.autoBtn}
              >
                <Text style={LottoListstyles.autoBtnText}>
                  מלא טופס אוטומטי
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setFullTables([])}
                style={LottoListstyles.autoBtn}
              >
                <Text style={LottoListstyles.autoBtnText}>
                  מחק טופס אוטומטי
                </Text>
              </TouchableOpacity>
            </View>
            {showTable && (
              <ShitatiFillForm
                setshowTable={setshowTable}
                setFullTables={setFullTables}
                fullTables={fullTables}
                indexOfTable={indexOfTable}
                opendTableNum={opendTableNum}
                tzerufimNumber={tzerufimNumber}
                // opendTableTzerufimNum={opendTableTzerufimNum}
              />
            )}
            <View style={LottoListstyles.listContainerBorder}>
              <List style={LottoListstyles.listContainer}>
                <ScrollView>
                  {/* {Array.from(Array(tableNum)).map((x, index) => ( */}
                  <ShitatiTable
                    tzerufimNumber={tzerufimNumber}
                    double={double}
                    key={1}
                    index={1}
                    setshowTable={setshowTable}
                    setIndexOfTable={1}
                    fullTables={fullTables}
                    setopendTableNum={setopendTableNum}
                    setOpendTableTzerufimNum={setOpendTableTzerufimNum}
                    opendTableTzerufimNum={opendTableTzerufimNum}
                  />
                  {/* ))} */}
                </ScrollView>
              </List>
            </View>
            <View style={LottoListstyles.sendFormBtnContainer}>
              <Button
                onPress={() => {
                  let summary = { lotoShitati: fullTables };

                  if (tablesCheck === true) {
                    Toast.show({
                      text: errorMsg,
                      textStyle: { fontFamily: "fb-Spacer" },
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
                    navigation.navigate("ExtraFormPage", {
                      tableNum: tableNum,
                      screenName: "לוטו שיטתי",
                      fullTables: fullTables,
                      gameType: "shitati",
                      tzerufimNumber: tzerufimNumber,
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

          <View style={LottoListstyles.lottoExplanationContainer}>
            <Text style={{ fontSize: EStyleSheet.value("$rem") * 20 }}>
              הסבר על הגרלות לוטו
            </Text>
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
              <FontAwesomeIcon
                color='#263742'
                border={true}
                inverse
                icon={faPlusCircle}
                onPress={() => {
                  navigation.navigate("HowItWorks");
                }}
              />
              <Text
                style={{
                  marginRight: 10,
                  paddingRight: 5,
                  paddingTop: 2,
                  fontSize: EStyleSheet.value("$rem") * 15,
                }}
              >
                עוד...
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default LottoShitatiPage;
