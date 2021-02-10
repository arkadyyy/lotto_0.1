import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-regular-svg-icons";

const Num = ({ num, choosenNums, setchoosenNums }) => {
  return (
    <>
      <TouchableOpacity
        disabled={choosenNums.length >= 3 ? true : false}
        onPress={() => {
          choosenNums.length < 3 && setchoosenNums([...choosenNums, num]);

          // if (choosenNums.includes(num)) {
          //   setchoosenNums(choosenNums.filter((x) => x !== num));
          // }
        }}
        style={{
          width: 30,
          height: 30,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 23,
          margin: 3,
        }}
      >
        <Text>{num}</Text>
      </TouchableOpacity>
    </>
  );
};

const DisplayChoosenNums = ({
  num,
  setchoosenNums,
  choosenNums,

  choosenNumIndex,
}) => {
  const [displayedNums, setdisplayedNums] = useState(choosenNums);

  useEffect(() => {
    setdisplayedNums(choosenNums);
  }, [choosenNums]);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          console.log("choosenNums : ", choosenNums);
          console.log("choosenNumiNDEX : ", choosenNumIndex);

          console.log("displayedNums : ", displayedNums);
          // setdisplayedNums(
          //   choosenNums.filter(
          //     (choosenNum, index) =>
          //       choosenNum !== displayedNums[choosenNumIndex]
          //   )
          // );
          setchoosenNums(
            choosenNums.filter((num, index) => index !== choosenNumIndex)
          );
          if (displayedNums.length === 0) {
            setchoosenNums([]);
          }

          // setchoosenNums(displayedNums.splice(choosenNumIndex, 1));
        }}
        style={{
          width: 35,
          height: 35,
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          margin: 2,
        }}
      >
        <Text style={{ color: "white" }}>{displayedNums[choosenNumIndex]}</Text>
      </TouchableOpacity>
    </>
  );
};

export const autoFill = (amount) => {
  let randomNumbers = [];
  for (let i = amount; i > 0; i--) {
    let num = Math.floor(Math.random() * 9) + 1;
    if (randomNumbers.indexOf(num) < 0) {
      randomNumbers.push(num);
    } else {
      i++;
    }
  }

  return { randomNumbers };
};

const FillForm = ({
  setshowTable,
  fullTables,
  opendTableNum,
  setFullTables,
}) => {
  const [choosenNums, setchoosenNums] = useState([]);
  const [usedTable, setusedTable] = useState({
    tableNum: 0,
    choosenNums: choosenNums,
  });
  const [indexOfTable, setindexOfTable] = useState(-1);

  useEffect(() => {
    fullTables.forEach((table, index) => {
      if (table.tableNum === opendTableNum) {
        let filteredChoosenNums = table.choosenNums.filter(
          (num) => num !== " "
        );
        setchoosenNums(filteredChoosenNums);

        setindexOfTable(index);
        setusedTable(table);
      }
    });
  }, []);
  // useeffect that urns when choosennums  changes
  useEffect(() => {
    setusedTable({
      tableNum: opendTableNum,
      choosenNums: choosenNums,
    });

    // setFullTables([
    //   {
    //     tableNum: opendTableNum,
    //     choosenNums: choosenNums,
    //     strongNum: strongNum,
    //   },
    // ]);
  }, [choosenNums]);

  return (
    <>
      <View
        style={{
          backgroundColor: "#263742",
          width: "100%",
          top: "30%",
          height: 512,
          position: "absolute",
          zIndex: 2000,
        }}
      >
        {/* {top 90 deg box} */}
        <View
          style={{
            backgroundColor: "#263742",

            height: 70,

            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <FontAwesomeIcon
                color='white'
                border={true}
                inverse
                icon={faArrowAltCircleRight}
              />
            </TouchableOpacity>
            <Text style={{ color: "white", fontSize: 13 }}>טבלאות</Text>
            <TouchableOpacity>
              <FontAwesomeIcon
                color='white'
                border={true}
                inverse
                icon={faArrowAltCircleLeft}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              height: 25,
              padding: 7,
              backgroundColor: "white",
              borderRadius: 13,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 20,
            }}
            onPress={() => {
              setshowTable(false);
              //if we have already a object for this table , remove the previos one and put a new one
              if (indexOfTable !== -1) {
                let fullTablesCopy = fullTables.filter(
                  (table) => table.tableNum !== opendTableNum
                );

                // let x = fullTables.splice(indexOfTable, 1);
                setFullTables([...fullTablesCopy, usedTable]);
                //if we dont have already object for this table,just create one
              } else {
                setFullTables([...fullTables, usedTable]);
              }
            }}
          >
            <Text style={{ color: "red", fontFamily: "fb-Spacer-bold" }}>
              סגור חלון
            </Text>
          </TouchableOpacity>
        </View>
        {/* {fill numbers} */}
        <View
          style={{
            borderColor: "white",
            width: "90%",
            height: "65%",
            borderWidth: 1,
            borderRadius: 8,
            alignSelf: "center",
            position: "relative",
            top: -40,
            padding: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: 7,
            }}
          >
            <Text style={{ color: "white", marginBottom: 5, fontSize: 10 }}>
              מלא את טבלה 1
            </Text>
            <TouchableOpacity
              disabled={choosenNums.length !== 0 ? true : false}
              onPress={() => {
                let numbers = autoFill(3);
                setchoosenNums(numbers.randomNumbers);
              }}
              style={{
                borderColor: "white",
                borderWidth: 1,
                padding: 3,
                borderRadius: 7,
                marginHorizontal: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: "white",
                  fontFamily: "fb-Spacer-bold",
                }}
              >
                מלא טבלה אוטומטית
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setchoosenNums([]);
              }}
              style={{
                borderColor: "white",
                borderWidth: 1,
                padding: 3,
                borderRadius: 7,
                marginHorizontal: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: "white",
                  fontFamily: "fb-Spacer-bold",
                }}
              >
                מחק טבלה אוטומטית
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {Array.from(Array(10)).map((x, index) => (
              <Num
                setchoosenNums={setchoosenNums}
                choosenNums={choosenNums}
                num={index}
                key={index}
              />
            ))}
          </View>
        </View>
        <View
          style={{
            marginTop: -16,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", marginHorizontal: 15 }}>
              הרצף הנבחר לטבלה 1
            </Text>
            <TouchableOpacity></TouchableOpacity>
          </View>
          <View
            style={{
              width: "90%",
              height: 50,
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 7,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              alignSelf: "center",
              flexDirection: "row-reverse",
              margin: 2,
            }}
          >
            {Array.from(Array(3)).map((x, index) => (
              <DisplayChoosenNums
                choosenNums={choosenNums}
                setchoosenNums={setchoosenNums}
                num={choosenNums[index]}
                choosenNumIndex={index}
                key={index}
              />
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

export default FillForm;
