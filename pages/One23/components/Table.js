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
        <Text style={{ color: "black" }}>{num}</Text>
      </View>
    </>
  );
};

const Table = ({
  setshowTable,
  opendTableNum,
  setopendTableNum,
  fullTables,
}) => {
  const [table, settable] = useState(["-", "-", "-"]);

  useEffect(() => {
    let fullTable = 0;

    let x;
    fullTables.forEach((table) => {
      if (+table.tableNum === +opendTableNum) {
        fullTable = table;

        if (fullTable.choosenNums.length < 3) {
          x = 3 - fullTable.choosenNums.length;
          for (x; x > 0; x--) {
            fullTable.choosenNums.push("-");
          }
        }
        settable(fullTable.choosenNums);
      }
    });
  }, [fullTables]);
  return (
    <>
      <ListItem
        style={{
          backgroundColor: "#FBB03B",
          flexWrap: "wrap",
          marginTop: 4,
          height: 55,
          alignItems: "center",
          width: 400,
        }}
      >
        <Text
          style={{ color: "white", marginHorizontal: 4 }}
        >{`טבלה ${opendTableNum}`}</Text>
        <TouchableOpacity
          onPress={() => {
            setshowTable(true);
            setopendTableNum(opendTableNum);
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexDirection: "row-reverse",
              width: "100%",
            }}
          >
            {table.map((num, index) => (
              <Num key={index} num={num} />
            ))}
          </View>
        </TouchableOpacity>
      </ListItem>
    </>
  );
};

export default Table;
