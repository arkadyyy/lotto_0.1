import React from "react";
import { useState, useEffect } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  View,
  Image,
} from "react-native";
import homestyles from "../pages/Home/HomeStyles";
import { List, ListItem, Button } from "native-base";
import { Auth } from "aws-amplify";
import axios from "axios";

import Hr from "react-native-hr-component";
import NavBar from "../components/NavBar";
import styles from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCircle,
  faCoffee,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

//////////////////////////////////////////////////////////////

export default function Result({ navigation }) {
  const [game, setGame] = useState("lotto");
  const [data, setData] = useState([]);

  useEffect(() => {
    let accessToken;
    let jwt;
    Auth.currentSession().then((res) => {
      accessToken = res.getAccessToken();
      jwt = accessToken.getJwtToken();
    });
    setTimeout(() => {
      axios
        .get(`http://52.90.122.190:5000/results/${game}`, {
          headers: {
            Authorization: jwt,
          },
        })
        .then((res) => setData(res.data.data.rows))

        .catch((err) => console.log(err));
    }, 5000);
  }, [game]);

  return (
    <>
      <NavBar navigation={navigation} screenName={"aboutUs"} />
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            onPress={() => {
              setGame("lotto");
            }}
          >
            <Text
              style={
                game === "lotto"
                  ? {
                      fontSize: EStyleSheet.value("$rem") * 25,
                      borderBottomColor: "blue",
                      borderBottomWidth: 1,
                    }
                  : { fontSize: EStyleSheet.value("$rem") * 25 }
              }
            >
              לוטו
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setGame("chance");
            }}
          >
            <Text
              style={
                game === "chance"
                  ? {
                      fontSize: EStyleSheet.value("$rem") * 25,
                      borderBottomColor: "blue",
                      borderBottomWidth: 1,
                    }
                  : { fontSize: EStyleSheet.value("$rem") * 25 }
              }
            >
              צ'אנס
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setGame("777");
            }}
          >
            <Text
              style={
                game === "777"
                  ? {
                      fontSize: EStyleSheet.value("$rem") * 25,
                      borderBottomColor: "blue",
                      borderBottomWidth: 1,
                    }
                  : { fontSize: EStyleSheet.value("$rem") * 25 }
              }
            >
              777
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setGame("123");
            }}
          >
            <Text
              style={
                game === "123"
                  ? {
                      fontSize: EStyleSheet.value("$rem") * 25,
                      borderBottomColor: "blue",
                      borderBottomWidth: 1,
                    }
                  : { fontSize: EStyleSheet.value("$rem") * 25 }
              }
            >
              123
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <View
            style={{ width: "80%", backgroundColor: "gray", height: 1 }}
          ></View>
          <View
            style={{
              width: "80%",
              backgroundColor: "#263742",
              height: EStyleSheet.value("$rem") * 25,
              marginTop: EStyleSheet.value("$rem") * 25,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Text style={{ color: "white" }}>מספר הגרלה</Text>
            <Text style={{ color: "white" }}>תאריך</Text>
            <Text style={{ color: "white" }}>תוצאות</Text>
          </View>

          <List
            style={{
              marginRight: 20,
              width: "90%",
              marginTop: 10,
            }}
                  >
                      {game !== "chance"
                          && (
                          <>
                                 {/* {data.map(hagrala => console.log("@@@@@@@@@@@@@@@@@@@@@@@@", hagrala[Object.keys(hagrala)[0]]))}    */}
            {data.map((hagrala, index) => (
              <ListItem key={index}>
                {/* {console.log("",data)} */}
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
                  style={{ flexDirection: "column", alignItems: "flex-end" }}
                >
                  <View style={{ flexDirection: "row" }}>
                    {hagrala[Object.keys(hagrala)[2]].numbers.map((num) => (
                      <Text
                        style={{
                          borderWidth: 2,
                          width: 20,
                          height: 20,
                          backgroundColor: "white",
                          borderColor: "red",
                          borderRadius: 18,
                          textAlign: "center",
                          textAlignVertical: "center",
                          color: "red",
                          fontSize: EStyleSheet.value("$rem") * 14,
                        }}
                      >
                        {num}
                      </Text>
                    ))}
                  </View>
                  {hagrala[Object.keys(hagrala)[2]].strong_number && (
                    <Text
                      style={{
                        borderWidth: 2,
                        width: 20,
                        height: 20,
                        backgroundColor: "white",
                        borderColor: "orange",
                        borderRadius: 18,
                        textAlign: "center",
                        textAlignVertical: "center",
                        color: "orange",
                        fontSize: EStyleSheet.value("$rem") * 14,
                      }}
                    >
                      {hagrala[Object.keys(hagrala)[2]].strong_number}
                    </Text>
                  )}
                </View>

              
              </ListItem>
            ))}
                        </>
                      )
                      }
                      {game === "chance" &&
                          (<>
                          {data.map((hagrala, index) => (
                         
                              
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
                  style={{ flexDirection: "column", alignItems: "flex-end" }}
                                  >
                                      
                                      
                  <View style={{ flexDirection: "row" }}>
                                          {
               hagrala[Object.keys(hagrala)[2]].numbers
                                              
                    .map((num) => (
                        
                        Object.keys(num)
                            .map((key, index) => (
                        //    console.log("??????",num[key])
                        <View>
                        
                        <Text>
                        {index===0 && "תלתן"}    
                        {index===1 && "יהלום"}    
                        {index===2 && "לב"}    
                        {index===3 && "עלה"}    
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
                                    {num[key]}
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
                      </>)}
         
          </List>
        </View>
        <Hr text={undefined} lineColor='#eee' width={1} />
        <View style={homestyles.footerMsg}>
          <Text style={homestyles.footerText}>
            אתר זה מעניק שירות של משלוח טפסי הגרלה של מפעל הפיס כגוף עצמאי.
          </Text>
          <Text style={homestyles.footerText}>
            אסורה מכירה למי שטרם מלאו לו 18.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}