import React from "react";
import { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Auth } from "aws-amplify";
import axios from "axios";

import homestyles from "../Home/HomeStyles";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Card,
  CardItem,
  List,
  ListItem,
  Spinner,
} from "native-base";
import Hr from "react-native-hr-component";
import NavBar from "../../components/NavBar";
import styles from "../../styles";
import ColorLine from "../../components/ColorLine";
import BlankSquare from "../../components/BlankSquare.js";
import EStyleSheet from "react-native-extended-stylesheet";

import LottoListstyles from "../Lotto/LottoListStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCaretCircleLeft,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
//////////////////////////////////////////////////////////////

const ResultChance = (props) => {
  const { navigation } = props;
  const [data, setData] = useState([]);
  // const [sortedData, setSortedData] = useState([]);

  // const [show, setShow] = useState(false);
  // const [date, setDate] = useState("");
  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === "ios");
  //   let x = currentDate.toISOString().split("T")[0].split("-");

  //   console.log("date1/////////",currentDate.toISOString().split("T")[0].split("-"));

  //   let y = [];

  //   y.push(x[2], ".", x[1], ".", x[0]);

  //   setDate(y.join(""));
  //   console.log("date:///////////////////////////",date);
  // };

  useEffect(() => {
    let accessToken;
    let jwt;
    Auth.currentSession().then((res) => {
      accessToken = res.getAccessToken();
      jwt = accessToken.getJwtToken();
    });
    setTimeout(() => {
      axios
        .get(`http://52.90.122.190:5000/results/chance`, {
          headers: {
            Authorization: jwt,
          },
        })
        .then((res) => setData(res.data.data.rows.slice(0, 99)))
        .catch((err) => console.log(err));
    }, 5000);
  }, []);

  //     useEffect(() => {
  //         const sortedData=data.sort((a, b) => parseFloat(a["מספר הגרלה"]) - parseFloat(b["מספר הגרלה"]));
  // setSortedData(sortedData)
  //     }, [data])

  return (
    <>
      <NavBar navigation={navigation} />

      <Container>
        <ScrollView>
          <View>
            <View>
              <BlankSquare color={"#00AEEF"} />
            </View>

            <Text
              style={{
                fontFamily: "fb-Spacer-bold",
                fontSize: EStyleSheet.value("$rem") * 38,
                paddingVertical: EStyleSheet.value("$rem") * 19,
                paddingRight: EStyleSheet.value("$rem") * 20,
              }}
            >
              תוצאות הגרלת צ'אנס
            </Text>

            <View
              style={{
                alignSelf: "center",
                backgroundColor: "#00AEEF",
                width: "90%",
                flexDirection: "column",

                height: EStyleSheet.value("$rem") * 320,
              }}
            >
              {/* <View style={{
                marginTop: EStyleSheet.value("$rem") * 15,
                marginBottom: EStyleSheet.value("$rem") * 25,
              flexDirection:"row"
            }}><Text
            style={{
              fontFamily: "fb-Spacer-bold",
              flex: 1.5,
              color: "white",
              fontSize: EStyleSheet.value("$rem") * 20,
              marginTop: EStyleSheet.value("$rem") * 10,
              marginLeft: EStyleSheet.value("$rem") * 15,
              textDecorationLine: 'underline',

            }}
                >בחר לפי תאריכים</Text>
  <TouchableOpacity
                      style={{
                        borderColor: "white",
                        borderWidth: 1,
                        borderRadius: 20,
                        padding:  EStyleSheet.value("$rem") * 7,
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                        right: EStyleSheet.value("$rem") * 15
                      }}
                      onPress={() => {
                        setShow(true);
                      }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: EStyleSheet.value("$rem") * 20,
                      fontFamily: "fb-Spacer-bold",

                  }}
                  >מתאריך</Text>
  
                  {show && (
                      <DateTimePicker
                        testID='dateTimePicker'
                        value={new Date()}
                        mode='date'
                        is24Hour={false}
                        display='spinner'
                        onChange={onChange}
                      />
                    )}
                </TouchableOpacity>
                
                <TouchableOpacity
                      style={{
                        borderColor: "white",
                        borderWidth: 1,
                        borderRadius: 20,
                        padding:  EStyleSheet.value("$rem") * 7,
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                        right: EStyleSheet.value("$rem") * 10
                      }}
                      onPress={() => {
                        setShow(true);
                      }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: EStyleSheet.value("$rem") * 20,
                      fontFamily: "fb-Spacer-bold",

                  }}
                  >עד תאריך</Text>
  
                  {show && (
                      <DateTimePicker
                        testID='dateTimePicker'
                        value={new Date()}
                        mode='date'
                        is24Hour={false}
                        display='spinner'
                        onChange={onChange}
                      />
                    )}
                </TouchableOpacity>

              </View> */}

              <ScrollView>
                <List
                  style={{
                    marginRight: 20,
                    width: "90%",
                    // marginTop: 10,
                  }}
                >
                  {data.length < 99 ? <Spinner color={"white"} /> : null}
                  {/* {sortedData.map((hagrala, index) => ( */}
                  {data.map((hagrala, index) => (
                    <ListItem key={index} style={{ flexDirection: "column" }}>
                      {/* {console.log("hagralaChans:",hagrala[Object.keys(hagrala)[2]].numbers)} */}

                      <View
                        style={{
                          // alignSelf:"center",
                          flexDirection: "row",
                          left: EStyleSheet.value("$rem") * 14,
                          backgroundColor: "white",
                          borderRadius: 13,
                          height: EStyleSheet.value("$rem") * 44,
                          width: EStyleSheet.value("$rem") * 310,
                          justifyContent: "center",
                        }}
                      >
                        <View style={{ alignSelf: "center" }}>
                          <Text
                            style={{
                              fontSize: EStyleSheet.value("$rem") * 20,
                              color: "#263742",
                              fontFamily: "fb-Spacer-bold",
                              // textAlignVertical: "center",
                              // textAlign:"center"
                            }}
                          >
                            {" מספר הגרלה"}
                            {hagrala[Object.keys(hagrala)[0]]}
                          </Text>
                        </View>

                        <View
                          style={{ alignSelf: "center", flexDirection: "row" }}
                        >
                          <Text
                            style={{
                              fontSize: EStyleSheet.value("$rem") * 20,
                              fontFamily: "fb-Spacer-bold",

                              color: "#263742",
                            }}
                          >
                            {" מתאריך "}
                            {hagrala[Object.keys(hagrala)[1]]}
                          </Text>
                        </View>

                        {/* <View style={{
                    alignSelf: "center",
                    // left: EStyleSheet.value("$rem") * 1,
                      width: EStyleSheet.value("$rem") * 28,
                      height: EStyleSheet.value("$rem") * 28,
                      borderColor: "white",
                      borderRadius: 20,
                    flexDirection: "row",
                      justifyContent:"center",
                      color: "white",
                      fontSize: EStyleSheet.value("$rem") * 25,
                    fontFamily: "fb-Spacer-bold",
                      
                      // marginLeft: EStyleSheet.value("$rem") * 5,
                      // marginTop:EStyleSheet.value("$rem") * 10,
                    backgroundColor: "#263742"
                  }}>
                                                  
                <FontAwesomeIcon size={EStyleSheet.value("$rem") * 30} icon={faCaretLeft} color={"white"} style={{left:EStyleSheet.value("$rem") * 2}} />
                </View> */}
                      </View>
                      <View
                        style={{
                          flexDirection: "column",
                          alignItems: "flex-end",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            height: 100,
                            marginTop: 10,
                          }}
                        >
                          {hagrala[Object.keys(hagrala)[2]].numbers.map(
                            (nums, index) =>
                              Object.keys(nums)
                              .map((num, index) => (
                                <View key={index}>
                                  {/* {console.log("??????", nums[num])} */}
                                  {/* {console.log("??????", num[key])} */}

                                  {index === 0 && (
                                    <Image
                                      style={{
                                        width: 60,
                                        height: 80,
                                        borderRadius: 7,
                                      }}
                                      source={require("C:/fullstack/lottoMatic/assets/chance/choosenSpade.png")}
                                    />
                                  )}
                                  {index === 1 && (
                                    // "יהלום"
                                    <Image
                                      style={{
                                        width: 60,
                                        height: 80,
                                        borderRadius: 7,
                                      }}
                                      source={require("C:/fullstack/lottoMatic/assets/chance/choosenDiamond.png")}
                                    />
                                  )}
                                  {index === 2 && (
                                    // "עלה"
                                    <Image
                                      style={{
                                        width: 60,
                                        height: 80,
                                        borderRadius: 7,
                                      }}
                                      source={require("C:/fullstack/lottoMatic/assets/chance/choosenClubs.png")}
                                    />
                                  )}
                                  {index === 3 && (
                                    // "לב"
                                    <Image
                                      style={{
                                        width: 60,
                                        height: 80,
                                        borderRadius: 7,
                                      }}
                                      source={require("C:/fullstack/lottoMatic/assets/chance/choosenHeart.png")}
                                    />
                                  )}
                                  <Text
                                    style={{
                                      includeFontPadding: false,
                                      position: "absolute",
                                      // left: "37%",
                                      alignSelf: "center",
                                      top: "50%",
                                      fontSize: 25,
                                      color: "black",
                                    }}
                                  >
                                    {nums[num]}
                                  </Text>
                                </View>

                                // ))
                              ))
                          )}
                        </View>
                      </View>
                    </ListItem>
                  ))}
                </List>
              </ScrollView>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                paddingTop: 30,
              }}
            >
              <View
                style={{ width: "25%", height: 1, backgroundColor: "#EB2874" }}
              ></View>
              <View
                style={{ width: "25%", height: 1, backgroundColor: "#009943" }}
              ></View>
              <View
                style={{ width: "25%", height: 1, backgroundColor: "#E62321" }}
              ></View>
              <View
                style={{ width: "25%", height: 1, backgroundColor: "#FF6B00" }}
              ></View>
            </View>
          </View>
        </ScrollView>
      </Container>
    </>
  );
};

export default ResultChance;
