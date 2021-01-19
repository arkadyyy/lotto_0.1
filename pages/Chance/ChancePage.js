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
import chanceListstyles from "./ChanceListStyles";

const ChancePage = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(1);
  const [double, setdouble] = useState(false);
  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} />
        <BlankSquare color='#009943' />
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

            <ChooseNumOfTables settableNum={settableNum} tableNum={tableNum} />

            {showTable && (
              <FillForm tableNum={tableNum} setshowTable={setshowTable} />
            )}
            <View
              style={{
                borderColor: showTable ? "transparent" : "white",
                borderRadius: 7,
                borderWidth: 1,
                width: "85%",
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <List
                style={{
                  alignItems: "flex-end",
                  height: 130,
                  marginLeft: -17,
                  flexWrap: "wrap",
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
                <Table tableNum={tableNum} setshowTable={setshowTable} />
              </List>
            </View>
            <View
              style={{
                borderColor: "white",
                borderRadius: 7,
                borderWidth: 1,
                width: "85%",
                height: 80,
                alignSelf: "center",
                marginTop: 20,
                padding: 10,
              }}
            >
              <Text style={{ color: "white", marginVertical: 7 }}>
                בחר את סכום ההשקעה{" "}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={chanceListstyles.investBtn}>
                  <Text>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={chanceListstyles.investBtn}>
                  <Text>10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={chanceListstyles.investBtn}>
                  <Text>25</Text>
                </TouchableOpacity>
                <TouchableOpacity style={chanceListstyles.investBtn}>
                  <Text>50</Text>
                </TouchableOpacity>
                <TouchableOpacity style={chanceListstyles.investBtn}>
                  <Text>70</Text>
                </TouchableOpacity>
                <TouchableOpacity style={chanceListstyles.investBtn}>
                  <Text>100</Text>
                </TouchableOpacity>
                <TouchableOpacity style={chanceListstyles.investBtn}>
                  <Text>250</Text>
                </TouchableOpacity>
                <TouchableOpacity style={chanceListstyles.investBtn}>
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
export default ChancePage;
