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
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

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
  const [errorMsg, seterrorMsg] = useState("");
  const [trimedFullTables, settrimedFullTables] = useState([]);
  const store = useSelector((state) => state);
 const[fillOtomatic, setFillOtomatic] = useState(false);
  const[fillOtomaticTrue, setFillOtomaticTrue] = useState(false);
  const dispatch = useDispatch();
  const route = useRoute();

  const autoFillForm = async () => {
    
    await deletForm();
    let fullTabels1 = [];
    for (let i = 1; i <= 14; i++) {
      while (i <= tableNum) {
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
        choosenNums: [" ", " ", " ", " ", " ", " "],
        strongNum: " ",
      };
      fullTabels1 = [...fullTabels1, table];
    }
    setFullTables(fullTabels1);
    setFillOtomaticTrue(true)
    setTimeout(() => { 
            setFillOtomaticTrue(false)
      }, 300);
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
  };

  const checkTables = (fullTables, tableNum, settablesCheck) => {
    let returnedState = false;
    let fulltablesCopy = fullTables.slice(0);
    console.log(tableNum);
    console.log("fullTables from tablecheck ~~~~~~~~ : ", fullTables);

    let checkedFullTables = JSON.parse(JSON.stringify(fullTables));
    let checkedFullTables2 = fulltablesCopy.slice(0);

    checkedFullTables2.sort((table1, table2) => {
      return table1.tableNum - table2.tableNum;
    });
    // checkedFullTables = fullTables.sort((table1, table2) => {
    //   return table1.tableNum - table2.tableNum;
    // });
    checkedFullTables2.splice(tableNum, checkedFullTables2.length);
    // checkedFullTables.splice(tableNum, checkedFullTables2.length);

    // console.log("checkedFullTables : ", checkedFullTables);
    console.log("checkedFullTables2 : ", checkedFullTables2);

    if (checkedFullTables2.length !== tableNum) {
      returnedState = true;
      seterrorMsg("אנא מלא את כל הטבלאות");
    }

    if (store.user === -1) {
      returnedState = true;

      seterrorMsg("יש להתחבר על מנת להמשיך");
    }

    checkedFullTables2.forEach((table) => {
      if (table.choosenNums.includes(" ")) {
        returnedState = true;
      }
      if (table.strongNum === " ") {
        returnedState = true;
      }
    });
    settablesCheck(returnedState);
    settrimedFullTables(checkedFullTables2);
  };

  const tableNumChangeCheck = (fullTables, tableNum) => {
    let updatedFullTables = [...fullTables];

    updatedFullTables.sort((table1, table2) => {
      return table1.tableNum - table2.tableNum;
    });
    updatedFullTables.forEach((table) => {
      if (table.tableNum > tableNum) {
        table.choosenNums = [" ", " ", " ", " ", " ", " "];
        table.strongNum = " ";
      }
    });

    console.log("updatedFullTables : ", updatedFullTables);
    setFullTables([...updatedFullTables]);
  };

  useEffect(() => {
    checkTables(fullTables, tableNum, settablesCheck, setFullTables);
    console.log("fullTables : ", fullTables);
  }, [fullTables, tableNum]);

  useEffect(() => {
    tableNumChangeCheck(fullTables, tableNum);
    console.log("fulltables ~~~ : ", fullTables);
  }, [tableNum]);

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
              fullTables={fullTables}
              setFullTables={setFullTables}
              double={double}
              settableNum={settableNum}
              tableNum={tableNum}
            />

            <Text style={LottoListstyles.subHeader}>בחר 6 מספרים וחזק</Text>
            <View style={LottoListstyles.autoBtnContainer}>
            <View
            style={{
              borderRadius: 30,
              borderColor: fillOtomaticTrue === false ? "white" : "#8CC63F",
              borderWidth: 2,
              marginTop: 5,
              justifyContent: "center",
              alignItems: "center",
              height: 25,
              width: 25,
              top: 6,
              // backgroundColor: tableNum === 2 ? "#8CC63F" : "white",
            }}
          >
            <FontAwesomeIcon
              icon={faCheck}
              color={fillOtomaticTrue === false ? "white" : "#8CC63F"}
            />
          </View>
              <TouchableOpacity
                onPress={autoFillForm}
                // style={LottoListstyles.autoBtn}
                style={{
                  // borderColor: "white",
                  borderWidth: 1,
                  borderRadius: 10,
                  margin: 5,
                  paddingHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 7,
                  borderColor:fillOtomaticTrue === false ? "white" : "#8CC63F",

              }}
              >
                <Text
                  style={LottoListstyles.autoBtnText}>
                    מלא טופס אוטומטי
                </Text>
              </TouchableOpacity>
              <View
            style={{
              borderRadius: 30,
              borderColor: fillOtomatic === false ? "white" : "#8CC63F",
              borderWidth: 2,
              marginTop: 5,
              justifyContent: "center",
              alignItems: "center",
              height: 25,
              width: 25,
              top: 6,
              // backgroundColor: tableNum === 2 ? "#8CC63F" : "white",
            }}
          >
            <FontAwesomeIcon
              icon={faTimes}
              color={fillOtomatic === false ? "white" : "#8CC63F"}
            />
          </View>
              <TouchableOpacity
                onPress={() => {
                  deletForm();
                  setFillOtomatic(true)
                  setTimeout(() => { 
                          setFillOtomatic(false)
                    }, 300);
                }
                }
                // style={LottoListstyles.autoBtn}
                style={{
                  borderColor:fillOtomatic === false ? "white" : "#8CC63F",
                  borderWidth: 1,
                  borderRadius: 10,
                  margin: 5,
                  paddingHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 7,
              }}
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
                      key={index}
                      settableNum={settableNum}
                      fullTables={fullTables}
                      double={double}
                      tableNum={tableNum}
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
                onPress={async () => {
                  // await settablesCheck(checkTables(fullTables, tableNum));

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
                    navigation.navigate("SumPageLotto", {
                      tableNum: tableNum,
                      screenName: !double ? "לוטו": "דאבל לוטו",
                      fullTables: fullTables,
                      gameType: !double? "regular" : "double",
                      trimedFullTables: trimedFullTables,
                      // double:double
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
          {/* <View style={LottoListstyles.lottoExplanationContainer}>
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
          </View> */}
        </View>
      </ScrollView>
    </>
  );
};
export default LottoPage;
