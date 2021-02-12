import React, { useState } from "react";
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
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import ChooseNumOfTables from "./components/ChooseNumOfTables";
import ChooseForm from "./components/ChooseForm";
import FillForm from "./components/FillForm";
import Table from "./components/Table";
import one23listStyles from "./One23listStyles";
import { autoFill } from "./components/FillForm";
import { useEffect } from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { useSelector, useDispatch } from "react-redux";
import { LogIn } from "../../redux/actions/actions";

Amplify.configure(awsconfig);

const One23Page = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(1);
  const [investNum, setinvestNum] = useState(1);

  const [indexOfTable, setIndexOfTable] = useState("");
  const [opendTableNum, setopendTableNum] = useState(0);

  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [fullTables, setFullTables] = useState(
    [
      {
        choosenNums: [" "],
        strongNum: " ",
        tableNum: 1,
      },
      {
        choosenNums: [" "],
        strongNum: " ",
        tableNum: 2,
      },
      {
        choosenNums: [" "],
        strongNum: " ",
        tableNum: 3,
      },
      {
        choosenNums: [" "],
        strongNum: " ",
        tableNum: 4,
      },
      {
        choosenNums: [" "],
        strongNum: " ",
        tableNum: 5,
      }
    ]
  );

  const autoFillForm = () => {
    let fullTabels = [];
    for (let i = 1; i < tableNum + 1; i++) {
      let numbers = autoFill(3);
      let table = {
        tableNum: i,
        choosenNums: numbers.randomNumbers,
        // strongNum: null,
      };
      fullTabels = [...fullTabels, table];
    }
    setFullTables(fullTabels);
  };

  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} />
        <BlankSquare gameName='הגרלת 123' color='#FF6B00' />
        <ChooseForm />
        <View style={{ margin: 15 }}>
          <View style={{ backgroundColor: "#FF6B00", paddingBottom: 20 }}>
            <View style={one23listStyles.header}>
              <View style={one23listStyles.topNumCircle}>
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

            <View style={{ marginHorizontal: 10 }}>
              <Text style={one23listStyles.subHeader}>
                {" "}
                בחר 3 מספרים בכל טבלה
              </Text>
            </View>
            <View style={one23listStyles.autoBtnContainer}>
              <TouchableOpacity
                onPress={autoFillForm}
                style={one23listStyles.autoBtn}
              >
                <Text style={one23listStyles.autoBtnText}>
                  מלא טופס אוטומטי
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setFullTables([])}
                style={one23listStyles.autoBtn}
                small
                rounded
                bordered
              >
                <Text style={one23listStyles.autoBtnText}>
                  מחק טופס אוטומטי
                </Text>
              </TouchableOpacity>
            </View>
            {showTable && (
              <FillForm
              opendTableNum={opendTableNum}
              setopendTableNum={setopendTableNum}
              tableNum={tableNum}
                setFullTables={setFullTables}
                fullTables={fullTables}
                setshowTable={setshowTable}
              />
            )}
            <View style={one23listStyles.listContainerBorder}>
              <List style={one23listStyles.listContainer}>
                <ScrollView>
                  {Array.from(Array(tableNum)).map((x, index) => (
                    <Table
                      opendTableNum={index + 1}
                      key={index}
                      setshowTable={setshowTable}
                      setopendTableNum={setopendTableNum}
                      fullTables={fullTables}
                    />
                  ))}
                  <View
                    style={{ flexDirection: "row", flexWrap: "wrap" }}
                  ></View>
                </ScrollView>
              </List>
            </View>
            <View
              style={{
                borderColor: "white",
                borderRadius: 7,
                borderWidth: 1,
                width: "85%",
                height: 90,
                alignSelf: "center",
                marginTop: 20,
                padding: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  marginVertical: 7,
                  fontFamily: "fb-Spacer",
                }}
              >
                בחר את סכום ההשקעה{" "}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(1);
                  }}
                  style={
                    investNum === 1
                      ? one23listStyles.investBtnSelected
                      : one23listStyles.investBtn
                  }
                >
                  <Text style={{ fontFamily: "fb-Spacer" }}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(2);
                  }}
                  style={
                    investNum === 2
                      ? one23listStyles.investBtnSelected
                      : one23listStyles.investBtn
                  }
                >
                  <Text style={{ fontFamily: "fb-Spacer" }}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(3);
                  }}
                  style={
                    investNum === 3
                      ? one23listStyles.investBtnSelected
                      : one23listStyles.investBtn
                  }
                >
                  <Text style={{ fontFamily: "fb-Spacer" }}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(4);
                  }}
                  style={
                    investNum === 4
                      ? one23listStyles.investBtnSelected
                      : one23listStyles.investBtn
                  }
                >
                  <Text style={{ fontFamily: "fb-Spacer" }}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(5);
                  }}
                  style={
                    investNum === 5
                      ? one23listStyles.investBtnSelected
                      : one23listStyles.investBtn
                  }
                >
                  <Text style={{ fontFamily: "fb-Spacer" }}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(10);
                  }}
                  style={
                    investNum === 10
                      ? one23listStyles.investBtnSelected
                      : one23listStyles.investBtn
                  }
                >
                  <Text style={{ fontFamily: "fb-Spacer" }}>10</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(25);
                  }}
                  style={
                    investNum === 25
                      ? one23listStyles.investBtnSelected
                      : one23listStyles.investBtn
                  }
                >
                  <Text style={{ fontFamily: "fb-Spacer" }}>25</Text>
                </TouchableOpacity>
              </View>
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
                  navigation.navigate("SumPage123", {
                    tableNum: tableNum,
                    screenName: "123",
                    fullTables: fullTables,
                    investNum: investNum,
                  });
                  console.log("investNum : ", investNum);
                }}
                style={one23listStyles.sendFormBtn}
              >
                <Text style={one23listStyles.sendFormBtnText}>
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
            <Text style={{ fontSize: 18 }}>הסבר על הגרלות 123</Text>
            <TouchableOpacity>
              <Text>עוד</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default One23Page;
