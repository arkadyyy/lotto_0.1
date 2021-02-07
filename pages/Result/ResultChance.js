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



const ResultChance = (props) => {
  const { navigation } = props;
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  const [show, setShow] = useState(false);
  const [date, setDate] = useState("");
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    let x = currentDate.toISOString().split("T")[0].split("-");
  
    console.log("date1/////////",currentDate.toISOString().split("T")[0].split("-"));
  
    let y = [];
  
    y.push(x[2], ".", x[1], ".", x[0]);
  
    setDate(y.join(""));
    console.log("date:///////////////////////////",date);
  };

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
              תוצאות הגרלת צ'אנס
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

              </View>
              
              <ScrollView>

              <List
            style={{
              marginRight: 20,
              width: "90%",
              marginTop: 10,
            }}
                  >

                                  {sortedData.map((hagrala, index) => (
                         
                         <ListItem key={index}>
                                              {/* {console.log("hagralaChans:",hagrala[Object.keys(hagrala)[2]].numbers)} */}
                                              
                             <View style={{ marginRight: 15 }}>
                               <Text style={{ fontSize: 12, color: "black" }}>
                                 {" "}
                                 {hagrala[Object.keys(hagrala)[0]]}
                               </Text>
                             </View>
                             <View style={{ marginRight: 40 }}>
                               <Text style={{ fontSize: 12, color: "black" }}>
                                 {" "}
                                 {hagrala[Object.keys(hagrala)[1]]}
                               </Text>
                                               </View>
                                              
                            <View
                               style={{ flexDirection: "column", alignItems: "flex-end" }}>
                            {/* {console.log("???????????numbers??????????????",hagrala[Object.keys(hagrala)[2]])} */}

                                                  
                                                  
                              <View style={{ flexDirection: "row" }}>
                                                      {
                           hagrala[Object.keys(hagrala)[2]].numbers
                                                          
                                .map((nums,key) => (

                                    Object.keys(nums)

                                        .map((num, index) => (
                                    <View>
                                    {/* {console.log("??????", nums[num])} */}
                                                {/* {console.log("??????", num[key])} */}
                                    
                                    <Text>
                                    {index===0 && "תלתן"}    
                                    {index===1 && "יהלום"}    
                                    {index===2 && "עלה"}    
                                    {index===3 && "לב"}    
                                    </Text>
                                    <Text
                                    style={{
                                      width: 20,
                                                    height: 20,
                                                    borderRadius: 18,
                                                    borderColor: "green",
                                      borderWidth:2,
                                      backgroundColor: "white",
                                      textAlign: "center",
                                      textAlignVertical: "center",
                                      color: "green",
                                      fontSize: EStyleSheet.value("$rem") * 14,
                                    }}
                                  >
                                                {nums[num]}
                                   </Text>
                                                
                                    </View>
                                           
                                // ))
                                    )
                                      )
                                ))
                                      
                               
                                }
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
