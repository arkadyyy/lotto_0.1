import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import EStyleSheet from "react-native-extended-stylesheet";
const { width, height } = Dimensions.get("window");

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

const StrongNum = ({
  num,
  choosenStrongNums,
  setChoosenStrongNums,
  hazakimNumber,
}) => {
  return (
    <>
      <TouchableOpacity
        // disabled={
        //     choosenStrongNums === num ? false : choosenStrongNums > hazakimNumber ? true : false}
        onPress={() => {
          choosenStrongNums.length < hazakimNumber &&
            setChoosenStrongNums([...choosenStrongNums, num]);
          //   if (choosenStrongNums === num) {
          // setChoosenStrongNums(0);
          //   }
        }}
        style={{
          width: 35,
          height: 35,
          borderWidth: 1,
          backgroundColor: choosenStrongNums.includes(num)
            ? "#FCEE21"
            : "transparent",
          borderColor: "white",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          margin: 2,
        }}
      >
        <Text
          style={{
            color: choosenStrongNums.includes(num) ? "#E62321" : "white",
            fontFamily: "fb-Spacer",
          }}
        >
          {num}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export const autoFill = (hazakimNumber) => {
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
  hazakimNumber,
}) => {
  const [choosenStrongNums, setChoosenStrongNums] = useState([]);
  const [choosenNums, setchoosenNums] = useState([]);
  const [usedTable, setusedTable] = useState({
    tableNum: 1,
    choosenNums: choosenNums,
    choosenStrongNums: choosenStrongNums,
  });
  const [indexOfTable, setindexOfTable] = useState(-1);

  // {tableNum : 0,choosenNums : choosenNums,strongNum : strongNum}

  useEffect(() => {
    fullTables.forEach((table, index) => {
      if (table.tableNum === 1) {
        setchoosenNums(table.choosenNums);
        setChoosenStrongNums(table.choosenStrongNums);

        setindexOfTable(1);
        setusedTable(table);
      }
    });
  }, []);

  // useeffect that runs when choosennums or choosenStrongNums changes
  useEffect(() => {
    setusedTable({
      tableNum: 1,
      choosenNums: choosenNums,
      choosenStrongNums: choosenStrongNums,
    });
  }, [choosenNums, choosenStrongNums]);
  return (
    <>
      <View
        style={{
          backgroundColor: "#263742",
          width: "100%",
          top: EStyleSheet.value("$rem") * -37,
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
                  let numbers = autoFill(7);
                  setchoosenNums(numbers.randomNumbers);
                  let strongNumbers = autoFill(hazakimNumber);
                  setChoosenStrongNums(strongNumbers.randomChoosenStrongNums);
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
                  setChoosenStrongNums([]);
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
                  let numbers = autoFill(7);
                  setchoosenNums(numbers.randomNumbers);
                  let strongNumbers = autoFill(hazakimNumber);
                  setChoosenStrongNums(strongNumbers.randomChoosenStrongNums);
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
                let numbers = autoFill(7);
                setchoosenNums(numbers.randomNumbers);
                let strongNumbers = autoFill(hazakimNumber);
                setChoosenStrongNums(strongNumbers.randomChoosenStrongNums);
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
            </TouchableOpacity> */}
            {/* <TouchableOpacity
              onPress={() => {
                setchoosenNums([]);
                setChoosenStrongNums([]);
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
          {/* <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
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
            {choosenNums
              .sort(function (a, b) {
                return b - a;
              })

              // .slice(0)
              // .reverse()
              .map((num) => (
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 30,
                    backgroundColor: "pink",
                    margin: 3,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "black", fontFamily: "fb-Spacer" }}>
                    {num}
                  </Text>
                </View>
              ))}
          </View> */}
        </View>
        <View style={{ marginTop: -47 }}>
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
