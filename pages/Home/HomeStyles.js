import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
// width: () => EStyleSheet.value("$rem") / 10,
const homestyles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  headerBtns: {
    margin: 3,
    padding: 1.3,
  },
  toplogo: {
    // flexDirection: "row",
    height: 130,
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  blanksquare: {
    backgroundColor: "#263742",

    height: 130,
    width: "100%",
  },
  openingPageBtns: {
    height: 110,
    margin: 35,

    justifyContent: "flex-start",

    flexWrap: "wrap",
    alignItems: "center",
    direction: "rtl",
  },
  openingPageBtn: {
    // flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 7,
  },
  openingPageBtnBorderOne23: {
    borderWidth: () => EStyleSheet.value("$rem") * 1.7,
    borderColor: "white",
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 13,
    // paddingLeft: () => EStyleSheet.value("$rem") * 18,
    // paddingRight: () => EStyleSheet.value("$rem") * 18,
    // paddingBottom: () => EStyleSheet.value("$rem") * 1.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  openingPageBtnBorderChance: {
    borderWidth: () => EStyleSheet.value("$rem") * 1.7,
    borderColor: "white",
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 19,
    // paddingLeft: () => EStyleSheet.value("$rem") * 18,
    // paddingRight: () => EStyleSheet.value("$rem") * 18,
    // paddingBottom: () => EStyleSheet.value("$rem") * 1.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  openingPageBtnBorderSheva77: {
    borderWidth: () => EStyleSheet.value("$rem") * 1.7,
    borderColor: "white",
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 17,
    // paddingLeft: () => EStyleSheet.value("$rem") * 18,
    // paddingRight: () => EStyleSheet.value("$rem") * 18,
    // paddingBottom: () => EStyleSheet.value("$rem") * 1.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  openingPageBtnBorderLotto: {
    borderWidth: () => EStyleSheet.value("$rem") * 1.7,
    borderColor: "white",
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 21,
    // paddingLeft: () => EStyleSheet.value("$rem") * 18,
    // paddingRight: () => EStyleSheet.value("$rem") * 18,
    // paddingBottom: () => EStyleSheet.value("$rem") * 1.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  openingPageTopIcon: {
    width: 40,
    height: 30,
    top: -7,
    position: "relative",
  },
  openingPageBtnLastBtns: {
    backgroundColor: "#263742",
    display: "flex",
    flexDirection: "column",
    marginBottom: 13,
  },
  btnWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  footerMsg: {
    padding: 10,

    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 10,
  },
});

export default homestyles;
