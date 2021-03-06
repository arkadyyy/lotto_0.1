import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { ListItem } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const Num = ({ num }) => {
  return (
    <>
      <View
        style={{
          width: 23,
          height: 23,
          borderRadius: 30,
          backgroundColor: "white",

          margin: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "black", fontFamily: "fb-Spacer-bold" }}>
          {num}
        </Text>
      </View>
    </>
  );
};

const Table = ({
  setshowTable,
  indexOfTable,
  fullTables,
  setopendTableNum,
  opendTableNum,
  tableNum,
}) => {
  const [table, settable] = useState([" ", " ", " ", " ", " ", " ", " "]);

  useEffect(() => {
    if (fullTables.length > 0) {
      let fullTable = 0;
      console.log(" fullTables : ", fullTables);
      console.log(" tableNum : ", tableNum);
      let x;
      fullTables.forEach((table) => {
        if (+table.tableNum === +tableNum) {
          fullTable = table;

          if (fullTable.choosenNums.length < 7) {
            x = 7 - fullTable.choosenNums.length;
            for (x; x > 0; x--) {
              fullTable.choosenNums.push(" ");
            }
          }
          settable(fullTable.choosenNums);
        }
      });
    } else {
      settable([" ", " ", " ", " ", " ", " ", " "]);
    }
  }, [fullTables]);
  return (
    <>
      <ListItem
        style={{
          backgroundColor: "#FBB03B",
          backgroundColor: !table.includes(" ") ? "#FBB03B" : "#AA1B55",
          flexWrap: "wrap",
          marginTop: 4,
          height: 55,
          alignItems: "center",
          width: 400,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 11,
            marginHorizontal: 10,
            fontFamily: "fb-Spacer-bold",
          }}
        >{`טבלה ${tableNum}`}</Text>
        <TouchableOpacity
          onPress={() => {
            setshowTable(true);
            setopendTableNum(tableNum);
          }}
        >
          <View style={{ flexDirection: "row-reverse" }}>
            {table
              .sort(function (b, a) {
                return a - b;
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

export default Table;
