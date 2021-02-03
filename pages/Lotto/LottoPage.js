import React, { useState } from "react";
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
    setTimeout(() => {
      axios
        .get(
          "http://52.90.122.190:5000/games/lotto/type/regular/0",
          // {
          //   extra: false,
          //   multi_lottery: -1,
          //   tables: [
          //     {
          //       numbers: [15, 18, 24, 28, 30, 32],
          //       strong_number: [6],
          //       table_number: 1,
          //     },
          //     {
          //       numbers: [5, 8, 12, 16, 18, 34],
          //       strong_number: [6],
          //       table_number: 2,
          //     },
          //     {
          //       numbers: [1, 17, 18, 34, 35, 36],
          //       strong_number: [6],
          //       table_number: 3,
          //     },
          //     {
          //       numbers: [12, 16, 17, 30, 31, 37],
          //       strong_number: [6],
          //       table_number: 4,
          //     },
          //     {
          //       numbers: [11, 16, 20, 23, 29, 32],
          //       strong_number: [5],
          //       table_number: 5,
          //     },
          //     {
          //       numbers: [8, 10, 12, 16, 31, 36],
          //       strong_number: [5],
          //       table_number: 6,
          //     },
          //     {
          //       numbers: [4, 13, 18, 27, 36, 37],
          //       strong_number: [2],
          //       table_number: 7,
          //     },
          //     {
          //       numbers: [1, 3, 4, 33, 36, 37],
          //       strong_number: [5],
          //       table_number: 8,
          //     },
          //     {
          //       numbers: [],
          //       strong_number: [],
          //       table_number: 9,
          //     },
          //     {
          //       numbers: [],
          //       strong_number: [],
          //       table_number: 10,
          //     },
          //     {
          //       numbers: [],
          //       strong_number: [],
          //       table_number: 11,
          //     },
          //     {
          //       numbers: [],
          //       strong_number: [],
          //       table_number: 12,
          //     },
          //     {
          //       numbers: [],
          //       strong_number: [],
          //       table_number: 13,
          //     },
          //     {
          //       numbers: [],
          //       strong_number: [],
          //       table_number: 14,
          //     },
          //   ],
          // }
          // ,
          {
            headers: {
              authorization: jwt,
            },
          }
        )
        .then((res) => {
          console.log("this is res from server request !@!@ : ", res);
          /////////
          axios.post(
            "http://52.90.122.190:5000/games/lotto/type/regular/0",
            {
              extra: false,
              multi_lottery: -1,
              tables: [
                {
                  numbers: [15, 18, 24, 28, 30, 32],
                  strong_number: [6],
                  table_number: 1,
                },
                {
                  numbers: [5, 8, 12, 16, 18, 34],
                  strong_number: [6],
                  table_number: 2,
                },
                {
                  numbers: [1, 17, 18, 34, 35, 36],
                  strong_number: [6],
                  table_number: 3,
                },
                {
                  numbers: [12, 16, 17, 30, 31, 37],
                  strong_number: [6],
                  table_number: 4,
                },
                {
                  numbers: [11, 16, 20, 23, 29, 32],
                  strong_number: [5],
                  table_number: 5,
                },
                {
                  numbers: [8, 10, 12, 16, 31, 36],
                  strong_number: [5],
                  table_number: 6,
                },
                {
                  numbers: [4, 13, 18, 27, 36, 37],
                  strong_number: [2],
                  table_number: 7,
                },
                {
                  numbers: [1, 3, 4, 33, 36, 37],
                  strong_number: [5],
                  table_number: 8,
                },
                {
                  numbers: [],
                  strong_number: [],
                  table_number: 9,
                },
                {
                  numbers: [],
                  strong_number: [],
                  table_number: 10,
                },
                {
                  numbers: [],
                  strong_number: [],
                  table_number: 11,
                },
                {
                  numbers: [],
                  strong_number: [],
                  table_number: 12,
                },
                {
                  numbers: [],
                  strong_number: [],
                  table_number: 13,
                },
                {
                  numbers: [],
                  strong_number: [],
                  table_number: 14,
                },
              ],
            },
            {
              headers: {
                authorization:
                  "eyJraWQiOiI3OTNMc2t1K3lDQ3FtTWlGc3UyWFE2R0dOREFxbDJWaDJDT0JJaWNVS1BrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkMDBlNjUzMC1kN2VhLTQzM2EtYTE2OS01OWU3MjM2MmE5NmEiLCJjb2duaXRvOmdyb3VwcyI6WyJjbGllbnRzIiwiYWRtaW5zIl0sImV2ZW50X2lkIjoiOWYwOWFkODctOTc5ZC00YjliLTg5MzItZTk1MDFmZDZmZGVmIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTYxMjMwNDg2NywiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfODNkUk5tdk5QIiwiZXhwIjoxNjEyMzA4NDY3LCJpYXQiOjE2MTIzMDQ4NjcsImp0aSI6IjBkNzllMjQ3LTJjZDktNDc2Zi1iMmIwLTVkMzkwZWM3MWZiNSIsImNsaWVudF9pZCI6IjFqcGM2NDY2MjZscHVjOWExOG1wamdycDVqIiwidXNlcm5hbWUiOiJkMDBlNjUzMC1kN2VhLTQzM2EtYTE2OS01OWU3MjM2MmE5NmEifQ.eJgEPN5F3feg7UQK1okF_DG73L7QhLlr7HXBML_N1y1-qs41zx4XPrPUCExSbtPl_NQ0GqLONSXXU13K0GcUp6spa7KlBBVXFz33JA3rxWyoKfJ3wzWG_GXXrK_kB3G7V8P3AeuDPqrcxx_MhTrVsp5V-oj-O5OqXQ-tf6WfCTnXgiPp0MlDSjJnQlf_rQU2xgQTcfIqGVkeEZJ6Uq3bt_BWLleiIzQ9KNyXs603f1_d1j4SZihor9fX9rdHUOBp3M-3qc-iyCQZaQIcixNStNgI-vMNEEysOeOwvicFl889NRP7vipqF5ZPlu0NlVP6SqDN3PKw0HTFGQhks0RzSw",
              },
            }
          );
        })
        .catch((err) => console.log(err));
      console.log("jwt i got in lottopage ~~~~~~~~~~~~ : ", jwt);
    }, 5000);
  }, []);

  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} />
        <BlankSquare gameName='הגרלת לוטו' color='#E62321' />
        <ChooseForm setdouble={setdouble} double={double} />
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
                padding: 30,
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
                  marginRight: 20,
                }}
              >
                <Text style={{ fontSize: 20, color: "#FF0000" }}>1</Text>
              </View>
              <Text style={{ fontSize: 17, color: "white" }}>מלא את הטופס</Text>
            </View>

            <ChooseNumOfTables settableNum={settableNum} tableNum={tableNum} />

            <Text
              style={{
                color: "white",
                fontSize: 15,
                marginLeft: 12,
                marginBottom: 10,
              }}
            >
              בחר 6 מספרים וחזק
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                marginLeft: 20,
              }}
            >
              <Button
                // onPress={() =>setFullTables([])}
                onPress={deletForm}
                style={{ borderColor: "white", margin: 5 }}
                small
                rounded
                bordered
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 10,
                    width: 70,
                    textAlign: "center",
                  }}
                >
                  מחק טופס אוטומטית
                </Text>
              </Button>

              <Button
                onPress={autoFillForm}
                style={{ borderColor: "white", margin: 5 }}
                small
                rounded
                bordered
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 10,
                    width: 70,
                    textAlign: "center",
                  }}
                >
                  מלא טופס אוטומטי
                </Text>
              </Button>
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
            <View
              style={{
                borderColor: "white",
                borderRadius: 7,
                borderWidth: 1,
                width: "83.7%",
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <List
                style={{
                  alignItems: "flex-start",
                  height: 250,
                  marginLeft: -17,
                  flexWrap: "wrap",
                }}
              >
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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 25,
                zIndex: 1,
              }}
            >
              <Button
                onPress={() => {
                  let summary = { regularLotto: fullTables };

                  navigation.navigate("ExtraFormPage", {
                    tableNum: tableNum,
                    screenName: "לוטו",
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
                  style={{ color: "white", fontSize: 28, textAlign: "center" }}
                >
                  המשך לשליחת טופס
                </Text>
              </Button>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              zIndex: -2,
            }}
          >
            <Text style={{ fontSize: 18 }}>הסבר על הגרלות לוטו</Text>
            <TouchableOpacity>
              <Text>עוד</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default LottoPage;
