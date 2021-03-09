import React, { useState, useEffect } from "react";
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
import FillForm from "./components/FillForm";
import { autoFill } from "./components/FillForm";
import Table9 from "./components/Table9";
import FillFormShitati9 from "./components/FillFormShitati9";
import sheva77Liststyles from "./Sheva77ListStyles";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Sheva779Page = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(1);
  const [tablesCheck, settablesCheck] = useState(false);
  const [trimedFullTables, settrimedFullTables] = useState([]);
  const [fullTables, setFullTables] = useState([
    {
      choosenNums: [" ", " ", " ", " ", " ", " ", " ", " "],

      tableNum: 1,
    },
  ]);
  const [indexOfTable, setIndexOfTable] = useState(1);
  const [opendTableNum, setopendTableNum] = useState(1);

  const [sheva77, setSheva77] = useState();
  const [sheva78, setSheva78] = useState();
  const [sheva79, setSheva79] = useState();
  const[fillOtomatic, setFillOtomatic] = useState(false);
  const [fillOtomaticTrue, setFillOtomaticTrue] = useState(false);
  
  const autoFillForm = async () => {
    await deletForm();
    let fullTabels1 = [];
    for (let i = 1; i < tableNum + 1; i++) {
      let numbers = autoFill(9);
      let table = {
        tableNum: i,
        choosenNums: numbers.randomNumbers,
      };
      fullTabels1 = [...fullTabels1, table];
    }
    setFullTables(fullTabels1);
    setFillOtomaticTrue(true)
    setTimeout(() => { 
            setFillOtomaticTrue(false)
      }, 1000);
  };
  const deletForm = () => {
    setFullTables([
      {
        choosenNums: [" ", " ", " ", " ", " ", " ", " ", " "],

        tableNum: 1,
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

        <ChooseForm
          sheva77={false}
          setSheva77={setSheva77}
          sheva78={false}
          setSheva78={setSheva78}
          sheva79={true}
          setSheva79={setSheva79}
          navigation={navigation}
        />

        <View style={{ margin: 15 }}>
          <View
            style={{
              backgroundColor: "#CC1D64",
              paddingBottom: 20,
              height: 660,
            }}
          >
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

            <Text style={sheva77Liststyles.subHeader}>בחר 9 מספרים בטבלה</Text>
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
                onPress={autoFillForm}
                // style={sheva77Liststyles.autoBtn}
                style={{
                  borderColor:fillOtomaticTrue === false ? "white" : "#8CC63F",
                  borderWidth: 1,
                  borderRadius: 19,
                  margin: 5,
                  paddingHorizontal: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 7,
                }}
              >
                <Text
                  style={sheva77Liststyles.autoBtnText}
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
                onPress={() => {
                  deletForm()
                  setFillOtomatic(true)
                  setTimeout(() => { 
                          setFillOtomatic(false)
                    }, 1000);
                }
                }
                // style={sheva77Liststyles.autoBtn}
                style={{
                  borderColor:fillOtomatic === false ? "white" : "#8CC63F",
                  borderWidth: 1,
                  borderRadius: 19,
                  margin: 5,
                  paddingHorizontal: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 7,
              }}
              >
                <Text style={sheva77Liststyles.autoBtnText}>
                  מחק טופס אוטומטי
                </Text>
              </TouchableOpacity>
            </View>
            {showTable && (
              <FillFormShitati9
                setFullTables={setFullTables}
                fullTables={fullTables}
                setshowTable={setshowTable}
                opendTableNum={opendTableNum}
              />
            )}
            <View style={sheva77Liststyles.listContainerBorder}>
              <List style={sheva77Liststyles.listContainer}>
                <ScrollView>
                  {Array.from(Array(tableNum)).map((x, index) => (
                    <Table9
                      opendTableNum={1}
                      key={index}
                      setshowTable={setshowTable}
                      setopendTableNum={setopendTableNum}
                      fullTables={fullTables}
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
                      tableNum: 1,
                      fullTables: fullTables,
                      gameType: "779",
                      formType: 9,
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
              הסבר על הגרלות 777{" "}
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
export default Sheva779Page;
