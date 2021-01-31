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
        <Text>{num}</Text>
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
          strongNum === 0 && setstrongNum(num);
          if (strongNum === num) {
            setstrongNum(0);
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
        <Text style={{ color: "white" }}>{num}</Text>
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
  double,
  opendTableNum,
  opendTableTzerufimNum,
  setFullTables,
  fullTables,
  tableRowColor,
  setTableRowColor
}) => {
  const [strongNum, setstrongNum] = useState(0);
  const [choosenNums, setchoosenNums] = useState([]);
  const [usedTable, setusedTable] = useState({
    tableNum: 0,
    choosenNums: choosenNums,
    strongNum: strongNum,
  });
  const [indexOfTable, setindexOfTable] = useState(-1);

  // {tableNum : 0,choosenNums : choosenNums,strongNum : strongNum}

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
  }, []);

  // useeffect that runs when choosennums or strongnum changes
  useEffect(() => {
    setusedTable({
      tableNum: opendTableNum,
      choosenNums: choosenNums,
      strongNum: strongNum,
    });
  }, [choosenNums, strongNum]);

  // useEffect(() => {
  //   setusedTable({
  //     tableNum: ,
  //     choosenNums: ,
  //     strongNum: ,
  //   })
  // }, [fullTables])

  useEffect(() => {
    fullTables.forEach((table, index) => {
      setusedTable(table);
    });
  }, [fullTables]);

  return (
    <>
      <View
        style={{
          backgroundColor: "#263742",
          width: "100%",
          top: "39%",
          height: 450,
          position: "absolute",
          zIndex: 2000,
        }}
      >
        {/* {top 90 deg box} */}
        <View
          style={{
            backgroundColor: "#263742",
            width: "55%",
            height: 70,
            position: "relative",
            top: -40,

            left: EStyleSheet.value("$rem") * 156.8,
            zIndex: 2001,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
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
            <Text style={{ color: "red" }}>סגור חלון</Text>
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
            <Text style={{ color: "white", marginBottom: 5, fontSize: 10 }}>
              מלא את טבלה {opendTableNum}
            </Text>
            <Button
              disabled={choosenNums.length !== 0 ? true : false}
              onPress={() => {
                let numbers = autoFill(6);
                setchoosenNums(numbers.randomNumbers);
                setstrongNum(numbers.strongNum);
                setTableRowColor("#78C849")
              }}
              small
              rounded
            >
              <Text style={{ fontSize: 10 }}>מלא טבלה אוטומטית</Text>
            </Button>
            <Button
              onPress={() => {
                setchoosenNums([]);
                setstrongNum(' ');
                setTableRowColor('#D60617')
              }}
              small
              rounded
            >
              <Text style={{ fontSize: 10 }}>מחק טבלה אוטומטית</Text>
            </Button>
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
              <Text style={{ color: "white", top:"3%",right:8 }}>
                המספרים שנבחרו
              </Text>
          )}
                    <View style={{ flexDirection: "row", flexWrap: "wrap",top:"3%" }}>

            {choosenNums
              .slice(0)
              .reverse()
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
              ))}
          </View>
        </View>
        <View>
          <Text style={{ color: "white", marginHorizontal: 15,top:"14%" }}>
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
              top:"5%"
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
