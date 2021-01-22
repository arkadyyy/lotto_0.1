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
        disabled={
          choosenNums.includes(num)
            ? false
            : choosenNums.length >= 3
            ? true
            : false
        }
        onPress={() => {
          choosenNums.length < 3 && setchoosenNums([...choosenNums, num]);

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

const DisplayChoosenNums = ({ num }) => {
  return (
    <>
      <TouchableOpacity
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
        <Text style={{ color: "white" }}>{num}</Text>
      </TouchableOpacity>
    </>
  );
};

const autoFill = (amount) => {
  let randomNumbers = [];
  let strongNum = 0;
  for (let i = amount; i > 0; i--) {
    let num = Math.floor(Math.random() * 9) + 1;
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
          (num) => num !== "-"
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
          top: "36%",
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
            <Button
              disabled={choosenNums.length !== 0 ? true : false}
              onPress={() => {
                let numbers = autoFill(3);
                setchoosenNums(numbers.randomNumbers);
              }}
              small
              rounded
            >
              <Text style={{ fontSize: 10 }}>מלא טבלה אוטומטית</Text>
            </Button>
            <Button
              onPress={() => {
                setchoosenNums([]);
              }}
              small
              rounded
            >
              <Text style={{ fontSize: 10 }}>מחק טבלה אוטומטית</Text>
            </Button>
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
            <TouchableOpacity>
              <Text>מחק רצף</Text>
            </TouchableOpacity>
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
              <DisplayChoosenNums num={choosenNums[index]} key={index} />
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

export default FillForm;
