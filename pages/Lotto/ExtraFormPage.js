import React, { useState } from "react";
import LottoListstyles from "./LottoListStyles";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import NavBar from "../../components/NavBar";
import BlankSquare from "../../components/BlankSquare";
import axios from "axios";
import { Button, List } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import ChooseNumOfTables from "./components/ChooseNumOfTables";
import ExtraAndOtomatChoose from "./components/ExtraAndOtomatChoose/ExtraAndOtomatChoose";
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
import { faShekelSign } from "@fortawesome/free-solid-svg-icons";
import EStyleSheet from "react-native-extended-stylesheet";
Amplify.configure(awsconfig);
const { width, height } = Dimensions.get("window");

const ExtraFormPage = ({ route, navigation }) => {
  const { screenName, tableNum, fullTables } = route.params;
  const [showTable, setshowTable] = useState(false);
  const [double, setdouble] = useState(false);
  // const [fullTables, setFullTables] = useState([]);
  const [indexOfTable, setIndexOfTable] = useState("");
  const [opendTableNum, setopendTableNum] = useState(0);
  const [tableRowColor, setTableRowColor] = useState("D60617");
  const [jwtState, setjwtState] = useState({});
  const [gameName, setGameName] = useState("");
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [hagralot, setHagralot] = useState(-1);
  const [price, setPrice] = useState(11);
  const [otomatic, setOtomatic] = useState(true);
  const [extra, setExtra] = useState(true);
  // const [tableNum, settableNum] = useState(1);

  const [sendToServer, setsendToServer] = useState({
    extra: false,
    multi_lottery: -1,
    tables: [
      //         {
      //           numbers: [15, 18, 24, 28, 30, 32],
      //           strong_number: [6],
      //           table_number: 1,
      //         },
    ],
  });

  //     {
  //       extra: false,
  //       multi_lottery: -1,
  //       tables: [
  //         {
  //           numbers: [15, 18, 24, 28, 30, 32],
  //           strong_number: [6],
  //           table_number: 1,
  //         },
  //       ],
  //     },

  useEffect(() => {
    if (screenName === "LottoPage") {
      setGameName("הגרלת לוטו");
    } else if (screenName === "ChancePage") {
      setGameName("הגרלת צ'אנס");
    }

    // axios
    //   .post(
    //     "http://52.90.122.190:5000/games/lotto/type/regular/calculate_price",
    //     {},
    //     {
    //       headers: {
    //         Authorization: store.jwt,
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((res) => console.log("res from calculate price : ", res.data));
  }, []);

  useEffect(() => {
    //configure data sent to server

    let x = fullTables.map((table, index) => {
      return {
        numbers: table.choosenNums,
        strong_number: [table.strongNum],
        table_number: table.tableNum,
      };
    });

    console.log("x : ", x);

    setsendToServer({
      extra: extra,
      multi_lottery: hagralot,
      tables: x,
    });

    console.log("sendToServer : ", sendToServer);
  }, [fullTables, extra, hagralot, otomatic]);

  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} screenName={screenName} />
        <BlankSquare gameName='הגרלת לוטו' color='#E62321' />
        {/* <ChooseForm setdouble={setdouble} double={double} /> */}
        <View style={{ margin: 15 }}>
          <View
            style={{
              backgroundColor: "#E62321",
              paddingBottom: 20,
              height: 730,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                marginTop: 20,
              }}
            >
              <View style={LottoListstyles.topNumCircle}>
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
              extra={extra}
              setExtra={setExtra}
              otomatic={otomatic}
              setOtomatic={setOtomatic}
              screenName='lottoPages'
            />

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
                  סה"כ {tableNum}טבלאות
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
                  {hagralot}הגרלות
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
                  לתשלום: {price}{" "}
                </Text>
                <View style={{ height: 10 }}>
                  <FontAwesomeIcon
                    style={{ marginVertical: 7, marginLeft: -4 }}
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
                  console.log("sendToServer", sendToServer);
                  // console.log("store.user : ", store.user.signInUserSession);
                  console.log("jwtState : ", jwtState);

                  axios
                    .post(
                      "http://52.90.122.190:5000/games/lotto/type/regular/0",
                      sendToServer,
                      {
                        headers: {
                          Authorization: store.jwt,
                          Accept: "application/json",
                          "Content-Type": "application/json",
                        },
                      }
                    )
                    .then((res) => {
                      console.log(
                        "this is res from post server request $$$$ : ",
                        res
                      );
                    });
                  {
                  }
                }}
                style={{
                  borderRadius: 17,
                  backgroundColor: "#8CC63F",
                  borderColor: "white",
                  borderWidth: 2,
                  padding: 10,
                }}
              >
                <Text style={{ color: "white", fontSize: 28 }}>שלח טופס</Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default ExtraFormPage;
