import React, { useState } from "react";
import { Text, View, TouchableOpacity,Dimensions } from "react-native";
import NavBar from "../../components/NavBar";
import BlankSquare from "../../components/BlankSquare";
import axios from "axios";
import { Button, List } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import ChooseNumOfTables from "./components/ChooseNumOfTables";
import ExtraAndOtomatChoose from "./components/ExtraAndOtomatChoose";
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

Amplify.configure(awsconfig);
const { width, height } = Dimensions.get("window");

const ExtraFormPage = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(1);
  const [double, setdouble] = useState(false);
  const [fullTables, setFullTables] = useState([]);
  const [indexOfTable, setIndexOfTable] = useState("");
  const [opendTableNum, setopendTableNum] = useState(0);
  const [tableRowColor, setTableRowColor] = useState("D60617");
  const [jwtState, setjwtState] = useState({});

  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  
  const [hagralot, setHagralot] = useState(1);
  const [price, setPrice] = useState(11);
  // const [tableNum, settableNum] = useState(1);

  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} />
        <BlankSquare gameName='הגרלת לוטו' color='#E62321' />
        <ChooseForm setdouble={setdouble} />
        <View style={{ margin: 15 }}>
          <View
            style={{
              backgroundColor: "#FF0000",
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
                <Text style={{ fontSize: 20, color: "#FF0000" }}>2</Text>
              </View>
              <Text style={{ fontSize: 27, color: "white" }}>שדרג את הטופס</Text>
            </View>

            <ChooseNumOfTables settableNum={settableNum} tableNum={tableNum }/>
<ExtraAndOtomatChoose/>
          
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
                <FontAwesomeIcon icon={faShekelSign} color="red"/ >
              </View>
              <Text style={{ fontSize: 27, color: "white" }}>סיכום ושליחת טופס</Text>
            </View>
           
            <View>
              <Text>סה"ב {tableNum}טבלאות</Text>
              <Text> {hagralot}הגרלות</Text>
              <View
              style={{
                flexDirection: "row",
                
                width: 50,
                height: 50,
                borderRadius: 33,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 20,
              }}
              >
              <Text color="white">{price}</Text>
              <FontAwesomeIcon icon={faShekelSign} color="white"/>
                </View>
            </View>
         
            <View
              style={{
                flexDirection: "column",
                // alignItems: "center",
                // justifyContent: "center",
                marginTop: height/25,
                zIndex: 1,
                marginHorizontal: width/5,
                width: width / 1.5,
                height: height / 10,   
              }}
            >
           
           <Button
                onPress={() => {
                  
                  let summary = { regularLotto: fullTables };
                  console.log(summary);
                  console.log("store.user : ", store.user.signInUserSession);
                  // console.log("jwtState : ", jwtState);

                  axios
                    .post(
                      "http://52.90.122.190:5000/games/lotto/type/regular/0",
                      {
                        tables: {
                          tables: [
                            {
                              table_number: 1,
                              numbers: [11, 12, 13, 14, 15, 16],
                              strong_number: 6,
                            },
                            {
                              table_number: 2,
                              numbers: [1, 2, 3, 4, 5, 6],
                              strong_number: 6,
                            },
                          ],

                          extra: false,
                          multi_lottery: 6,
                          lottomatic: 10,
                        },
                        type: "regular_lotto",
                        userName: "dlevkovich05@gmail.com",
                        timestamp: new Date(),
                        status: "completed",
                      },
                      {
                        headers: {
                          authorization: jwtState,
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
                }
              
                }
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
