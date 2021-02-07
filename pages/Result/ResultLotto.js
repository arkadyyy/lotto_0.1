import React from "react";
import { useState,useEffect } from "react";
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
  faCaretCircleLeft,faCaretLeft
} from "@fortawesome/free-solid-svg-icons";
//////////////////////////////////////////////////////////////



const ResultLotto = (props) => {
  const { navigation } = props;
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setendDate] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowStart(Platform.OS === "ios");
    let x = currentDate.toISOString().split("T")[0].split("-");
  
    console.log("dateStartstartstart",currentDate.toISOString().split("T")[0].split("-"));
  
    let y = [];
  
    y.push(x[2], ".", x[1], ".", x[0]);
  
    setDate(y.join(""));
    // console.log("date:///////////////////////////",date);
  };
  const onChangeEnd = (event, selectedDateEnd) => {
    const currentDateEnd = selectedDateEnd || date;
    setShowEnd(Platform.OS === "ios");
    let x = currentDateEnd.toISOString().split("T")[0].split("-");
  
    console.log("dateEnd",currentDateEnd.toISOString().split("T")[0].split("-"));
  
    let y = [];
  
    y.push(x[2], ".", x[1], ".", x[0]);
  
    setDateEnd(y.join(""));
    // console.log("date:///////////////////////////",date);
  };
  const [date, setDate] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  useEffect(() => {
    let accessToken;
    let jwt;
    Auth.currentSession().then((res) => {
      accessToken = res.getAccessToken();
      jwt = accessToken.getJwtToken();
    });
    setTimeout(() => {
      axios
        .get(`http://52.90.122.190:5000/results/lotto`, {
          headers: {
            Authorization: jwt,
          },
        })
        .then((res) => setData(res.data.data.rows))

        .catch((err) => console.log(err));
    }, 5000);
  }, [date]);

  useEffect(() => {
    const sortedData=data.sort((a, b) => parseFloat(a["מספר הגרלה"]) - parseFloat(b["מספר הגרלה"]));
setSortedData(sortedData)
}, [data])

  return (
    <>
      <NavBar navigation={navigation}  />

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
                paddingRight: EStyleSheet.value("$rem") * 20
              }}
            >
              תוצאות הגרלת לוטו
          </Text>            
            
              <View
              style={{
                  alignSelf:"center",
                  backgroundColor: "#00AEEF",
                width: "90%",
                flexDirection: "column",
            
                  height: EStyleSheet.value("$rem") * 320,
                }}
              >
              <View style={{
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
                        setShowStart(true);
                      }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: EStyleSheet.value("$rem") * 20,
                      fontFamily: "fb-Spacer-bold",

                  }}
                  >מתאריך</Text>
  
                  {showStart && (
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
                        setShowEnd(true);
                      }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: EStyleSheet.value("$rem") * 20,
                      fontFamily: "fb-Spacer-bold",

                  }}
                  >עד תאריך</Text>
  
                  {showEnd && (
                      <DateTimePicker
                        testID='dateTimePicker'
                        value={new Date()}
                        mode='date'
                        is24Hour={false}
                        display='spinner'
                        onChange={onChangeEnd}
                      />
                    )}
                </TouchableOpacity>

              </View>
              
              <ScrollView>

              <List
            style={{
              marginRight: 20,
              width: "90%",
              marginTop: 10,
            }}
                  >
                   
                   {/* {sortedData */}

                  
            {sortedData.map((hagrala, index) => (
              <ListItem key={index} style={{flexDirection:"column"}}>
                
                <View style={{
                  // alignSelf:"center",
                  flexDirection: "row",
                  left:EStyleSheet.value("$rem") * 14,
                  backgroundColor: "white",
                  borderRadius: 13,
                  height: EStyleSheet.value("$rem") * 44,
                  width: EStyleSheet.value("$rem") * 310,
                  justifyContent:"center"
                }}>

                  <View
                    style={{ alignSelf:"center" }}
                  >
                    <Text style={{
                      fontSize:EStyleSheet.value("$rem") * 25,
                      color: "#263742",
                      fontFamily: "fb-Spacer-bold",
                      // textAlignVertical: "center",
                      // textAlign:"center"
                    }}>
                    {"  מספר הגרלה "} 
                              {hagrala[Object.keys(hagrala)[0]]} 
                  </Text>
                </View>
                  <View
                  style={{ alignSelf:"center",flexDirection:"row" }}
                  >

                    <Text style={{
                      fontSize: EStyleSheet.value("$rem") * 25,  
                      fontFamily: "fb-Spacer-bold",

                      color: "#263742"
                    }}>
                    {" מתאריך "} 
                    {hagrala[Object.keys(hagrala)[1]]}
                    </Text>
                    
                   
                </View>
                 
                <View style={{
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
                </View>
                </View>

               
                <View
                  style={{ flexDirection: "column", alignItems: "flex-end" }}
                >
                  <View style={{ flexDirection: "row" }}>
                    {hagrala[Object.keys(hagrala)[2]].numbers.map((num) => (
                      <Text
                        style={{
                          borderWidth: 2,
                          width: EStyleSheet.value("$rem") * 35,
                          height: EStyleSheet.value("$rem") * 35,
                          borderColor: "white",
                          borderRadius: 18,
                          textAlign: "center",
                          textAlignVertical: "center",
                          color: "white",
                          fontSize: EStyleSheet.value("$rem") * 33,
                          fontFamily: "fb-Spacer-bold",
                          marginLeft: EStyleSheet.value("$rem") * 5,
                          marginTop:EStyleSheet.value("$rem") * 10

                        }}
                      >
                        {num}
                      </Text>
                    ))}

{hagrala[Object.keys(hagrala)[2]].strong_number && (
                    <Text
                        style={{
                        marginLeft:EStyleSheet.value("$rem") * 14,
                        borderWidth: 2,
                        width: EStyleSheet.value("$rem") *35 ,
                        height: EStyleSheet.value("$rem") * 35,
                        borderColor: "black",
                        borderRadius: 18,
                        textAlign: "center",
                        textAlignVertical: "center",
                        color: "black",
                          fontSize: EStyleSheet.value("$rem") * 33,
                          fontFamily: "fb-Spacer-bold",
                          marginTop:EStyleSheet.value("$rem") * 10


                        
                      }}
                    >
                      {hagrala[Object.keys(hagrala)[2]].strong_number}
                    </Text>
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

export default ResultLotto;
