import React, { useState } from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";

import { ListItem } from "native-base";
import shitatiTableStyles from "./shitatiTableStyles";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react";
import EStyleSheet from "react-native-extended-stylesheet";

const { width, height } = Dimensions.get("window");

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

const StrongNum = ({ strongNumber }) => {
  return (
    <>
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          backgroundColor: "yellow",

          margin: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "red", fontFamily: "fb-Spacer" }}>
          {strongNumber}
        </Text>
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
  // const [table1, setTable1] = useState(tableFunction());

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
      <ListItem
        style={{
          backgroundColor: !table1.includes(" ") ? "#78C849" : "#D60617",
          flexWrap: "wrap",
          marginTop: 4,
          height: EStyleSheet.value("$rem") * 105,
          alignItems: "center",
          width: width,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 11,
            marginHorizontal: 5,
            fontFamily: "fb-Spacer-bold",
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
          <View style={{ flexDirection: "column", flex: 1 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                width:
                  tzerufimNumber === 12
                    ? "78%"
                    : tzerufimNumber === 11
                    ? "75%"
                    : tzerufimNumber === 10
                    ? "73%"
                    : tzerufimNumber === 9
                    ? "73%"
                    : tzerufimNumber === 8
                    ? "70%"
                    : "60%",
              }}
            >
              {table1
                .sort(function (a, b) {
                  return a - b;
                })
                .map((num, index) => (
                  <Num key={index} num={num} />
                ))}
            </View>

            {/* <View style={shitatiTableStyles.tzerufimNumber12}> */}
            <View
              style={{
                flexDirection: "row",
                left:
                  tzerufimNumber === 12
                    ? 180
                    : tzerufimNumber === 11
                    ? 180
                    : tzerufimNumber === 10
                    ? 150
                    : tzerufimNumber === 9
                    ? 150
                    : tzerufimNumber === 8
                    ? 120
                    : 90,
                top: -5,
              }}
            >
              <StrongNum key={index} strongNumber={strongNumber} />
            </View>
          </View>
        </TouchableOpacity>
        {/* {double && (
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
        )} */}
      </ListItem>
    </>
  );
};

export default ShitatiTable;
