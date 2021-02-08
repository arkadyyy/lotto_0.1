import React, { useState } from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import NavBar from "../../components/NavBar";
import BlankSquare from "../../components/BlankSquare";
import axios from "axios";
import { Button, List } from "native-base";
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

Amplify.configure(awsconfig);
const { width, height } = Dimensions.get("window");

const SumPage777 = ({ route, navigation }) => {
  const { screenName, tableNum, fullTables, gameType, formType } = route.params;
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

  const [price, setPrice] = useState(11);

  const [hagralot, setHagralot] = useState(-1);
  const [url, seturl] = useState("");

  const [sendToServer, setsendToServer] = useState({
    multi_lottery: -1,
    tables: [],
  });

  // const [tableNum, settableNum] = useState(1);

  useEffect(() => {
    //set url accordingly to game
    if (gameType === "777") {
      seturl("http://52.90.122.190:5000/games/777/type/regular/0");
    } else if (gameType === "778") {
      seturl("http://52.90.122.190:5000/games/777/type/shitati/0");
    } else if (gameType === "779") {
      seturl("http://52.90.122.190:5000/games/777/type/shitati/0");
    }
    console.log("formType : ", formType);
  }, []);

  useEffect(() => {
    //configure data sent to server

    let x = fullTables.map((table, index) => {
      return {
        numbers: table.choosenNums,

        table_number: table.tableNum,
      };
    });

    console.log("x : ", x);

    setsendToServer({
      form_type: formType,
      multi_lottery: hagralot,
      tables: x,
    });

    // {
    //   "form_type": 8,
    //   "multi_lottery": -1,
    //   "tables": [
    //     {
    //       "numbers": [
    //         5,
    //         28,
    //         30,
    //         35,
    //         37,
    //         51,
    //         52,
    //         56
    //       ],
    //       "table_number": 1
    //     }
    //   ]
    // }

    // {
    //   "form_type": 8,
    //   "multi_lottery": -1,
    //   "tables": Array [
    //     Object {
    //       "numbers": Array [
    //         11,
    //         29,
    //         2,
    //         12,
    //         67,
    //         16,
    //         52,
    //         65,
    //       ],
    //       "table_number": 1,
    //     }

    console.log("sendToServer : ", sendToServer);
  }, [fullTables, hagralot]);

  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} screenName={screenName} />
        <BlankSquare gameName='הגרלת 777' color='#CC1D64' />
        <ChooseForm setdouble={setdouble} double={double} />
        <View style={{ margin: 15 }}>
          <View
            style={{
              backgroundColor: "#CC1D64",
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
                <Text style={{ fontSize: 20, color: "#FF0000" }}>2</Text>
              </View>
              <Text style={{ fontSize: 27, color: "white" }}>
                שדרג את הטופס
              </Text>
            </View>

            <ChooseNumOfTables hagralot={hagralot} setHagralot={setHagralot} />
            <ExtraAndOtomatChoose screenName='chancePages' />

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
                  // let summary = { chance: fullTables, investNum };
                  // console.log(summary);
                  // console.log("store.user : ", store.user.signInUserSession);
                  console.log(store.jwt);
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
export default SumPage777;
