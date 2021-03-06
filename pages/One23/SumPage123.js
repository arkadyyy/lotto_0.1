import React, { useState } from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import NavBar from "../../components/NavBar";
import BlankSquare from "../../components/BlankSquare";
import axios from "axios";
import { Button,Spinner,Toast} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import ChooseNumOfTables from "./components/ChooseNumOfTables";
import ExtraAndOtomatChoose from "../../pages/Lotto/components/ExtraAndOtomatChoose/ExtraAndOtomatChoose";
import ChooseForm from "./components/ChooseForm";
import FillForm from "./components/FillForm";
import Table from "./components/Table";
import { autoFill } from "./components/FillForm";
import { useEffect } from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { useSelector, useDispatch } from "react-redux";
import { LogIn } from "../../redux/actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faShekelSign } from "@fortawesome/free-solid-svg-icons";
import EStyleSheet from "react-native-extended-stylesheet";
import one23listStyles from "./One23listStyles";

Amplify.configure(awsconfig);
const { width, height } = Dimensions.get("window");

const SumPage123 = ({ route, navigation }) => {
  const {
    screenName,
    tableNum,
    fullTables,
    investNum,
    trimedFullTables,
  } = route.params;
  const [showTable, setshowTable] = useState(false);
  // const [tableNum, settableNum] = useState(1);
  const [double, setdouble] = useState(false);
  // const [fullTables, setFullTables] = useState([]);
  const [indexOfTable, setIndexOfTable] = useState("");
  const [opendTableNum, setopendTableNum] = useState(0);
  const [tableRowColor, setTableRowColor] = useState("D60617");
  const [jwtState, setjwtState] = useState({});
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [price, setPrice] = useState(null);
  const [otomatic, setOtomatic] = useState(true);
  const [hagralot, setHagralot] = useState(-1);
  const [url, seturl] = useState(
    "http://52.90.122.190:5000/games/123/type/regular/0"
  );
  const [spinner, setSpinner] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");
  const [sendToServer, setsendToServer] = useState({
    multi_lottery: -1,
    participant_amount: 0,
    tables: [],
  });

  const getPrice = (url, fullTables) => {
    setPrice(null);

    let x = fullTables.map((table, index) => {
      return {
        numbers: {
          1: table.choosenNums[0],
          2: table.choosenNums[1],
          3: table.choosenNums[2],
        },

        table_number: table.tableNum,
      };
    });
    console.log("fulltables updated for extrapage : ", x);
    axios
      .post(
        url,
        {
          multi_lottery: hagralot,
          participant_amount: investNum,
          tables: x,
        },
        {
          headers: {
            Authorization: store.jwt,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => setPrice(res.data.price))
      .catch((err) => console.log(err));

    setsendToServer({
      multi_lottery: hagralot,
      tables: x,
    });
  };

  const onblur = () => {
    navigation.addListener("blur", () => {
      console.log("navigation blur happend &&&&&&&");
      setPrice(null);
      setOtomatic(true);

      setsendToServer({
        multi_lottery: -1,
        participant_amount: 0,
        tables: [],
      });
    });
  };

  useEffect(() => {
    let x = trimedFullTables.map((table, index) => {
      return {
        numbers: {
          1: table.choosenNums[0],
          2: table.choosenNums[1],
          3: table.choosenNums[2],
        },

        table_number: table.tableNum,
      };
    });

    // let y = trimedFullTables.map((table, index) => {
    //   return {
    //     numbers: {
    //       1: table.choosenNums[0],
    //       2: table.choosenNums[1],
    //       3: table.choosenNums[2],
    //     },

    //     table_number: table.tableNum,
    //   };
    // });

    getPrice(
      "http://52.90.122.190:5000/games/123/type/regular/calculate_price",
      trimedFullTables
    );

    // console.log("x : ", x);

    setsendToServer({
      multi_lottery: hagralot,
      participant_amount: investNum,
      tables: x,
    });

    console.log("sendToServer : ", sendToServer);
  }, [fullTables, hagralot, investNum, navigation]);

  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} screenName={screenName} />
        <BlankSquare gameName='הגרלת 123' color='#FF6B00' />
        <ChooseForm setdouble={setdouble} double={double} />
        <View style={{ margin: 15 }}>
          <View
            style={{
              backgroundColor: "#FF6B00",
              paddingBottom: 20,
              height: 730,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
              }}
            >
              <View style={one23listStyles.topNumCircle}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#FF0000",
                    fontFamily: "fb-Spacer-bold",
                  }}
                >
                  2
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 17,
                  color: "white",
                  fontFamily: "fb-Spacer-bold",
                }}
              >
                שדרג את הטופס
              </Text>
            </View>

            <ChooseNumOfTables hagralot={hagralot} setHagralot={setHagralot} />
            <ExtraAndOtomatChoose
              setOtomatic={setOtomatic}
              otomatic={otomatic}
              screenName='123Pages'
            />

            <View style={{ flexDirection: "column", marginLeft: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <FontAwesomeIcon icon={faCheck} color='white' />
                <Text style={{ color: "white", marginLeft: 5 }}>
                  סיכויי הזכיה גבוהים מאד
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <FontAwesomeIcon icon={faCheck} color='white' />
                <Text style={{ color: "white", marginLeft: 5 }}>
                  קבל פרס על ניחוש חלקי
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <FontAwesomeIcon icon={faCheck} color='white' />
                <Text style={{ color: "white", marginLeft: 5 }}>
                  נחש קלף אחד
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "white",
                  width: 50,
                  height: 50,
                  borderRadius: 33,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <FontAwesomeIcon icon={faShekelSign} color='red' />
              </View>

              <Text
                style={{
                  fontSize: EStyleSheet.value("$rem") * 22,
                  color: "white",
                  fontFamily: "fb-Spacer-bold",
                }}
              >
                סיכום ושליחת טופס
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginHorizontal: 15,
                }}
              >
                <Text
                  style={{
                    fontSize: EStyleSheet.value("$rem") * 22,
                    color: "yellow",
                    fontFamily: "fb-Spacer",
                  }}
                >
                  סה"כ {tableNum} טבלאות
                </Text>
                <View
                  style={{
                    marginLeft: 10,
                    borderLeftColor: "yellow",
                    height: 20,
                    width: 10,
                    borderLeftWidth: 1,
                  }}
                ></View>
                <Text
                  style={{
                    fontSize: EStyleSheet.value("$rem") * 22,
                    color: "yellow",
                    fontFamily: "fb-Spacer",
                  }}
                >
                  {" "}
                  הגרלות : {hagralot === -1 ? 1 : hagralot}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  color='white'
                  style={{
                    fontSize: EStyleSheet.value("$rem") * 22,
                    color: "white",
                    marginLeft: 15,
                    fontFamily: "fb-Spacer",
                  }}
                >
                  לתשלום: {price!=0? price: "..."}
                </Text>
                <View style={{ height: 10 }}>
                  <FontAwesomeIcon
                    size={10}
                    style={{ marginVertical: 7, marginLeft: 2 }}
                    icon={faShekelSign}
                    color='white'
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                alignSelf: "center",
                marginTop: height / 20,
                zIndex: 1,
              }}
            >
              <Button
                onPress={() => {
                  setSpinner(true);

                  let summary = { chance: fullTables, investNum };
                  // console.log(summary);
                  // console.log("store.user : ", store.user.signInUserSession);
                  // console.log("jwtState : ", jwtState);
                  console.log("sendToServer : ", sendToServer);

                  axios
                    .post(url, sendToServer, {
                      headers: {
                        Authorization: store.jwt,
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                    })
                    .then((res) => {
                      console.log(
                        "this is res from post server request $$$$ : ",
                        res
                      );
                      navigation.navigate(`congratulation`);
                      setSpinner(false);

                    })
                    .catch((err) => {
                      console.log("errrrrrrrr:", err);
                      setSpinner(false);
                      seterrorMsg("ארעה שגיאה בשליחת הטופס");
                      Toast.show({
                        text: errorMsg,
                        textStyle: { fontFamily: "fb-Spacer" },
                        buttonText: "סגור",
                        position: "top",
                        // type: "warning",
                        buttonStyle: {
                          backgroundColor: "white",
                          borderRadius: 8,
                        },
                        textStyle: { color: "white" },
                        buttonTextStyle: { color: "black" },
                        duration: 2500,
                      });
                    });
                }}
                style={{
                  borderRadius: 17,
                  backgroundColor: "#8CC63F",
                  borderColor: "white",
                  borderWidth: 2,
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 28,
                    fontFamily: "fb-Spacer-bold",
                  }}
                >
                  שלח טופס
                </Text>
              </Button>
              {spinner &&
                <Spinner/>
      }
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default SumPage123;
