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
<<<<<<< HEAD
=======
// import Hr from "azir-hr";
import Hr from "react-native-hr-component";
>>>>>>> 40ca643b90829cd671804528b78eaa90f02fa056

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
<<<<<<< HEAD
      <NavBar navigation={navigation} screenName={'signIn'}/>
=======
      <NavBar navigation={navigation} titleText='הרשמה ופרטי תשלום' />
>>>>>>> 40ca643b90829cd671804528b78eaa90f02fa056

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
<<<<<<< HEAD
                  flex: 1,
                  flexDirection: "row",
                  fontSize: 25,
                  marginStart:10
=======
                  flex: 2,
                  flexDirection: "row",
                  fontSize: 25,
>>>>>>> 40ca643b90829cd671804528b78eaa90f02fa056
                }}
              >
                לקוח חדש
              </Text>

              <Button
                style={{
<<<<<<< HEAD
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
=======
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 130,
                  height: 40,
                  margin: 10,
                  borderRadius: 13,
                  backgroundColor: "#000000",
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>
>>>>>>> 40ca643b90829cd671804528b78eaa90f02fa056
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
<<<<<<< HEAD
                  }}>

                  <Text
                    style={{
                      flex: 1,
                      color: "white",
                      marginBottom:30
                      
=======
                  }}
                >
                  <Text
                    style={{
                      flex: 0.7,
                      color: "white",
>>>>>>> 40ca643b90829cd671804528b78eaa90f02fa056
                      // textAlign: "left",
                      // margin: 20,
                      // marginStart: 25,
                    }}
                  >
                    פרטי לקוח
                  </Text>

                  <View style={signInstyles.radioGenderButons}>
<<<<<<< HEAD
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
=======
                    <Button rounded style={signInstyles.radioGenderButon}>
                      <Text style={{ color: "white" }}>גבר</Text>
                    </Button>
                    <Button rounded style={signInstyles.radioGenderButon}>
                      <Text style={{ color: "white" }}>אישה</Text>
                    </Button>
                  </View>
                </View>

                <View style={signInstyles.inputWrapper}>
                  <View style={signInstyles.signInPageInputs}>
                    <Item style={signInstyles.signInPageInput}>
                      <Input placeholder='שם פרטי' />
                    </Item>
                    <Item style={signInstyles.signInPageInput}>
                      <Input placeholder='טלפון נייד' />
>>>>>>> 40ca643b90829cd671804528b78eaa90f02fa056
                    </Item>
                  </View>
                  <View style={signInstyles.signInPageInputs}>
                    <Item style={signInstyles.signInPageInput}>
<<<<<<< HEAD
                      <Input placeholder='שם משפחה' onChangeText={text =>setLastName(text)}/>
                    </Item>
                    <Item style={signInstyles.signInPageInput}>
                      <Input placeholder='מספר תעודת זהות' onChangeText={text =>setID(text)}/>
=======
                      <Input placeholder='שם משפחה' />
                    </Item>
                    <Item style={signInstyles.signInPageInput}>
                      <Input placeholder='מספר תעודת זהות' />
>>>>>>> 40ca643b90829cd671804528b78eaa90f02fa056
                    </Item>
                  </View>

                  <Item last rounded style={signInstyles.signInPageInput}>
                    <Input
                      fontSize={12}
                      // style={{ color: "blue", fontFamily: "Arial" }}
<<<<<<< HEAD
                    placeholder='דוא"ל'
                    onChangeText={text =>setEmail(text)}
                    />
                  </Item>
                {/* </View> */}

                <Content>
                  <ListItem>
                    <CheckBox  checked={age} onPress={()=> {setAge(true)}} />
=======
                      placeholder='דוא"ל'
                    />
                  </Item>
                </View>

                <Content>
                  <ListItem>
                    <CheckBox checked={true} />
>>>>>>> 40ca643b90829cd671804528b78eaa90f02fa056
                    <Body>
                      <Text style={{ color: "white", fontSize: 12 }}>
                        אני מעל גיל 18
                      </Text>
                    </Body>
                  </ListItem>
                  <ListItem>
<<<<<<< HEAD
                  <CheckBox checked={agreement} color='white' onPress={()=> {setAgreement(true)}} />
                    <Body>
                      <Text style={{ color: "white", fontSize: 12 }}>
                      אני מאשר את תנאי השימוש באתר ואת התקנון
                      </Text>                    
                    </Body>
                  </ListItem>
                  
                </Content>
              </Content>
             
=======
                    <CheckBox checked={false} color='white' />
                    <Body>
                      <Text style={{ color: "white", fontSize: 12 }}>
                        אני מאשר את תנאי השימוש באתר ואת התקנון
                      </Text>
                    </Body>
                  </ListItem>
                </Content>
              </Content>
              {/* <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignSelf: "center",
                  textAlign: "center",
                }}
              ></View> */}
>>>>>>> 40ca643b90829cd671804528b78eaa90f02fa056
              <Button
                rounded
                style={{
                  backgroundColor: "#FBB03B",
                  borderColor: "white",
                  borderWidth: 1,
<<<<<<< HEAD
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
=======
                  flex: 0.5,
                }}
                onPress={console.log("submit")}
>>>>>>> 40ca643b90829cd671804528b78eaa90f02fa056
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

<<<<<<< HEAD

        <View
        style={{ width: "100%", height: 2, backgroundColor: "pink" }}
        ></View>
=======
        <Hr lineColor='blue' thickness={1} />
>>>>>>> 40ca643b90829cd671804528b78eaa90f02fa056
      </ScrollView>
    </>
  );
};

export default SignIn;