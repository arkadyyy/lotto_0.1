import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import { ListItem } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react";

// const Num = ({
//   symbol,
//   setpressed,
//   pressed,
//   setcounter,
//   counter,
//   tableNum,
//   fullTables,
//   setfullTables,
// }) => {
//   useEffect(() => {
//     //if we pressed on a card and we added it to pressed.symbolsPressed ...
//     if (pressed.symbolsPressed.length >= 1) {
//       //first of all , remove its old object in fullTables be4 we put its new object
//       let filtered = fullTables.choosenCards.filter(
//         (x) => x.cardType !== pressed.type
//       );

//       //now we set updated fulltables
//       setfullTables({
//         gameType: tableNum,
//         choosenCards: [
//           ...filtered,
//           {
//             cardType: pressed.type,
//             card: pressed.symbolsPressed,
//           },
//         ],
//       });
//     }
//     console.log(tableNum);
//   }, [counter]);

//   return (
//     <>
//       <TouchableOpacity
//         style={{
//           width: 21,
//           height: 35,
//           borderRadius: 6,
//           backgroundColor: pressed.symbolsPressed.includes(symbol)
//             ? "#8CC63F"
//             : "white",

//           margin: 5,
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//         disabled={
//           pressed.symbolsPressed.includes(symbol)
//             ? false
//             : pressed.symbolsPressed.length > 0
//             ? true
//             : counter > tableNum - 1
//             ? true
//             : false
//         }
//         onPress={() => {
//           if (pressed.symbolsPressed.includes(symbol)) {
//             setpressed({
//               numberOfPress: pressed.numberOfPress - 1,
//               symbolsPressed: pressed.symbolsPressed.filter(
//                 (x) => x !== symbol
//               ),
//               type: pressed.type,
//             });
//             setcounter(counter - 1);
//           } else {
//             setpressed({
//               numberOfPress: ++pressed.numberOfPress,
//               symbolsPressed: [...pressed.symbolsPressed, symbol],
//               type: pressed.type,
//             });
//             setcounter(counter + 1);
//           }

//           console.log(pressed);
//         }}
//       >
//         <Text style={{ color: "black" }}>{symbol}</Text>
//       </TouchableOpacity>
//     </>
//   );
// };
//////////////////////////////////////////////

const Table = ({
  setshowTable,
  pressedSpade,
  pressedHeart,
  pressedDiamond,
  pressedClubs,
}) => {
  return (
    <>
      <ListItem
        noBorder={true}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "yellow",
          width: "90%",
          // flexWrap: "wrap",
        }}
        onPress={() => {
          setshowTable(true);
        }}
      >
        <ListItem
          noBorder={true}
          style={{
            alignItems: "center",
          }}
          onPress={() => {
            setshowTable(true);
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
            {pressedSpade.symbolsPressed.length > 0 ? (
              <>
                <Image
                  style={{ width: 60, height: 80, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/choosenSpade.png")}
                />
                {pressedSpade.symbolsPressed.map((num, index) => (
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
            {pressedHeart.symbolsPressed.length > 0 ? (
              <>
                <Image
                  style={{ width: 60, height: 80, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/choosenHeart.png")}
                />
                {pressedHeart.symbolsPressed.map((num, index) => (
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
            {pressedDiamond.symbolsPressed.length > 0 ? (
              <>
                <Image
                  style={{ width: 60, height: 80, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/choosenDiamond.png")}
                />
                {pressedDiamond.symbolsPressed.map((num, index) => (
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
            {pressedClubs.symbolsPressed.length > 0 ? (
              <>
                <Image
                  style={{ width: 60, height: 80, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/choosenClubs.png")}
                />
                {pressedClubs.symbolsPressed.map((num, index) => (
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
    </>
  );
};

export default Table;
