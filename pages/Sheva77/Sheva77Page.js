import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import NavBar from "../../components/NavBar";
import BlankSquare from "../../components/BlankSquare";
import sheva77Liststyles from "./Sheva77ListStyles";
import { Button, List, Toast } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import ChooseNumOfTables from "./components/ChooseNumOfTables";
import ChooseForm from "./components/ChooseForm";
import FillForm from "./components/FillForm";
import { autoFill } from "./components/FillForm";
import Table from "./components/Table";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const Sheva77Page = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(1);
  const [tablesCheck, settablesCheck] = useState(false);
  const [indexOfTable, setIndexOfTable] = useState(0);
  const [opendTableNum, setopendTableNum] = useState(0);
  const route = useRoute();
  const [errorMsg, seterrorMsg] = useState("");
  const [sheva77, setSheva77] = useState(true);
  const [sheva78, setSheva78] = useState(false);
  const [sheva79, setSheva79] = useState(false);
  const [trimedFullTables, settrimedFullTables] = useState([]);
  const numOfNum = 7;
  const [fullTables, setFullTables] = useState([
    {
      choosenNums: [" ", " ", " ", " ", " ", " ", " "],
      tableNum: 1,
    },
    {
      choosenNums: [" ", " ", " ", " ", " ", " ", " "],
      tableNum: 2,
    },
    {
      choosenNums: [" ", " ", " ", " ", " ", " ", " "],
      tableNum: 3,
    },
  ]);

  const store = useSelector((state) => state);
  const [fillOtomatic, setFillOtomatic] = useState(false);
  const [fillOtomaticTrue, setFillOtomaticTrue] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(store);
  }, []);

  const autoFillForm = async () => {
    await deletForm();
    let fullTabels1 = [];
    for (let i = 1; i <= 3; i++) {
      while (i <= tableNum) {
        let numbers = autoFill(7);
        let table = {
          tableNum: i,
          choosenNums: numbers.randomNumbers,
        };
        fullTabels1 = [...fullTabels1, table];
        i++;
      }

      let table = {
        tableNum: i,
        choosenNums: [" ", " ", " ", " ", " ", " "],
      };
      fullTabels1 = [...fullTabels1, table];
    }

    setFullTables(fullTabels1);
    setFillOtomaticTrue(true);
    setTimeout(() => {
      setFillOtomaticTrue(false);
    }, 1000);
  };

  const deletForm = () => {
    setFullTables([
      {
        choosenNums: [" ", " ", " ", " ", " ", " ", " "],

        tableNum: 1,
      },
      {
        choosenNums: [" ", " ", " ", " ", " ", " ", " "],

        tableNum: 2,
      },
      {
        choosenNums: [" ", " ", " ", " ", " ", " ", " "],

        tableNum: 3,
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
    });
    settrimedFullTables(checkedFullTables2);
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
        <BlankSquare gameName='הגרלת 777' color='#CC1D64' />
        <ChooseForm
          sheva77={true}
          setSheva77={setSheva77}
          sheva78={false}
          setSheva78={setSheva78}
          sheva79={false}
          setSheva79={setSheva79}
          navigation={navigation}
          numOfNum={numOfNum}
        />
        <View style={{ margin: 15 }}>
          <View style={{ backgroundColor: "#CC1D64", paddingBottom: 20 }}>
            <View style={sheva77Liststyles.header}>
              <View style={sheva77Liststyles.topNumCircle}>
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

            <ChooseNumOfTables settableNum={settableNum} tableNum={tableNum} />

            <Text style={sheva77Liststyles.subHeader}>
              בחר {numOfNum} מספרים בכל טבלה
            </Text>
            <View style={sheva77Liststyles.autoBtnContainer}>
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
                // style={sheva77Liststyles.autoBtn}
                style={{
                  borderColor: fillOtomaticTrue === false ? "white" : "#8CC63F",
                  borderWidth: 1,
                  borderRadius: 19,
                  margin: 5,
                  paddingHorizontal: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 7,
                }}
                small
                rounded
                bordered
                onPress={autoFillForm}
              >
                <Text
                  // style={sheva77Liststyles.autoBtnText}
                  style={{
                    color: "white",
                    fontSize: 10,
                    fontFamily: "fb-Spacer-bold",
                    borderColor:
                      fillOtomaticTrue === false ? "white" : "#8CC63F",

                    textAlign: "center",
                  }}
                >
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
                // style={sheva77Liststyles.autoBtn}
                style={{
                  borderColor: fillOtomatic === false ? "white" : "#8CC63F",
                  borderWidth: 1,
                  borderRadius: 19,
                  margin: 5,
                  paddingHorizontal: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 7,
                }}
                small
                rounded
                bordered
                onPress={() => {
                  deletForm();
                  setFillOtomatic(true);
                  setTimeout(() => {
                    setFillOtomatic(false);
                  }, 1000);
                }}
              >
                <Text style={sheva77Liststyles.autoBtnText}>
                  מחק טופס אוטומטי
                </Text>
              </TouchableOpacity>
            </View>
            {showTable && (
              <FillForm
                setFullTables={setFullTables}
                fullTables={fullTables}
                setshowTable={setshowTable}
                opendTableNum={opendTableNum}
                setopendTableNum={setopendTableNum}
                tableNum={tableNum}
              />
            )}
            <View style={sheva77Liststyles.listContainerBorder}>
              <List style={sheva77Liststyles.listContainer}>
                <ScrollView>
                  {Array.from(Array(tableNum)).map((x, index) => (
                    <Table
                      key={index}
                      fullTables={fullTables}
                      openedTableNum={opendTableNum}
                      setshowTable={setshowTable}
                      setopendTableNum={setopendTableNum}
                      tableNum={index + 1}
                    />
                  ))}
                </ScrollView>
              </List>
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
                    navigation.navigate("SumPage777", {
                      tableNum: tableNum,
                      fullTables: fullTables,
                      gameType: "777",
                      formType: 7,
                      trimedFullTables: trimedFullTables,
                    });
                  }
                }}
                style={sheva77Liststyles.sendFormBtn}
              >
                <Text style={sheva77Liststyles.sendFormBtnText}>
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
              הסבר על הגרלות 777
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
export default Sheva77Page;
