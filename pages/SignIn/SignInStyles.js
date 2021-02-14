import { StyleSheet, Text, View } from "react-native";

const signInstyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  blanksquare: {
    backgroundColor: "#F2F2F2",

    height: 90,
    width: "100%",
  },
  whiteSquare: {
    marginTop: 20,

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "7%",
    width: "100%",
  },
  detailsSquare: {
    backgroundColor: "#00ADEF",

    width: "90%",
    height: 370,
padding:20,
    flex: 1,
    margin: 20,
  },

  signInPageInput: {
    borderRadius: 7,
    flex: 1,
    backgroundColor: "white",
    height: 30,
    // alignItems: "flex-start",
    // flexDirection: "column",
    margin: 10,
  },
  signInPageInputs: {
    flex: 1,
    flexDirection: "row",
    // padding: 0,
    // width: "100%",
    justifyContent: "space-around",
  },

  radioGenderButons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  radioGenderButon: {
    flexDirection: "row",
    width: 80,
    justifyContent: "center",
    backgroundColor: "#00ADEF",
    borderColor: "white",
    borderWidth: 1,
    marginLeft: 10,
    padding: 4,
    borderRadius: 12,
  },
  radioGenderButonSelected: {
    flexDirection: "row",
    width: 80,
    justifyContent: "center",
    backgroundColor: "#263742",
    borderColor: "white",
    borderWidth: 1,
    marginLeft: 10,
    padding: 4,
    borderRadius: 12,
  },
});

export default signInstyles;
