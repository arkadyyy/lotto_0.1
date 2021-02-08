import React, { useState } from "react";
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
              hazakimNumber={hazakimNumber}
              setHazakimNumber={setHazakimNumber}
            />

            <Text style={LottoListstyles.subHeader}>
              בחר 7 מספרים ו-{hazakimNumber} מספרים חזקים
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                marginLeft: 20,
              }}
            >
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
                  let summary = { lotoShitatiHhazak: fullTables };

                  navigation.navigate("ExtraFormPage", {
                    tableNum: tableNum,
                    screenName: "לוטו שיטתי",
                    fullTables: fullTables,
                    gameType: "shitati_hazak",
                    hazakimNumber: hazakimNumber,
                  });
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
export default LottoShitatiHazakPage;
