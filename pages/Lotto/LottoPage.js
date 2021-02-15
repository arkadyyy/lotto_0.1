import React, { useState } from "react";
import LottoListstyles from "./LottoListStyles";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import NavBar from "../../components/NavBar";
import BlankSquare from "../../components/BlankSquare";
import axios from "axios";
import { Button, List, Toast } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import ChooseNumOfTables from "./components/ChooseNumOfTables";
import ChooseForm from "./components/ChooseForm";
import FillForm from "./components/FillForm";
import Table from "./components/Table";
import { autoFill } from "./components/FillForm";
import { useEffect } from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { useSelector, useDispatch } from "react-redux";
import { LogIn } from "../../redux/actions/actions";
import { useRoute } from "@react-navigation/native";
import EStyleSheet from "react-native-extended-stylesheet";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

Amplify.configure(awsconfig);
const { width, height } = Dimensions.get("window");

const LottoPage = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(2);
  const [double, setdouble] = useState(false);
  const [fullTables, setFullTables] = useState([
    {
      choosenNums: [" ", " ", " ", " ", " ", " "],
      strongNum: " ",
      tableNum: 1,
    },
    {
      choosenNums: [" ", " ", " ", " ", " ", " "],
      strongNum: " ",
      tableNum: 2,
    },
    {
      choosenNums: [" ", " ", " ", " ", " ", " "],
      strongNum: " ",
      tableNum: 3,
    },
    {
      choosenNums: [" ", " ", " ", " ", " ", " "],
      strongNum: " ",
      tableNum: 4,
    },
    {
      choosenNums: [" ", " ", " ", " ", " ", " "],
      strongNum: " ",
      tableNum: 5,
    },
    {
      choosenNums: [" ", " ", " ", " ", " ", " "],
      strongNum: " ",
      tableNum: 6,
    },
    {
      choosenNums: [" ", " ", " ", " ", " ", " "],
      strongNum: " ",
      tableNum: 7,
    },
    {
      choosenNums: [" ", " ", " ", " ", " ", " "],
      strongNum: " ",
      tableNum: 8,
    },
    {
      choosenNums: [" ", " ", " ", " ", " ", " "],
      strongNum: " ",
      tableNum: 9,
    },
    {
      choosenNums: [" ", " ", " ", " ", " ", " "],
      strongNum: " ",
      tableNum: 10,
    },
    {
      choosenNums: [" ", " ", " ", " ", " ", " "],
      strongNum: " ",
      tableNum: 11,
    },
    {
      choosenNums: [" ", " ", " ", " ", " ", " "],
      strongNum: " ",
      tableNum: 12,
    },
    {
      choosenNums: [" ", " ", " ", " ", " ", " "],
      strongNum: " ",
      tableNum: 13,
    },
    {
      choosenNums: [" ", " ", " ", " ", " ", " "],
      strongNum: " ",
      tableNum: 14,
    },
  ]);

  const [indexOfTable, setIndexOfTable] = useState("");
  const [opendTableNum, setopendTableNum] = useState(0);
  const [tableRowColor, setTableRowColor] = useState("D60617");
  const [tablesCheck, settablesCheck] = useState(false);

  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const route = useRoute();

  const autoFillForm = () => {
    let fullTabels1 = [];
    for (let i = 1; i < 14; i++) {
      while (i < tableNum+1){
        let numbers = autoFill(6);
        let table = {
          tableNum: i,
          choosenNums: numbers.randomNumbers,
          strongNum: numbers.strongNum,
        };
        fullTabels1 = [...fullTabels1, table];
        i++;
      }
      
      let table = {
        tableNum: i,
        choosenNums: [" "],
        strongNum: (" "),
      };
      fullTabels1 = [...fullTabels1, table];
      i++;
    }
    setFullTables(fullTabels1);
  };

  const deletForm = () => {
    setFullTables([
      {
        choosenNums: [" ", " ", " ", " ", " ", " "],
        strongNum: " ",
        tableNum: 1,
      },
      {
        choosenNums: [" ", " ", " ", " ", " ", " "],
        strongNum: " ",
        tableNum: 2,
      },
      {
        choosenNums: [" ", " ", " ", " ", " ", " "],
        strongNum: " ",
        tableNum: 3,
      },
      {
        choosenNums: [" ", " ", " ", " ", " ", " "],
        strongNum: " ",
        tableNum: 4,
      },
      {
        choosenNums: [" ", " ", " ", " ", " ", " "],
        strongNum: " ",
        tableNum: 5,
      },
      {
        choosenNums: [" ", " ", " ", " ", " ", " "],
        strongNum: " ",
        tableNum: 6,
      },
      {
        choosenNums: [" ", " ", " ", " ", " ", " "],
        strongNum: " ",
        tableNum: 7,
      },
      {
        choosenNums: [" ", " ", " ", " ", " ", " "],
        strongNum: " ",
        tableNum: 8,
      },
      {
        choosenNums: [" ", " ", " ", " ", " ", " "],
        strongNum: " ",
        tableNum: 9,
      },
      {
        choosenNums: [" ", " ", " ", " ", " ", " "],
        strongNum: " ",
        tableNum: 10,
      },
      {
        choosenNums: [" ", " ", " ", " ", " ", " "],
        strongNum: " ",
        tableNum: 11,
      },
      {
        choosenNums: [" ", " ", " ", " ", " ", " "],
        strongNum: " ",
        tableNum: 12,
      },
      {
        choosenNums: [" ", " ", " ", " ", " ", " "],
        strongNum: " ",
        tableNum: 13,
      },
      {
        choosenNums: [" ", " ", " ", " ", " ", " "],
        strongNum: " ",
        tableNum: 14,
      },
    ]);
    // setTableRowColor("#D60617");
  };

  const checkTables = (fullTables) => {
    returnedState = false;

    if (fullTables.length !== tableNum) {
      returnedState = true;
    }

    fullTables.forEach((table) => {
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
    settablesCheck(checkTables(fullTables));
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
                    fontSize: 20,
                    color: "#FF0000",
                    fontFamily: "fb-Spacer-bold",
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
              fullTables={fullTables}
              setFullTables={setFullTables}
              double={double}
              settableNum={settableNum}
              tableNum={tableNum}
            />

            <Text style={LottoListstyles.subHeader}>בחר 6 מספרים וחזק</Text>
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
                onPress={deletForm}
                style={LottoListstyles.autoBtn}
              >
                <Text style={LottoListstyles.autoBtnText}>
                  מחק טופס אוטומטית
                </Text>
              </TouchableOpacity>
            </View>
            {showTable && (
              <FillForm
              fullTables={fullTables}
                setFullTables={setFullTables}
                setshowTable={setshowTable}
                opendTableNum={opendTableNum}
                setopendTableNum={setopendTableNum}
                tableNum={tableNum}
                autoFillForm={autoFillForm}
              />
            )}
            <View style={LottoListstyles.listContainerBorder}>
              <List style={LottoListstyles.listContainer}>
                <ScrollView>
                  {Array.from(Array(tableNum)).map((x, index) => (
                    <Table
                      settableNum={settableNum}
                      fullTables={fullTables}
                      double={double}
                      tableNum={tableNum}
                      key={index}
                      index={index + 1}
                      setshowTable={setshowTable}
                      setIndexOfTable={setIndexOfTable}
                      setopendTableNum={setopendTableNum}
                      tableRowColor={tableRowColor}
                      // setTableRowColor={setTableRowColor}
                    />
                  ))}
                </ScrollView>
              </List>
            </View>
            <View style={LottoListstyles.sendFormBtnContainer}>
              <Button
                onPress={() => {
                  let summary = { regularLotto: fullTables };
                  if (tablesCheck === true) {
                    Toast.show({
                      text: "לא מילאת את כל הטבלאות",
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
                    navigation.navigate("ExtraFormPage", {
                      tableNum: tableNum,
                      screenName: "לוטו",
                      fullTables: fullTables,
                      gameType: "regular",
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
export default LottoPage;
