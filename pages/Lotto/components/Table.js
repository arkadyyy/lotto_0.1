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
const StrongNum = ({ num }) => {
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
        <Text style={{ color: "black" }}>{num}</Text>
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
}) => {
  const index1 = index * 2 - 1;
  const index2 = index * 2;
  const route = useRoute();

  const [table1, settable1] = useState(["-", "-", "-", "-", "-", "-"]);
  const [strongNum1, setstrongNum1] = useState(0);
  const [table2, settable2] = useState(["-", "-", "-", "-", "-", "-"]);
  const [strongNum2, setstrongNum2] = useState(0);

  // {tableNum : 0,choosenNums : choosenNums,strongNum : strongNum}

  useEffect(() => {
    let fullTable1 = 0;
    let fullTable2 = 0;
    let x;
    fullTables.forEach((table) => {
      if (+table.tableNum === +index1) {
        fullTable1 = table;

        if (fullTable1.choosenNums.length < 6) {
          x = 6 - fullTable1.choosenNums.length;
          for (x; x > 0; x--) {
            fullTable1.choosenNums.push("-");
          }
        }
        settable1(fullTable1.choosenNums);
        setstrongNum1(fullTable1.strongNum);
      }
      if (+table.tableNum === +index2) {
        fullTable2 = table;

        if (fullTable2.choosenNums.length < 6) {
          x = 6 - fullTable2.choosenNums.length;
          for (x; x > 0; x--) {
            fullTable2.choosenNums.push("-");
          }
        }
        settable2(fullTable2.choosenNums);
        setstrongNum2(fullTable2.strongNum);
      }
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
          height: 55,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 13 }}>טבלה {index1} </Text>
        <TouchableOpacity
          onPress={() => {
            setshowTable(true);
            setopendTableNum(index1);
            // setopendTableTzerufimNum(tzerufimNumber);
          }}
        >
          <View style={{ flexDirection: "row-reverse" }}>
            {route.name === "LottoPage" && (
              <>
                {table1.map((num, index) => (
                  <Num key={index} num={num} />
                ))}
              </>
            )}
            <StrongNum num={strongNum1} />
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
      <ListItem
        style={{
          backgroundColor: "#8CC63F",
          flexWrap: "wrap",
          marginTop: 4,
          height: 55,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 13 }}>טבלה {index2} </Text>
        <TouchableOpacity
          onPress={() => {
            setopendTableNum(index2);
            setshowTable(true);
          }}
        >
          <View style={{ flexDirection: "row-reverse" }}>
            {route.name === "LottoPage" && (
              <>
                {table2.map((num, index) => (
                  <Num key={index} num={num} />
                ))}
              </>
            )}
            <StrongNum num={strongNum2} />
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

      {/* <ListItem
        style={{
          backgroundColor: "#8CC63F",
          flexWrap: "wrap",
          marginTop: 4,
          height: 55,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 13 }}>טבלה {index2}</Text>
        <TouchableOpacity
          onPress={() => {
            setopendTableNum(index2);
            setshowTable(true);
          }}
        >
          <View style={{ flexDirection: "row", backgroundColor: "blue" }}>
            <View>
              {table2.map((num, index) => (
                <Num key={index} num={num} />
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
              zIndex: 3,
            }}
          >
            <Text style={{ color: "white" }}>X2</Text>
          </View>
        )}
      </ListItem> */}
    </>
  );
};

export default Table;
