import React from "react";
import { StyleSheet, Text, View } from "react-native";

const homestyles = StyleSheet.create({
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
    height: 100,
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
    height: 260,
    margin: 35,
    width: "100%",
    justifyContent: "center",

    flexWrap: "wrap",
    alignItems: "flex-start",
    direction: "rtl",
  },
  openingPageBtn: {
    // flexGrow: 1,

    width: 95,
    height: 80,
    margin: 10,
    borderRadius: 7,
  },
  openingPageBtnLastBtns: {
    backgroundColor: "#263742",
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
