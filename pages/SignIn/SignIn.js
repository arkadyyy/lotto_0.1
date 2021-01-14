import React from "react";
import { useState } from "react";

import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
import signInstyles from "../SignIn/SignInStyles";
import {
  Container,
  Item,
  Content,
  Header,
  Input,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Card,
  CardItem,
  Radio,
  ListItem,
  CheckBox,
} from "native-base";

import NavBar from "../../components/NavBar";
import { color } from "react-native-reanimated";

const SignIn = ({ navigation }) => {
  const [gender, setGender]=useState("");
  const [firstName, setFirstName]=useState("");
  const [lastName, setLastName]=useState("");
  const [ID, setID]=useState("");
  const [phoneNum, setPhoneNum]=useState("");
  const [Email, setEmail]=useState("");
  const [age, setAge]=useState(false);
  const [agreement,setAgreement]=useState(false);

  return (
    <>
      <NavBar navigation={navigation} screenName={'signIn'}/>

      <View
        style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
      ></View>
      <ScrollView>
        <View style={signInstyles.container}>
          <View style={signInstyles.blanksquare}></View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
            ></View>
            {/* 00ADEF Deep Sky Blue*/}

            <View style={signInstyles.whiteSquare}>
              <Text
                style={{
                  flex: 1,
                  flexDirection: "row",
                  fontSize: 25,
                  marginStart:10
                }}
              >
                לקוח חדש
              </Text>

              <Button
                style={{
                  flex:0.5,
                  alignItems: "center",
                  justifyContent: "center",
                  height: 20,
                  marginRight: 25,
                  marginTop:13,
                
                  borderRadius: 13,
                  backgroundColor: "#000000",
                }}
                onPress={()=>navigation.navigate("Home")}
              >
                <Text  style={{ fontWeight:"bold", color: "white", fontSize: 12 }}>
                  רשום? התחבר עכשיו
                </Text>
              </Button>
            </View>

            <View style={signInstyles.detailsSquare}>
              <Content>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>

                  <Text
                    style={{
                      flex: 1,
                      color: "white",
                      marginBottom:30
                      
                      // textAlign: "left",
                      // margin: 20,
                      // marginStart: 25,
                    }}
                  >
                    פרטי לקוח
                  </Text>

                  <View style={signInstyles.radioGenderButons}>
                    <Button rounded style={signInstyles.radioGenderButon} onPress={() => setGender("men")} >
                      <Text style={{ color: "white" }}>גבר</Text>
                    </Button>
                    <Button rounded style={signInstyles.radioGenderButon} onPress={() => setGender("women")}>
                      <Text style={{ color: "white" }}>אישה</Text>
                    </Button>
                  </View>

                </View>

                {/* <View style={signInstyles.inputWrapper}> */}
                  <View style={signInstyles.signInPageInputs}>
                    <Item style={signInstyles.signInPageInput}>
                      <Input placeholder='שם פרטי' onChangeText={text =>setFirstName(text)}/>
                    </Item>
                    <Item style={signInstyles.signInPageInput}>
                      <Input placeholder='טלפון נייד' onChangeText={text =>setPhoneNum(text)}/>
                    </Item>
                  </View>
                  <View style={signInstyles.signInPageInputs}>
                    <Item style={signInstyles.signInPageInput}>
                      <Input placeholder='שם משפחה' onChangeText={text =>setLastName(text)}/>
                    </Item>
                    <Item style={signInstyles.signInPageInput}>
                      <Input placeholder='מספר תעודת זהות' onChangeText={text =>setID(text)}/>
                    </Item>
                  </View>

                  <Item last rounded style={signInstyles.signInPageInput}>
                    <Input
                      fontSize={12}
                      // style={{ color: "blue", fontFamily: "Arial" }}
                    placeholder='דוא"ל'
                    onChangeText={text =>setEmail(text)}
                    />
                  </Item>
                {/* </View> */}

                <Content>
                  <ListItem>
                    <CheckBox  checked={age} onPress={()=> {setAge(true)}} />
                    <Body>
                      <Text style={{ color: "white", fontSize: 12 }}>
                        אני מעל גיל 18
                      </Text>
                    </Body>
                  </ListItem>
                  <ListItem>
                  <CheckBox checked={agreement} color='white' onPress={()=> {setAgreement(true)}} />
                    <Body>
                      <Text style={{ color: "white", fontSize: 12 }}>
                      אני מאשר את תנאי השימוש באתר ואת התקנון
                      </Text>                    
                    </Body>
                  </ListItem>
                  
                </Content>
              </Content>
             
              <Button
                rounded
                style={{
                  backgroundColor: "#FBB03B",
                  borderColor: "white",
                  borderWidth: 1,
                  flex: 1,
                  height: 30,
                  marginHorizontal:70
              
                }}
                onPress={()=>console.log({
                  gender: gender,
                  firstName: firstName,
                  lastName:lastName,
                  phoneNum:phoneNum,
                  ID:ID,
                  Email:Email,
                  age:age,
                  agreement:agreement
                })}
              >
                <Text
                  style={{
                    color: "white",
                    flex: 1,
                    fontSize: 30,
                    textAlign: "center",
                  }}
                >
                  הבא
                </Text>
              </Button>
            </View>
          </View>
        </View>


        <View
        style={{ width: "100%", height: 2, backgroundColor: "pink" }}
        ></View>
      </ScrollView>
    </>
  );
};

export default SignIn;