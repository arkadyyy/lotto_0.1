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

const checkIfPressed = (type) => {};

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
        <Text>{num}</Text>
      </TouchableOpacity>
    </>
  );
};

const StrongNum = ({ num, strongNum, setStrongNum,choosenStrongNums,setChoosenStrongNums }) => {
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

  // {tableNum : 0,choosenNums : choosenNums,strongNum : strongNum}

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
  },[tzerufimNumber])
  // להשוות לנ"ל!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // useEffect(() => {
  //   fullTables.forEach((table, index) => {
  //     if (table.tableNum === opendTableNum) {
  //       let filteredChoosenNums = table.choosenNums.filter(
  //         (num) => num !== "-"
  //       );
  //       setchoosenNums(filteredChoosenNums);
  //       setstrongNum(table.strongNum);

  //       setindexOfTable(index);
  //       setusedTable(table);
  //     }
  //   });
  // }, []);
  // useeffect that urns when choosennums or strongnum changes
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
          top: "41.5%",
          height: 420,
          position: "absolute",
          zIndex: 2000,
        }}
      >
        {/* {top 90 deg box} */}
        <View
          style={{
            backgroundColor: "#263742",
            width: "45%",
            height: 70,
            position: "relative",
            top: -40,
            left: "43.2%",
            zIndex: 2001,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {/* <View style={{ flexDirection: "row" }}>
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
          </View> */}
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
              if (indexOfTable !== -1) {
                // let x = fullTables.splice(indexOfTable, 1);
                setFullTables([...fullTables, usedTable]);
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
              מלא את טבלה {opendTableNum}
            </Text>
            <Button
              disabled={choosenNums.length !== 0 ? true : false}
              onPress={() => {
                let numbers = autoFill(tzerufimNumber);
                setchoosenNums(numbers.randomNumbers);
                setStrongNum(numbers.strongNum);
                // console.log('fullTable1:',fullTable1);
              }}
              small
              rounded
            >
              <Text style={{ fontSize: 10 }}>מלא טבלה אוטומטית</Text>
            </Button>
            <Button
              onPress={() => {
                setchoosenNums([]);
                setStrongNum();
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
                tzerufimNumber={tzerufimNumber}
              />
            ))}
          </View>
        </View>
        <View style={{ marginTop: "-10%" }}>
          <Text style={{ color: "white", marginHorizontal: 15 }}>
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
