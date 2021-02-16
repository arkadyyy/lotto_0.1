import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
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
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Num = ({ num, choosenNums, setchoosenNums }) => {
  return (
    <>
      <TouchableOpacity
        disabled={
          choosenNums.includes(num)
            ? false
            : choosenNums.length >= 7
            ? true
            : false
        }
        onPress={() => {
          choosenNums.length < 7 && setchoosenNums([...choosenNums, num]);

          if (choosenNums.includes(num)) {
            setchoosenNums(choosenNums.filter((x) => x !== num));
          }
        }}
        style={{
          width: 30,
          height: 30,
          backgroundColor: choosenNums.includes(num) ? "red" : "white",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 23,
          margin: 3,
        }}
      >
        <Text style={{ fontFamily: "fb-Spacer" }}>{num}</Text>
      </TouchableOpacity>
    </>
  );
};

export const autoFill = (amount) => {
  let randomNumbers = [];

  for (let i = amount; i > 0; i--) {
    let num = Math.floor(Math.random() * 70) + 1;
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
  tableNum,
  setopendTableNum,
}) => {
  const [choosenNums, setchoosenNums] = useState([]);
  const [usedTable, setusedTable] = useState({
    tableNum: 0,
    choosenNums: choosenNums,
  });
  const [indexOfTable, setindexOfTable] = useState(-1);

  const autoFillForm = () => {
    let fullTabels1 = [];
    for (let i = 1; i < 14; i++) {
      while (i < tableNum + 1) {
        let numbers = autoFill(7);
        let table = {
          tableNum: i,
          choosenNums: numbers.randomNumbers,
        };
        setchoosenNums(numbers.randomNumbers);

        fullTabels1 = [...fullTabels1, table];
        i++;
      }

      let table = {
        tableNum: i,
        choosenNums: [" "],
      };
      fullTabels1 = [...fullTabels1, table];
      i++;
    }

    setFullTables(fullTabels1);
  };

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
  }, [opendTableNum]);

  // useeffect that runs when choosennums  changes
  useEffect(() => {
    setusedTable({
      tableNum: opendTableNum,
      choosenNums: choosenNums,
    });
  }, [choosenNums]);

  useEffect(() => {
    fullTables.forEach((table, index) => {
      setusedTable(table);
    });
  }, [fullTables, opendTableNum, arrowClickedRight, arrowClickedLeft]);

  const arrowClickedRight = () => {
    if (opendTableNum > 1) {
      setopendTableNum(opendTableNum - 1);
    }
  };

  const arrowClickedLeft = () => {
    if (opendTableNum < tableNum) {
      setopendTableNum(opendTableNum + 1);
    }
  };

  return (
    <>
      <View
        style={{
          backgroundColor: "#263742",
          width: "100%",
          top: "15%",
          height: 525,
          position: "absolute",
          zIndex: 2000,
        }}
      >
        {/* {top 90 deg box} */}

        {/* <View
          style={{
            backgroundColor: "#263742",

            height: 70,

            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 30,
          }}
        > */}
        <View
          style={{
            backgroundColor: "#263742",

            height: 75,

            flexDirection: "row",
            // flex:1,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 30,
            marginHorizontal: 15,
          }}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  borderColor: "white",
                  borderWidth: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 23,
                  margin: 3,
                }}
                disabled={choosenNums.length !== 0 ? true : false}
                onPress={() => {
                  let numbers = autoFill(7);
                  setchoosenNums(numbers.randomNumbers);
                  setstrongNum(numbers.strongNum);
                  // setTableRowColor("#78C849")
                }}
              >
                <Image
                  style={{ width: 22.5, height: 12.5 }}
                  source={require("C:/fullstack/lottoMatic/assets/fillTable.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  borderColor: "white",
                  borderWidth: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 23,
                  margin: 3,
                }}
                onPress={() => {
                  setchoosenNums([]);
                }}
              >
                <Image
                  style={{ width: 22.5, height: 12.5 }}
                  source={require("C:/fullstack/lottoMatic/assets/removeForm.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  borderColor: "white",
                  borderWidth: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 23,
                  margin: 3,
                }}
                onPress={autoFillForm}
              >
                <Image
                  style={{ width: 22.5, height: 12.5 }}
                  source={require("C:/fullstack/lottoMatic/assets/fillForm.png")}
                />
              </TouchableOpacity>
              <View
                style={{
                  top: 3,
                  left: 7,
                  borderLeftWidth: 1,
                  borderLeftColor: "white",
                  marginRight: 13,
                  height: 33,
                }}
              ></View>

              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "#DB1267",
                  borderRadius: 30,
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  borderLeftColor: "white",
                  height: 25,
                  width: 25,
                  marginVertical: 4,
                  top: 3,
                }}
              >
                <FontAwesomeIcon
                  color='#DB1267'
                  borderColor='#DB1267'
                  borderWidth={30}
                  inverse
                  size={25}
                  icon={faAngleRight}
                  onPress={() => {
                    //if we have already a object for this table , remove the previos one and put a new one
                    if (indexOfTable !== -1) {
                      let fullTablesCopy = fullTables.filter(
                        (table) => table.tableNum !== opendTableNum
                      );
                      setFullTables([...fullTablesCopy, usedTable]);

                      // if we dont have already object for this table,just create one
                    } else {
                      setFullTables([...fullTables, usedTable]);
                    }
                    arrowClickedRight();
                  }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                flex: 1,
              }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "#DB1267",
                  borderRadius: 30,
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  height: 25,
                  width: 25,
                  marginVertical: 4,
                  top: 3,
                }}
              >
                <FontAwesomeIcon
                  color='#DB1267'
                  borderColor='#DB1267'
                  borderWidth={30}
                  inverse
                  size={25}
                  icon={faAngleLeft}
                  onPress={() => {
                    //if we have already a object for this table , remove the previos one and put a new one
                    if (indexOfTable !== -1) {
                      let fullTablesCopy = fullTables.filter(
                        (table) => table.tableNum !== opendTableNum
                      );
                      setFullTables([...fullTablesCopy, usedTable]);

                      // if we dont have already object for this table,just create one
                    } else {
                      setFullTables([...fullTables, usedTable]);
                    }
                    arrowClickedLeft();
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  top: 3,
                  left: 7,
                  borderLeftWidth: 1,
                  borderLeftColor: "white",
                  marginRight: 13,
                  height: 33,
                }}
              ></View>
              <TouchableOpacity
                style={{
                  height: 25,
                  padding: 7,
                  backgroundColor: "white",
                  borderRadius: 13,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 6,
                  marginVertical: 4,
                  top: 3,
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
          </View>
        </View>
        {/* {fill numbers} */}
        <View
          style={{
            borderColor: "white",
            width: "90%",
            height: "85%",
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
            <Text
              style={{
                color: "white",
                marginBottom: 5,
                fontSize: 10,
                marginHorizontal: 5,
                fontFamily: "fb-Spacer",
              }}
            >
              {`מלא את טבלה ${opendTableNum}`}
            </Text>
            <TouchableOpacity
              disabled={choosenNums.length !== 0 ? true : false}
              onPress={() => {
                let numbers = autoFill(7);
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
            {Array.from(Array(70)).map((x, index) => (
              <Num
                choosenNums={choosenNums}
                setchoosenNums={setchoosenNums}
                num={index + 1}
                key={index}
              />
            ))}
          </View>
          {/* {choosenNums.length > 0 && (
            <Text style={{ color: "white", top: "9%" }}>המספרים שנבחרו</Text>
          )} */}
          {/* <View
            style={{ flexDirection: "row", flexWrap: "wrap", top: "12.5%" }}
          > */}
          {/* {choosenNums
              .sort(function (a, b) {
                return b - a;
              })
              .map((num) => (
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 30,
                    backgroundColor: "pink",
                    margin: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "black" }}>{num}</Text>
                </View>
              ))} */}
          {/* </View> */}
        </View>
      </View>
    </>
  );
};

export default FillForm;
