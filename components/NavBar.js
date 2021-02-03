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
import { useSelector, useDispatch } from "react-redux";
import LogIn from "../redux/actions/actions";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

const NavBar = (props) => {
  const { navigation } = props;
  const { screenName } = props;
  const route = useRoute();
  const [navBarTitle, setNavBarTitle] = useState("");
  const [btnText, setbtnText] = useState("אזור אישי");

  const store = useSelector((state) => state);

  useEffect(() => {
    if (
      route.name === "LottoList") setNavBarTitle("הגרלת לוטו");
    else if (route.name === "ChanceList"|| route.name === "ChancePage") {
      setNavBarTitle(`הגרלת צ'אנס`);
    } else if (route.name === "RavChancePage") {
      setNavBarTitle(`רב צ'אנס`);
    } else if (route.name === "ChanceShitatiPage") {
      setNavBarTitle(`צ'אנס שיטתי`);
    } else if (route.name === "SumPageChance") {
      setNavBarTitle(`הגרלות צ'אנס- שליחת טופס`);
    } else if (route.name === "SumPage123") {
      setNavBarTitle(`הגרלת 123- שליחת טופס`);
    } else if (route.name === "SumPage777") {
      setNavBarTitle(`הגרלות 777- שליחת טופס`);
    } else if (route.name === "Sheva77List") {
      setNavBarTitle(`הגרלות 777`);
    } else if (route.name === "One23List") {
      setNavBarTitle(`הגרלות 123`);
    } else if (route.name === "One23Page") {
      setNavBarTitle(`הגרלת 123`);
    } else if (route.name === "SignIn") {
      setNavBarTitle(`הרשמה ופרטי תשלום`);
    } else if (route.name === "LottoPage") {
      setNavBarTitle(`לוטו`);
    } else if (route.name === "DoubleLottoPage") {
      setNavBarTitle(`דאבל לוטו`);
    } else if (route.name === "LottoShitatiPage") {
      setNavBarTitle(`לוטו שיטתי`);
    } else if (route.name === "LottoShitatiHazakPage") {
      setNavBarTitle("לוטו שיטתי חזק");
    } else if (route.name === "Sheva77Page") {
      setNavBarTitle(`הגרלת 777 `);
    } else if (route.name === "Sheva778Page") {
      setNavBarTitle(`הגרלת 778`);
    } else if (route.name === "Sheva779Page") {
      setNavBarTitle(`הגרלת 779`);
    } else if (route.name === "One23Page") {
      setNavBarTitle(`123`);
    } else if (route.name === "ExtraFormPage") {
      setNavBarTitle( `הגרלות לוטו- שליחת טופס`);
    }
    
    
  }, [route.name,screenName]);

  const dispatch = useDispatch();

  return (
    <Header style={styles.navbar}>
      <Left>
        <Button onPress={() => navigation.toggleDrawer()} transparent>
          <Icon name='menu' />
        </Button>
      </Left>

      <Body>
        <View style={{ alignSelf: "center" }}>
          <Text
            style={{
              color: "white",
              marginLeft: 40,
              fontSize: 12,
            }}
          >
            {navBarTitle}
          </Text>
        </View>
      </Body>

      <Right>
        <View style={{ flexDirection: "row" }}>
          <Button
            onPress={() => {
              if (store.user === "LOGIN_FAILED") {
                navigation.navigate("LogInPage");
              } else if (store.user === -1) {
                navigation.navigate("LogInPage");
              } else {
                navigation.navigate("UserArea");
              }
            }}
            style={styles.headerBtns}
            small
            light
            bordered
            rounded
          >
            <Text style={[{ color: "white" }, styles.userAreaBtn]}>
              {store.user.attributes ? "אזור אישי" : "התחבר"}
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
