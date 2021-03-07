import React, { useState, useEffect } from "react";
import LottoListstyles from "./LottoListStyles";
import { Text, View, TouchableOpacity } from "react-native";
import NavBar from "../../components/NavBar";
import BlankSquare from "../../components/BlankSquare";
import { Button, List, ListItem, Toast } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import ChooseNumOfTables from "./components/ChooseNumOfTables";
import ChooseForm from "./components/ChooseForm";
import FillForm from "./components/FillForm";
import Table from "./components/Table";
import { autoFill } from "./components/FillForm";
import Amplify, { Auth } from "aws-amplify";
import { useSelector, useDispatch } from "react-redux";
import { LogIn } from "../../redux/actions/actions";
import EStyleSheet from "react-native-extended-stylesheet";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
/////////////////////////////////////////////////////////////////////////////////

const DoubleLottoPage = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(2);
  const [double, setdouble] = useState(true);
  const [indexOfTable, setIndexOfTable] = useState("");
  const [opendTableNum, setopendTableNum] = useState(0);
  const [errorMsg, seterrorMsg] = useState("");
  const [tablesCheck, settablesCheck] = useState(false);
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

  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const autoFillForm = () => {
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
              <TouchableOpacity
                onPress={autoFillForm}
                style={LottoListstyles.autoBtn}
              >
                <Text style={LottoListstyles.autoBtnText}>
                  מלא טופס אוטומטי
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deletForm()}
                style={LottoListstyles.autoBtn}
              >
                <Text style={LottoListstyles.autoBtnText}>
                  מחק טופס אוטומטי
                </Text>
              </TouchableOpacity>
            </View>
            {showTable && (
              <FillForm
                opendTableNum={opendTableNum}
                setopendTableNum={setopendTableNum}
                setshowTable={setshowTable}
                fullTables={fullTables}
                setFullTables={setFullTables}
                tableNum={tableNum}
              />
            )}
            <View style={LottoListstyles.listContainerBorder}>
              <List style={LottoListstyles.listContainer}>
                <ScrollView>
                  {Array.from(Array(tableNum)).map((x, index) => (
                    <Table
                      fullTables={fullTables}
                      double={double}
                      key={index}
                      index={index + 1}
                      setshowTable={setshowTable}
                      setIndexOfTable={setIndexOfTable}
                      fullTables={fullTables}
                      setopendTableNum={setopendTableNum}
                    />
                  ))}
                </ScrollView>
              </List>
            </View>
            <View style={LottoListstyles.sendFormBtnContainer}>
              <Button
                onPress={() => {
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
                    navigation.navigate("SumPageLotto", {
                      tableNum: tableNum,
                      screenName: "לוטו",
                      fullTables: fullTables,
                      gameType: "double",
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
          {/* <View style={{ flexDirection: "row", margin: 12 }}> */}
            {/* <View style={{ height: "50%", backgroundColor: "white" }}></View>
            <Text
              style={{
                flex: 4,
                fontSize: 20,
                fontFamily: "fb-Spacer",
                alignSelf: "flex-start",
              }}
            >
              הסבר על הגרלות לוטו
            </Text> */}
            {/* <View style={{ flexDirection: "row", flex: 1, left: 20 }}> */}
              {/* <TouchableOpacity
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
              </TouchableOpacity> */}

              {/* <Text
                style={{
                  flex: 1,
                  fontFamily: "fb-Spacer",
                  alignSelf: "center",
                }}
              >
                {" "}
                עוד...
              </Text> */}
            {/* </View> */}
          {/* </View> */}
        
        </View>
      </ScrollView>
    </>
  );
};
export default DoubleLottoPage;
