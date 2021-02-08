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

  const [fullTables, setFullTables] = useState([]);
  const [indexOfTable, setIndexOfTable] = useState("");
  const [opendTableNum, setopendTableNum] = useState(0);

  const store = useSelector((state) => state);
  const dispatch = useDispatch();

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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 30,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "white",
                  width: 50,
                  height: 50,
                  borderRadius: 33,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 20,
                }}
              >
                <Text style={{ fontSize: 20, color: "#FF6B00" }}>1</Text>
              </View>
              <Text style={{ fontSize: 17, color: "white" }}>מלא את הטופס</Text>
            </View>

            <ChooseNumOfTables settableNum={settableNum} tableNum={tableNum} />

            <View style={{ marginHorizontal: 10 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  marginLeft: 12,
                  marginBottom: 10,
                }}
              >
                בחר 3 מספרים
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  marginLeft: 12,
                  marginBottom: 10,
                }}
              >
                בכל טבלה
              </Text>
            </View>
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
                style={{ borderColor: "white", margin: 5 }}
                small
                rounded
                bordered
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 10,
                    width: 70,
                    textAlign: "center",
                  }}
                >
                  מלא טופס אוטומטי
                </Text>
              </Button>
              <Button
                onPress={() => setFullTables([])}
                style={{ borderColor: "white", margin: 5 }}
                small
                rounded
                bordered
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 10,
                    width: 70,
                    textAlign: "center",
                  }}
                >
                  מחק טופס אוטומטי
                </Text>
              </Button>
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
              <Text style={{ color: "white", marginVertical: 7 }}>
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
                  <Text>1</Text>
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
                  <Text>2</Text>
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
                  <Text>3</Text>
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
                  <Text>4</Text>
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
                  <Text>5</Text>
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
                  <Text>10</Text>
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
                  <Text>25</Text>
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
