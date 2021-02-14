import React, { useEffect, useState } from "react";
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
import Table8 from "./components/Table8";
import FillFormShitati8 from "./components/FillFormShitati8";

const Sheva778Page = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(1);

  const [fullTables, setFullTables] = useState([]);
  const [indexOfTable, setIndexOfTable] = useState(1);
  const [opendTableNum, setopendTableNum] = useState(1);

  const [sheva77, setSheva77] = useState();
  const [sheva78, setSheva78] = useState();
  const [sheva79, setSheva79] = useState();

  const autoFillForm = () => {
    let fullTabels1 = [];
    for (let i = 1; i < tableNum + 1; i++) {
      let numbers = autoFill(8);
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
       
        <ChooseForm
         sheva77={false} setSheva77={setSheva77}
         sheva78={true} setSheva78={setSheva78}
          sheva79={false} setSheva79={setSheva79}
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

            <Text style={sheva77Liststyles.subHeader}>בחר 8 מספרים בטבלה</Text>
            <View style={sheva77Liststyles.autoBtnContainer}>
              <TouchableOpacity
                style={sheva77Liststyles.autoBtn}
                onPress={autoFillForm}
              >
                <Text style={sheva77Liststyles.autoBtnText}>
                  מלא טופס אוטומטי
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={sheva77Liststyles.autoBtn}
                onPress={() => setFullTables([])}
              >
                <Text style={sheva77Liststyles.autoBtnText}>
                  מחק טופס אוטומטי
                </Text>
              </TouchableOpacity>
            </View>
            {showTable && (
              <FillFormShitati8
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
                    <Table8
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
                  let summary = { 777: fullTables };
                  navigation.navigate("SumPage777", {
                    tableNum: 1,
                    fullTables: fullTables,
                    gameType: "778",
                    formType: 8,
                  });
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
export default Sheva778Page;
