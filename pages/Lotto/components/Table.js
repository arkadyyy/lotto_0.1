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
          width: 24,
          height: 24,
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
const StrongNum = ({ num }) => {
  return (
    <>
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          backgroundColor: "yellow",
          top: -5,
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "red", fontFamily: "fb-Spacer-bold" }}>
          {num}
        </Text>
      </View>
    </>
  );
};

const Table = ({
  setshowTable,
  double,
  index,
  setopendTableNum,
  fullTables,
  tableNum,
  settableNum,
}) => {
  const route = useRoute();

  const [table1, settable1] = useState([" ", " ", " ", " ", " ", " "]);
  const [strongNum1, setstrongNum1] = useState(" ");

  useEffect(() => {
    if (double === true && tableNum > 10) {
      settableNum(10);
    }
  }, [double]);

  useEffect(() => {
    if (fullTables.length !== 0) {
      let fullTable1 = 0;
      let x;
      fullTables.forEach((table) => {
        if (+table.tableNum === index) {
          fullTable1 = table;

          if (fullTable1.choosenNums.length < 6) {
            x = 6 - fullTable1.choosenNums.length;
            for (x; x > 0; x--) {
              fullTable1.choosenNums.push(" ");
            }
          }
          settable1(fullTable1.choosenNums);
          setstrongNum1(fullTable1.strongNum);
        }
      });
    } else {
      settable1([" ", " ", " ", " ", " ", " "]);
      setstrongNum1(" ");
    }
  }, [fullTables]);

  return (
    <>
      <ListItem
        style={{
          backgroundColor: !table1.includes(" ") ? "#78C849" : "#D60617",
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
        >
          טבלה {index}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setshowTable(true);
            setopendTableNum(index);
            // setopendTableNum(index1);
            // setopendTableTzerufimNum(tzerufimNumber);
          }}
        >
          <View style={{ flexDirection: "row" }}>
            {route.name === "LottoPage" && (
              <>
                {table1
                  .sort(function (b, a) {
                    return a - b;
                  })
                  .map((num, index) => (
                    <Num key={index} num={num} />
                  ))}
              </>
            )}
            {route.name === "DoubleLottoPage" && (
              <>
                {table1
                  .sort(function (b, a) {
                    return a - b;
                  })
                  .map((num, index) => (
                    <Num key={index} num={num} />
                  ))}
              </>
            )}
            <StrongNum num={strongNum1} />
          </View>
        </TouchableOpacity>
      </ListItem>
    </>
  );
};

export default Table;
