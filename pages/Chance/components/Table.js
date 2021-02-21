import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import { Label, ListItem } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react";

const Table = ({
  setshowTable,
  pressedSpade,
  pressedHeart,
  pressedDiamond,
  pressedClubs,
<<<<<<< HEAD
  tableIndex,
  fullTables,
  setopendTableNum,
=======
  formNum,
  tableIndex,
>>>>>>> fd05c5d4f91f08d1b28f9ca185b42eadd6a9d7ad
}) => {
  const [usedSpade, setusedSpade] = useState([]);
  const [usedHeart, setusedHeart] = useState([]);
  const [usedDiamond, setusedDiamond] = useState([]);
  const [usedClubs, setusedClubs] = useState([]);

  const [table1, settable1] = useState([]);

  useEffect(() => {
    let fullTable1 = 0;
    let x;

    fullTables.forEach((table) => {
      if (+table.tableNum === tableIndex) {
        setusedSpade(
          table.choosenCards.find((table) => table.type === "spade").cards
        );
        setusedHeart(
          table.choosenCards.find((table) => table.type === "heart").cards
        );

        setusedDiamond(
          table.choosenCards.find((table) => table.type === "diamond").cards
        );
        setusedClubs(
          table.choosenCards.find((table) => table.type === "clubs").cards
        );
      }
    });
  }, [fullTables]);
  return (
    <>
      <View style={{ alignItems: "flex-start" }}>
        <Label
          style={{
            marginHorizontal: 25,
            marginBottom: -10,
            fontFamily: "fb-Spacer",
            color: "white",
          }}
        >
          {`צירוף ${tableIndex}`}
        </Label>
        <ListItem
          noBorder={true}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            // alignItems: "center",
            // backgroundColor: "yellow",
            // width: "90%",
            // flexWrap: "wrap",
          }}
          onPress={() => {
            setshowTable(true);
            setopendTableNum(tableIndex);
          }}
        >
          <ListItem
            noBorder={true}
            style={
              {
                // alignItems: "center",
                // marginLeft: 70,
              }
            }
            onPress={() => {
              setshowTable(true);
              setopendTableNum(tableIndex);
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: 7,
                marginHorizontal: -10,
              }}
            >
              {usedSpade.length > 0 ? (
                <>
                  <Image
                    style={{ width: 60, height: 80, borderRadius: 7 }}
                    source={require("C:/fullstack/lottoMatic/assets/chance/choosenSpade.png")}
                  />
                  {usedSpade.map((num, index) => (
                    <Text
                      style={{
                        includeFontPadding: false,
                        position: "absolute",
                        // left: "-50%",
                        top: "50%",
                        fontSize: 25,
                      }}
                      key={index}
                    >
                      {num}
                    </Text>
                  ))}
                </>
              ) : (
                <Image
                  style={{ width: 60, height: 80, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/spadeCard.png")}
                />
              )}
            </View>
          </ListItem>
          <ListItem
            noBorder={true}
            // style={{
            //   flexWrap: "wrap",
            //   marginTop: 4,
            //   height: 85,
            //   alignItems: "center",
            // }}
            onPress={() => {
              setshowTable(true);
              setopendTableNum(tableIndex);
              setopendTableNum(tableIndex);
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: 7,
                marginHorizontal: -10,
              }}
            >
              {usedHeart.length > 0 ? (
                <>
                  <Image
                    style={{ width: 60, height: 80, borderRadius: 7 }}
                    source={require("C:/fullstack/lottoMatic/assets/chance/choosenHeart.png")}
                  />
                  {usedHeart.map((num, index) => (
                    <Text
                      style={{
                        includeFontPadding: false,
                        position: "absolute",
                        // left: "-50%",
                        top: "50%",
                        fontSize: 25,
                      }}
                      key={index}
                    >
                      {num}
                    </Text>
                  ))}
                </>
              ) : (
                <Image
                  style={{ width: 60, height: 80, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/heartCard.png")}
                />
              )}
            </View>
          </ListItem>
          <ListItem
            noBorder={true}
            // style={{
            //   flexWrap: "wrap",
            //   marginTop: 4,
            //   height: 85,
            //   alignItems: "center",
            // }}
            onPress={() => {
              setshowTable(true);
              setopendTableNum(tableIndex);
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: 7,
                marginHorizontal: -10,
              }}
            >
              {usedDiamond.length > 0 ? (
                <>
                  <Image
                    style={{ width: 60, height: 80, borderRadius: 7 }}
                    source={require("C:/fullstack/lottoMatic/assets/chance/choosenDiamond.png")}
                  />
                  {usedDiamond.map((num, index) => (
                    <Text
                      style={{
                        includeFontPadding: false,
                        position: "absolute",
                        // left: "-50%",
                        top: "50%",
                        fontSize: 25,
                      }}
                      key={index}
                    >
                      {num}
                    </Text>
                  ))}
                </>
              ) : (
                <Image
                  style={{ width: 60, height: 80, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/diamondCard.png")}
                />
              )}
            </View>
          </ListItem>
          <ListItem
            noBorder={true}
            // style={{
            //   flexWrap: "wrap",
            //   marginTop: 4,
            //   height: 85,
            //   alignItems: "center",
            // }}
            onPress={() => {
              setshowTable(true);
              setopendTableNum(tableIndex);
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",

                marginTop: 7,
                marginHorizontal: -10,
              }}
            >
              {usedClubs.length > 0 ? (
                <>
                  <Image
                    style={{ width: 60, height: 80, borderRadius: 7 }}
                    source={require("C:/fullstack/lottoMatic/assets/chance/choosenClubs.png")}
                  />
                  {usedClubs.map((num, index) => (
                    <Text
                      style={{
                        includeFontPadding: false,
                        position: "absolute",
                        // left: "-50%",
                        top: "50%",
                        fontSize: 25,
                        zIndex: 200,
                      }}
                      key={index}
                    >
                      {num}
                    </Text>
                  ))}
                </>
              ) : (
                <Image
                  style={{ width: 60, height: 80, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/clubsCard.png")}
                />
              )}
            </View>
          </ListItem>
        </ListItem>
      </View>
    </>
  );
};

export default Table;
