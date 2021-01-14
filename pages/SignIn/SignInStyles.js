import { StyleSheet, Text, View } from "react-native";

const signInstyles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",

    backgroundColor: "#fff",
  },

  blanksquare: {
    backgroundColor: "#F2F2F2",

    height: 90,
    width: "100%",
  },
  whiteSquare: {
    margin: 10,
      backgroundColor: "white",
    // width:'85%',
paddingLeft:20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    width: "100%",
  },
  detailsSquare: {
    backgroundColor: "#00ADEF",
    height: 350,
    width: "85%",
    padding: 15,
  },

  signInPageInput: {
    borderRadius: 13,
    flex: 1,
    backgroundColor: "white",
    height: 30,
    alignItems: "flex-start",
    flexDirection: "column",
      margin: 3,
    
  },
  signInPageInputs: {
    flex: 1,
    flexDirection: "row",
    // padding: 0,
    // width: "100%",
    justifyContent: "space-around",
  },

  radioGenderButons: {
    flex: 2,
    height: 30,
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    // marginTop: 10,
    // marginBottom: 20,
    // marginRight: 15,
    // justifyContent:"space-between",
  },
  radioGenderButon: {
      flex: 1,
    flexDirection: "row",
    height: 20,
    justifyContent: "space-around",
    backgroundColor: "#00ADEF",
    borderColor: "white",
    borderWidth: 1,
  },
});

export default signInstyles;