import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import NavBar from "../../components/NavBar";
import BlankSquare from "../../components/BlankSquare";
import sheva77Liststyles from "./Sheva77ListStyles";
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
import ChooseNumOfTables from "./components/ChooseNumOfTables";
import ChooseForm from "./components/ChooseForm";
import FillForm from "./components/FillForm";
import { autoFill } from "./components/FillForm";
import Table from "./components/Table";
import { useDispatch, useSelector } from "react-redux";

const Sheva77Page = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(1);

  const [fullTables, setFullTables] = useState([]);
  const [indexOfTable, setIndexOfTable] = useState(0);
  const [opendTableNum, setopendTableNum] = useState(0);

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
                onPress={() => setFullTables([])}
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
              />
            )}
            <View
              style={{
                borderColor: "white",
                borderRadius: 7,
                borderWidth: 1,
                width: "83.7%",
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <List
                style={{
                  alignItems: "flex-end",
                  height: 250,
                  marginLeft: -17,
                  flexWrap: "wrap",
                }}
              >
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
                  let summary = { 777: fullTables };
                  navigation.navigate("SumPage777", {
                    tableNum: tableNum,
                    fullTables: fullTables,
                    gameType: "777",
                    formType: 7,
                  });
                }}
                style={{
                  borderRadius: 17,
                  backgroundColor: "#FBB03B",
                  borderColor: "white",
                  borderWidth: 2,
                  padding: 10,
                }}
              >
                <Text style={{ color: "white", fontSize: 28 }}>
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
