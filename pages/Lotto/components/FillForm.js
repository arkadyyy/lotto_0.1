import React, { useState, useEffect } from "react";
import { Text, View, Dimensions } from "react-native";
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
const { width, height } = Dimensions.get("window");

const Num = ({ num, choosenNums, setchoosenNums }) => {
  return (
    <>
      <TouchableOpacity
        disabled={
          choosenNums.includes(num)
            ? false
            : choosenNums.length >= 6
            ? true
            : false
        }
        onPress={() => {
          choosenNums.length < 6 && setchoosenNums([...choosenNums, num]);

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

const StrongNum = ({ num, strongNum, setstrongNum }) => {
  return (
    <>
      <TouchableOpacity
        disabled={strongNum === num ? false : strongNum > 1 ? true : false}
        onPress={() => {
          strongNum === " " && setstrongNum(num);
          if (strongNum === num) {
            setstrongNum(" ");
          }
        }}
        style={{
          width: 35,
          height: 35,
          borderWidth: 1,
          backgroundColor: strongNum === num ? "red" : "transparent",
          borderColor: "white",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          margin: 2,
        }}
      >
        <Text style={{ color: "white", fontFamily: "fb-Spacer" }}>{num}</Text>
      </TouchableOpacity>
    </>
  );
};

export const autoFill = (amount) => {
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

const FillForm = ({
  setshowTable,
  opendTableNum,
  setFullTables,
  fullTables,
  setopendTableNum,
  tableNum
  
}) => {
  const [strongNum, setstrongNum] = useState(" ");
  const [choosenNums, setchoosenNums] = useState([]);
  const [usedTable, setusedTable] = useState({
    tableNum: 0,
    choosenNums: choosenNums,
    strongNum: strongNum,
  });
  const [indexOfTable, setindexOfTable] = useState(-1);

  useEffect(() => {
    fullTables.forEach((table, index) => {
      if (table.tableNum === opendTableNum) {
        let filteredChoosenNums = table.choosenNums.filter(
          (num) => num !== " "
        );
        setchoosenNums(filteredChoosenNums);
        setstrongNum(table.strongNum);
        setindexOfTable(index);
        setusedTable(table);
      }         
    });
  }, [opendTableNum]);

  // useeffect that runs when choosennums or strongnum changes
  useEffect(() => {
    setusedTable({
      tableNum: opendTableNum,
      choosenNums: choosenNums,
      strongNum: strongNum,
    });
        
  }, [choosenNums, strongNum]);

 

  useEffect(() => {
    fullTables.forEach((table, index) => {
      setusedTable(table);
    });
  }, [fullTables,opendTableNum]);


  const arrowClickedRight = () => {
    if (opendTableNum > 1) {
      setopendTableNum(opendTableNum - 1);
    }
  };
  
  const arrowClickedLeft = () => {
    if (opendTableNum < tableNum) {
      setopendTableNum(opendTableNum + 1);
    }
  }

  return (
    <>
      <View
        style={{
          backgroundColor: "#263742",
          width: "100%",
          top: "35%",
          height: 550,
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
                }
                }
              />
            </TouchableOpacity>
            <Text
              style={{ color: "white", fontSize: 13, fontFamily: "fb-Spacer" }}
            >
              טבלאות
            </Text>
            <TouchableOpacity>
              <FontAwesomeIcon
                color='white'
                border={true}
                inverse
                icon={faArrowAltCircleLeft}

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
                }
                }
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
            <TouchableOpacity
              style={{
                borderColor: "white",
                borderWidth: 1,
                padding: 3,
                borderRadius: 7,
                marginHorizontal: 1,
              }}
              disabled={choosenNums.length !== 0 ? true : false}
              onPress={() => {
                let numbers = autoFill(6);
                setchoosenNums(numbers.randomNumbers);
                setstrongNum(numbers.strongNum);
                // setTableRowColor("#78C849")
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
              style={{
                borderColor: "white",
                borderWidth: 1,
                padding: 3,
                borderRadius: 7,
              }}
              onPress={() => {
                setchoosenNums([]);
                setstrongNum(" ");
                // setTableRowColor('#D60617')
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
            {Array.from(Array(37)).map((x, index) => (
              <Num
                setchoosenNums={setchoosenNums}
                choosenNums={choosenNums}
                num={index + 1}
                key={index}
              />
            ))}
          </View>
          {choosenNums.length > 0 && (
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
          )}
          <View style={{ flexDirection: "row", flexWrap: "wrap", top: "3%" }}>
            {choosenNums
              .sort(function (a, b) {
                return b - a;
              })
              // .slice(0)
              // .reverse()
              .map((num, index) => (
                <View key={index}
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
              ))}
          </View>
        </View>
        <View style={{ top: -40 }}>
          <Text
            style={{
              color: "white",
              marginTop: 15,
              marginHorizontal: 20,
              marginBottom: 5,
              fontFamily: "fb-spacer",
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
                setstrongNum={setstrongNum}
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

export default FillForm;
