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

const SumPageChance = ({ route, navigation }) => {
  const {
    screenName,
    componentWillReceiveProps,
    tableNum,
    fullTables,
    investNum,
    gameType,
    formNum,
  } = route.params;
  const [showTable, setshowTable] = useState(false);

  const [double, setdouble] = useState(false);
  const [HagralotMultiplicaton, setHagralotMultiplicaton] = useState(1);
  const [indexOfTable, setIndexOfTable] = useState("");
  const [opendTableNum, setopendTableNum] = useState(0);
  const [tableRowColor, setTableRowColor] = useState("D60617");
  const [jwtState, setjwtState] = useState({});
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [usedFullTables, setUsedFullTables] = useState([]);
  const [price, setPrice] = useState(null);
  const [mappedUsedTables, setmappedUsedTables] = useState([]);

  const [hagralot, setHagralot] = useState(-1);
  const [url, seturl] = useState("");

  const [sendToServer, setsendToServer] = useState({});

  const onblur = () => {
    navigation.addListener("blur", () => {
      setPrice(null);
      seturl("");
      setHagralot(-1);
      setsendToServer({});
      setUsedFullTables([]);
    });
  };

  const getPrice = (url, fullTables) => {
    navigation.addListener("focus", async () => {
      axios
        .post(url, fullTables, {
          headers: {
            Authorization: store.jwt,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => setPrice(res.data.price))
        // .then((data) => {
        //   setTimeout(() => {
        //     setdisplayPrice(true);
        //   }, 1500);
        // })
        .catch((err) => console.log(err));
    });
  };

  useEffect(() => {
    //set url according to game

    if (gameType === "regular") {
      seturl("http://52.90.122.190:5000/games/chance/type/regular/0");
    } else if (gameType === "rav_chance") {
      seturl("http://52.90.122.190:5000/games/chance/type/rav/0");
    } else if (gameType === "shitati") {
      seturl("http://52.90.122.190:5000/games/chance/type/shitati/0");
    }
    //making deep copy of fulltables to prevent original fulltables 2 change / useless renders
    let fulltablesCopy = fullTables.slice(0);
    let fulltablesCopy2 = fulltablesCopy.slice(0);

    fulltablesCopy2.sort((table1, table2) => {
      return +table1.tableNum - +table2.tableNum;
    });
    fulltablesCopy2.splice(formNum, fulltablesCopy2.length);

    setUsedFullTables(fulltablesCopy2);
  }, []);

  useEffect(() => {
    navigation.addListener("focus", async () => {
      let fulltablesCopy = fullTables.slice(0);
      let fulltablesCopy2 = fulltablesCopy.slice(0);

      fulltablesCopy2.sort((table1, table2) => {
        return +table1.tableNum - +table2.tableNum;
      });
      fulltablesCopy2.splice(formNum, fulltablesCopy2.length);

      setUsedFullTables(fulltablesCopy2);
    });
    onblur();
  }, [navigation]);

  useEffect(() => {
    //this useeffect sets data for server
    //sendToServer will hold all redone objects of usedFUllTables
    //when i send forms, i need to send each object seperatly
    let clover = [];
    let diamond = [];
    let heart = [];
    let leaf = [];

    //leaf = spade , clover = clubs

    // setsendToServer({
    //   ...sendToServer,
    //   x,
    // });

    // "marks": {
    //   "cards": {
    //     "clover": [
    //       "9"
    //     ],
    //     "diamond": [
    //       "A"
    //     ],
    //     "heart": [

    //     ],
    //     "leaf": [
    //       "10"
    //     ]
    //   },
    //   "form_type": 3,
    //   "multi_lottery": 4,
    //   "participant_amount": 50
    // },

    //////////////////////////////////

    // {
    //   tableNum: 6,
    //   choosenCards: [
    //     { type: "spade", cards: [] },
    //     { type: "heart", cards: [] },
    //     { type: "diamond", cards: [] },
    //     { type: "clubs", cards: [] },
    //   ],
    // },

    console.log(" usedFullTables : ", usedFullTables);
    let mappedUsedTables = usedFullTables.map((table) => {
      let clover = [];
      let diamond = [];
      let heart = [];
      let leaf = [];

      clover = table.choosenCards.find((x) => x.type === "clubs").cards;
      diamond = table.choosenCards.find((x) => x.type === "diamond").cards;
      heart = table.choosenCards.find((x) => x.type === "heart").cards;
      leaf = table.choosenCards.find((x) => x.type === "spade").cards;

      return {
        cards: {
          clover: clover,
          diamomd: diamond,
          heart: heart,
          leaf: leaf,
        },
        form_type: tableNum,
        multi_lottery: hagralot,
        participant_amount: investNum,
      };
    });

    console.log("@ : ", usedFullTables[0]);
    console.log("mappedUsedTables : ", mappedUsedTables);
    setmappedUsedTables([...mappedUsedTables]);
    getPrice(
      "http://52.90.122.190:5000/games/chance/type/regular/calculate_price",
      mappedUsedTables[0]
    );
  }, [fullTables, hagralot, investNum, navigation]);

  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} screenName={screenName} />
        <BlankSquare gameName="הגרלת צ'אנס" color='#009943' />
        <ChooseForm setdouble={setdouble} double={double} />
        <View style={{ margin: 15 }}>
          <View
            style={{
              backgroundColor: "#009943",
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
                <Text
                  style={{
                    fontSize: 20,
                    color: "#FF0000",
                    fontFamily: "fb-Spacer",
                  }}
                >
                  2
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 27,
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
                  fontFamily: "fb-Spacer",
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
                  סה"כ {tableNum}טבלאות סה"כ
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
                    fontFamily: "fb-Spacer",

                    color: "yellow",
                  }}
                >
                  {" "}
                  הגרלות : {hagralot === -1 ? 1 : hagralot}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: EStyleSheet.value("$rem") * 22,
                  color: "yellow",
                  fontFamily: "fb-Spacer",
                  marginLeft: 15,
                  marginVertical: 10,
                }}
              >
                {formNum}טפסים סה"כ
              </Text>

              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  color='white'
                  style={{
                    fontSize: EStyleSheet.value("$rem") * 22,
                    fontFamily: "fb-Spacer",
                    color: "white",
                    marginLeft: 15,
                  }}
                >
                  לתשלום: {price * HagralotMultiplicaton * formNum}
                </Text>
                <View style={{ height: 10 }}>
                  <FontAwesomeIcon
                    size={10}
                    style={{ marginVertical: 7, marginLeft: 4 }}
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
                  console.log("sendToServer : ", sendToServer);
                  mappedUsedTables.forEach(async (table) => {
                    await axios
                      .post(url, table, {
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
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default SumPageChance;
