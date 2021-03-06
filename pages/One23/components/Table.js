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
        <Text style={{ color: "black", fontFamily: "fb-Spacer-bold" }}>
          {num}
        </Text>
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
  const [table, setTable] = useState([" ", " ", " "]);

  useEffect(() => {
    if (fullTables.length !== 0) {
      let fullTable = 0;

      let x;
      fullTables.forEach((table) => {
        if (+table.tableNum === +opendTableNum) {
          fullTable = table;

          if (fullTable.choosenNums.length < 3) {
            x = 3 - fullTable.choosenNums.length;
            for (x; x > 0; x--) {
              fullTable.choosenNums.push(" ");
            }
          }
          setTable(fullTable.choosenNums);
        }
      });
    } else {
      setTable([" ", " ", " "]);
    }
  }, [fullTables]);

  return (
    <>
      <ListItem
        style={{
          backgroundColor: !table.includes(" ") ? "#FBB03B" : "#A53200",
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
            marginHorizontal: 14,
            fontFamily: "fb-Spacer-bold",
          }}
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
