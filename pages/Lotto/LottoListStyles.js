import { StyleSheet, Text, View } from "react-native";

const LottoListstyles = StyleSheet.create({
  lottoPageContainer: {
    backgroundColor: "#E62321",
    paddingBottom: 20,
    height: 650,
  },
  roundButton1: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    // padding: 10,
    borderRadius: 100,
    backgroundColor: "#1F3842",
  },
  autoBtn: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 19,
    margin: 5,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
  },

  autoBtnText: {
    color: "white",
    fontSize: 10,
    fontFamily: "fb-Spacer-bold",

    textAlign: "center",
  },
  autoBtnContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginLeft: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  topNumCircle: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 33,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  subHeader: {
    color: "white",
    fontSize: 15,
    marginLeft: 12,
    marginBottom: 10,
    fontFamily: "fb-Spacer-bold",
  },
  listContainer: {
    alignItems: "flex-start",
    height: 250,
    marginLeft: -17,
    flexWrap: "wrap",
  },
  listContainerBorder: {
    borderColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  lottoExplanationContainer: {
    width: "100%",
    height: 30,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: -1,
  },
  sendFormBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    zIndex: -1,
  },
  sendFormBtn: {
    borderRadius: 17,
    backgroundColor: "#8CC63F",
    borderColor: "white",
    borderWidth: 2,
    padding: 10,
  },
  sendFormBtnText: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
    fontFamily: "fb-Spacer-bold",
  },
});
export default LottoListstyles;
