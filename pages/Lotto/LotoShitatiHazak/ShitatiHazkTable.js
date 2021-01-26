import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
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
import { useEffect } from "react";

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
    setTable1([" ", " ", " ", " ", " ", " ", " "])
    setStrongNumbers(hazakimFunction())
  },
 [hazakimNumber])
  

  const hazakimFunction = () => {
    let table = [];
    if (!hazakimNumber){hazakimNumber=4}
    let x = hazakimNumber;
    for (x; x > 0; x--) {
      table.push(" ");
    }
    return (table)
  }
  const [strongNumbers, setStrongNumbers] = useState(hazakimFunction());

  // {tableNum : 0,choosenNums : choosenNums,strongNum : strongNum}

  useEffect(() => {
    let fullTable1 = 0;
    let x;
    fullTables.forEach((table) => {
        fullTable1 = table;

        if (fullTable1.choosenNums.length < 7) {
          x = 7 - fullTable1.choosenNums.length;
          for (x; x > 0; x--) {
            fullTable1.choosenNums.push("-");
          }
        }
        if (fullTable1.choosenStrongNums.length < hazakimNumber) {
          x = hazakimNumber - fullTable1.choosenStrongNums.length;
          for (x; x > 0; x--) {
            fullTable1.choosenStrongNums.push("-");
          }
        }
        setTable1(fullTable1.choosenNums);
        setStrongNumbers(fullTable1.choosenStrongNums);
      // }
    });

    console.log("table1 : ", table1);
  }, [fullTables]);

  return (
    <>
      <ListItem
        style={{
          backgroundColor: "#8CC63F",
          flexWrap: "wrap",
          marginTop: 4,
          height: 85,
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
