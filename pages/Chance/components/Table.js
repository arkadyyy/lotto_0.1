import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  CardItem,
  List,
  ListItem,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const Table = ({ setshowTable, showTable, tableNum }) => {
  return (
    <>
      <ListItem
        noBorder={true}
        style={{
          flexWrap: "wrap",
          marginTop: 4,
          height: 35,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setshowTable(true);
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            {tableNum >= 1 && (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  style={{ width: 40, height: 50, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/spade.png")}
                />
              </View>
            )}
            {tableNum >= 2 && (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  style={{ width: 40, height: 50, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/heart.png")}
                />
              </View>
            )}

            {tableNum >= 3 && (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  style={{ width: 40, height: 50, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/diamond.png")}
                />
              </View>
            )}

            {tableNum >= 4 && (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  style={{ width: 40, height: 50, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/clubs.png")}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
      </ListItem>
    </>
  );
};

export default Table;
