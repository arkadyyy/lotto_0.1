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
        <Text>{num}</Text>
       
      </TouchableOpacity>
    </>
  );
};

const StrongNum = ({ num, choosenStrongNums, setChoosenStrongNums,hazakimNumber }) => {
  return (
      <>
          
      <TouchableOpacity
        // disabled={
        //     choosenStrongNums === num ? false : choosenStrongNums > hazakimNumber ? true : false}
        onPress={() => {
            choosenStrongNums.length < hazakimNumber && setChoosenStrongNums([...choosenStrongNums,num]);
        //   if (choosenStrongNums === num) {
            // setChoosenStrongNums(0);
        //   }
        }}
        style={{
          width: 35,
          height: 35,
          borderWidth: 1,
          backgroundColor: choosenStrongNums.includes(num) ? "red" : "transparent",
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

const autoFill = (hazakimNumber) => {
  let randomNumbers = [];
  for (let i = 7; i > 0; i--) {
    let num = Math.floor(Math.random() * 37) + 1;
    if (randomNumbers.indexOf(num) < 0) {
      randomNumbers.push(num);
    } else {
      i++;
    }
    }

    let randomChoosenStrongNums = [];
  for (let index = hazakimNumber; index > 0; index--) {
    let strongNum = Math.floor(Math.random() * 7) + 1;
    if (randomChoosenStrongNums.indexOf(strongNum) < 0) {
        randomChoosenStrongNums.push(strongNum);
    } else {
      index++;
    }
  }
//   choosenStrongNums = Math.floor(Math.random() * 7) + 1;

  return { randomNumbers, randomChoosenStrongNums };
};

const ShitatiHazakFillForm = ({
  setshowTable,
  double,
  opendTableNum,
  opendTableTzerufimNum,
  setFullTables,
  fullTables,
    tzerufimNumber,
    hazakimNumber
}) => {
  const [choosenStrongNums, setChoosenStrongNums] = useState([]);
  const [choosenNums, setchoosenNums] = useState([]);
  const [usedTable, setusedTable] = useState({
    tableNum: 0,
    choosenNums: choosenNums,
    choosenStrongNums: choosenStrongNums,
  });
  const [indexOfTable, setindexOfTable] = useState(-1);

  // {tableNum : 0,choosenNums : choosenNums,strongNum : strongNum}
  
    useEffect(() => {
      fullTables.forEach((table, index) => {
        if (table.tableNum === opendTableNum) {
          setchoosenNums(table.choosenNums);
          setChoosenStrongNums(table.choosenStrongNums);

          setindexOfTable(index);
          setusedTable(table);
        }
      });
    }, []);
  
  
  // useeffect that urns when choosennums or choosenStrongNums changes
  useEffect(() => {
    setusedTable({
      tableNum: opendTableNum,
      choosenNums: choosenNums,
      choosenStrongNums: choosenStrongNums,
    });

    // setFullTables([
    //   {
    //     tableNum: opendTableNum,
    //     choosenNums: choosenNums,
    //     strongNum: strongNum,
    //   },
    // ]);
  }, [choosenNums, choosenStrongNums]);
  return (
    <>
      <View
        style={{
          backgroundColor: "#263742",
          width: "100%",
          top: "39%",
          height: 420,
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
            left: "35.4%",
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
                let numbers = autoFill(7);
                  setchoosenNums(numbers.randomNumbers);
                  let strongNumbers = autoFill(hazakimNumber);
                setChoosenStrongNums(strongNumbers.randomChoosenStrongNums);
              }}
              small
              rounded
            >
              <Text style={{ fontSize: 10 }}>מלא טבלה אוטומטית</Text>
            </Button>
            <Button
              onPress={() => {
                setchoosenNums([]);
                setChoosenStrongNums([]);
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
        <View style={{ marginTop: -10 }}>
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
                setChoosenStrongNums={setChoosenStrongNums}
                choosenStrongNums={choosenStrongNums}
                num={index + 1}
                    key={index}
                    hazakimNumber={hazakimNumber}
              />
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

export default ShitatiHazakFillForm;
