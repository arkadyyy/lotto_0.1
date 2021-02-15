import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";

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
        <Text style={{ color: "black", fontFamily: "fb-Spacer" }}>{num}</Text>
      </View>
    </>
  );
};

const Table9 = ({
  setshowTable,
  indexOfTable,
  fullTables,
  setopendTableNum,
  opendTableNum,
  tableNum,
}) => {
  const [table, settable] = useState([
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ]);

  useEffect(() => {
    if (fullTables.length > 0) {
      let fullTable = 0;
      console.log(" fullTables : ", fullTables);
      console.log(" tableNum : ", tableNum);
      let x;
      fullTables.forEach((table) => {
        if (+table.tableNum === +tableNum) {
          fullTable = table;

          if (fullTable.choosenNums.length < 9) {
            x = 9 - fullTable.choosenNums.length;
            for (x; x > 0; x--) {
              fullTable.choosenNums.push(" ");
            }
          }
          settable(fullTable.choosenNums);
        }
      });
    } else {
      settable([" ", " ", " ", " ", " ", " ", " ", " "," "]);
    }
  }, [fullTables]);
  return (
    <>
      <ListItem
        style={{
          backgroundColor: "#FBB03B",
          backgroundColor: !table.includes(" ") ? "#FBB03B" : "#AA1B55",
          flexWrap: "wrap",
          flexDirection:"row",
          marginTop: 4,
          height: 80,
          // alignItems: "center",
          width: 300,
          justifyContent: "space-around",
          flexDirection:"column"
        }}
      >
        <View>
        <Text
          style={{
            color: "white",
            fontSize: 11,
            marginHorizontal: 10,
            fontFamily: "fb-Spacer",
          }}
        >{`טבלה ${tableNum}`}</Text>
        </View>
          <TouchableOpacity
          onPress={() => {
            setshowTable(true);
            setopendTableNum(tableNum);
          }}
        >
          <View style={{ flex:1,flexDirection:"row",flexWrap:"wrap",width:"70%" }}>
            {table.sort(function(a,b) {
                 return a-b;
                })
              .map((num, index) => (
              <Num table={table} key={index} num={num} />
            ))}
          </View>
        </TouchableOpacity>
      </ListItem>
    </>
  );
};

export default Table9;
