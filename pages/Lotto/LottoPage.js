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
import { autoFill } from "./components/FillForm";
// { tableNum: 1, choosenNums: [1, 2, 3, 4, 5, 6], strongNum: 7 },
const LottoPage = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(2);
  const [double, setdouble] = useState(false);
  const [fullTables, setFullTables] = useState([]);
  const [indexOfTable, setIndexOfTable] = useState("");
  const [opendTableNum, setopendTableNum] = useState(0);


  const autoFillForm=()=>{
    let fullTabels1=[];
   for (let i=1;i<tableNum*2+1;i++){
    let numbers= autoFill(6);
      let table={
        tableNum: i,
        choosenNums: numbers.randomNumbers,
        strongNum: numbers.strongNum,
      }
      fullTabels1=[...fullTabels1, table]}
      setFullTables(fullTabels1);     
  }

    
  
  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} />
        <BlankSquare color='#E62321' />
        <ChooseForm setdouble={setdouble} />
        <View style={{ margin: 15 }}>
          <View style={{ backgroundColor: "#E62321", paddingBottom: 20 }}>
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
                <Text style={{ fontSize: 20, color: "#E62321" }}>1</Text>
              </View>
              <Text style={{ fontSize: 17, color: "white" }}>מלא את הטופס</Text>
            </View>

            <ChooseNumOfTables settableNum={settableNum} tableNum={tableNum} />

            <Text
              style={{
                color: "white",
                fontSize: 15,
                marginLeft: 12,
                marginBottom: 10,
              }}
            >
              בחר 6 מספרים וחזק
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                marginLeft:20
              }}
            >
              
              <Button
                onPress={()=>setFullTables([])}
                style={{ borderColor: "white", margin: 5 }}
                small
                rounded
                bordered
              >
                <Text style={{ color: "white", fontSize: 10,width:70,textAlign:"center" }}>
                  מחק טופס אוטומטית
                </Text>
              </Button>

              <Button
                onPress={autoFillForm}
                style={{ borderColor: "white", margin: 5 }}
                small
                rounded
                bordered
              >
                <Text style={{ color: "white", fontSize: 10,width:70,textAlign:"center" }}>
                  מלא טופס אוטומטי
                </Text>
              </Button>
            </View>
            {showTable && (
              <FillForm
                opendTableNum={opendTableNum}
                setshowTable={setshowTable}
                fullTables={fullTables}
                setFullTables={setFullTables}
                autoFillForm={autoFillForm}
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
                  alignItems: "flex-start",
                  height: 250,
                  marginLeft: -17,
                  flexWrap: "wrap",
                }}
              >
                <ScrollView>
                  {Array.from(Array(tableNum)).map((x, index) => (
                    <Table
                      fullTables={fullTables}
                      double={double}
                      key={index}
                      index={index + 1}
                      setshowTable={setshowTable}
                      setIndexOfTable={setIndexOfTable}
                      setopendTableNum={setopendTableNum}
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
                  let summary = { regularLotto: fullTables };
                  console.log(summary);
                }}
                style={{
                  borderRadius: 17,
                  backgroundColor: "#8CC63F",
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
export default LottoPage;
