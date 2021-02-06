import React, { useState } from "react";
import LottoListstyles from "./LottoListStyles";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import NavBar from "../../components/NavBar";
import BlankSquare from "../../components/BlankSquare";
import axios from "axios";
import { Button, List } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import ChooseNumOfTables from "./components/ChooseNumOfTables";
import ChooseForm from "./components/ChooseForm";
import FillForm from "./components/FillForm";
import Table from "./components/Table";
import { autoFill } from "./components/FillForm";
import { useEffect } from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { useSelector, useDispatch } from "react-redux";
import { LogIn } from "../../redux/actions/actions";
import { useRoute } from "@react-navigation/native";
import EStyleSheet from "react-native-extended-stylesheet";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

Amplify.configure(awsconfig);
const { width, height } = Dimensions.get("window");

const LottoPage = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(2);
  const [double, setdouble] = useState(false);
  const [fullTables, setFullTables] = useState([]);
  const [indexOfTable, setIndexOfTable] = useState("");
  const [opendTableNum, setopendTableNum] = useState(0);
  const [tableRowColor, setTableRowColor] = useState("D60617");
  const [jwtState, setjwtState] = useState({});

  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const route = useRoute();

  const autoFillForm = () => {
    let fullTabels1 = [];
    for (let i = 1; i < tableNum * 2 + 1; i++) {
      let numbers = autoFill(6);
      let table = {
        tableNum: i,
        choosenNums: numbers.randomNumbers,
        strongNum: numbers.strongNum,
      };
      fullTabels1 = [...fullTabels1, table];
    }
    setFullTables(fullTabels1);
    // setTableRowColor("#78C849");
  };

  const deletForm = () => {
    setFullTables([]);
    setTableRowColor("#D60617");
  };

  useEffect(() => {
    let accessToken;
    let jwt;
    Auth.currentSession().then((res) => {
      accessToken = res.getAccessToken();
      jwt = accessToken.getJwtToken();

      setjwtState(jwt);
    });

    // axios
    //   .post(
    //     "http://52.90.122.190:5000/games/lotto/type/regular/0",
    //     {
    //       extra: false,
    //       multi_lottery: -1,
    //       tables: [
    //         {
    //           numbers: [15, 18, 24, 28, 30, 32],
    //           strong_number: [6],
    //           table_number: 1,
    //         },
    //         {
    //           numbers: [5, 8, 12, 16, 18, 34],
    //           strong_number: [6],
    //           table_number: 2,
    //         },
    //         {
    //           numbers: [1, 17, 18, 34, 35, 36],
    //           strong_number: [6],
    //           table_number: 3,
    //         },
    //         {
    //           numbers: [12, 16, 17, 30, 31, 37],
    //           strong_number: [6],
    //           table_number: 4,
    //         },
    //         {
    //           numbers: [11, 16, 20, 23, 29, 32],
    //           strong_number: [5],
    //           table_number: 5,
    //         },
    //         {
    //           numbers: [8, 10, 12, 16, 31, 36],
    //           strong_number: [5],
    //           table_number: 6,
    //         },
    //         {
    //           numbers: [4, 13, 18, 27, 36, 37],
    //           strong_number: [2],
    //           table_number: 7,
    //         },
    //         {
    //           numbers: [1, 3, 4, 33, 36, 37],
    //           strong_number: [5],
    //           table_number: 8,
    //         },
    //       ],
    //     },
    //     {
    //       headers: {
    //         Authorization: store.jwt,
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log("this is res from server request !@!@ : ", res);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} />
        <BlankSquare gameName='הגרלת לוטו' color='#E62321' />
        <ChooseForm setdouble={setdouble} double={double} />
        <View style={{ margin: 15 }}>
          <View style={LottoListstyles.lottoPageContainer}>
            <View style={LottoListstyles.header}>
              <View style={LottoListstyles.topNumCircle}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#FF0000",
                    fontFamily: "fb-Spacer-bold",
                  }}
                >
                  1
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 17,
                  color: "white",
                  fontFamily: "fb-Spacer-bold",
                }}
              >
                מלא את הטופס
              </Text>
            </View>

            <ChooseNumOfTables settableNum={settableNum} tableNum={tableNum} />

            <Text style={LottoListstyles.subHeader}>בחר 6 מספרים וחזק</Text>
            <View style={LottoListstyles.autoBtnContainer}>
              <TouchableOpacity
                onPress={autoFillForm}
                style={LottoListstyles.autoBtn}
              >
                <Text style={LottoListstyles.autoBtnText}>
                  מלא טופס אוטומטי
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                // onPress={() =>setFullTables([])}
                onPress={deletForm}
                style={LottoListstyles.autoBtn}
              >
                <Text style={LottoListstyles.autoBtnText}>
                  מחק טופס אוטומטית
                </Text>
              </TouchableOpacity>
            </View>
            {showTable && (
              <FillForm
                opendTableNum={opendTableNum}
                setshowTable={setshowTable}
                fullTables={fullTables}
                setFullTables={setFullTables}
                autoFillForm={autoFillForm}
                tableRowColor={tableRowColor}
                // setTableRowColor={setTableRowColor}
              />
            )}
            <View style={LottoListstyles.listContainerBorder}>
              <List style={LottoListstyles.listContainer}>
                <ScrollView>
                  {Array.from(Array(tableNum)).map((x, index) => (
                    <Table
                      fullTables={fullTables}
                      double={double}
                      key={index}
                      index={index + 1}
                      setshowTable={setshowTable}
                      setIndexOfTable={setIndexOfTable}
                      setopendTableNum={setopendTableNum}
                      tableRowColor={tableRowColor}
                      // setTableRowColor={setTableRowColor}
                    />
                  ))}
                </ScrollView>
              </List>
            </View>
            <View style={LottoListstyles.sendFormBtnContainer}>
              <Button
                onPress={() => {
                  let summary = { regularLotto: fullTables };

                  navigation.navigate("ExtraFormPage", {
                    tableNum: tableNum,
                    screenName: "לוטו",
                  });
                }}
                style={LottoListstyles.sendFormBtn}
              >
                <Text style={LottoListstyles.sendFormBtnText}>
                  המשך לשליחת טופס
                </Text>
              </Button>
            </View>
          </View>

          <View style={LottoListstyles.lottoExplanationContainer}>
            <Text style={{ fontSize: EStyleSheet.value("$rem") * 20 }}>
              הסבר על הגרלות לוטו
            </Text>
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
              <FontAwesomeIcon
                color='#263742'
                border={true}
                inverse
                icon={faPlusCircle}
                onPress={() => {
                  navigation.navigate("HowItWorks");
                }}
              />
              <Text
                style={{
                  marginRight: 10,
                  paddingRight: 5,
                  paddingTop: 2,
                  fontSize: EStyleSheet.value("$rem") * 15,
                }}
              >
                עוד...
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default LottoPage;
