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

const Sheva77Page = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(1);
  const [tablesCheck, settablesCheck] = useState(false);
  const [indexOfTable, setIndexOfTable] = useState(0);
  const [opendTableNum, setopendTableNum] = useState(0);
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
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(store);
  }, []);

  const autoFillForm = () => {
    let fullTabels1 = [];
    for (let i = 1; i < tableNum + 1; i++) {
      let numbers = autoFill(7);
      let table = {
        tableNum: i,
        choosenNums: numbers.randomNumbers,
      };
      fullTabels1 = [...fullTabels1, table];
    }
    setFullTables(fullTabels1);
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
        <BlankSquare gameName='הגרלת 777' color='#CC1D64' />
        <ChooseForm />
        <View style={{ margin: 15 }}>
          <View style={{ backgroundColor: "#CC1D64", paddingBottom: 20 }}>
            <View style={sheva77Liststyles.header}>
              <View style={sheva77Liststyles.topNumCircle}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#E62321",
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

            <ChooseNumOfTables settableNum={settableNum} tableNum={tableNum} />

            <Text style={sheva77Liststyles.subHeader}>
              בחר 7 מספרים בכל טבלה
            </Text>
            <View style={sheva77Liststyles.autoBtnContainer}>
              <TouchableOpacity
                style={sheva77Liststyles.autoBtn}
                small
                rounded
                bordered
                onPress={autoFillForm}
              >
                <Text style={sheva77Liststyles.autoBtnText}>
                  מלא טופס אוטומטי
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={sheva77Liststyles.autoBtn}
                small
                rounded
                bordered
                onPress={() => deletForm()}
              >
                <Text style={sheva77Liststyles.autoBtnText}>
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
                      text: "לא מילאת את כל הטבלאות",
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
export default Sheva77Page;
