import React, { useState } from "react";
import { Text, View, TouchableOpacity,Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";

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
  // Col,
  Row,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import EStyleSheet from "react-native-extended-stylesheet";
import { useEffect } from "react";
const { width, height } = Dimensions.get("window");

const Num = ({ num }) => {
  return (
    <>
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 30,
          backgroundColor: "white",

          margin: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "black" }}>{num}</Text>
      </View>
    </>
  );
};

const StrongNum = ({ strongNum }) => {
  return (
    <>
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 30,
          backgroundColor: "yellow",

          margin: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "red" }}>{strongNum}</Text>
      </View>
    </>
  );
};

const ShitatiHazakTable = ({
  setshowTable,
  double,
  index,
  setopendTableNum,
  fullTables,
  hazakimNumber,
}) => {
  const index1 = 1;
  const route = useRoute();
  const [table1, setTable1] = useState([" ", " ", " ", " ", " ", " ", " "]);

  useEffect(() => {
    setTable1([" ", " ", " ", " ", " ", " ", " "]);
    setStrongNumbers(hazakimFunction());
  }, [hazakimNumber]);

  const hazakimFunction = () => {
    let table = [];
    if (!hazakimNumber) {
      hazakimNumber = 4;
    }
    let x = hazakimNumber;
    for (x; x > 0; x--) {
      table.push(" ");
    }
    return table;
  };
  const [strongNumbers, setStrongNumbers] = useState(hazakimFunction());

  // {tableNum : 0,choosenNums : choosenNums,strongNum : strongNum}

  useEffect(() => {
    if (fullTables.length !== 0) {
      let fullTable1 = 0;
      let x;
      fullTables.forEach((table) => {
        fullTable1 = table;

        if (fullTable1.choosenNums.length < 7) {
          x = 7 - fullTable1.choosenNums.length;
          for (x; x > 0; x--) {
            fullTable1.choosenNums.push(" ");
          }
        }
        if (fullTable1.choosenStrongNums.length < hazakimNumber) {
          x = hazakimNumber - fullTable1.choosenStrongNums.length;
          for (x; x > 0; x--) {
            fullTable1.choosenStrongNums.push(" ");
          }
        }
        setTable1(fullTable1.choosenNums);
        setStrongNumbers(fullTable1.choosenStrongNums);
        // }
      });
    } else {
      setTable1([" ", " ", " ", " ", " ", " ", " "]);
      setStrongNumbers(hazakimFunction());
    }
  }, [fullTables]);

  return (
    <>
      {/* <ListItem
        style={{
          backgroundColor: !table1.includes(" ") ? "#C1272D " : "#D60617",
          flexWrap: "wrap",
          marginTop: 4,
          height: EStyleSheet.value("$rem") * 90,
          width: EStyleSheet.value("$rem") * 292,
          alignItems: "center",
        }}
      > */}

{/* <ListItem
        style={{
          backgroundColor: !table1.includes(" ") ? "#C1272D " : "#D60617",
          flexWrap: "wrap",
          marginTop: 4,
          height: height / 8,
          alignItems: "center",
          width: width / 1.3,
        }}
      > */}

<ListItem
        style={{ 
          backgroundColor: !table1.includes(" ") ? "#78C849" : "#D60617",
          flexWrap: "wrap",
          marginTop: 4,
          height: 80,
          alignItems: "center",
        }}
      >
      
        <Text style={{ color: "white", fontSize: 13 }}>טבלה {index1} </Text>
        <TouchableOpacity
          onPress={() => {
            setshowTable(true);
            setopendTableNum(index1);
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row" }}>
              {table1.map((num, index) => (
                <Num key={index} num={num} />
              ))}
            </View>
            <View style={{ flexDirection: "row" }}>
              {strongNumbers.map((strongNum, index) => (
                <StrongNum key={index} strongNum={strongNum} />
              ))}
            </View>
          </View>
        </TouchableOpacity>
        {double && (
          <View
            style={{
              width: 35,
              height: 35,
              backgroundColor: "#FF838C",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 20,
              position: "absolute",
              left: 255,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>X2</Text>
          </View>
        )}
      </ListItem>
    </>
  );
};

export default ShitatiHazakTable;
