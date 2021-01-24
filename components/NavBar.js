import React from "react";
import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";

import styles from "../styles";
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
} from "native-base";
import Sidebar from "../components/SideBar";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";

const NavBar = (props) => {
  const { navigation } = props;
  const route = useRoute();
  const [navBarTitle, setNavBarTitle] = useState('');


  useEffect(() => {  
    
    if  (route.name === "LottoList") 
      setNavBarTitle('הגרלת לוטו');
    else if (route.name === "ChanceList") {
      setNavBarTitle(`הגרלת צ'אנס`);
    }else if (route.name === "Sheva77List") {
      setNavBarTitle(`הגרלת 777`);
    }else if (route.name === "One23List") {
      setNavBarTitle(`הגרלת 123`);
    }else if (route.name === "SignIn") {
      setNavBarTitle(`הרשמה ופרטי תשלום`);
    }else if (route.name === "LottoPage") {
      setNavBarTitle(`דאבל לוטו`);
    }else if (route.name === "LottoShitatiPage") {
      setNavBarTitle(`לוטו שיטתי`);
    }else if (route.name === "LottoShitatiHazakPage") {
      setNavBarTitle('לוטו שיטתי חזק');
    
    } 
    }, [route.name])

  return (
    <Header style={styles.navbar}>
      <Left>
        <Button onPress={() => navigation.toggleDrawer()} transparent>
          <Icon name='menu' />
        </Button>
      </Left>
     
        <Body>
          <View>
            <Text
              style={{
                color: "white",
                marginLeft: 50,
              }}
            >
              { navBarTitle}
            </Text>
          </View>
        </Body>
      
      {/* {props.screenName === "signIn" && (
        <Body>
          <View>
            <Text
              style={{
                color: "white",
                marginLeft: 50,
              }}
            >
              הרשמה ופרטי תשלום
            </Text>
          </View>
        </Body>
      )}
      {props.screenName === "LottoList" && (
        <Body>
          <View>
            <Text
              style={{
                color: "white",
                marginLeft: 50,
              }}
            >
            הגרלת לוטו
            </Text>
          </View>
        </Body>
      )}
      {props.screenName === "ChanceList" && (
        <Body>
          <View>
            <Text 
              style={{
                color: "white",
                marginLeft: 50,
                fontWeight: "bold",
                fontSize: 18,
                
              }}
            >
            הגרלת צ'אנס
            </Text>
          </View>
        </Body>
      )}
      {props.screenName === "Seva77List" && (
        <Body>
          <View>
            <Text 
              style={{
                color: "white",
                marginLeft: 50,
                fontWeight: "bold",
                fontSize: 18,
                
              }}
            >
            הגרלת 777
            </Text>
          </View>
        </Body>
      )}
      {props.screenName === "One23List" && (
        <Body>
          <View>
            <Text 
              style={{
                color: "white",
                marginLeft: 50,
                fontWeight: "bold",
                fontSize: 18,
                
              }}
            >
            הגרלת 123
            </Text>
          </View>
        </Body>
      )} */}
  
      <Right>
        <View style={{ flexDirection: "row" }}>
          <Button
            onPress={() => {
              navigation.navigate("UserArea");
            }}
            style={styles.headerBtns}
            small
            light
            bordered
            rounded
          >
            <Text style={[{ color: "white" }, styles.userAreaBtn]}>
              אזור אישי
            </Text>
          </Button>
          {props.screenName === "home" && (
            <Button
              onPress={() => {
                navigation.navigate("SignIn");
              }}
              style={styles.headerBtns}
              small
              light
              transparent
              rounded
            >
              <View>
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  הרשם
                </Text>
              </View>
            </Button>
          )}
       
        </View>
      </Right>
    </Header>
  );
};
export default NavBar;
