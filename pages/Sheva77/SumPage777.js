import React, { useState } from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import NavBar from "../../components/NavBar";
import BlankSquare from "../../components/BlankSquare";
import axios from "axios";
import { Button, List, Spinner } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import ChooseNumOfTables from "./components/ChooseNumOfTables";
import ExtraAndOtomatChoose from "../../pages/Lotto/components/ExtraAndOtomatChoose/ExtraAndOtomatChoose";

import { useEffect } from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faShekelSign } from "@fortawesome/free-solid-svg-icons";
import EStyleSheet from "react-native-extended-stylesheet";
import sheva77Liststyles from "./Sheva77ListStyles";

Amplify.configure(awsconfig);
const { width, height } = Dimensions.get("window");

const SumPage777 = ({ route, navigation }) => {
  const {
    screenName,
    tableNum,
    fullTables,
    gameType,
    formType,
    trimedFullTables,
  } = route.params;

  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [price, setPrice] = useState("");
  const [otomatic, setOtomatic] = useState(true);
  const [HagralotMultiplicaton, setHagralotMultiplicaton] = useState(1);

  const [hagralot, setHagralot] = useState(-1);
  const [url, seturl] = useState("");
  const [displayPrice, setdisplayPrice] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const [sendToServer, setsendToServer] = useState({
    multi_lottery: -1,
    tables: [],
  });

  const getPrice = async (url, fullTables, formType) => {
    setPrice(" ");

    console.log("i am focused ");

    let x = await fullTables.map((table, index) => {
      return {
        numbers: table.choosenNums,

        table_number: table.tableNum,
      };
    });
    console.log("fulltables updated for extrapage : ", x);
    axios
      .post(
        url,
        {
          multi_lottery: hagralot,
          tables: x,
          form_type: Number(formType),
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
      .catch((err) => console.log(err))
      .then((data) => {
        setTimeout(() => {
          setdisplayPrice(true);
        }, 1500);
      })
      .catch((err) => console.log(err));

    // setsendToServer({
    //   multi_lottery: hagralot,
    //   tables: x,
    // });
  };

  useEffect(() => {
    if (screenName === "LottoPage") {
      setGameName("הגרלת לוטו");
    } else if (screenName === "ChancePage") {
      setGameName("הגרלת צ'אנס");
    }

    //configure data sent to server

    if (gameType === "777") {
      let x = trimedFullTables.map((table, index) => {
        return {
          numbers: table.choosenNums,

          table_number: table.tableNum,
        };
      });

      getPrice(
        "http://52.90.122.190:5000/games/777/type/regular/calculate_price",
        fullTables,
        formType
      );

      setsendToServer({
        form_type: String(formType),
        multi_lottery: hagralot,
        tables: x,
      });
    } else if (gameType === "778") {
      let x = fullTables.map((table, index) => {
        return {
          numbers: table.choosenNums,

          table_number: table.tableNum,
        };
      });

      getPrice(
        "http://52.90.122.190:5000/games/777/type/shitati/calculate_price",
        fullTables,
        formType
      );

      setsendToServer({
        form_type: String(formType),
        multi_lottery: hagralot,
        tables: x,
      });
    } else if (gameType === "779") {
      let x = fullTables.map((table, index) => {
        return {
          numbers: table.choosenNums,

          table_number: table.tableNum,
        };
      });
      console.log(x);
      getPrice(
        "http://52.90.122.190:5000/games/777/type/shitati/calculate_price",
        fullTables,
        formType
      );

      setsendToServer({
        form_type: String(formType),
        multi_lottery: hagralot,
        tables: x,
      });
    }
    console.log("trimedFullTables : ", trimedFullTables);
  }, [fullTables, otomatic, navigation]);

  useEffect(() => {
    //set url accordingly to game
    if (gameType === "777") {
      seturl("http://52.90.122.190:5000/games/777/type/regular/0");
      getPrice(
        "http://52.90.122.190:5000/games/777/type/regular/calculate_price",
        fullTables,
        formType
      );
    } else if (gameType === "778") {
      seturl("http://52.90.122.190:5000/games/777/type/shitati/0");
      getPrice(
        "http://52.90.122.190:5000/games/777/type/shitati/calculate_price",
        fullTables,
        formType
      );
    } else if (gameType === "779") {
      seturl("http://52.90.122.190:5000/games/777/type/shitati/0");
      getPrice(
        "http://52.90.122.190:5000/games/777/type/shitati/calculate_price",
        fullTables,
        formType
      );
    }
    console.log("formType : ", formType);
  }, [navigation]);

  useEffect(() => {
    //configure data sent to server
    let x;
    if (gameType === "777") {
      x = trimedFullTables.map((table, index) => {
        return {
          numbers: table.choosenNums,

          table_number: table.tableNum,
        };
      });
    } else {
      x = fullTables.map((table, index) => {
        return {
          numbers: table.choosenNums,

          table_number: table.tableNum,
        };
      });
    }

    console.log("x : ", x);

    setsendToServer({
      form_type: String(formType),
      multi_lottery: hagralot,
      tables: x,
    });

    console.log("sendToServer : ", sendToServer);
  }, [fullTables, hagralot]);

  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} screenName={screenName} />
        <BlankSquare gameName='הגרלת 777' color='#CC1D64' />
        {/* <ChooseForm setdouble={setdouble} double={double} /> */}
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
              <View style={sheva77Liststyles.topNumCircle}>
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

            <ChooseNumOfTables
              setHagralotMultiplicaton={setHagralotMultiplicaton}
              hagralot={hagralot}
              setHagralot={setHagralot}
            />
            <ExtraAndOtomatChoose
              otomatic={otomatic}
              setOtomatic={setOtomatic}
              screenName='chancePages'
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
                {price * HagralotMultiplicaton === 0 ? (
                  <Text>:...</Text>
                ) : (
                  <Text
                    color='white'
                    style={{
                      fontSize: EStyleSheet.value("$rem") * 22,
                      color: "white",
                      marginLeft: 15,
                      fontFamily: "fb-Spacer",
                    }}
                  >
                    לתשלום: {price * HagralotMultiplicaton}
                  </Text>
                )}
                <View style={{ height: 10 }}>
                  <FontAwesomeIcon
                    size={10}
                    style={{ marginVertical: 7, marginLeft: 3 }}
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
                      navigation.navigate(`congratulation`);
                      setSpinner(false);
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
              {spinner && <Spinner />}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default SumPage777;
