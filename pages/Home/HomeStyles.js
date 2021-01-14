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
    height: 110,
    margin: 35,
    width: "100%",
    justifyContent: "flex-start",

    flexWrap: "wrap",
    alignItems: "flex-start",
    direction: "rtl",
  },
  openingPageBtn: {
    // flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    width: 102,
    height: 103,
    margin: 10,
    borderRadius: 7,
  },
  openingPageBtnBorder: {
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 7,

    paddingLeft: "15%",
    paddingRight: "15%",
    paddingBottom: "5%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  openingPageTopIcon: {
    width: 40,
    height: 30,
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
