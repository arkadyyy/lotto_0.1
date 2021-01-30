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
import TableChanceShitati from "./components/TableChanceShitati";
import chanceListstyles from "./ChanceListStyles";

const ChanceShitatiPage = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(1);
  const [investNum, setinvestNum] = useState(5);
  const [double, setdouble] = useState(false);
  const [filledForm, setfilledForm] = useState([]);
  const [fullTables, setfullTables] = useState({
    gameType: 1,
    choosenCards: [],
  });

  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} />
        <BlankSquare gameName="הגרלת צ'אנס" color='#009943' />
        <ChooseForm color='#009943' setdouble={setdouble} />
        <View style={{ margin: 15 }}>
          <View style={{ backgroundColor: "#009943", paddingBottom: 20 }}>
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
                <Text style={{ fontSize: 20, color: "#009943" }}>1</Text>
              </View>
              <Text style={{ fontSize: 17, color: "white" }}>מלא את הטופס</Text>
            </View>

            <ChooseNumOfTables
              shitati={true}
              settableNum={settableNum}
              tableNum={tableNum}
            />

            {showTable && (
              <FillForm tableNum={tableNum} setshowTable={setshowTable} />
            )}
            <View
              style={{
                borderColor: showTable ? "transparent" : "white",
                borderRadius: 7,
                borderWidth: 1,
                width: "95%",
                alignSelf: "center",
                marginTop: 20,
                padding: 2,
              }}
            >
              <List
                style={{
                  alignItems: "flex-end",
                  height: 400,
                  marginLeft: -17,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    alignSelf: "flex-start",
                    marginHorizontal: 25,
                    marginVertical: 10,
                  }}
                >
                  בחר צירוף
                </Text>
                <TableChanceShitati
                  tableNum={tableNum}
                  fullTables={fullTables}
                  setfullTables={setfullTables}
                  setshowTable={setshowTable}
                />
              </List>
            </View>
            <View style={chanceListstyles.investNumBox}>
              <Text style={{ color: "white", marginVertical: 7 }}>
                בחר את סכום ההשקעה{" "}
              </Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(5);
                  }}
                  style={
                    investNum === 5
                      ? chanceListstyles.investBtnSelected
                      : chanceListstyles.investBtn
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
                      ? chanceListstyles.investBtnSelected
                      : chanceListstyles.investBtn
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
                      ? chanceListstyles.investBtnSelected
                      : chanceListstyles.investBtn
                  }
                >
                  <Text>25</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(50);
                  }}
                  style={
                    investNum === 50
                      ? chanceListstyles.investBtnSelected
                      : chanceListstyles.investBtn
                  }
                >
                  <Text>50</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(70);
                  }}
                  style={
                    investNum === 70
                      ? chanceListstyles.investBtnSelected
                      : chanceListstyles.investBtn
                  }
                >
                  <Text>70</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(100);
                  }}
                  style={
                    investNum === 100
                      ? chanceListstyles.investBtnSelected
                      : chanceListstyles.investBtn
                  }
                >
                  <Text>100</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(250);
                  }}
                  style={
                    investNum === 250
                      ? chanceListstyles.investBtnSelected
                      : chanceListstyles.investBtn
                  }
                >
                  <Text>250</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setinvestNum(500);
                  }}
                  style={
                    investNum === 500
                      ? chanceListstyles.investBtnSelected
                      : chanceListstyles.investBtn
                  }
                >
                  <Text>500</Text>
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
                  console.log("chance shitati : ", fullTables);
                }}
                style={{
                  borderRadius: 17,
                  backgroundColor: "#E62321",
                  borderColor: "white",
                  borderWidth: 2,
                  padding: 10,
                }}
              >
                <Text style={{ color: "white", fontSize: 28 }}>שלח טופס</Text>
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
export default ChanceShitatiPage;
