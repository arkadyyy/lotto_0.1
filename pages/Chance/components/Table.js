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
  formNum,
  tableIndex,
}) => {
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
      </View>
    </>
  );
};

export default Table;
