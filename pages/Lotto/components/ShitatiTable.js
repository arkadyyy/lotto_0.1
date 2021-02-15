import React, { useState } from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
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

const StrongNum = ({ strongNumber }) => {
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
        <Text style={{ color: "red" }}>{strongNumber}</Text>
      </View>
    </>
  );
};

const ShitatiTable = ({
  setshowTable,
  double,
  index,
  setopendTableNum,
  tzerufimNumber,
  setopendTableTzerufimNum,
  fullTables,
}) => {
  const index1 = 1;
  const route = useRoute();
  const [strongNumber, setStrongNumber] = useState();

  const tableFunction = () => {
    let table = [];
    if (!tzerufimNumber) {
      tzerufimNumber = 5;
    }
    let x = tzerufimNumber;
    for (x; x > 0; x--) {
      table.push(" ");
    }
    return table;
  };

  const [table1, setTable1] = useState(tableFunction());

  useEffect(() => {
    setTable1(tableFunction());
    setStrongNumber(" ");
  }, [tzerufimNumber]);

  useEffect(() => {
    if (fullTables.length !== 0) {
      let fullTable1 = 0;

      let x;
      fullTables.forEach((table) => {
        fullTable1 = table;
        console.log("fullTable1 : ", fullTable1);
        if (fullTable1.choosenNums.length < tzerufimNumber) {
          x = tzerufimNumber - fullTable1.choosenNums.length;
          for (x; x > 0; x--) {
            fullTable1.choosenNums.push(" ");
          }
        }

        setTable1(fullTable1.choosenNums);
        setStrongNumber(fullTable1.strongNum);
      });
    } else {
      setTable1(tableFunction());
      setStrongNumber(" ");
    }
  }, [fullTables]);

  return (
    <>
      {console.log("tzerufimNumber:", tzerufimNumber)}

      <ListItem
        style={{
          backgroundColor: !table1.includes(" ") ? "#C1272D " : "#D60617",
          flexWrap: "wrap",
          marginTop: 4,
          height: height / 4.3,
          alignItems: "center",
          width: width / 1.2,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 11,
            marginHorizontal: 10,
            fontFamily: "fb-Spacer",
          }}
        >
          טבלה {index1}{" "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setshowTable(true);
            setopendTableNum(index1);
          }}
        >
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <View style={{ flexDirection: "row", height: 10 }}>
              <StrongNum key={index} strongNumber={strongNumber} />
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {table1.sort(function(a, b) {
  return a - b;
})

              
                .map((num, index) => (
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
            }}
          >
            <Text style={{ color: "white" }}>X2</Text>
          </View>
        )}
      </ListItem>
    </>
  );
};

export default ShitatiTable;
