import React, { useState, useEffect } from "react";
import { Text, View, Dimensions,Image } from "react-native";
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
import EStyleSheet from "react-native-extended-stylesheet";
import { Touchable } from "react-native";
const { width, height } = Dimensions.get("window");

const Num = ({ num, choosenNums, setchoosenNums, tzerufimNumber }) => {
  return (
    <>
      <TouchableOpacity
        disabled={
          choosenNums.includes(num)
            ? false
            : choosenNums.length >= tzerufimNumber
            ? true
            : false
        }
        onPress={() => {
          choosenNums.length < tzerufimNumber &&
            setchoosenNums([...choosenNums, num]);

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

const StrongNum = ({
  num,
  strongNum,
  setStrongNum,
  choosenStrongNums,
  setChoosenStrongNums,
}) => {
  return (
    <>
      <TouchableOpacity
        // disabled={strongNum === num ? false : strongNum > 1 ? true : false}
        onPress={() => {
          strongNum === 0 && setStrongNum(num);
          // if (strongNum === num) {
          //   setstrongNum(0);
          // }
        }}
        style={{
          width: 35,
          height: 35,
          borderWidth: 1,
          backgroundColor: strongNum === num ? "#FCEE21" : "transparent",
          borderColor: "white",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          margin: 2,
        }}
      >
        <Text style={{
          color: strongNum === num ? "#E62321" : "white",
          fontFamily: "fb-Spacer"
        }}>{num}</Text>
      </TouchableOpacity>
    </>
  );
};

const autoFill = (amount) => {
  let randomNumbers = [];
  let strongNum = 0;
  for (let i = amount; i > 0; i--) {
    let num = Math.floor(Math.random() * 37) + 1;
    if (randomNumbers.indexOf(num) < 0) {
      randomNumbers.push(num);
    } else {
      i++;
    }
  }

  strongNum = Math.floor(Math.random() * 7) + 1;

  return { randomNumbers, strongNum };
};

const ShitatiFillForm = ({
  setshowTable,
  double,
  opendTableNum,
  opendTableTzerufimNum,
  setFullTables,
  fullTables,
  tzerufimNumber,
}) => {
  const [strongNum, setStrongNum] = useState([]);
  const [choosenNums, setchoosenNums] = useState([]);
  const [usedTable, setusedTable] = useState({
    tableNum: 1,
    choosenNums: choosenNums,
    strongNum: strongNum,
  });
  const [indexOfTable, setindexOfTable] = useState(-1);



  useEffect(() => {
    fullTables.forEach((table, index) => {
      if (table.tableNum === opendTableNum) {
        setchoosenNums(table.choosenNums);
        setStrongNum(table.strongNum);

        setindexOfTable(index);
        setusedTable(table);
      }
    });
  }, []);

  useEffect(() => {
    setchoosenNums([]);
    setStrongNum(0);
  }, [tzerufimNumber]);

  useEffect(() => {
    setusedTable({
      tableNum: 1,
      choosenNums: choosenNums,
      strongNum: strongNum,
    });

    // setFullTables([
    //   {
    //     tableNum: opendTableNum,
    //     choosenNums: choosenNums,
    //     strongNum: strongNum,
    //   },
    // ]);
  }, [choosenNums, strongNum]);
  return (
    <>
      <View
        style={{
          backgroundColor: "#263742",
          width: "100%",
          top: EStyleSheet.value("$rem") * -35,
          height: 500,
          position: "relative",
          zIndex: 2000,
        }}
      >
        {/* {top 90 deg box} */}
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
                let numbers = autoFill(tzerufimNumber);
                setchoosenNums(numbers.randomNumbers);
                setStrongNum(numbers.strongNum);
              }}
            >
             
             <Image
                  style={{ width: 22.5, height: 12.5 }}
                  source={require("C:/fullstack/lottoMatic/assets/fillTable.png")}
                />
          </TouchableOpacity>
          
            <TouchableOpacity
              onPress={() => {
                setchoosenNums([]);
                setStrongNum();
              }}
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
              disabled={choosenNums.length !== 0 ? true : false}
              onPress={() => {
                let numbers = autoFill(tzerufimNumber);
                setchoosenNums(numbers.randomNumbers);
                setStrongNum(numbers.strongNum);
              }}
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
               <View
                style={{
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
              ></View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                flex: 1,
              }}
            >
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
              if (indexOfTable !== -1) {
                // let x = fullTables.splice(indexOfTable, 1);
                setFullTables([...fullTables, usedTable]);
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
            height: "60%",
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
              מלא את טבלה {opendTableNum}
            </Text>
            {/* <TouchableOpacity
              disabled={choosenNums.length !== 0 ? true : false}
              onPress={() => {
                let numbers = autoFill(tzerufimNumber);
                setchoosenNums(numbers.randomNumbers);
                setStrongNum(numbers.strongNum);
                // console.log('fullTable1:',fullTable1);
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
                setStrongNum();
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
            </TouchableOpacity> */}
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {Array.from(Array(37)).map((x, index) => (
              <Num
                setchoosenNums={setchoosenNums}
                choosenNums={choosenNums}
                num={index + 1}
                key={index}
                tzerufimNumber={tzerufimNumber}
              />
            ))}
          </View>
          {/* <View style={{ flexDirection: "row", flexWrap: "wrap" }}> */}
            {/* {choosenNums.length > 0 && (
              <Text
                style={{
                  color: "white",
                  top: "3%",
                  right: 8,
                  fontFamily: "fb-Spacer-bold",
                }}
              >
                המספרים שנבחרו
              </Text>
            )} */}
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
                  <Text style={{ color: "black", fontFamily: "fb-Spacer" }}>
                    {num}
                  </Text>
                </View>
              ))} */}
          {/* </View> */}
        </View>
        <View style={{ marginTop: "-10%" }}>
          <Text
            style={{
              color: "white",
              marginTop: 15,
              marginHorizontal: 20,
              marginBottom: 5,
              fontFamily: "fb-Spacer",
            }}
          >
            בחר מספר חזק
          </Text>
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
              margin: 2,
            }}
          >
            {Array.from(Array(7)).map((x, index) => (
              <StrongNum
                setStrongNum={setStrongNum}
                strongNum={strongNum}
                num={index + 1}
                key={index}
              />
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

export default ShitatiFillForm;
