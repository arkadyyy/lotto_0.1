import React, { useState } from "react";
import LottoListstyles from "./LottoListStyles";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import NavBar from "../../components/NavBar";
import BlankSquare from "../../components/BlankSquare";
import axios from "axios";
import { Button, Spinner, Toast } from "native-base";
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
import { CommonActions } from '@react-navigation/native';

Amplify.configure(awsconfig);
const { width, height } = Dimensions.get("window");

const SumPageLotto = ({ route, navigation }) => {
  const {
    screenName,
    tableNum,
    fullTables,
    gameType,
    tzerufimNumber,

    trimedFullTables,
    hazakimNumber,
  } = route.params;
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
  const [displayPrice, setdisplayPrice] = useState(false);
  const [hagralot, setHagralot] = useState(-1);
  const [price, setPrice] = useState("");
  const [otomatic, setOtomatic] = useState(true);
  const [extra, setExtra] = useState(false);
  const [url, seturl] = useState("");
  const [HagralotMultiplicaton, setHagralotMultiplicaton] = useState(1);
  // const [tableNum, settableNum] = useState(1);
  const [spinner, setSpinner] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");

  const [sendToServer, setsendToServer] = useState({
    extra: false,
    multi_lottery: -1,
    tables: [],
  });

  // const trimEmptyTables = async (fullTables) => {
  //   let x = await fullTables.map((table, index) => {
  //     return {
  //       numbers: table.choosenNums,
  //       strong_number: [table.strongNum],
  //       table_number: table.tableNum,
  //     };
  //   });
  //   await x.sort((table1, table2) => {
  //     return table1.tableNum - table2.tableNum;
  //   });
  //   await x.slice(0, tableNum);
  //   console.log("tableNum : ", tableNum);

  //   console.log("fulltables send to get price : ", x);

  //   return x;
  // };

  const getPrice = async (url, trimedFullTables) => {
    setPrice(null);
    console.log("i am here");
    let x;
    if (gameType === "regular" || gameType === "double") {
      x = await trimedFullTables.map((table, index) => {
        return {
          numbers: table.choosenNums,
          strong_number: [table.strongNum],
          table_number: table.tableNum,
        };
      });
    }
    if (gameType === "shitati" || gameType === "shitati_hazak") {
      x = await trimedFullTables.map((table, index) => {
        return {
          numbers: table.choosenNums,
          strong_number: table.choosenStrongNums,
          table_number: table.tableNum,
        };
      });
    }

    if (gameType === "regular" || gameType === "double") {
      axios
        .post(
          url,
          {
            extra: extra,
            multi_lottery: hagralot,
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
        .then((res) => {
          setPrice(res.data.price);
        })
        .then((data) => {
          setTimeout(() => {
            setdisplayPrice(true);
          }, 1500);
        })
        .catch((err) => console.log(err));
    } else if (gameType === "shitati" || gameType === "shitati_hazak") {
      console.log("x from shitati : ", x[0]);
      axios
        .post(
          url,
          {
            extra: extra,
            multi_lottery: hagralot,
            tables: x[0],
          },
          {
            headers: {
              Authorization: store.jwt,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          setPrice(res.data.price);
          console.log("?????shitaty price changed?");
        })
        .then((data) => {
          setTimeout(() => {
            setdisplayPrice(true);
          }, 1500);
        })
        .catch((err) => console.log(err));
    }

    setsendToServer({
      extra: extra,
      form_type: String(hazakimNumber),
      multi_lottery: hagralot,
      tables: x,
    });
  };

  useEffect(() => {
    if (screenName === "LottoPage") {
      setGameName("הגרלת לוטו");
    } else if (screenName === "ChancePage") {
      setGameName("הגרלת צ'אנס");
    }

    //configure data sent to server

    if (gameType === "regular" || gameType === "double") {
      let x = trimedFullTables.map((table, index) => {
        return {
          numbers: table.choosenNums,
          strong_number: [table.strongNum],
          table_number: table.tableNum,
        };
      });
      if (gameType === "regular") {
        getPrice(
          "http://52.90.122.190:5000/games/lotto/type/regular/calculate_price",
          trimedFullTables
        );
      }
      if (gameType === "double") {
        getPrice(
          "http://52.90.122.190:5000/games/lotto/type/regular_double/calculate_price",
          trimedFullTables
        );
      }

      setsendToServer({
        extra: extra,
        form_type: String(hazakimNumber),
        multi_lottery: hagralot,
        tables: x,
      });
    } else if (gameType === "shitati") {
      let x = trimedFullTables.map((table, index) => {
        return {
          numbers: table.choosenNums,
          strong_number: table.choosenStrongNums,
          table_number: table.tableNum,
        };
      });

      getPrice(
        "http://52.90.122.190:5000/games/lotto/type/shitati/calculate_price",
        trimedFullTables
      );

      setsendToServer({
        extra: extra,
        form_type: `${tzerufimNumber}`,
        multi_lottery: hagralot,
        tables: x,
      });
    } else if (gameType === "shitati_hazak") {
      let x = trimedFullTables.map((table, index) => {
        return {
          numbers: table.choosenNums,
          strong_number: table.choosenStrongNums,
          table_number: table.tableNum,
        };
      });
      console.log(x);
      getPrice(
        "http://52.90.122.190:5000/games/lotto/type/shitati_hazak/calculate_price",
        trimedFullTables
      );

      setsendToServer({
        extra: extra,
        form_type: String(hazakimNumber),
        multi_lottery: hagralot,
        tables: x,
      });
    }
  }, [fullTables, extra, otomatic, navigation]);

  useEffect(() => {
    navigation.addListener("blur", () => {
      console.log("blur happend");
      setPrice(null);
      seturl("");
      setOtomatic(true);
      setExtra(true);
      setdisplayPrice(false);
      setsendToServer({
        extra: false,
        multi_lottery: -1,
        tables: [],
      });
    });
    //set post url according to game
    navigation.addListener("focus", () => {
      console.log("focus happend");
      if (gameType === "regular") {
        seturl("http://52.90.122.190:5000/games/lotto/type/regular/0");
        getPrice(
          "http://52.90.122.190:5000/games/lotto/type/regular/calculate_price",
          trimedFullTables
        );
      } else if (gameType === "double") {
        seturl("http://52.90.122.190:5000/games/lotto/type/regular_double/0");
        getPrice(
          "http://52.90.122.190:5000/games/lotto/type/regular_double/calculate_price",
          trimedFullTables
        );
      } else if (gameType === "shitati") {
        seturl("http://52.90.122.190:5000/games/lotto/type/shitati/0");
        getPrice(
          "http://52.90.122.190:5000/games/lotto/type/shitati/calculate_price",
          trimedFullTables
        );
      } else if (gameType === "double_shitati") {
        seturl("http://52.90.122.190:5000/games/lotto/type/double_shitati/0");
        getPrice(
          "http://52.90.122.190:5000/games/lotto/type/double_shitati/calculate_price",
          trimedFullTables
        );
      } else if (gameType === "shitati_hazak") {
        seturl("http://52.90.122.190:5000/games/lotto/type/shitati_hazak/0");
        getPrice(
          "http://52.90.122.190:5000/games/lotto/type/shitati_hazak/calculate_price",
          trimedFullTables
        );
      } else if (gameType === "double_shitati_hazak") {
        seturl(
          "http://52.90.122.190:5000/games/lotto/type/double_shitati_hazak/0"
        );
        getPrice(
          "http://52.90.122.190:5000/games/lotto/type/double_shitati_hazak/calculate_price",
          trimedFullTables
        );
      }
    });
  }, [navigation]);

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

            <ChooseNumOfTables
              setHagralotMultiplicaton={setHagralotMultiplicaton}
              hagralot={hagralot}
              setHagralot={setHagralot}
            />
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
                  marginTop: 7,
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
                {!displayPrice ? ("לתשלום ...") : 
                  
                    `לתשלום: ${price * HagralotMultiplicaton}`
                }  
                </Text>
                

                <FontAwesomeIcon
                  size={10}
                  style={{ marginVertical: 7, marginLeft: 4 }}
                  icon={faShekelSign}
                  color='white'
                />
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
                  console.log("sendToServer", sendToServer);

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
                      navigation.reset({
                        index: 0,
                        routes: [{ name: 'congratulation' }],
                      });
                      
                      // navigation.navigate(`congratulation`);

                      setSpinner(false);
                    })
                    .catch((err) => {
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
              {spinner && <Spinner />}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default SumPageLotto;
